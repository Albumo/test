const burger = document.querySelector('.js-header-burger');
const header = document.querySelector('.js-header');

burger.addEventListener('click', () => {
   header.classList.toggle('open');
});

const card = document.querySelector('.square__item');

function clickRotate() {
   card.classList.toggle('rotated');
}
card.addEventListener('click', clickRotate);
