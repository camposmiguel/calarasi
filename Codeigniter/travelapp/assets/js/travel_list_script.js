$(document).ready(function(){

  $(document).on("click","#btn-send",function(){
    $.ajax({
      method: "POST",
      url: "http://localhost/travelapp/travel/add/",
      data: {
        cityText:$("#city").val(),
        priceText:$("#price").val(),
        photoText:$("#photo").val(),
        periodText:$("#period").val()
      }
    }).done(function( msg ) {
      alert(msg);
    });


  });

});
