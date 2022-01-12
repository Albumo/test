"use strict";

var burger = document.querySelector('.js-header-burger');
var header = document.querySelector('.js-header');
burger.addEventListener('click', function () {
  header.classList.toggle('open');
});
var card = document.querySelector('.square__item');

function clickRotate() {
  card.classList.toggle('rotated');
}

card.addEventListener('click', clickRotate);