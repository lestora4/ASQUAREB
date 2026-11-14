
!function(e){window.jdgm=window.jdgm||{},jdgm.CDN_HOST="https://cdnwidget.judge.me/",jdgm.CDN_HOST_ALT="https://cdn2.judge.me/cdn/widget_frontend/",jdgm.API_HOST="https://api.judge.me/",jdgm.CDN_BASE_URL="https://cdn.shopify.com/extensions/019f03cc-231d-7163-b6cd-33b98ab24e88/judgeme-592/assets/",jdgm.CDN_API_HOST="https://cdn.judge.me/",
jdgm.docReady=function(d){(e.attachEvent?"complete"===e.readyState:"loading"!==e.readyState)?
setTimeout(d,0):e.addEventListener("DOMContentLoaded",d)},jdgm.loadCSS=function(d,t,o,a){
!o&&jdgm.loadCSS.requestedUrls.indexOf(d)>=0||(jdgm.loadCSS.requestedUrls.push(d),
(a=e.createElement("link")).rel="stylesheet",a.class="jdgm-stylesheet",a.media="nope!",
a.href=d,a.onload=function(){this.media="all",t&&setTimeout(t)},e.body.appendChild(a))},
jdgm.loadCSS.requestedUrls=[],jdgm.loadJS=function(e,d){var t=new XMLHttpRequest;
t.onreadystatechange=function(){4===t.readyState&&(Function(t.response)(),d&&d(t.response))},
t.open("GET",e),t.onerror=function(){if(e.indexOf(jdgm.CDN_HOST)===0&&jdgm.CDN_HOST_ALT!==jdgm.CDN_HOST){var f=e.replace(jdgm.CDN_HOST,jdgm.CDN_HOST_ALT);jdgm.loadJS(f,d)}},t.send()},jdgm.docReady((function(){(window.jdgmLoadCSS||e.querySelectorAll(
".jdgm-widget, .jdgm-all-reviews-page").length>0)&&(jdgmSettings.widget_load_with_code_splitting?
parseFloat(jdgmSettings.widget_version)>=3?jdgm.loadCSS(jdgm.CDN_BASE_URL+"widget_v3_base.css"):
jdgm.loadCSS(jdgm.CDN_BASE_URL+"widget_base.css"):jdgm.loadCSS(jdgm.CDN_BASE_URL+"shopify_v2.css")
)}))}(document);
