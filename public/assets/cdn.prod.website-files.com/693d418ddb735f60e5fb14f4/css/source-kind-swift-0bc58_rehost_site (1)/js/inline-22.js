  function getCartToken() {
    let idx = document.cookie.indexOf('cart=');
    if (idx == -1) {
        return null;
    }
    let end = document.cookie.indexOf(';', idx);
    return document.cookie.substring(idx + 5, end);
}
var shopifyCartEvent = {"note":null,"attributes":{},"original_total_price":0,"total_price":0,"total_discount":0,"total_weight":0.0,"item_count":0,"items":[],"requires_shipping":false,"currency":"INR","items_subtotal_price":0,"cart_level_discount_applications":[],"checkout_charge_amount":0};


var retry = 0;
var tId = setInterval(function () {
    retry++;
    if (typeof FM !== "undefined" && FM.trackMasEvent) {
        shopifyCartEvent.token = getCartToken();
        FM.trackMasEvent(
            "shopify.added_product_to_cart",
            true,
            shopifyCartEvent
        );
        clearInterval(tId);
    } else if (retry > 20) {
        clearInterval(tId);
        console.error("FM failed to load");
    }
}, 300);