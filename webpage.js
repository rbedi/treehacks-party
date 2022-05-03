setTimeout('$(".cover_image_covid").css("opacity",.9)',1000);

function scrollToId(id){
  $('html,body').animate({scrollTop: $("#"+id).offset().top - 10},'slow');
}

function scrollToClass(className){
  $('html,body').animate({scrollTop: $("."+className).offset().top - 10},'slow');
}

function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');

    hashed_pw = "1a04417ebb8f626ba1302cf77ac1cb212d3c80d61133b75d8d224d2274688005"
    return hashHex;
  });
}

$(document).ready(function() {  

  $(".password-input").focus();

  $('.preload').load(function() {  
      $(".cover_image_covid").css("opacity",.9);
  });  

  setTimeout('$(".cover_image_covid").css("opacity",.9)',1000);

  $(".learn2").click(function() {
    scrollToClass("faq")
  });

  $(".apply2").click(function() {
    scrollToClass("scroll-apply")
  });

  $("#password-input").keyup((event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Can't let this happen
      event.preventDefault();
      // This is right, right?
      $("#let-me-in").click();
    }
  });
 
  $(".let-me-in").click(function() {

    console.log(hash('jsont'));

    if ($(".password-input").val() == "") {
      $(".password-input").focus();
    } else {
      if ( $(".password-input").val().toLowerCase() == "mafia" ||  $(".password-input").val().toLowerCase() == "newmoney") {
        $(".pw").css("opacity",0);
        setTimeout('$(".pw").hide();',500);
        $(".open-content").show(); 
      } else {
         $(".password-input").val('');
        $(".password-input").focus();
      }
    }
  });
});
