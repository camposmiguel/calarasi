$(document).ready(function(){

  $(document).on("click",".btn-delete",function(){
      $(this).closest(".note").remove();
  });

});
