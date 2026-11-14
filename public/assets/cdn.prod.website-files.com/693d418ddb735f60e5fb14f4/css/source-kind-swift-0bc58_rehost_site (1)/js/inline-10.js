(function() {
  var isLoaded = false;
  function asyncLoad() {
    if (isLoaded) return;
    isLoaded = true;
    var urls = ["https:\/\/cdn.nfcube.com\/6dac18245b008e4789ba413d484b4a24.js?shop=aswins-sweets.myshopify.com","\/\/open-signin.okasconcepts.com\/js\/resource.js?shop=aswins-sweets.myshopify.com","https:\/\/sr-cdn.shiprocket.in\/sr-promise\/static\/uc.js?channel_id=4\u0026sr_company_id=2045414\u0026shop=aswins-sweets.myshopify.com","https:\/\/au.zepiccdn.com\/a3ac02b8-f499-3d35-9d3b-91aa2f3c3922\/e094087d-588b-31e5-b2c7-8a5bd2966cd9\/sdk.js?shop=aswins-sweets.myshopify.com"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  };
  if(window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();