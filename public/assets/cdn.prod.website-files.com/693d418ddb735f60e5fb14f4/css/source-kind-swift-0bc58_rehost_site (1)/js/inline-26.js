
  (function() {
    var jdgmThemeFixes = null;
    if (!jdgmThemeFixes) return;
    var thisThemeFix = jdgmThemeFixes[Shopify.theme.id];
    if (!thisThemeFix) return;

    if (thisThemeFix.html) {
      document.addEventListener("DOMContentLoaded", function() {
        var htmlDiv = document.createElement('div');
        htmlDiv.classList.add('jdgm-theme-fix-html');
        htmlDiv.innerHTML = thisThemeFix.html;
        document.body.append(htmlDiv);
      });
    };

    if (thisThemeFix.css) {
      var styleTag = document.createElement('style');
      styleTag.classList.add('jdgm-theme-fix-style');
      styleTag.innerHTML = thisThemeFix.css;
      document.head.append(styleTag);
    };

    if (thisThemeFix.js) {
      var scriptTag = document.createElement('script');
      scriptTag.classList.add('jdgm-theme-fix-script');
      scriptTag.innerHTML = thisThemeFix.js;
      document.head.append(scriptTag);
    };
  })();
