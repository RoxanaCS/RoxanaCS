$(document).ready(function() {
  // $('.about').hide();
  // $('.skills').hide();
  // $('.work').hide();
  // $('.contact').hide();
});
var change = setInterval(
  'cambiar()', 4000);
$('.carousel').carousel({
  interval: 4000,
  pause: 'false'
});

var numero = 0;
// var header = $('.navbar');
function cambiar() {
  if (numero === 0) {
    $('#myCarousel').css('background-color', '#FEC301');
    $('.container-first-section').css('background-color', '#FEC301');
    // $('.navbar-right').css('background-color', '#FEC301');
    // document.body.style.backgroundColor = '#FEC301';
    // header.css('backgroundColor', '#FEC301');
    // header.css('border-color', '#FEC301');
    numero = 1;
  } else if (numero === 1) {
    $('#myCarousel').css('background-color', '#023');
    $('.container-first-section').css('background-color', '#023');
    // document.body.style.backgroundColor = '#023';
    // header.css('backgroundColor', '#023');
    // header.css('border-color', '#023');
    numero = 2;
  } else if (numero === 2) {
    $('#myCarousel').css('background-color', '#03C5C5');
    $('.container-first-section').css('background-color', '#03C5C5');
    // document.body.style.backgroundColor = '#03C5C5';
    // header.css('backgroundColor', '#03C5C5');
    // header.css('border-color', '#03C5C5');
    numero = 3;
  } else if (numero === 3) {
    $('#myCarousel').css('background-color', '#333333');
    $('.container-first-section').css('background-color', '#333333');
    // document.body.style.backgroundColor = '#333333';
    // header.css('backgroundColor', '#333333');
    // header.css('border-color', '#333333');
    numero = 4;
  } else if (numero === 4) {
    $('#myCarousel').css('background-color', '#0AA0A0');
    $('.container-first-section').css('background-color', '#0AA0A0');
    // document.body.style.backgroundColor = '#0AA0A0';
    // header.css('backgroundColor', '#0AA0A0');
    // header.css('border-color', '#0AA0A0');
    numero = 0;
  }
}

// ocultar secciones al hacer click en el menú
// $('#aboutMe').on('click', function(e) {
//   e.preventDefault();
//   clearInterval(change);
//   document.body.style.backgroundColor = '#0AA0A0';
//   $('.container-first-section').css('background-color', '#0AA0A0');
//   $('.about').show();
//   $('#sketch-js').hide();
//   $('.skills').hide();
//   $('.work').hide();
//   $('.contact').hide();
// });
// $('#home').on('click', function(e) {
//   e.preventDefault();
//   $('.about').hide();
//   $('.skills').hide();
//   $('.work').hide();
//   $('.contact').hide();
//   $('#sketch-js').show();
// });
// $('#skills').on('click', function(e) {
//   e.preventDefault();
//   document.body.style.backgroundColor = '#3C5C5';
//   $('.container-first-section').css('background-color', '#3C5C5');
//   clearInterval(change);
//   $('.skills').show();
//   $('.about').hide();
//   $('.work').hide();
//   $('.carousel').hide();
//   $('.contact').hide();
// });
// $('#work').on('click', function(e) {
//   e.preventDefault();
//   clearInterval(change);
//   document.body.style.backgroundColor = '#333333';
//   $('.container-first-section').css('background-color', '#333333');
//   $('.work').show();
//   $('.about').hide();
//   $('.skills').hide();
//   $('.carousel').hide();
//   $('.contact').hide();
// });
// $('#contact').on('click', function(e) {
//   e.preventDefault();
//   // document.body.style.backgroundColor = '#333333';
//   // $('.container-first-section').css('background-color', '#333333');
//   // clearInterval(change);
//   $('.about').hide();
//   $('.skills').hide();
//   $('.work').hide();
//   $('.carousel').hide();
//   $('.contact').show();
// });
//
// // botones de more info
// $('#moreAbout').on('click', function(e) {
//   e.preventDefault();
//   $('.about').show();
//   $('.carousel').hide();
// });
// $('#moreCode').on('click', function(e) {
//   e.preventDefault();
//   $('.work').show();
//   $('.carousel').hide();
// });
// $('#moreScience').on('click', function(e) {
//   e.preventDefault();
//   $('.work').show();
//   $('.carousel').hide();
// });
// $('#moreSkills').on('click', function(e) {
//   e.preventDefault();
//   $('.skills').show();
//   $('.carousel').hide();
// });
// $('#moreCont').on('click', function(e) {
//   e.preventDefault();
//   $('.carousel').hide();
//   $('.contact').show();
// });
