const hashed_pw = "ec773cbf476d3338270f45a2d26a1bdd369f74425201128d7bce2399faf450a9";
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
    return hashHex;
  });
}

$(document).ready(function() {  

  $(".password-input").focus();

  $('.preload').on('load', function() {  
      $(".cover_image_covid").css("opacity",.9);
  });  

  setTimeout('$(".cover_image_covid").css("opacity",.9)',1000);

  $(".learn2").on('click', function() {
    scrollToClass("faq")
  });

  $(".apply2").on('click', function() {
    scrollToClass("scroll-apply")
  });

  $("#password-input").on('keyup', (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Can't let this happen
      event.preventDefault();
      // This is right, right?
      $("#let-me-in").click();
    }
  });
 
  $(".let-me-in").on('click', function() {
    password = $(".password-input").val().toLowerCase();
    hash(password).then((hashed) => {
      if (hashed == hashed_pw) {
        // You're in
        $(".pw").css("opacity",0);
        setTimeout('$(".pw").hide();',500);
        $(".open-content").show(); 
      } else {
        // Loser
        $(".password-input").val('');
        $(".password-input").focus();
      }
    })
  });
});
