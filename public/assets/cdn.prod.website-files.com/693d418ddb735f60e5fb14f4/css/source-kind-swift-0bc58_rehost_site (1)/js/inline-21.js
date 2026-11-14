
window.dataLayer = window.dataLayer || [];

window.appStart = function(){
  window.productPageHandle = function(){

    var productName = "";
    var productId = "";
    var productPrice = "";
    var productBrand = "";
    var productCollection = "";
    var productType = "";
    var productSku = "";
    var productVariantId = "";
    var productVariantTitle = "";

    window.dataLayer.push({
      event: "analyzify_productDetail",
      productId: productId,
      productName: productName,
      productPrice: productPrice,
      productBrand: productBrand,
      productCategory: productCollection,
      productType: productType,
      productSku: productSku,
      productVariantId: productVariantId,
      productVariantTitle: productVariantTitle,
      currency: "INR",
    });
  };

  window.allPageHandle = function(){
    window.dataLayer.push({
      event: "ga4kit_info",
      contentGroup: "index",
      
        userType: "visitor",
      
    });
  };
  allPageHandle();
      
  

}
appStart();
