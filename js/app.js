$(document).ready(function() {
  $('#about').hide();
  $('#skills').hide();
  $('#work').hide();
  $('#work-code').hide();
  $('#work-science').hide();
  $('#contact').hide();
});
var change = setInterval(
  'cambiar()', 6010);
$('.carousel').carousel({
  interval: 6000,
  pause: 'false',
});

var numero = 0;
function cambiar() {
  if (numero === 0) {
    $('#myCarousel').css('background-color', '#ECC703');
    $('.container-first-section').css('background-color', '#ECC703');
    numero = 1;
  } else if (numero === 1) {
    $('#myCarousel').css('background-color', '#023');
    $('.container-first-section').css('background-color', '#023');
    numero = 2;
    // } else if (numero === 2) {
    //   $('#myCarousel').css('background-color', '#03C5C5');
    //   $('.container-first-section').css('background-color', '#03C5C5');
    //   numero = 3;
    // } else if (numero === 3) {
    //   $('#myCarousel').css('background-color', '#333333');
    //   $('.container-first-section').css('background-color', '#333333');
    //   numero = 4;
  } else if (numero === 2) {
    $('#myCarousel').css('background-color', '#0AA0A0');
    $('.container-first-section').css('background-color', '#0AA0A0');
    numero = 0;
  }
}
// ocultar secciones al hacer click en el menú
$('.aboutMe').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  document.body.style.backgroundColor = '#023';
  $('.container-first-section').css('background-color', '#023');
  $('#about').show();
  $('#skills').hide();
  $('#work').hide();
  $('#work-code').hide();
  $('#work-science').hide();
  $('#contact').hide();
  $('#sketch-js').hide();
});
$('.skills').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  document.body.style.backgroundColor = '#0AA0A0';
  $('.container-first-section').css('background-color', '#0AA0A0');
  $('#skills').show();
  $('#about').hide();
  $('#work').hide();
  $('#work-code').hide();
  $('#work-science').hide();
  $('#contact').hide();
  $('#sketch-js').hide();
});
$('.work').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  document.body.style.backgroundColor = '#DCDCDC';
  $('.container-first-section').css('background-color', '#DCDCDC');
  $('.work').css('color', '#000');
  $('.nav-li-c').css('color', '#fff');
  $('#work').show();
  $('#work-code').hide();
  $('#work-science').hide();
  $('#about').hide();
  $('#skills').hide();
  $('#contact').hide();
  $('#sketch-js').hide();
});
$('.contact').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  document.body.style.backgroundColor = '#333333';
  $('.container-first-section').css('background-color', '#333333');
  $('.nav-li').css('color', '#000');
  $('.contact').css('color', '#fff');
  $('#about').hide();
  $('#skills').hide();
  $('#work').hide();
  $('#work-code').hide();
  $('#work-science').hide();
  $('#contact').show();
  $('#sketch-js').hide();
});
$('.moreCode').hover(function() {
  $(this).css('filter', 'brightness(0.1)');
  $('.b-right').append('<h2 class="imgFigcaption1" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.5em; font-weight: bolder; text-align: center; color: #FFF">Code</h2>');
}, function() {
  $(this).css('filter', 'brightness(1)');
  $('.imgFigcaption1').css('color', 'transparent');
});
$('.moreScience').hover(function() {
  $(this).css('filter', 'brightness(0.1)');
  $('.b-left').append('<h2 class="imgFigcaption2" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.5em; font-weight: bolder; text-align: center; color: #FFF">Science</h2>');
}, function() {
  $(this).css('filter', 'brightness(1)');
  $('.imgFigcaption2').css('color', 'transparent');
});

$('.moreCode').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  document.body.style.backgroundColor = '#ECC703';
  $('.container-first-section').css('background-color', '#ECC703');
  $('#about').hide();
  $('#skills').hide();
  $('#work').hide();
  $('#work-code').show();
  $('#work-science').hide();
  $('#contact').hide();
  $('#sketch-js').hide();
});
$('.moreScience').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  document.body.style.backgroundColor = '#023';
  $('.container-first-section').css('background-color', '#023');
  $('#about').hide();
  $('#skills').hide();
  $('#work').hide();
  $('#work-code').hide();
  $('#work-science').show();
  $('#contact').hide();
  $('#sketch-js').hide();
});
// atrás section Work
$('.btn-back').on('click', function(e) {
  $('#work').show();
  document.body.style.backgroundColor = '#665C5C';
  $('.container-first-section').css('background-color', '#665C5C');
  $('#work-science').hide();
  $('#work-code').hide();
});

// animaciones Skills
