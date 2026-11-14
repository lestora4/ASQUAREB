
    window.theme = window.theme || {};
    theme.money_format_with_product_code_preference = "Rs. {{amount}}";
    theme.money_format_with_cart_code_preference = "Rs. {{amount}}";
    theme.money_format = "Rs. {{amount}}";
    theme.strings = {
      previous: "Previous",
      next: "Next",
      addressError: "Error looking up that address",
      addressNoResults: "No results for that address",
      addressQueryLimit: "You have exceeded the Google API usage limit. Consider upgrading to a \u003ca href=\"https:\/\/developers.google.com\/maps\/premium\/usage-limits\"\u003ePremium Plan\u003c\/a\u003e.",
      authError: "There was a problem authenticating your Google Maps API Key.",
      icon_labels_left: "Left",
      icon_labels_right: "Right",
      icon_labels_down: "Down",
      icon_labels_close: "Close",
      icon_labels_plus: "Plus",
      cart_terms_confirmation: "You must agree to the terms and conditions before continuing.",
      products_listing_from: "From",
      layout_live_search_see_all: "See all results",
      products_product_add_to_cart: "Add to Cart",
      products_variant_no_stock: "Coming Soon",
      products_variant_non_existent: "Unavailable",
      products_product_pick_a: "Pick a",
      general_navigation_menu_toggle_aria_label: "Toggle menu",
      general_accessibility_labels_close: "Close",
      products_product_adding_to_cart: "Adding",
      products_product_added_to_cart: "Added to cart",
      general_quick_search_pages: "Pages",
      general_quick_search_no_results: "Sorry, we couldn\u0026#39;t find any results",
      collections_general_see_all_subcollections: "See all..."
    };
    theme.routes = {
      cart_url: '/cart',
      cart_add_url: '/cart/add.js',
      cart_change_url: '/cart/change',
      predictive_search_url: '/search/suggest'
    };
    theme.settings = {
      cart_type: "drawer",
      quickbuy_style: "off",
      avoid_orphans: true
    };
    document.documentElement.classList.add('js');
  