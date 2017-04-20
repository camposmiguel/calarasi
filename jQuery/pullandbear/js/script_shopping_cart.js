$( document ).ready(function() {

    //alert("Hello, I'm ready");

    // element selector
    $("h3").css("color","red");

    // class selector > a group of elements with the same class
    //$(".hero-feature").css("background-color","yellow");

    // id selector > only select one element
    // element with the id="product-jeans"
    $("#product-jeans").css("background-color","yellow");

    // class="price"
    $(".price").css("font-weight","bold");

    //$(".button-sub").click();
    //$(".button-sub").live("click");
    $(document).on("click",".button-sub",function(){
      // div
      // |--- h3
      // |--- <span class="quantity">1</span>
      // ...
      // |--- p
      //      |--- button

      var productName = $(this).parent().parent().find("h3").text();
      //alert("Minus button clicked "+productName);
      var quantityText = $(this).parent().parent().find(".quantity").text();
      var quantityInt = parseInt(quantityText);
      if(quantityInt>1) {
        quantityInt--;
        $(this).parent().parent().find(".quantity").text(quantityInt);
      } else {
        $(this).closest(".hero-feature").remove();
      }
    });

    $(document).on("click",".button-add",function(){

      var productName = $(this).parent().parent().find("h3").text();
      var quantityText = $(this).parent().parent().find(".quantity").text();
      var quantityInt = parseInt(quantityText);
      quantityInt++;
      var stockText = $(this).parent().parent().find(".quantity").attr("stock");
      var stockInt = parseInt(stockText);
      
      if(quantityInt<=stockInt) {
        $(this).parent().parent().find(".quantity").text(quantityInt);
      } else {
        alert("Sorry, but we don't have enough stock for "+productName);
      }
    });
});
