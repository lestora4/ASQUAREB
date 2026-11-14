
  if (!window.ga || (window.ga && typeof window.ga !== 'function')) {
    window.ga = function ga() {
      (window.ga.q = window.ga.q || []).push(arguments);
      if (window.Shopify && window.Shopify.analytics && typeof window.Shopify.analytics.publish === 'function') {
        window.Shopify.analytics.publish("ga_stub_called", {}, {sendTo: "google_osp_migration"});
      }
      console.error("Shopify's Google Analytics stub called with:", Array.from(arguments), "\nSee https://help.shopify.com/manual/promoting-marketing/pixels/pixel-migration#google for more information.");
    };
    if (window.Shopify && window.Shopify.analytics && typeof window.Shopify.analytics.publish === 'function') {
      window.Shopify.analytics.publish("ga_stub_initialized", {}, {sendTo: "google_osp_migration"});
    }
  }
