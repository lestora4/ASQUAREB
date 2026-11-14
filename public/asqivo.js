/* ============================================================
   ASQIVO - AsquareB Knowledge Orbit virtual assistant (widget)
   - Answers only from the website knowledge base (asqivo-kb.js)
   - No forms: users just type, tap options or use the mic
   - Support = WhatsApp / Email / Call buttons (message pre-filled)
   - Mute / End chat / New chat in the header menu, sound on messages
   - Home, Conversation history, FAQs and Articles tabs
   ============================================================ */
(function () {
  'use strict';
  if (window.__asqivoLoaded) return;
  window.__asqivoLoaded = true;

  var CFG = {
    name: 'ASQIVO',
    org: 'AsquareB Knowledge Orbit',
    phone: '+917259827707',
    phoneShow: '+91 72598 27707',
    wa: '917259827707',
    email: 'care@asquareb.in',
    address: 'StartUp Park by IQue, Hosur Road, Opposite Madiwala Police Station, Koramangala, Bengaluru – 560068',
    avatar: 'robot.webp',
    max: { convs: 25, msgs: 80 }
  };
  var LS = { convs: 'asqivo.convs.v1', cur: 'asqivo.current.v1', mute: 'asqivo.mute.v1' };
  var BASE = (function () {
    var s = document.currentScript || document.querySelector('script[src*="asqivo.js"]');
    return s && s.src ? s.src.replace(/[^\/]*(\?.*)?$/, '') : '';
  })();

  /* ---------------- conversational forms (fields copied from the website forms) ---------------- */
  function opt(list) { return list.map(function (x) { return Array.isArray(x) ? { v: x[0], l: x[1] } : { v: x, l: x }; }); }
  var OPT = {
    cls: opt([['grade-1-5', 'Grade 1 – 5'], ['grade-6-8', 'Grade 6 – 8'], ['grade-9-10', 'Grade 9 – 10'], ['grade-11-12', 'Grade 11 – 12'], ['pu-1', 'PU 1st Year'], ['pu-2', 'PU 2nd Year'], ['degree', 'Degree Student'], ['working-professional', 'Working Professional'], ['other', 'Other']]),
    board: opt([['karnataka-state', 'Karnataka State Board'], ['cbse', 'CBSE'], ['icse-isc', 'ICSE/ISC'], ['nios', 'NIOS'], ['igcse', 'Cambridge (IGCSE)'], ['ib', 'IB'], ['university', 'University'], ['other', 'Other']]),
    prog: opt(['Career Intelligence & Assessment (Career Counselling, DMIT, SAT)', 'Global Education & Admission (Study Abroad)', 'Academic Excellence Program (Academy, Coaching, Tuitions)', 'Educational Admissions and Guidance (State & India Admissions)', 'Online Education & Skill Development (Online Learning)', 'Professional & Soft Skills Development (TransformU)', 'Special Learning and Development (360° SDI)']),
    mode: opt(['Home Counselling', 'Online Counselling', 'Offline Counselling']),
    subject: opt(['General Enquiry', 'Career Intelligence & Assessment', 'Global Education & Admissions', 'Academic Excellence Program', 'Education Admissions & Guidance', 'Online Education & Skill Development', 'Competitive Exam Preparation', 'Professional & Soft Skills Development', 'Special Learning & Development Programs']),
    cc: opt([['+91', 'IN +91'], ['+971', 'UAE +971'], ['+966', 'KSA +966'], ['+974', 'QA +974'], ['+965', 'KW +965'], ['+968', 'OM +968'], ['+973', 'BH +973'], ['+1', 'US/CA +1'], ['+44', 'UK +44'], ['+61', 'AU +61'], ['+64', 'NZ +64'], ['+65', 'SG +65'], ['+60', 'MY +60'], ['+353', 'IE +353'], ['+49', 'DE +49'], ['+33', 'FR +33']]),
    org: opt(['School', 'College', 'University', 'Training / Coaching Institution', 'Event Organiser', 'Student Club / Association', 'Educational NGO / Non-profit', 'Academic Association', 'Education Service Provider', 'Technology Company', 'Employer / Industry Body', 'Corporate / Business (Sponsor)', 'Individual / Student Team', 'Other']),
    ptype: opt(['Educational Event Sponsorship', 'Institutional Partnership', 'Student Engagement Initiative', 'Knowledge-Sharing & Career Awareness Programme', 'Other']),
    programme: [{ v: 'campus_connect', l: 'AsquareB Campus Connect' }, { v: 'orbit_alliance', l: 'AsquareB Orbit Alliance' }, { v: 'orbit_innovate', l: 'AsquareB Orbit Innovate' }]
  };
  var FLOWS = {
    enquiry: {
      name: 'Admission & Counselling Enquiry', type: 'enquiry', done: 'Your admission / counselling enquiry has been submitted.',
      intro: 'Sure! I’ll take a few details so our counsellor can contact you — it takes about 2 minutes. For optional questions you can tap Skip, and you can Cancel at any time.',
      fields: [
        { k: 'student_name', l: 'Student Name', q: 'May I know the student’s full name?', t: 'text', req: 1, ph: 'Student’s full name' },
        { k: 'parent_name', l: 'Parent Name', q: 'What is the parent / guardian’s name?', t: 'text', req: 0, ph: 'Parent / guardian name (optional)' },
        { k: 'phone', l: 'Mobile Number', q: 'Please share your 10-digit mobile number so our counsellor can reach you.', t: 'phone', req: 1, sec: 1, ph: '10-digit mobile number' },
        { k: 'email', l: 'Email Address', q: 'What is your email address?', t: 'email', req: 1, sec: 1, ph: 'name@example.com' },
        { k: 'current_class', l: 'Current Class', q: 'Which class is the student currently studying in?', t: 'select', o: 'cls', req: 1 },
        { k: 'board', l: 'Board/University', q: 'Which Board / University is the student under?', t: 'select', o: 'board', req: 1 },
        { k: 'preferred_program', l: 'Preferred Program', q: 'Which program are you interested in?', t: 'select', o: 'prog', req: 1 },
        { k: 'counselling_mode', l: 'Preferred Counselling Mode', q: 'How would you like to attend the counselling?', t: 'select', o: 'mode', req: 1 },
        { k: 'city', l: 'City', q: 'Which city are you in?', t: 'text', req: 1, ph: 'Your city' },
        { k: 'counselling_date', l: 'Counselling Date Preference', q: 'Which date would you prefer for the counselling? (e.g. 15 Nov, 15/11/2026 or Tomorrow)', t: 'date', req: 0, ph: 'e.g. 15 Nov (optional)', quick: ['Tomorrow'] },
        { k: 'notes', l: 'Additional Notes', q: 'Any specific questions or concerns you’d like us to know about?', t: 'text', req: 0, long: 1, ph: 'Optional notes' }
      ]
    },
    contact: {
      name: 'Message to AsquareB', type: 'contact', done: 'Your message has been sent to our team.',
      intro: 'Happy to pass your message to our team. I’ll ask a few quick questions.',
      fields: [
        { k: 'name', l: 'Full Name', q: 'May I know your full name?', t: 'text', req: 1, ph: 'Your name' },
        { k: 'email', l: 'Email Address', q: 'What is your email address?', t: 'email', req: 1, sec: 1, ph: 'name@example.com' },
        { k: 'subject', l: 'Subject', q: 'What is your message about?', t: 'select', o: 'subject', req: 1 },
        { k: 'message', l: 'Message', q: 'Please type your message for the team.', t: 'text', req: 1, long: 1, ph: 'Write your message…' }
      ]
    },
    geq: {
      name: 'Global Education & Admissions – Registration', type: 'global_education', done: 'Your Global Education registration has been submitted.',
      intro: 'Let’s register your interest in Global Education & Admissions (Study Abroad). It only takes a minute.',
      fields: [
        { k: 'full_name', l: 'Full Name', q: 'May I know your full name?', t: 'text', req: 1, ph: 'Your full name' },
        { k: 'email', l: 'Email', q: 'What is your email address?', t: 'email', req: 1, sec: 1, ph: 'you@example.com' },
        { k: 'country_code', l: 'Country Code', q: 'Which country code does your mobile number use?', t: 'select', o: 'cc', req: 1, inline: 1 },
        { k: 'mobile', l: 'Mobile', q: 'Please enter your mobile number (without the country code).', t: 'mobile', req: 1, sec: 1, ph: 'Mobile number' },
        { k: 'pincode', l: 'Pincode', q: 'What is your pincode?', t: 'pin', req: 1, ph: 'Pincode' }
      ]
    },
    partner: {
      name: 'Partnership Enquiry', type: 'partnership_enquiry', done: 'Your partnership enquiry has been submitted.',
      intro: 'Wonderful! I’ll note down a few details about your organisation and your proposal.',
      fields: [
        { k: 'programme', l: 'Partnership Programme', q: 'Which partnership programme are you interested in?', t: 'select', o: 'programme', req: 1 },
        { k: 'org_name', l: 'Company / Institution Name', q: 'What is the official name of your company / institution?', t: 'text', req: 1, ph: 'Official name of your organisation' },
        { k: 'website', l: 'Website URL', q: 'What is your website URL, if you have one?', t: 'url', req: 0, ph: 'https://www.example.com (optional)' },
        { k: 'registration_details', l: 'Registered Business Details', q: 'Any registered business details (registration / CIN / GST / trust number)?', t: 'text', req: 0, ph: 'Optional' },
        { k: 'contact_person', l: 'Contact Person', q: 'Who is the contact person?', t: 'text', req: 1, ph: 'Full name' },
        { k: 'designation', l: 'Designation', q: 'What is their designation / role?', t: 'text', req: 1, ph: 'Role / position' },
        { k: 'email', l: 'Business Email', q: 'What is the business email address?', t: 'email', req: 1, sec: 1, ph: 'name@organisation.com' },
        { k: 'phone', l: 'Phone', q: 'What is the 10-digit phone number?', t: 'phone', req: 1, sec: 1, ph: '10-digit mobile number' },
        { k: 'org_category', l: 'Organisation Category', q: 'Which category best describes your organisation?', t: 'select', o: 'org', req: 1 },
        { k: 'partnership_type', l: 'Nature of Proposed Partnership', q: 'What is the nature of the proposed partnership?', t: 'select', o: 'ptype', req: 1 },
        { k: 'summary', l: 'Proposal Summary', q: 'Please give a brief summary of your proposal — objectives, audience, timeline and what you are looking for.', t: 'text', req: 0, long: 1, ph: 'Brief summary (optional)' }
      ]
    }
  };
  var PARTNER_PAGE = { campus_connect: 'campus-connect.html', orbit_alliance: 'orbit-alliance.html', orbit_innovate: 'orbit-innovate.html' };

  /* ---------------- helpers ---------------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k)); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  function uid() { return 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function ago(ts) {
    var d = (Date.now() - ts) / 1000;
    if (d < 60) return 'Just now';
    if (d < 3600) return Math.floor(d / 60) + ' min ago';
    if (d < 86400) return Math.floor(d / 3600) + ' hr ago';
    if (d < 172800) return 'Yesterday';
    return new Date(ts).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
  }
  function clip(s, n) { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1).trim() + '…' : s; }
  function pageHref(p) { return p; }

  var IC = {
    back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
    dots: '<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="19" r="2" fill="currentColor"/></svg>',
    send: '<svg viewBox="0 0 24 24"><path d="M3.4 20.4l17.1-7.4a1 1 0 000-1.8L3.4 3.6a1 1 0 00-1.4 1.2L4 11l9 1-9 1-2 6.2a1 1 0 001.4 1.2z" fill="currentColor"/></svg>',
    mic: '<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5 11a7 7 0 0014 0M12 18v3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    mute: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M17 9l5 6M22 9l-5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    sound: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    power: '<svg viewBox="0 0 24 24"><path d="M12 3v9M6.3 7.3a8 8 0 1011.4 0" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
    home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z" fill="currentColor"/></svg>',
    chat: '<svg viewBox="0 0 24 24"><path d="M4 4h16a1 1 0 011 1v11a1 1 0 01-1 1H9l-5 4V5a1 1 0 011-1z" fill="currentColor"/></svg>',
    faq: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9.5 9.5a2.5 2.5 0 114 2c-.9.6-1.5 1-1.5 2M12 17h.01" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    article: '<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 12h7M9 16h7M9 8h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    wa: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.2 1.5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3.5 6.5L12 13l8.5-6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    call: '<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" fill="currentColor"/></svg>',
    bot: '<svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="11" rx="4" fill="currentColor"/><circle cx="9" cy="13.5" r="1.4" fill="#0e5a8f"/><circle cx="15" cy="13.5" r="1.4" fill="#0e5a8f"/><path d="M12 8V5M10 5h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    chev: '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ext: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  /* ---------------- sound ---------------- */
  var actx = null, muted = !!store(LS.mute);
  function audio() {
    if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { actx = false; } }
    if (actx && actx.state === 'suspended') { try { actx.resume(); } catch (e) {} }
    return actx;
  }
  function tone(freq, start, dur, vol) {
    var c = audio(); if (!c) return;
    var o = c.createOscillator(), g = c.createGain(), t = c.currentTime + start;
    o.type = 'sine'; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + dur + 0.02);
  }
  function sound(kind) {
    if (muted) return;
    try {
      if (kind === 'send') { tone(620, 0, 0.09, 0.05); }
      else if (kind === 'recv') { tone(880, 0, 0.1, 0.06); tone(1175, 0.09, 0.14, 0.05); }
      else if (kind === 'mic') { tone(740, 0, 0.08, 0.05); }
    } catch (e) {}
  }

  /* ---------------- state ---------------- */
  var KB = null, kbLoading = false, kbWaiters = [];
  var S = { open: false, view: 'home', convs: store(LS.convs) || [], cur: store(LS.cur) || null, menuOpen: false, busy: false, listening: false, rec: null, flow: null, typer: null, greeted: {} };
  var R = {}; // dom refs

  function conv() { for (var i = 0; i < S.convs.length; i++) if (S.convs[i].id === S.cur) return S.convs[i]; return null; }
  function save() {
    S.convs.sort(function (a, b) { return b.updated - a.updated; });
    S.convs = S.convs.slice(0, CFG.max.convs);
    store(LS.convs, maskConvs(S.convs)); store(LS.cur, S.cur);
  }
  function newConv() {
    var c = { id: uid(), title: 'New chat', created: Date.now(), updated: Date.now(), ended: false, ctx: { menu: null }, msgs: [] };
    S.convs.unshift(c); S.cur = c.id; S.flow = null; save(); return c;
  }

  function loadKB(cb) {
    if (KB) return cb();
    kbWaiters.push(cb);
    if (kbLoading) return;
    kbLoading = true;
    var s = document.createElement('script');
    s.charset = 'utf-8'; s.src = BASE + 'asqivo-kb.js?v=2';
    s.onload = function () { KB = window.ASQIVO_KB; if (window.AsqivoEngine) window.AsqivoEngine.init(KB); kbWaiters.splice(0).forEach(function (f) { f(); }); };
    s.onerror = function () { kbLoading = false; KB = { chunks: [], programs: [], partners: [], articles: [] }; if (window.AsqivoEngine) window.AsqivoEngine.init(KB); kbWaiters.splice(0).forEach(function (f) { f(); }); };
    document.head.appendChild(s);
  }

  /* ---------------- UI skeleton ---------------- */
  function build() {
    var root = el('div'); root.id = 'asq-root';
    root.innerHTML =
      '<button type="button" id="asq-launch" aria-label="Chat with ' + CFG.name + '" title="Chat with ' + CFG.name + '">' +
        '<img src="' + CFG.avatar + '" alt="" onerror="this.style.display=\'none\'"><span class="asq-fallback">' + IC.bot + '</span><i class="asq-dot"></i></button>' +
      '<section id="asq-panel" role="dialog" aria-label="' + CFG.name + ' chat" aria-hidden="true">' +
        '<header id="asq-head"></header>' +
        '<main id="asq-body"></main>' +
        '<nav id="asq-tabs" aria-label="Sections"></nav>' +
      '</section>';
    document.body.appendChild(root);
    R.root = root; R.launch = $('#asq-launch'); R.panel = $('#asq-panel'); R.head = $('#asq-head'); R.body = $('#asq-body'); R.tabs = $('#asq-tabs');
    R.launch.addEventListener('click', function () { open(); });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || !S.open) return;
      if (S.menuOpen) toggleMenu(false); else close();
    });
    document.addEventListener('click', function (e) {
      if (S.menuOpen && !e.target.closest('.asq-menu') && !e.target.closest('[data-act="menu"]')) toggleMenu(false);
    });
    if (window.visualViewport) {
      var vv = function () { if (S.open) R.panel.style.setProperty('--asq-vh', window.visualViewport.height + 'px'); };
      window.visualViewport.addEventListener('resize', vv); window.visualViewport.addEventListener('scroll', vv);
    }
  }

  function open(view) {
    S.open = true;
    R.root.classList.add('asq-open');
    R.panel.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('asq-lock');
    audio();
    loadKB(function () {});
    go(view || S.view || 'home');
  }
  function close() {
    S.open = false; stopMic();
    toggleMenu(false);
    R.root.classList.remove('asq-open');
    R.panel.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('asq-lock');
  }

  function tabs() {
    var items = [['home', 'Home', IC.home], ['convs', 'Conversation', IC.chat], ['faqs', 'FAQs', IC.faq], ['articles', 'Articles', IC.article]];
    R.tabs.innerHTML = items.map(function (t) {
      return '<button type="button" data-view="' + t[0] + '" class="' + (S.view === t[0] ? 'on' : '') + '">' + t[2] + '<span>' + t[1] + '</span></button>';
    }).join('');
    $$('button', R.tabs).forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-view')); }; });
  }

  function go(view) {
    S.view = view; toggleMenu(false);
    R.panel.setAttribute('data-view', view);
    if (view !== 'chat') stopMic();
    ({ home: viewHome, chat: viewChat, convs: viewConvs, faqs: viewFaqs, articles: viewArticles }[view] || viewHome)();
    if (view !== 'chat') tabs();
  }

  function headSimple(title, sub) {
    R.head.className = 'asq-head-simple';
    R.head.innerHTML = '<div class="asq-hl"><div class="asq-title">' + esc(title) + '</div>' + (sub ? '<div class="asq-sub">' + esc(sub) + '</div>' : '') + '</div>' +
      '<button type="button" class="asq-ic" data-act="close" aria-label="Close chat">' + IC.close + '</button>';
    $('[data-act="close"]', R.head).onclick = close;
  }

  /* ---------------- HOME ---------------- */
  function viewHome() {
    R.head.className = 'asq-head-home';
    R.head.innerHTML = '<div class="asq-hl"><div class="asq-brand"><span class="asq-av asq-av-lg"><img src="' + CFG.avatar + '" alt="" onerror="this.style.display=\'none\'"><i class="asq-dot"></i></span>' + CFG.name + '</div>' +
      '<div class="asq-hello">Hi there! 👋<br>How can we help you today?</div></div>' +
      '<button type="button" class="asq-ic" data-act="close" aria-label="Close chat">' + IC.close + '</button>';
    $('[data-act="close"]', R.head).onclick = close;
    var last = S.convs[0];
    var html = '<div class="asq-home">';
    if (last && last.msgs.length) {
      var lb = null; for (var i = last.msgs.length - 1; i >= 0; i--) { if (last.msgs[i].t) { lb = last.msgs[i]; break; } }
      html += '<button type="button" class="asq-card asq-recent" data-open="' + last.id + '"><span class="asq-av"><img src="' + CFG.avatar + '" alt="" onerror="this.style.display=\'none\'"></span>' +
        '<span class="asq-ct"><b>' + CFG.name + '</b><em>' + esc(clip(lb ? lb.t : '', 60)) + '</em></span><span class="asq-meta">' + ago(last.updated) + '</span></button>';
    }
    html += '<button type="button" class="asq-card asq-start" data-act="new"><span class="asq-ct"><b>Start a new chat</b><em>Ask about programs, admissions, fees or careers</em></span><span class="asq-go">' + IC.chev + '</span></button>';
    html += '<div class="asq-sect">Popular topics</div><div class="asq-topics">';
    [['Our Programs', 'menu:1'], ['Admissions', 'menu:2'], ['Fees & Scholarships', 'menu:3'], ['Career Counselling', 'menu:4'], ['Study Abroad', 'menu:7'], ['Contact Us', 'menu:9']].forEach(function (t) {
      html += '<button type="button" class="asq-topic" data-topic="' + t[1] + '">' + esc(t[0]) + '</button>';
    });
    html += '</div></div>';
    R.body.innerHTML = html;
    var rec = $('[data-open]', R.body); if (rec) rec.onclick = function () { S.cur = rec.getAttribute('data-open'); save(); go('chat'); };
    $('[data-act="new"]', R.body).onclick = function () { startFresh(); };
    $$('.asq-topic', R.body).forEach(function (b) {
      b.onclick = function () { var n = b.getAttribute('data-topic').split(':')[1]; startFresh(function () { menuSelect(n, true); }); };
    });
  }

  function startFresh(after) {
    var c = conv();
    if (!c || c.ended || c.msgs.length > 0) c = newConv();
    go('chat');
    loadKB(function () {
      if (!c.msgs.length) greet(c);
      if (after) after();
    });
  }

  /* ---------------- CONVERSATIONS ---------------- */
  function viewConvs() {
    headSimple('Conversations', 'Your previous chats with ' + CFG.name);
    var list = S.convs.filter(function (c) { return c.msgs.length; });
    var newBtn = '<button type="button" class="asq-btn asq-btn-primary asq-full" data-act="new">' + IC.plus + ' New conversation</button>';
    var html = '<div class="asq-pad">';
    if (!list.length) html += '<div class="asq-noconv"><img src="' + BASE + 'asqivo-empty.webp" alt="" onerror="this.style.display=\'none\'"><p>No ongoing conversation</p>' + newBtn + '</div>';
    else {
      html += newBtn;
      html += '<div class="asq-list">';
      list.forEach(function (c) {
        var lb = null; for (var i = c.msgs.length - 1; i >= 0; i--) { if (c.msgs[i].t) { lb = c.msgs[i]; break; } }
        html += '<button type="button" class="asq-row" data-open="' + c.id + '"><span class="asq-av"><img src="' + CFG.avatar + '" alt="" onerror="this.style.display=\'none\'"></span>' +
          '<span class="asq-ct"><b>' + esc(clip(c.title, 42)) + '</b><em>' + esc(clip(lb ? lb.t : '', 56)) + '</em></span>' +
          '<span class="asq-meta">' + ago(c.updated) + (c.ended ? '<br><i>Ended</i>' : '') + '</span></button>';
      });
      html += '</div><button type="button" class="asq-link" data-act="clear">Clear all conversations</button>';
    }
    html += '</div>';
    R.body.innerHTML = html;
    $('[data-act="new"]', R.body).onclick = function () { newConv(); startFresh(); };
    $$('[data-open]', R.body).forEach(function (b) { b.onclick = function () { S.cur = b.getAttribute('data-open'); save(); go('chat'); }; });
    var cl = $('[data-act="clear"]', R.body);
    if (cl) cl.onclick = function () { if (confirm('Delete all saved conversations on this device?')) { S.convs = []; S.cur = null; save(); viewConvs(); } };
  }

  /* ---------------- FAQS ---------------- */
  function viewFaqs() {
    headSimple('FAQs', 'Tap a question to get the answer');
    R.body.innerHTML = '<div class="asq-pad"><input type="search" class="asq-search" placeholder="Search FAQs…" aria-label="Search FAQs"><div class="asq-list" id="asq-faqlist"><div class="asq-empty">Loading…</div></div></div>';
    loadKB(function () {
      var faqs = window.AsqivoEngine.faqList(), box = $('#asq-faqlist', R.body), inp = $('.asq-search', R.body);
      function paint(q) {
        q = (q || '').toLowerCase().trim();
        var rows = faqs.filter(function (f) { return !q || f.h.toLowerCase().indexOf(q) > -1 || f.x.toLowerCase().indexOf(q) > -1; });
        box.innerHTML = rows.length ? rows.map(function (f, i) { return '<button type="button" class="asq-row asq-faq" data-i="' + faqs.indexOf(f) + '"><span class="asq-ct"><b>' + esc(f.h) + '</b></span><span class="asq-go">' + IC.chev + '</span></button>'; }).join('') : '<div class="asq-empty">No matching questions. Try the chat – just ask in your own words.</div>';
        $$('.asq-faq', box).forEach(function (b) { b.onclick = function () { askFromList(faqs[+b.getAttribute('data-i')].h); }; });
      }
      paint(''); inp.oninput = function () { paint(inp.value); };
    });
  }
  function askFromList(q) {
    var c = conv();
    if (!c || c.ended) c = newConv();
    go('chat');
    loadKB(function () { if (!c.msgs.length) { greet(c, true); } userSay(q); });
  }

  /* ---------------- ARTICLES ---------------- */
  function viewArticles() {
    headSimple('Articles', 'Guides from the AsquareB blog');
    R.body.innerHTML = '<div class="asq-pad"><div class="asq-list" id="asq-artlist"><div class="asq-empty">Loading…</div></div><a class="asq-link" href="blog.html">View all articles ' + IC.ext + '</a></div>';
    loadKB(function () {
      var arts = (KB && KB.articles) || [];
      $('#asq-artlist', R.body).innerHTML = arts.length ? arts.map(function (a) {
        return '<a class="asq-row asq-art" href="' + esc(pageHref(a.u)) + '"><span class="asq-ct"><b>' + esc(a.t) + '</b><em>' + esc(clip(a.d, 90)) + '</em></span><span class="asq-go">' + IC.ext + '</span></a>';
      }).join('') : '<div class="asq-empty">No articles available right now.</div>';
    });
  }

  /* ---------------- CHAT VIEW ---------------- */
  function viewChat() {
    var c = conv(); if (!c) c = newConv();
    R.head.className = 'asq-head-chat';
    R.head.innerHTML =
      '<button type="button" class="asq-ic" data-act="back" aria-label="Back">' + IC.back + '</button>' +
      '<span class="asq-av asq-av-lg"><img src="' + CFG.avatar + '" alt="" onerror="this.style.display=\'none\'"><i class="asq-dot"></i></span>' +
      '<div class="asq-hl"><div class="asq-title">' + CFG.name + '</div><div class="asq-sub asq-caps">BY ASQUAREB KNOWLEDGE ORBIT</div></div>' +
      '<span class="asq-pill"><i></i>AI ONLINE</span>' +
      '<button type="button" class="asq-ic" data-act="menu" aria-label="More actions" aria-haspopup="true">' + IC.dots + '</button>' +
      '<div class="asq-menu" role="menu" hidden></div>';
    $('[data-act="back"]', R.head).onclick = function () { go('home'); };
    $('[data-act="menu"]', R.head).onclick = function (e) { e.stopPropagation(); toggleMenu(); };
    buildMenu();

    R.body.innerHTML =
      '<div class="asq-msgs" id="asq-msgs" aria-live="polite"></div>' +
      '<div class="asq-ended" id="asq-ended" hidden>This chat has ended. <button type="button" data-act="new">Start a new chat</button></div>' +
      '<form class="asq-input" id="asq-form" autocomplete="off">' +
        '<button type="button" class="asq-mic" id="asq-mic" aria-label="Speak your question" title="Speak your question">' + IC.mic + '</button>' +
        '<input type="text" id="asq-field" placeholder="Type or tap the mic to speak…" enterkeyhint="send" maxlength="1000" aria-label="Type your message">' +
        '<button type="submit" class="asq-sendbtn" aria-label="Send">' + IC.send + '</button>' +
      '</form>';
    R.msgs = $('#asq-msgs'); R.field = $('#asq-field'); R.form = $('#asq-form'); R.mic = $('#asq-mic'); R.ended = $('#asq-ended');
    R.form.onsubmit = function (e) { e.preventDefault(); var v = R.field.value.trim(); if (!v) return; R.field.value = ''; userSay(v); };
    $('[data-act="new"]', R.ended).onclick = function () { newConv(); go('chat'); loadKB(function () { greet(conv()); }); };
    setupMic();
    setField(S.flow && S.flow.cur ? S.flow.cur : null);
    R.tabs.innerHTML = '';
    c.msgs.forEach(function (m, i) { renderMsg(m, i === c.msgs.length - 1, false); });
    setEnded(c.ended);
    if (!c.msgs.length) loadKB(function () { if (!c.msgs.length) greet(c); });
    scrollDown(true);
    if (!('ontouchstart' in window) && !c.ended) setTimeout(function () { R.field && R.field.focus(); }, 60);
  }

  function setEnded(on) {
    if (!R.ended) return;
    R.ended.hidden = !on; R.form.hidden = !!on;
  }

  function buildMenu() {
    var m = $('.asq-menu', R.head); if (!m) return;
    m.innerHTML =
      '<button type="button" role="menuitem" data-m="mute">' + (muted ? IC.sound : IC.mute) + '<span>' + (muted ? 'Unmute' : 'Mute') + '</span></button>' +
      '<button type="button" role="menuitem" data-m="new">' + IC.plus + '<span>New chat</span></button>' +
      '<button type="button" role="menuitem" data-m="end">' + IC.power + '<span>End chat</span></button>';
    m.onclick = function (e) {
      var b = e.target.closest('[data-m]'); if (!b) return;
      var a = b.getAttribute('data-m'); toggleMenu(false);
      if (a === 'mute') { muted = !muted; store(LS.mute, muted); buildMenu(); toast(muted ? 'Sound muted' : 'Sound on'); if (!muted) sound('recv'); }
      else if (a === 'new') { newConv(); go('chat'); loadKB(function () { greet(conv()); }); }
      else if (a === 'end') { endChat(); }
    };
  }
  function toggleMenu(on) {
    var m = $('.asq-menu', R.head); if (!m) { S.menuOpen = false; return; }
    S.menuOpen = on === undefined ? !S.menuOpen : !!on;
    m.hidden = !S.menuOpen;
  }
  function toast(t) {
    var n = el('div', 'asq-toast', esc(t)); R.panel.appendChild(n);
    setTimeout(function () { n.classList.add('out'); setTimeout(function () { n.remove(); }, 300); }, 1800);
  }
  function scrollDown(now) {
    if (!R.msgs) return;
    var go = function () { R.msgs.scrollTo ? R.msgs.scrollTo({ top: R.msgs.scrollHeight, behavior: now ? 'auto' : 'smooth' }) : (R.msgs.scrollTop = R.msgs.scrollHeight); };
    go(); setTimeout(go, 60);
  }

  /* ---------------- messages ---------------- */
  function maskConvs(list) {
    return list.map(function (c) {
      var cc = {}; for (var k in c) cc[k] = c[k];
      cc.msgs = c.msgs.map(function (m) { if (!m.sec) return m; var x = {}; for (var k in m) x[k] = m[k]; x.t = '••••••••'; return x; });
      return cc;
    });
  }

  function addMsg(m, animate, done) {
    var c = conv(); if (!c) { if (done) done(); return; }
    m.ts = Date.now();
    c.msgs.push(m);
    if (c.msgs.length > CFG.max.msgs) c.msgs.splice(0, c.msgs.length - CFG.max.msgs);
    c.updated = Date.now();
    if (m.r === 'u' && c.title === 'New chat' && !m.sec) c.title = clip(m.t, 40);
    save();
    if (m.r === 'b') sound('recv'); else sound('send');
    if (R.msgs && S.view === 'chat') {
      $$('.asq-chips', R.msgs).forEach(function (n) { n.remove(); });
      renderMsg(m, true, animate !== false, done);
    } else if (done) done();
  }

  function typeText(node, text, cb) {
    finishTyper();
    var i = 0, n = text.length, step = Math.max(1, Math.ceil(n / 80)), timer, fin = false;
    function done() { if (fin) return; fin = true; clearInterval(timer); node.textContent = text; S.typer = null; cb(); }
    S.typer = { finish: done };
    timer = setInterval(function () {
      i += step;
      if (i >= n) { done(); return; }
      node.textContent = text.slice(0, i);
      scrollDown(true);
    }, 24);
  }
  function finishTyper() { if (S.typer) { var f = S.typer.finish; S.typer = null; f(); } }

  function renderMsg(m, isLast, animate, done) {
    var row = el('div', 'asq-m ' + (m.r === 'u' ? 'asq-u' : 'asq-b') + (animate ? ' asq-in' : ''));
    if (m.r === 'b') row.appendChild(el('span', 'asq-av asq-av-sm', '<img src="' + CFG.avatar + '" alt="" onerror="this.style.display=\'none\'">'));
    var col = el('div', 'asq-mc'), tx = null;
    if (m.t || m.h) {
      var b = el('div', 'asq-bubble' + (m.big ? ' asq-big' : ''));
      if (m.h) b.appendChild(el('div', 'asq-bh', esc(m.h)));
      if (m.t) { tx = el('div', 'asq-tx'); b.appendChild(tx); }
      col.appendChild(b);
    }
    row.appendChild(col);
    R.msgs.appendChild(row);
    function tail() {
      if (m.actions && m.actions.length) {
        var ac = el('div', 'asq-actions');
        m.actions.forEach(function (a) { ac.appendChild(actionEl(a)); });
        col.appendChild(ac);
      }
      if (m.r === 'b' && m.ts) col.appendChild(el('div', 'asq-time', new Date(m.ts).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })));
      if (isLast && m.chips && m.chips.length) {
        var cw = el('div', 'asq-chips' + (m.chipStyle === 'list' ? ' asq-list-chips' : ''));
        m.chips.forEach(function (ch) { cw.appendChild(chipEl(ch)); });
        R.msgs.appendChild(cw);
      }
      scrollDown();
      if (done) done();
    }
    if (tx) {
      if (animate && m.r === 'b') typeText(tx, m.t, tail); else { tx.textContent = m.t; tail(); }
    } else tail();
  }

  function actionEl(a) {
    var n = el('a', 'asq-act asq-act-' + a.k, (a.k === 'wa' ? IC.wa : a.k === 'mail' ? IC.mail : a.k === 'call' ? IC.call : IC.ext) + '<span>' + esc(a.l) + '</span>');
    n.href = a.u;
    if (/^https?:/.test(a.u)) { n.target = '_blank'; n.rel = 'noopener noreferrer'; }
    return n;
  }
  function chipEl(ch) {
    var n;
    if (ch.a === 'link') { n = el('a', 'asq-chip'); n.href = ch.v; n.innerHTML = esc(ch.l) + ' ' + IC.ext; return n; }
    n = el('button', 'asq-chip' + (ch.n ? ' asq-num' : '') + (ch.g ? ' asq-ghost' : ''));
    n.type = 'button';
    n.innerHTML = (ch.n ? '<b>' + esc(ch.n) + '</b>' : '') + '<span>' + esc(ch.l) + '</span>';
    n.onclick = function () { onChip(ch); };
    return n;
  }

  /* ---------------- bot output queue (typing dots + typewriter, one message at a time) ---------------- */
  var outQ = [], draining = false, drainTok = 0;
  function typing(on) {
    $$('.asq-typing', R.msgs || document).forEach(function (n) { n.remove(); });
    if (on && R.msgs && S.view === 'chat') {
      var t = el('div', 'asq-m asq-b asq-typing', '<span class="asq-av asq-av-sm"><img src="' + CFG.avatar + '" alt="" onerror="this.style.display=\'none\'"></span><div class="asq-bubble asq-dots"><i></i><i></i><i></i></div>');
      R.msgs.appendChild(t); scrollDown();
    }
  }
  function say(m) { m.r = 'b'; outQ.push(m); if (!draining) { draining = true; drain(true); } }
  function drain(first) {
    var tok = drainTok, m = outQ.shift();
    if (!m) { draining = false; typing(false); return; }
    typing(true);
    setTimeout(function () {
      if (tok !== drainTok) return;
      typing(false);
      addMsg(m, true, function () { if (tok === drainTok) setTimeout(function () { if (tok === drainTok) drain(false); }, 220); });
    }, first ? 600 + Math.random() * 300 : 380 + Math.random() * 220);
  }
  function flushOut() {
    drainTok++; finishTyper(); typing(false);
    draining = false;
    var rest = outQ.splice(0);
    rest.forEach(function (m) { addMsg(m, false); });
  }
  function reply(fn) { try { fn(); } catch (e) { if (window.console) console.error(e); } }

  function lastUserQuestion() {
    var c = conv(); if (!c) return '';
    for (var i = c.msgs.length - 1; i >= 0; i--) if (c.msgs[i].r === 'u' && !c.msgs[i].sec && !/^(main menu|talk to support|skip|cancel|\d+\.\s)/i.test(c.msgs[i].t) && c.msgs[i].t.length > 3) return c.msgs[i].t;
    return '';
  }

  /* ---------------- chip actions ---------------- */
  function onChip(ch) {
    var c = conv(); if (!c) return;
    if (c.ended && ch.a !== 'rate' && ch.a !== 'new') return;
    flushOut();
    if (ch.a === 'send') userSay(ch.v);
    else if (ch.a === 'menu') { addMsg({ r: 'u', t: ch.n ? ch.n + '. ' + ch.l : ch.l }); reply(function () { menuSelect(ch.v); }); }
    else if (ch.a === 'prog') { addMsg({ r: 'u', t: ch.l }); reply(function () { programDetail(+ch.v); }); }
    else if (ch.a === 'part') { addMsg({ r: 'u', t: ch.l }); reply(function () { partnerDetail(+ch.v); }); }
    else if (ch.a === 'home') { addMsg({ r: 'u', t: 'Main menu' }); S.flow = null; reply(function () { showMenu(); }); }
    else if (ch.a === 'support') { addMsg({ r: 'u', t: 'Talk to support' }); reply(function () { supportCard(lastUserQuestion()); }); }
    else if (ch.a === 'more') { addMsg({ r: 'u', t: 'Show more' }); reply(showMore); }
    else if (ch.a === 'flow') { addMsg({ r: 'u', t: ch.l.replace(/^[^\w]+/, '') }); reply(function () { startFlow(ch.v); }); }
    else if (ch.a === 'fopt') { addMsg({ r: 'u', t: ch.l, sec: ch.sec }); reply(function () { flowAnswer(ch.v, ch.l); }); }
    else if (ch.a === 'fskip') { addMsg({ r: 'u', t: 'Skip' }); reply(function () { flowAnswer('', ''); }); }
    else if (ch.a === 'fcancel') { addMsg({ r: 'u', t: 'Cancel' }); reply(cancelFlow); }
    else if (ch.a === 'fagree') { addMsg({ r: 'u', t: 'I agree' }); reply(function () { S.flow.consent = true; reviewFlow(); }); }
    else if (ch.a === 'fsubmit') { addMsg({ r: 'u', t: 'Submit' }); reply(submitFlow); }
    else if (ch.a === 'fedit') { addMsg({ r: 'u', t: 'Change a detail' }); reply(editList); }
    else if (ch.a === 'feditkey') { addMsg({ r: 'u', t: ch.l }); reply(function () { askField(+ch.v, true); }); }
    else if (ch.a === 'end') { endChat(); }
    else if (ch.a === 'new') { newConv(); go('chat'); loadKB(function () { greet(conv()); }); }
    else if (ch.a === 'rate') { rate(ch.v); }
  }

  /* ---------------- menus & intents ---------------- */
  var MENU = [
    ['1', 'Our Programs'], ['2', 'Admissions & Counselling'], ['3', 'Fees & Scholarships'], ['4', 'Career Counselling'], ['5', 'Entrance Exam Coaching'],
    ['6', 'Online Education & NIOS'], ['7', 'Study Abroad'], ['8', 'Partnerships'], ['9', 'Contact & Support']
  ];
  function menuChips() { return MENU.map(function (m) { return { a: 'menu', v: m[0], n: m[0], l: m[1] }; }); }
  function tailChips(extra) {
    var c = (extra || []).slice();
    c.push({ a: 'home', l: 'Main menu' }); c.push({ a: 'support', l: 'Talk to support' });
    return c;
  }

  function greet(c, quiet) {
    if (!c || c.msgs.length || S.greeted[c.id]) return;
    S.greeted[c.id] = 1;
    c.ctx = { menu: 'main' };
    say({ t: 'Hello! I’m ASQIVO.', big: true });
    say({ t: 'Your intelligent assistant at AsquareB Knowledge Orbit. How can I help you today?' });
    say({ t: 'Ask me anything about admissions, career counselling, courses or AsquareB services...' });
    if (!quiet) say({ t: 'Please choose an option below (tap it or type its number), or type your question:', chips: menuChips(), chipStyle: 'list' });
  }
  function showMenu() {
    var c = conv(); if (c) c.ctx = { menu: 'main' };
    say({ t: 'Here are the main topics. Choose an option or type your question:', chips: menuChips(), chipStyle: 'list' });
  }
  function showMenuWithHello() {
    var c = conv(); if (c) c.ctx = { menu: 'main' };
    say({ t: 'Hello! 👋 Welcome to AsquareB Knowledge Orbit. These are the topics I can help with — choose an option or type your question:', chips: menuChips(), chipStyle: 'list' });
  }

  function userSay(text) {
    var c = conv(); if (!c || c.ended) return;
    text = String(text).replace(/\s+/g, ' ').trim(); if (!text) return;
    flushOut();
    var sec = !!(S.flow && S.flow.cur && S.flow.cur.sec);
    addMsg({ r: 'u', t: text, sec: sec });
    loadKB(function () { reply(function () { respond(text); }); });
  }

  var RE = {
    bye: /^(bye+|good ?bye|see you|see ya|end( the)?( chat| conversation)?|exit chat|close chat|that'?s all|nothing( else)?|no(,)? thanks?( you)?|no thank you|i'?m (done|good))\b/,
    thanks: /^(thanks?|thank you|thankyou|thx|ty|ok(ay)? thanks?|great|awesome|nice|cool|got it|perfect)\b/,
    greet: /^(hi+|hello+|hey+|hii+|hola|namaste|salaam|good (morning|afternoon|evening|day)|start)\b/,
    menu: /^(menu|main menu|options|help|home|show (me )?(the )?(menu|options)|what can you do)\b/,
    human: /\b(human|real person|live agent|agent|customer (care|support|service)|talk to (a |an |the )?(counsel+or|advisor|someone|person|team|support|staff)|speak (to|with) (a |an |the )?(counsel+or|advisor|someone|person|team|support|staff))\b/,
    contact: /\b(contact( details| us| number| info)?|phone( number)?|mobile( number)?|call you|email( id| address)?|e-?mail you|whatsapp|address|location|located|where (are|is) (you|asquareb|the (office|centre|center))|office address|reach you|how (can|do) i reach)\b/,
    about: /^(what( is|'s) (asquareb|asqivo|asquareb knowledge orbit)|who (are|is) (you|asquareb)|tell me about (asquareb|yourself|the company|your company)|about (asquareb|us|the company))\b/,
    programs: /^((our|all|your|the) )*(programs?|programmes?|courses?|services|program list|course list|list of (all )?(programs?|courses?)|view (all )?programs?)\??$|^(list|show|view|see|tell me|give me)( me)?( all| the| your| our| of)* (programs?|programmes?|courses|services)\b|^(what|which) (programs?|programmes?) (do you|are|does|you)\b|^(what|which) (are )?(your|the|all)( the)? (programs?|programmes?)\b|^(what|which) services\b|^what (do|can) you (offer|provide|do)\??$/,
    branches: /^(branch(es)?|centres?|centers?)$|\b(where|which|list|how many|locations?|addresses?|near(est)?)\b.*\b(branch(es)?|centres?|centers?)\b|\b(branch(es)?|centres?|centers?)\b.*\b(location|address|list|near)\b|\b(your|all) (branch(es)?|centres?|centers?)\b/,
    cancel: /^(cancel|stop|exit|quit|abort|never ?mind|forget it|not now|no thanks?)$/,
    skip: /^(skip|pass|na|n\/a|none|no|nil|-)$/,
    back: /^(back|previous|go back|undo)$/
  };
  var FR = {
    enquiry: /\b(admissions?|enrol+(ment)?|apply|application|enquiry|inquiry|counsell?ing|consult\w*|(free |a )?(counsell?ing |counsell?or )?session|meeting|appointment|book|schedule|demo|join|register|registration)\b/,
    contact: /\b(contact form|send (a )?message|write to (you|us)|leave (a )?message|feedback|complaint|query form|message (to )?(you|us|the team))\b/,
    geq: /\b(abroad|overseas|global education|study abroad)\b/,
    partner: /\b(partner(ship)?s?|collaborat\w*|sponsor\w*|campus connect|orbit alliance|orbit innovate)\b/
  };
  var INFO_START = /^(what|how|why|who|which|when|where|is|are|do|does|did|can|could|will|would|tell me|explain|list|show|about|give me)\b/;
  var ACTION = /\b(i want|i need|i would like|i'd like|i am interested|i'm interested|interested in|help me|book|schedule|register me|sign me|apply for|apply now|enquire|enquiry|inquiry|call me|callback|call back|get in touch)\b/;
  var INFO_WORD = /\b(fees?|cost|price|process|documents?|eligibility|criteria|age|dates?|last|refund|polic(y|ies)|scholarships?|offers?|timings?|hours|how|what|why|career|benefits?|details|about)\b/;
  function flowIntent(t) {
    var w = t.split(' ').length, info = INFO_START.test(t) || (INFO_WORD.test(t) && !ACTION.test(t)), act = ACTION.test(t);
    var go = act || (!info && w <= 5);
    if (!go) return null;
    // single word (incl. common typos): consultation / consultancy / consulting / admission / counselling -> admission & counselling enquiry
    if (w === 1 && /^(consul|counsel|counsell|admi|admis|enrol|enrl|apply|aplly)/.test(t)) return 'enquiry';
    if (FR.contact.test(t)) return 'contact';
    if (FR.partner.test(t)) { var m = t.match(/campus connect|orbit alliance|orbit innovate/); return m ? 'partner:' + m[0].replace(' ', '_') : 'partner'; }
    if (FR.geq.test(t) && /\b(register|registration|apply|enquiry|enquire|inquiry|interested|book|consult\w*)\b/.test(t)) return 'geq';
    if (FR.enquiry.test(t)) return 'enquiry';
    return null;
  }

  function respond(text) {
    var c = conv(), t = text.toLowerCase().replace(/[^\w\s'&@./-]/g, ' ').replace(/\s+/g, ' ').trim();
    var E = window.AsqivoEngine;
    // inside a conversational form every message is an answer (or Skip / Cancel / Back)
    if (S.flow) return flowInput(text, t);
    // numbered options
    var mnum = t.match(/^(?:option\s*|no\.?\s*|number\s*)?(\d{1,2})\.?$/);
    if (mnum && c && c.ctx && c.ctx.menu) {
      if (c.ctx.menu === 'programs') { var pn = +mnum[1]; if (pn >= 1 && pn <= KB.programs.length) return programDetail(pn - 1); }
      else if (c.ctx.menu === 'partners') { var qn = +mnum[1]; if (qn >= 1 && qn <= KB.partners.length) return partnerDetail(qn - 1); }
      else if (c.ctx.menu === 'main') { if (+mnum[1] >= 1 && +mnum[1] <= MENU.length) return menuSelect(String(+mnum[1])); }
      return say({ t: 'Please choose one of the listed numbers, or type your question.', chips: tailChips() });
    }
    if (/^\d{1,2}\.?$/.test(t)) return say({ t: 'Numbers work when I show you a list of options. Here is the main menu — tap an option or type your question:', chips: menuChips(), chipStyle: 'list' });
    if (RE.bye.test(t) || /\b(bye|goodbye)\b/.test(t)) return endChat();
    if (RE.thanks.test(t)) return say({ t: 'You’re most welcome! 😊 Is there anything else I can help you with?', chips: [{ a: 'home', l: 'Main menu' }, { a: 'end', l: 'End chat' }] });
    if (RE.greet.test(t) && t.split(' ').length <= 4) return showMenuWithHello();
    if (RE.menu.test(t)) return showMenu();
    if (RE.programs.test(t)) return programsList();
    if (RE.about.test(t)) { var ab = E.findFaq(/what is asquareb/i); if (ab) return answerChunk(ab, []); }
    var fi = flowIntent(t); if (fi) return startFlow(fi);
    if (RE.human.test(t)) return supportCard(lastUserQuestion(), true);
    if (RE.branches.test(t)) return branchesCard();
    if (RE.contact.test(t)) return contactCard();

    var r = E.search(text);
    if (!r.confident) return fallback(text);
    var top = r.hits[0].c, rel = [];
    r.hits.slice(1).forEach(function (h) { if ((h.c.k === 'f' || h.c.k === 'd') && h.c !== top && h.cov >= 0.5 && rel.length < 3 && rel.indexOf(h.c.h) < 0 && h.c.h !== top.h) rel.push(h.c.h); });
    answerChunk(top, rel);
  }

  function trimText(s, n) {
    if (s.length <= n) return { head: s, rest: '' };
    var cut = s.lastIndexOf('\n', n); if (cut < n * 0.5) cut = s.lastIndexOf('. ', n) + 1; if (cut < n * 0.5) cut = n;
    return { head: s.slice(0, cut).trim(), rest: s.slice(cut).trim() };
  }
  function answerChunk(ch, related) {
    var c = conv(); if (c) c.ctx = { menu: null };
    var body = ch.x, actions = [];
    if (ch.k === 'p') {
      var nx = window.AsqivoEngine.nextChunk(ch);
      if (nx && body.length < 320 && nx.h === ch.h) body += '\n' + nx.x;
    }
    var tr = trimText(body, 900);
    if (c) c.ctx.more = tr.rest;
    if (ch.p && ch.k !== 'd') actions.push({ k: 'link', l: 'Read more on the website', u: pageHref(ch.p) });
    var chips = [];
    if (tr.rest) chips.push({ a: 'more', l: 'Show more' });
    (related || []).forEach(function (q) { chips.push({ a: 'send', l: q, v: q }); });
    var key = (ch.h + ' ' + (ch.s || '') + ' ' + (ch.t || '')).toLowerCase();
    if (/partner|alliance|collaborat|sponsor|campus connect|orbit innovate/.test(key)) chips.push({ a: 'flow', v: 'partner', l: '🤝 Submit a partnership enquiry' });
    else if (/abroad|overseas|global education/.test(key)) chips.push({ a: 'flow', v: 'geq', l: '🌍 Register for Study Abroad' });
    else if (/admission|enrol|counsel|demo|fee|scholar|batch|visit|register|apply|document|branch|referral|offer|course|program|tuition|nios|exam|coaching/.test(key)) chips.push({ a: 'flow', v: 'enquiry', l: '📝 Book free counselling / admission enquiry' });
    say({ h: ch.k === 'f' || ch.k === 'd' ? ch.h : (ch.h && ch.h !== ch.t ? ch.h : ch.t), t: tr.head, actions: actions, chips: tailChips(chips) });
  }
  function showMore() {
    var c = conv(), rest = c && c.ctx && c.ctx.more;
    if (!rest) return say({ t: 'That’s everything I have on this topic.', chips: tailChips() });
    var tr = trimText(rest, 900);
    c.ctx.more = tr.rest;
    var chips = []; if (tr.rest) chips.push({ a: 'more', l: 'Show more' });
    say({ t: tr.head, chips: tailChips(chips) });
  }

  function waLink(q, extra) {
    var msg = 'Hi AsquareB Knowledge Orbit, I need some help.' + (q ? ' My question: ' + q : '') + (extra ? '\n\n' + extra : '');
    return 'https://wa.me/' + CFG.wa + '?text=' + encodeURIComponent(msg);
  }
  function mailLink(q, extra) {
    var sub = 'Enquiry from ASQIVO chat' + (q ? ': ' + clip(q, 50) : '');
    var body = 'Hello AsquareB team,\n\n' + (q ? 'I asked ASQIVO: "' + q + '" and would like some help.' : 'I would like some help with your programs.') + (extra ? '\n\n' + extra : '') + '\n\nThank you.';
    return 'mailto:' + CFG.email + '?subject=' + encodeURIComponent(sub) + '&body=' + encodeURIComponent(body);
  }
  function supportActions(q, extra) {
    return [{ k: 'wa', l: 'Chat on WhatsApp', u: waLink(q, extra) }, { k: 'mail', l: 'Send an email', u: mailLink(q, extra) }, { k: 'call', l: 'Call ' + CFG.phoneShow, u: 'tel:' + CFG.phone }];
  }
  function fallback(q) {
    var c = conv(); if (c) c.ctx = { menu: null };
    say({ t: 'I’m not confident enough to answer that from the current knowledge base. Please contact our support team and they will be happy to help:', actions: supportActions(q), chips: [{ a: 'flow', v: 'contact', l: '✉️ Send us a message' }, { a: 'home', l: 'Main menu' }] });
  }
  function supportCard(q, withCallback) {
    var c = conv(); if (c) c.ctx = { menu: null };
    var chips = []; if (withCallback) chips.push({ a: 'flow', v: 'enquiry', l: '📞 Request a counsellor call-back' });
    chips.push({ a: 'home', l: 'Main menu' });
    say({ t: 'Our support team is happy to help. Choose how you would like to reach us — your question is already filled in, so there is nothing to type:', actions: supportActions(q), chips: chips });
  }
  function contactCard() {
    var c = conv(); if (c) c.ctx = { menu: null };
    say({ h: 'Contact AsquareB Knowledge Orbit', t: '📞 ' + CFG.phoneShow + '\n💬 WhatsApp: ' + CFG.phoneShow + '\n📧 ' + CFG.email + '\n📍 ' + CFG.address, actions: supportActions(lastUserQuestion()), chips: tailChips([{ a: 'flow', v: 'contact', l: '✉️ Send us a message' }]) });
  }
  function branchesCard() {
    var c = conv(), E = window.AsqivoEngine; if (c) c.ctx = { menu: null };
    var d = E.findDoc(/where are your branches/i);
    var t = (d ? d.x + '\n\n' : '') + 'Head Office:\n' + CFG.address;
    say({ h: 'Our branches & head office', t: t, actions: supportActions(''), chips: tailChips([{ a: 'flow', v: 'enquiry', l: '📝 Book free counselling / admission enquiry' }]) });
  }

  function menuSelect(n, fromHome) {
    var c = conv(), E = window.AsqivoEngine;
    function faq(re, rel) {
      var f = E.findFaq(re);
      if (!f) return fallback(re.source);
      var relq = []; (rel || []).forEach(function (r) { var x = E.findFaq(r); if (x) relq.push(x.h); });
      answerChunk(f, relq);
    }
    if (fromHome) addMsg({ r: 'u', t: n + '. ' + MENU[+n - 1][1] });
    if (n === '1') return programsList();
    if (n === '2') return startFlow('enquiry');
    if (n === '3') return faq(/fee structure/i, [/scholarships/i, /referral/i]);
    if (n === '4') return faq(/what is career counselling/i, [/who should take career counselling/i]);
    if (n === '5') return faq(/entrance exams/i, [/what courses do you offer/i]);
    if (n === '6') return faq(/what is online education/i, [/what is nios/i]);
    if (n === '7') return programDetail(1);
    if (n === '8') return partnersList();
    if (n === '9') return contactCard();
  }

  function programsList() {
    var c = conv(); if (c) c.ctx = { menu: 'programs' };
    say({ t: 'These are the programs at AsquareB Knowledge Orbit. Choose a number to know more:', chips: KB.programs.map(function (p, i) { return { a: 'prog', v: String(i), n: String(i + 1), l: p.t }; }).concat([{ a: 'home', l: 'Main menu' }]), chipStyle: 'list', actions: [{ k: 'link', l: 'View all programs on the website', u: 'programs.html' }] });
  }
  function programDetail(i) {
    var c = conv(), E = window.AsqivoEngine, p = KB.programs[i]; if (!p) return programsList();
    if (c) c.ctx = { menu: 'programs' };
    var parts = [p.d + '.'], used = 0;
    E.pageChunks(p.u).forEach(function (ch) { if (used < 2 && ch.x.length > 60 && parts.join(' ').indexOf(ch.x.slice(0, 40)) < 0) { parts.push(ch.x); used++; } });
    var tr = trimText(parts.join('\n\n'), 850);
    var chips = [];
    if (i === 1) chips.push({ a: 'flow', v: 'geq', l: '🌍 Register for Study Abroad' });
    chips.push({ a: 'flow', v: 'enquiry', l: '📝 Book free counselling / admission enquiry' });
    chips.push({ a: 'home', l: 'Main menu' });
    say({ h: p.t, t: tr.head + (tr.rest ? ' …' : ''), actions: [{ k: 'link', l: 'Open ' + p.t, u: pageHref(p.u) }], chips: chips });
    say({ t: 'Want to know about another program?', chips: KB.programs.map(function (q, k) { return { a: 'prog', v: String(k), n: String(k + 1), l: q.t }; }), chipStyle: 'list' });
  }
  function partnersList() {
    var c = conv(); if (c) c.ctx = { menu: 'partners' };
    say({ t: 'Choose a partnership program to know more:', chips: KB.partners.map(function (p, i) { return { a: 'part', v: String(i), n: String(i + 1), l: p.t }; }).concat([{ a: 'home', l: 'Main menu' }]), chipStyle: 'list' });
  }
  function partnerDetail(i) {
    var c = conv(), E = window.AsqivoEngine, p = KB.partners[i]; if (!p) return partnersList();
    if (c) c.ctx = { menu: 'partners' };
    var parts = [], used = 0;
    E.pageChunks(p.u).forEach(function (ch) { if (used < 2 && ch.x.length > 60) { parts.push(ch.x); used++; } });
    var tr = trimText(parts.join('\n\n'), 850);
    var key = Object.keys(PARTNER_PAGE).filter(function (k) { return PARTNER_PAGE[k] === p.u; })[0];
    say({ h: p.t, t: tr.head + (tr.rest ? ' …' : ''), actions: [{ k: 'link', l: 'Open ' + p.t, u: pageHref(p.u) }], chips: [{ a: 'flow', v: 'partner:' + key, l: '🤝 Submit a partnership enquiry' }, { a: 'home', l: 'Main menu' }, { a: 'support', l: 'Talk to support' }] });
  }

  /* ---------------- conversational forms ---------------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function normPhone(s) { var d = String(s).replace(/\D/g, ''); if (/^91\d{10}$/.test(d)) d = d.slice(2); if (/^0\d{10}$/.test(d)) d = d.slice(1); return d; }
  var MON = 'jan feb mar apr may jun jul aug sep oct nov dec'.split(' ');
  function iso(d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function mkDate(y, mo, da) { var d = new Date(y, mo - 1, da); return d.getFullYear() === y && d.getMonth() === mo - 1 && d.getDate() === da ? d : null; }
  function parseDate(s) {
    s = s.toLowerCase().trim().replace(/,/g, ' ').replace(/\s+/g, ' ');
    var today = new Date(), d = null, m; today.setHours(0, 0, 0, 0);
    if (s === 'today') d = today;
    else if (s === 'tomorrow') { d = new Date(today); d.setDate(d.getDate() + 1); }
    else if ((m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/))) d = mkDate(+m[1], +m[2], +m[3]);
    else if ((m = s.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})$/))) { var y = +m[3]; if (y < 100) y += 2000; d = mkDate(y, +m[2], +m[1]); }
    else if ((m = s.match(/^(\d{1,2})(?:st|nd|rd|th)? ?(?:of )?([a-z]{3,9})(?: (\d{4}))?$/)) && MON.indexOf(m[2].slice(0, 3)) > -1) {
      var mo = MON.indexOf(m[2].slice(0, 3)) + 1, yy = m[3] ? +m[3] : today.getFullYear(); d = mkDate(yy, mo, +m[1]);
      if (d && !m[3] && d < today) d = mkDate(yy + 1, mo, +m[1]);
    } else if ((m = s.match(/^([a-z]{3,9}) (\d{1,2})(?:st|nd|rd|th)?(?: (\d{4}))?$/)) && MON.indexOf(m[1].slice(0, 3)) > -1) {
      var mo2 = MON.indexOf(m[1].slice(0, 3)) + 1, y2 = m[3] ? +m[3] : today.getFullYear(); d = mkDate(y2, mo2, +m[2]);
      if (d && !m[3] && d < today) d = mkDate(y2 + 1, mo2, +m[2]);
    }
    if (!d) return { err: 'I couldn’t read that date. Please type it like “15 Nov” or “15/11/2026”, or tap Skip.' };
    if (d < today) return { err: 'That date has already passed. Please give a date from today onwards, or tap Skip.' };
    return { v: iso(d) };
  }
  function matchOpt(list, text) {
    var t = String(text).toLowerCase().replace(/\s+/g, ' ').trim(), n = +t, i;
    if (/^\d{1,2}$/.test(t) && n >= 1 && n <= list.length) return list[n - 1];
    for (i = 0; i < list.length; i++) if (list[i].l.toLowerCase() === t || String(list[i].v).toLowerCase() === t) return list[i];
    var hits = list.filter(function (o) { return o.l.toLowerCase().indexOf(t) === 0; });
    if (hits.length === 1 && t.length >= 2) return hits[0];
    hits = list.filter(function (o) { return t.length >= 3 && o.l.toLowerCase().indexOf(t) > -1; });
    if (hits.length === 1) return hits[0];
    return null;
  }

  function startFlow(spec) {
    var id = String(spec).split(':')[0], pre = String(spec).split(':')[1], def = FLOWS[id];
    if (!def) return;
    var c = conv(); if (c) c.ctx = { menu: null };
    S.flow = { id: id, def: def, step: -1, data: {}, labels: {}, consent: false, mode: 'ask', cur: null, edit: false };
    if (id === 'partner' && pre && OPT.programme.some(function (o) { return o.v === pre; })) {
      S.flow.pre = 1; S.flow.data.programme = pre; S.flow.labels.programme = OPT.programme.filter(function (o) { return o.v === pre; })[0].l;
    }
    say({ h: def.name, t: def.intro, chips: [{ a: 'fcancel', l: 'Cancel', g: 1 }] });
    nextField();
  }
  function fields() { return S.flow.def.fields; }
  function nextField() {
    var f = S.flow, i = f.step + 1, fl = fields();
    while (i < fl.length && f.data[fl[i].k] !== undefined && fl[i].k === 'programme') i++;
    if (i >= fl.length) return consentStep();
    askField(i);
  }
  function optsFor(fd) { return OPT[fd.o] || []; }
  function askField(i, editing) {
    var f = S.flow, fd = fields()[i]; if (!f || !fd) return;
    f.step = i; f.cur = fd; f.mode = 'ask'; f.edit = !!editing;
    var pre = f.pre ? 1 : 0, total = fields().length - pre;
    var chips = [], list = optsFor(fd);
    if (fd.t === 'select') {
      var inline = fd.inline || list.length <= 3;
      list.forEach(function (o, k) { chips.push({ a: 'fopt', v: o.v, l: o.l, n: inline ? '' : String(k + 1), sec: fd.sec }); });
    }
    if (fd.quick) fd.quick.forEach(function (qk) { chips.push({ a: 'fopt', v: qk, l: qk }); });
    if (!fd.req) chips.push({ a: 'fskip', l: 'Skip', g: 1 });
    chips.push({ a: 'fcancel', l: 'Cancel', g: 1 });
    say({ t: fd.q + (fd.req ? '' : ' (optional)'), chips: chips, chipStyle: fd.t === 'select' && !(fd.inline || list.length <= 3) ? 'list' : '' });
    setField(fd);
  }
  function setField(fd) {
    if (!R.field) return;
    R.field.placeholder = fd ? (fd.ph || (fd.t === 'select' ? 'Tap an option or type it…' : 'Type your answer…')) : 'Type or tap the mic to speak…';
    R.field.type = 'text';
    try { R.field.inputMode = fd && (fd.t === 'phone' || fd.t === 'mobile' || fd.t === 'pin') ? 'tel' : fd && fd.t === 'email' ? 'email' : 'text'; } catch (e) {}
  }

  function flowInput(text, t) {
    var f = S.flow;
    if (RE.cancel.test(t)) return cancelFlow();
    if (f.mode === 'submitting') return say({ t: 'One moment — I’m submitting your details…' });
    if (f.mode === 'consent') {
      if (/^(yes|y|i agree|agree|agreed|ok|okay|accept|i accept|sure|confirm)$/.test(t)) { f.consent = true; return reviewFlow(); }
      return say({ t: 'Please tap “I agree” to continue, or Cancel to stop.', chips: consentChips() });
    }
    if (f.mode === 'review') {
      if (/^(yes|y|submit|confirm|ok|okay|send|correct|looks good)$/.test(t)) return submitFlow();
      if (/^(edit|change|no|modify|update)/.test(t)) return editList();
      return say({ t: 'Tap Submit to send your details, or Change a detail to edit something.', chips: reviewChips() });
    }
    if (f.mode === 'edit') {
      var fl = fields(), hit = null;
      fl.forEach(function (fd, i) { if (fd.l.toLowerCase().indexOf(t) > -1 && t.length > 2) hit = i; });
      if (/^\d{1,2}$/.test(t) && +t >= 1 && +t <= fl.length) hit = +t - 1;
      if (hit !== null) return askField(hit, true);
      return say({ t: 'Please choose which detail to change:', chips: editChips(), chipStyle: 'list' });
    }
    // ask mode
    var fd = f.cur;
    if (RE.back.test(t)) { if (f.step > 0 && !f.edit) { var pi = f.step - 1; if (fields()[pi].k === 'programme' && f.id === 'partner' && PARTNER_FIXED()) pi = Math.max(0, pi); return askField(pi); } return say({ t: 'This is the first question.', chips: [{ a: 'fcancel', l: 'Cancel', g: 1 }] }); }
    if (RE.skip.test(t) && !fd.req) return flowAnswer('', '');
    if (RE.skip.test(t) && fd.req && /^(skip|pass)$/.test(t)) return say({ t: 'This detail is required to submit your request. ' + fd.q, chips: [{ a: 'fcancel', l: 'Cancel', g: 1 }] });
    flowAnswer(text, text);
  }
  function PARTNER_FIXED() { return false; }

  function flowAnswer(raw, label) {
    var f = S.flow, fd = f.cur; if (!f || !fd) return;
    raw = String(raw == null ? '' : raw).trim();
    var val = raw, lab = raw, err = null;
    if (!raw) { if (fd.req) return say({ t: 'This detail is required. ' + fd.q }); val = ''; lab = ''; }
    else if (fd.t === 'text') {
      var min = fd.long ? 2 : 2; if (raw.length < min) err = 'Please enter at least ' + min + ' characters.';
      if (raw.length > (fd.long ? 1000 : 200)) err = 'That is a bit too long — please keep it shorter.';
      val = raw; lab = raw;
    } else if (fd.t === 'phone' || fd.t === 'mobile') {
      var d = normPhone(raw), cc = f.data.country_code;
      var ok = fd.t === 'mobile' && cc && cc !== '+91' ? /^\d{6,14}$/.test(d) : /^[6-9]\d{9}$/.test(d);
      if (!ok) err = 'That doesn’t look like a valid ' + (fd.t === 'mobile' && cc && cc !== '+91' ? 'mobile number' : '10-digit Indian mobile number') + '. Please check and type it again.';
      val = d; lab = d;
    } else if (fd.t === 'email') {
      if (!EMAIL_RE.test(raw)) err = 'That email address doesn’t look right. Please type it again (for example name@example.com).';
      val = raw.toLowerCase(); lab = val;
    } else if (fd.t === 'url') {
      if (!/^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(raw)) err = 'That doesn’t look like a valid website address. Please type it like https://www.example.com, or tap Skip.';
    } else if (fd.t === 'pin') {
      if (!/^[A-Za-z0-9][A-Za-z0-9 -]{1,10}$/.test(raw)) err = 'Please enter a valid pincode.';
    } else if (fd.t === 'date') {
      var pr = parseDate(raw); if (pr.err) err = pr.err; else { val = pr.v; lab = raw; }
    } else if (fd.t === 'select') {
      var o = matchOpt(optsFor(fd), raw);
      if (!o) err = 'Please choose one of the options below (tap it, or type its number).';
      else { val = o.v; lab = o.l; }
    }
    if (err) {
      var chips = [];
      if (fd.t === 'select') { var inl = fd.inline || optsFor(fd).length <= 3; optsFor(fd).forEach(function (op, k) { chips.push({ a: 'fopt', v: op.v, l: op.l, n: inl ? '' : String(k + 1), sec: fd.sec }); }); }
      if (!fd.req) chips.push({ a: 'fskip', l: 'Skip', g: 1 });
      chips.push({ a: 'fcancel', l: 'Cancel', g: 1 });
      return say({ t: err, chips: chips, chipStyle: fd.t === 'select' && !(fd.inline || optsFor(fd).length <= 3) ? 'list' : '' });
    }
    f.data[fd.k] = val; f.labels[fd.k] = lab || (val ? val : '');
    if (f.edit) { f.edit = false; return reviewFlow(); }
    nextField();
  }

  function consentChips() { return [{ a: 'fagree', l: '✅ I agree' }, { a: 'fcancel', l: 'Cancel', g: 1 }]; }
  function consentStep() {
    var f = S.flow; f.mode = 'consent'; f.cur = null; setField(null);
    say({ h: 'Privacy confirmation', t: 'I have read the Privacy Policy and understand how AsquareB Knowledge Orbit processes my personal information.\n\nPlease confirm to continue.', actions: [{ k: 'link', l: 'Read the Privacy Policy', u: 'privacy.html' }, { k: 'link', l: 'Terms & Conditions', u: 'terms.html' }], chips: consentChips() });
  }
  function reviewChips() { return [{ a: 'fsubmit', l: '✅ Submit' }, { a: 'fedit', l: '✏️ Change a detail' }, { a: 'fcancel', l: 'Cancel', g: 1 }]; }
  function reviewFlow() {
    var f = S.flow; f.mode = 'review'; f.cur = null; setField(null);
    var lines = [];
    fields().forEach(function (fd) { var v = f.labels[fd.k]; if (v) lines.push('• ' + fd.l + ': ' + v); });
    lines.push('• Privacy Policy: accepted');
    say({ h: 'Please review your details', t: lines.join('\n') + '\n\nShall I submit this to our team?', chips: reviewChips() });
  }
  function editChips() { return fields().map(function (fd, i) { return { a: 'feditkey', v: String(i), n: String(i + 1), l: fd.l }; }).concat([{ a: 'fsubmit', l: '✅ Submit as is' }]); }
  function editList() {
    var f = S.flow; f.mode = 'edit';
    say({ t: 'Which detail would you like to change?', chips: editChips(), chipStyle: 'list' });
  }
  function cancelFlow() {
    var f = S.flow; S.flow = null; setField(null);
    say({ t: 'No problem — I’ve cancelled that' + (f ? ' (' + f.def.name + ')' : '') + '. Nothing was submitted. Is there anything else I can help with?', chips: tailChips() });
  }

  function payload() {
    var f = S.flow, d = f.data, def = f.def, p = { form_type: def.type, privacy_consent: true, source_page: 'chatbot' };
    Object.keys(d).forEach(function (k) { p[k] = d[k] === '' ? null : d[k]; });
    if (def.type === 'enquiry') { p.parent_name = p.parent_name || null; p.counselling_date = p.counselling_date || null; p.notes = p.notes || null; }
    if (def.type === 'partnership_enquiry') { p.hp_field = ''; p.website = p.website || ''; p.registration_details = p.registration_details || ''; p.summary = p.summary || ''; }
    if (def.type === 'global_education') { p.source_page = 'chatbot (' + location.pathname.split('/').pop() + ')'; }
    return p;
  }
  function detailsText() {
    var f = S.flow, out = [f.def.name];
    fields().forEach(function (fd) { var v = f.labels[fd.k]; if (v) out.push(fd.l + ': ' + v); });
    return out.join('\n');
  }
  function submitFlow() {
    var f = S.flow; if (!f || f.mode === 'submitting') return;
    f.mode = 'submitting';
    var ctl = window.AbortController ? new AbortController() : null, to = setTimeout(function () { if (ctl) ctl.abort(); }, 25000);
    typing(true);
    fetch('/api/submit-form', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload()), signal: ctl ? ctl.signal : undefined })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        clearTimeout(to); typing(false);
        if (res.j && res.j.success) return submitted(res.j);
        f.mode = 'review';
        submitFailed((res.j && res.j.message) || 'The server could not accept the details.');
      })
      .catch(function () { clearTimeout(to); typing(false); f.mode = 'review'; submitFailed('I couldn’t reach the server.'); });
  }
  function submitted(j) {
    var f = S.flow, d = f.data, first = String(d.student_name || d.full_name || d.name || d.contact_person || '').split(' ')[0];
    var ref = j.lead_id || j.message_id || j.registration_id || j.enquiry_id || '';
    var extra = f.id === 'partner' ? '\n\nIf you would like to attach a proposal document, you can do so on the partnership page.' : '';
    var actions = f.id === 'partner' && PARTNER_PAGE[d.programme] ? [{ k: 'link', l: 'Open partnership page', u: PARTNER_PAGE[d.programme] }] : [];
    S.flow = null; setField(null);
    say({ h: '✅ Submitted', t: 'Thank you' + (first ? ', ' + first : '') + '! ' + f.def.done + (j.message ? '\n' + j.message : '') + (ref ? '\nReference ID: ' + ref : '') + extra, actions: actions, chips: [{ a: 'home', l: 'Main menu' }, { a: 'end', l: 'End chat' }] });
  }
  function submitFailed(msg) {
    var f = S.flow;
    say({ h: 'Couldn’t submit', t: msg + ' Your details are safe here — you can try again, or send them to our team directly:', actions: supportActions('', detailsText()), chips: [{ a: 'fsubmit', l: '🔁 Try again' }, { a: 'fedit', l: '✏️ Change a detail' }, { a: 'fcancel', l: 'Cancel', g: 1 }] });
  }

  /* ---------------- end chat + feedback ---------------- */
  function endChat() {
    var c = conv(); if (!c || c.ended) return;
    flushOut(); S.flow = null; setField(null);
    c.ended = true; c.ctx = { menu: null };
    say({ t: 'Goodbye! Feel free to reach out if you have any questions in the future.' });
    say({ t: 'Was this helpful?', chips: [{ a: 'rate', v: 'yes', l: '👍 Yes' }, { a: 'rate', v: 'no', l: '👎 No' }, { a: 'new', l: 'Start a new chat' }] });
    setEnded(true);
  }
  function rate(v) {
    var c = conv(); if (!c) return;
    c.rating = v; save();
    $$('.asq-chips', R.msgs).forEach(function (n) { n.remove(); });
    addMsg({ r: 'u', t: v === 'yes' ? '👍 Yes' : '👎 No' });
    if (v === 'yes') say({ t: 'Thank you for your feedback! 😊', chips: [{ a: 'new', l: 'Start a new chat' }] });
    else say({ t: 'Sorry we couldn’t help fully. Our support team can assist you directly:', actions: supportActions(lastUserQuestion()), chips: [{ a: 'new', l: 'Start a new chat' }] });
  }

  /* ---------------- microphone ---------------- */
  function setupMic() {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { R.mic.hidden = true; return; }
    R.mic.onclick = function () { S.listening ? stopMic() : startMic(SR); };
  }
  function startMic(SR) {
    var c = conv(); if (!c || c.ended) return;
    try {
      var rec = new SR(); S.rec = rec;
      rec.lang = 'en-IN'; rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1;
      var finalText = '';
      rec.onstart = function () { S.listening = true; R.mic.classList.add('on'); R.field.placeholder = 'Listening… speak now'; sound('mic'); };
      rec.onresult = function (e) {
        var interim = '';
        for (var i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) finalText += e.results[i][0].transcript; else interim += e.results[i][0].transcript;
        }
        R.field.value = (finalText + interim).trim();
      };
      rec.onerror = function (e) {
        var msg = e.error === 'not-allowed' || e.error === 'service-not-allowed' ? 'Microphone access is blocked. Please allow it in your browser settings.' : e.error === 'no-speech' ? 'I didn’t hear anything. Please try again.' : e.error === 'network' ? 'Voice input needs an internet connection.' : 'Voice input is not available right now.';
        toast(msg);
      };
      rec.onend = function () {
        var wasOn = S.listening; S.listening = false; S.rec = null;
        if (R.mic) R.mic.classList.remove('on');
        var v = (R.field && R.field.value || '').trim();
        // keep the spoken text in the box so it can be edited; the user presses Send / Enter
        if (v) { try { R.field.focus(); var L = R.field.value.length; R.field.setSelectionRange(L, L); } catch (e) {} toast('Edit if needed, then press Send.'); }
        else if (R.field) setField(S.flow && S.flow.cur ? S.flow.cur : null);
      };
      rec.start();
    } catch (err) { toast('Voice input is not available on this browser.'); }
  }
  function stopMic() {
    if (S.rec) { try { S.rec.stop(); } catch (e) {} }
    S.listening = false;
  }

  /* ---------------- public API ---------------- */
  window.ASQIVO = {
    open: function (v) { if (R.root) open(v); }, close: close,
    toggle: function () { S.open ? close() : open(); },
    ask: function (q) { open('chat'); startFresh(function () { userSay(q); }); }
  };
  // keep old inline buttons (onclick="toggleChatbot()") working
  window.toggleChatbot = function () { window.ASQIVO.toggle(); };
  window.openChatbot = function () { window.ASQIVO.open(); };

  function boot() {
    build();
    if (/[?&]asqivo=open\b/.test(location.search) || document.documentElement.hasAttribute('data-asqivo-open')) open('home');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
