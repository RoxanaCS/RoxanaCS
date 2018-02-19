$(document).ready(function() {
  $('.about').hide();
  $('.skills').hide();
  $('.work').hide();
  $('.contact').hide();
  setInterval('cambiar()', 3000);
});
$('.carousel').carousel({
  interval: 3000
});
var numero = 0;
var header = $('.navbar');
function cambiar() {
  if (numero === 0) {
    document.body.style.backgroundColor = '#FEC301';
    header.css('backgroundColor', '#FEC301');
    header.css('border-color', '#FEC301');
    numero = 1;
  } else if (numero === 1) {
    document.body.style.backgroundColor = '#CCCCCC';
    header.css('backgroundColor', '#CCCCCC');
    header.css('border-color', '#CCCCCC');
    numero = 2;
  } else if (numero === 2) {
    document.body.style.backgroundColor = '#03C5C5';
    header.css('backgroundColor', '#03C5C5');
    header.css('border-color', '#03C5C5');
    numero = 3;
  } else if (numero === 3) {
    document.body.style.backgroundColor = '#333333';
    header.css('backgroundColor', '#333333');
    header.css('border-color', '#333333');
    numero = 4;
  } else if (numero === 4) {
    document.body.style.backgroundColor = '#0AA0A0';
    header.css('backgroundColor', '#0AA0A0');
    header.css('border-color', '#0AA0A0');
    numero = 0;
  }
}
$('#aboutMe').on('click', function(e) {
  e.preventDefault();
  $('.about').show();
  $('.carousel').hide();
});
$('#home').on('click', function(e) {
  e.preventDefault();
  $('.about').hide();
  $('.carousel').show();
});
var imageUrl =
$('#work').on('click', function(e) {
  e.preventDefault();
  $('.work').show();
  $('.about').hide();
  $('.carousel').hide();
  $('.contact').hide();
});
$('#contact').on('click', function(e) {
  e.preventDefault();
  $('.about').hide();
  $('.carousel').hide();
  $('.contact').show();
});
