let header = document.querySelector('.header');
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__block-links');
let lock = document.querySelector('body');

header__burger.onclick = function () {
  header.classList.toggle('active');
  header__burger.classList.toggle('active');
  header_menu.classList.toggle('active');
  lock.classList.toggle('lock');
};
