$(document).ready(function() {
  $('#about').hide();
  $('#skills').hide();
  $('#work').hide();
  $('#work-code').hide();
  $('#work-science').hide();
  $('#contact').hide();
  $('.navbar-nav li a').click(function(event) {
    $('.navbar-collapse').collapse('hide');
  });
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
  $('.aboutMe').css('color', '#000');
  $('.nav-li-a').css('color', '#fff');
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
  $('.skills').css('color', '#000');
  $('.nav-li-s').css('color', '#fff');
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
  document.body.style.backgroundColor = '#006680';
  $('.container-first-section').css('background-color', '#006680');
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
  document.body.style.backgroundColor = '#DCDCDC';
  $('.container-first-section').css('background-color', '#DCDCDC');
  $('#work-science').hide();
  $('#work-code').hide();
});

// animaciones Skills
