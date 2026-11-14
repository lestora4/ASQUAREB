
!function(e){window.jdgm=window.jdgm||{},jdgm.CDN_HOST="https://cdn.judge.me/",
jdgm.docReady=function(d){(e.attachEvent?"complete"===e.readyState:"loading"!==e.readyState)?
setTimeout(d,0):e.addEventListener("DOMContentLoaded",d)},jdgm.loadCSS=function(d,t,o,s){
!o&&jdgm.loadCSS.requestedUrls.indexOf(d)>=0||(jdgm.loadCSS.requestedUrls.push(d),
(s=e.createElement("link")).rel="stylesheet",s.class="jdgm-stylesheet",s.media="nope!",
s.href=d,s.onload=function(){this.media="all",t&&setTimeout(t)},e.body.appendChild(s))},
jdgm.loadCSS.requestedUrls=[],jdgm.docReady(function(){(window.jdgmLoadCSS||e.querySelectorAll(
".jdgm-widget, .jdgm-all-reviews-page").length>0)&&(jdgmSettings.widget_load_with_code_splitting?
parseFloat(jdgmSettings.widget_version)>=3?jdgm.loadCSS(jdgm.CDN_HOST+"widget_v3/base.css"):
jdgm.loadCSS(jdgm.CDN_HOST+"widget/base.css"):jdgm.loadCSS(jdgm.CDN_HOST+"shopify_v2.css"))})}(document);
