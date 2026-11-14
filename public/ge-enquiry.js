/* Global Education registration form -> POST /api/submit-form (form_type: global_education)
   Saves to global_education_registrations (shown in dashboard) and emails care@asquareb.in via the API. */
(function () {
  'use strict';
  var form = document.getElementById('geqForm');
  if (!form) return;

  var $ = function (id) { return document.getElementById(id); };
  var btn = $('geqSubmit');
  var status = $('geqStatus');
  var btnLabel = btn ? btn.querySelector('span') : null;
  var busy = false;

  function setBad(fieldId, bad) {
    var f = $(fieldId);
    if (f) f.classList.toggle('is-bad', !!bad);
  }

  function showStatus(msg) {
    if (!status) return;
    status.textContent = msg;
    status.classList.add('is-show');
  }
  function hideStatus() {
    if (!status) return;
    status.textContent = '';
    status.classList.remove('is-show');
  }

  function validate() {
    var name = $('geqName').value.trim();
    var email = $('geqEmail').value.trim();
    var code = $('geqCode').value;
    var mobile = $('geqMobile').value.replace(/\D/g, '');
    var pin = $('geqPin').value.trim();

    var okName = name.length >= 2;
    var okEmail = !email || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    var okMobile = !mobile || (code === '+91' ? /^[6-9]\d{9}$/.test(mobile) : /^\d{6,14}$/.test(mobile));
    var okPin = /^[A-Za-z0-9][A-Za-z0-9 -]{1,10}$/.test(pin);
    var okContact = !!(email || mobile);

    setBad('geq-f-name', !okName);
    setBad('geq-f-email', !okEmail || (!okContact && !email));
    setBad('geq-f-mobile', !okMobile || (!okContact && !mobile));
    setBad('geq-f-pin', !okPin);

    if (!okContact) {
      showStatus('Please enter at least one of Email or Mobile.');
    } else {
      hideStatus();
    }
    return okName && okEmail && okMobile && okPin && okContact;
  }

  ['geqName', 'geqEmail', 'geqMobile', 'geqPin'].forEach(function (id) {
    var el = $(id);
    if (el) el.addEventListener('input', function () {
      var wrap = el.closest('.geq__field');
      if (wrap) wrap.classList.remove('is-bad');
      hideStatus();
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();            // never let the browser reload the page
    if (busy) return;
    if (!validate()) return;
    var pc = $('geqPrivacy');
    if (pc && !pc.checked) { showStatus('Please confirm that you have read the Privacy Policy before submitting.'); pc.focus(); return; }

    busy = true;
    btn.disabled = true;
    if (btnLabel) btnLabel.textContent = 'Submitting...';

    var payload = {
      form_type: 'global_education',
      privacy_consent: true,
      full_name: $('geqName').value.trim(),
      email: $('geqEmail').value.trim(),
      country_code: $('geqCode').value,
      mobile: $('geqMobile').value.replace(/\D/g, ''),
      pincode: $('geqPin').value.trim(),
      website: $('geqWebsite') ? $('geqWebsite').value : '',   // honeypot
      source_page: 'global-education-register'
    };

    fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          return { ok: res.ok, data: data };
        });
      })
      .then(function (r) {
        if (r.ok && r.data && r.data.success) {
          var msg = $('geqDoneMsg');
          if (msg && r.data.message) msg.textContent = r.data.message;
          var wrap = $('geqFormWrap');
          var done = $('geqDone');
          if (wrap) wrap.style.display = 'none';
          if (done) done.style.display = 'block';
          form.reset();
          if (done && done.scrollIntoView) done.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          showStatus((r.data && r.data.message) || 'Something went wrong. Please try again or call +91 7259827707.');
        }
      })
      .catch(function () {
        showStatus('Network error. Please try again or call +91 7259827707.');
      })
      .then(function () {
        busy = false;
        btn.disabled = false;
        if (btnLabel) btnLabel.textContent = 'Submit';
      });
  });
})();
