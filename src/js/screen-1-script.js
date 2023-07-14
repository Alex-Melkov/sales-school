window.addEventListener('load', function () {
  const background = document.querySelector('.background-screen-1');
  const header = document.querySelector('.header');
  const heading = document.querySelector('.screen-1__content__heading');
  const big_number = document.querySelector('.screen-1__content__big-number');
  const image = document.querySelector('.screen-1__content__image');
  const start = document.querySelector('.screen-1__content__start');
  const subscribe = document.querySelector('.screen-1__content__subscribe');
  const author_block = document.querySelector('.screen-1__content__author-block');

  background.classList.add('background-screen-1-active');
  header.classList.add('active-header');
  heading.classList.add('screen-1__content__heading-active');
  big_number.classList.add('screen-1__content__big-number-active');
  image.classList.add('screen-1__content__image-active');
  start.classList.add('screen-1__content__start-active');
  subscribe.classList.add('screen-1__content__subscribe-active');
  author_block.classList.add('screen-1__content__author-block-active');
});
