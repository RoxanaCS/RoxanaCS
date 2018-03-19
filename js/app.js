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
  pause: 'false'
});

var numero = 0;
function cambiar() {
  if (numero === 0) {
    $('#myCarousel').css('background-color', '#FEC301');
    $('.container-first-section').css('background-color', '#FEC301');
    numero = 1;
  } else if (numero === 1) {
    $('#myCarousel').css('background-color', '#023');
    $('.container-first-section').css('background-color', '#023');
    numero = 2;
  } else if (numero === 2) {
    $('#myCarousel').css('background-color', '#03C5C5');
    $('.container-first-section').css('background-color', '#03C5C5');
    numero = 3;
  } else if (numero === 3) {
    $('#myCarousel').css('background-color', '#333333');
    $('.container-first-section').css('background-color', '#333333');
    numero = 4;
  } else if (numero === 4) {
    $('#myCarousel').css('background-color', '#0AA0A0');
    $('.container-first-section').css('background-color', '#0AA0A0');
    numero = 0;
  }
}
// ocultar secciones al hacer click en el menú
$('.aboutMe').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  document.body.style.backgroundColor = '#0AA0A0';
  $('.container-first-section').css('background-color', '#0AA0A0');
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
  document.body.style.backgroundColor = '#03C5C5';
  $('.container-first-section').css('background-color', '#03C5C5');
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
  document.body.style.backgroundColor = '#FEC301';
  $('.container-first-section').css('background-color', '#FEC301');
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
  document.body.style.backgroundColor = '#FEC301';
  $('.container-first-section').css('background-color', '#FEC301');
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
