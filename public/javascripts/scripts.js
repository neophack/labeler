$(document).ready(function(){

  var reg = true;


  $("#register").click(function(){
    if(reg){
      showLoginCodeInput();
      reg = false;
    }else{
      hideLoginCodeInput();
      reg = true;
    }
  });

   function showLoginCodeInput(){
     $(".register_code").slideDown();
     $(".login_code").slideUp();
     $("#register").val("x");
     $("#logo_login").hide();
     $("#logo_register").show();
     $(".auth_form").attr('action','/login');
     $(".login_btn").val("Login");
   }

   function hideLoginCodeInput(){
     $(".register_code").slideUp();
     $(".login_code").slideDown();
     $("#register").val("Register");
     $("#logo_login").show();
     $("#logo_register").hide();
     $(".auth_form").attr('action','/register');
     $(".login_btn").val("Register");
   }

});
