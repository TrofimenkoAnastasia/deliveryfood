const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
cartButton.addEventListener('click', function (event) {
  modal.classList.add('is-modal');
});
modalClose.addEventListener('click', function (event) {
  modal.classList.toggle('is-modal');
});
//Инициализация WOW анимации
new WOW().init();
