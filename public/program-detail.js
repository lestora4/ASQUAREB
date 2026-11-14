(function(){
  "use strict";

  // Scroll progress bar
  var bar = document.querySelector('.pd-progress');
  function updateProgress(){
    if(!bar) return;
    var h = document.documentElement;
    var scrolled = h.scrollTop || document.body.scrollTop;
    var height = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
    var pct = height > 0 ? (scrolled / height) * 100 : 0;
    bar.style.width = pct + '%';
  }
  document.addEventListener('scroll', updateProgress, { passive:true });
  updateProgress();

  // Staggered reveal-on-scroll
  var items = document.querySelectorAll('.pd-reveal');
  if('IntersectionObserver' in window){
    var groups = {};
    items.forEach(function(el){
      var group = el.getAttribute('data-group') || 'default';
      groups[group] = groups[group] || 0;
      el.style.setProperty('--d', (groups[group] * 0.09) + 's');
      groups[group]++;
    });
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    items.forEach(function(el){ io.observe(el); });
  } else {
    items.forEach(function(el){ el.classList.add('is-visible'); });
  }

  // Animate radial rings (conic-gradient percentage) once visible
  var rings = document.querySelectorAll('.pd-ring[data-pct]');
  if('IntersectionObserver' in window && rings.length){
    var ringIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var el = entry.target;
          var pct = parseFloat(el.getAttribute('data-pct')) || 0;
          el.style.setProperty('--p', (pct * 3.6) + 'deg');
          ringIO.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    rings.forEach(function(el){ ringIO.observe(el); });
  } else {
    rings.forEach(function(el){
      var pct = parseFloat(el.getAttribute('data-pct')) || 0;
      el.style.setProperty('--p', (pct * 3.6) + 'deg');
    });
  }
})();
