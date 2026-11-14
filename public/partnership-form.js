/* Partnership Enquiry Form (Campus Connect / Orbit Alliance / Orbit Innovate)
   -> optional proposal upload in chunks via /api/career-upload, then POST /api/submit-form (form_type: partnership_enquiry) */
(function () {
  var form = document.getElementById('pfForm');
  if (!form) return;
  var MAX_BYTES = 10 * 1024 * 1024, CHUNK = 3 * 1024 * 1024;
  var OK_EXT = /\.(pdf|doc|docx|ppt|pptx)$/i;
  var $ = function (id) { return document.getElementById(id); };
  var status = $('pfStatus'), btn = $('pfSubmit'), busy = false;

  function show(kind, msg) { status.className = 'pf-status ' + (kind === 'ok' ? 'is-ok' : 'is-err'); status.textContent = msg; status.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  function hide() { status.className = 'pf-status'; status.textContent = ''; }
  function bad(id, on) { var w = $(id).closest('.pf-field'); if (w) w.classList.toggle('is-bad', !!on); return !on; }

  var rules = {
    pfOrg:      function (v) { return v.length >= 2; },
    pfWebsite:  function (v) { return !v || /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(v); },
    pfPerson:   function (v) { return v.length >= 2; },
    pfRole:     function (v) { return v.length >= 2; },
    pfEmail:    function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); },
    pfPhone:    function (v) { var d = v.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '').replace(/^0(?=\d{10}$)/, ''); return /^[6-9]\d{9}$/.test(d); },
    pfCategory: function (v) { return !!v; },
    pfType:     function (v) { return !!v; }
  };
  Object.keys(rules).forEach(function (id) {
    var el = $(id);
    el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', function () { if (el.closest('.pf-field').classList.contains('is-bad')) bad(id, !rules[id](el.value.trim())); });
  });

  // CTA buttons can pre-select the nature of partnership: <a href="#partnership-form" data-preset="...">
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-preset]');
    if (!a) return;
    var want = a.getAttribute('data-preset'), sel = $('pfType');
    for (var i = 0; i < sel.options.length; i++) if (sel.options[i].value === want) { sel.selectedIndex = i; break; }
  });

  function fileCheck() {
    var f = $('pfFile').files[0];
    if (!f) return '';
    if (!OK_EXT.test(f.name)) return 'Please attach a PDF, DOC, DOCX, PPT or PPTX file.';
    if (f.size > MAX_BYTES) return 'The proposal document must be 10 MB or smaller.';
    if (f.size === 0) return 'The selected file is empty.';
    return '';
  }
  $('pfFile').addEventListener('change', function () { var m = fileCheck(); var w = $('pfFile').closest('.pf-field'); w.classList.toggle('is-bad', !!m); w.querySelector('.pf-err').textContent = m || ''; });

  function toB64(blob) {
    return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(String(r.result).split(',')[1] || ''); }; r.onerror = rej; r.readAsDataURL(blob); });
  }
  function uploadFile(file) {
    var id = (Date.now().toString(36) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)).slice(0, 28);
    var total = Math.ceil(file.size / CHUNK), p = Promise.resolve();
    for (var i = 0; i < total; i++) (function (i) {
      p = p.then(function () { return toB64(file.slice(i * CHUNK, (i + 1) * CHUNK)); }).then(function (b64) {
        return fetch('/api/career-upload', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ upload_id: id, index: i, total: total, chunk_base64: b64, website: '' }) })
          .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { if (!r.ok || !d.success) throw new Error(d.message || 'Upload failed'); }); });
      });
    })(i);
    return p.then(function () { return id; });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault(); if (busy) return; hide();
    var first = null;
    Object.keys(rules).forEach(function (id) { var ok = bad(id, !rules[id]($(id).value.trim())); if (!ok && !first) first = $(id); });
    var fm = fileCheck(); var fw = $('pfFile').closest('.pf-field'); fw.classList.toggle('is-bad', !!fm); fw.querySelector('.pf-err').textContent = fm || ''; if (fm && !first) first = $('pfFile');
    if (first) { show('err', 'Please correct the highlighted fields and submit again.'); first.focus(); return; }
    if (!$('pfPrivacy').checked) { show('err', 'Please confirm that you have read the Privacy Policy before submitting.'); $('pfPrivacy').focus(); return; }

    busy = true; btn.disabled = true; var label = btn.textContent; btn.textContent = 'Submitting…';
    var file = $('pfFile').files[0];
    (file ? uploadFile(file) : Promise.resolve('')).then(function (uploadId) {
      var payload = {
        form_type: 'partnership_enquiry',
        programme: $('pfProgramme').value,
        org_name: $('pfOrg').value.trim(),
        website: $('pfWebsite').value.trim(),
        registration_details: $('pfReg').value.trim(),
        contact_person: $('pfPerson').value.trim(),
        designation: $('pfRole').value.trim(),
        email: $('pfEmail').value.trim(),
        phone: $('pfPhone').value.trim(),
        org_category: $('pfCategory').value,
        partnership_type: $('pfType').value,
        summary: $('pfSummary').value.trim(),
        proposal_upload_id: uploadId,
        proposal_name: file ? file.name : '',
        privacy_consent: true,
        hp_field: $('pfHp').value,
        source_page: location.pathname
      };
      return fetch('/api/submit-form', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    }).then(function (r) { return r.json().catch(function () { throw new Error('Unexpected server response.'); }).then(function (d) { if (!r.ok || !d.success) throw new Error(d.message || 'Submission failed.'); return d; }); })
      .then(function (d) {
        var prog = $('pfProgramme').value; form.reset(); $('pfProgramme').value = prog;
        show('ok', 'Thank you! Your enquiry has been received. Our team will review it and contact you if further information is required.');
      })
      .catch(function (err) { show('err', (err && err.message) || 'Something went wrong. Please try again, or write to care@asquareb.in.'); })
      .then(function () { busy = false; btn.disabled = false; btn.textContent = label; });
  });
})();
