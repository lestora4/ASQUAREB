/* Rotates the seven homepage taglines automatically, in order, one at a time. */
(function(){
  var box=document.getElementById('heroTaglines');
  if(!box) return;
  var items=[].slice.call(box.querySelectorAll('.hero-tagline'));
  if(items.length<2) return;
  var i=0, timer=null, INTERVAL=5000;
  var reduce=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(n){
    var prev=items[i]; i=n%items.length; var cur=items[i];
    if(prev!==cur){
      prev.classList.remove('is-active'); prev.classList.add('is-leaving');
      setTimeout(function(){prev.classList.remove('is-leaving');},reduce?400:800);
    }
    cur.classList.add('is-active');
  }
  function start(){ stop(); timer=setInterval(function(){show(i+1);},INTERVAL); }
  function stop(){ if(timer){clearInterval(timer);timer=null;} }
  document.addEventListener('visibilitychange',function(){ document.hidden?stop():start(); });
  items[0].classList.add('is-active');
  start();
})();
