$(document).ready(function() {
  $('.about').hide();
  $('.skills').hide();
  $('.work').hide();
  $('.contact').hide();
});
var change = setInterval(
  'cambiar()', 3000);

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
    document.body.style.backgroundColor = '#023';
    header.css('backgroundColor', '#023');
    header.css('border-color', '#023');
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

// ocultar secciones al hacer click en el menú
$('#aboutMe').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  document.body.style.backgroundColor = '#FEC301';
  header.css('backgroundColor', '#FEC301');
  header.css('border-color', '#FEC301');
  $('.about').show();
  $('.carousel').hide();
  $('.skills').hide();
  $('.work').hide();
  $('.contact').hide();
});
$('#home').on('click', function(e) {
  e.preventDefault();
  var change = setInterval(
    'cambiar()', 3000);
  $('.about').hide();
  $('.skills').hide();
  $('.work').hide();
  $('.contact').hide();
  $('.carousel').show();
});
$('#skills').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  $('.skills').show();
  $('.about').hide();
  $('.work').hide();
  $('.carousel').hide();
  $('.contact').hide();
});
$('#work').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  $('.work').show();
  $('.about').hide();
  $('.skills').hide();
  $('.carousel').hide();
  $('.contact').hide();
});
$('#contact').on('click', function(e) {
  e.preventDefault();
  clearInterval(change);
  $('.about').hide();
  $('.skills').hide();
  $('.work').hide();
  $('.carousel').hide();
  $('.contact').show();
});

// botones de more info
$('#moreAbout').on('click', function(e) {
  e.preventDefault();
  $('.about').show();
  $('.carousel').hide();
});
$('#moreCode').on('click', function(e) {
  e.preventDefault();
  $('.work').show();
  $('.carousel').hide();
});
$('#moreScience').on('click', function(e) {
  e.preventDefault();
  $('.work').show();
  $('.carousel').hide();
});
$('#moreSkills').on('click', function(e) {
  e.preventDefault();
  $('.skills').show();
  $('.carousel').hide();
});
$('#moreCont').on('click', function(e) {
  e.preventDefault();
  $('.carousel').hide();
  $('.contact').show();
});
