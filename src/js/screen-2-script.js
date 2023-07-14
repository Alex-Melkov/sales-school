window.addEventListener('load', function () {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const block_color_left = document.querySelector('.screen-2__top__block-color-left');
  const block_color_right = document.querySelector('.screen-2__top__block-color-right');
  const screen_2_heading = document.querySelector('.screen-2__top__content__heading');
  const slider = document.querySelector('.screen-2__top__content__slider');
  const subtract = document.querySelector('.screen-2__top__content__subtract');
  const targetElement = document.querySelector('.screen-2__top');
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        block_color_left.classList.add('screen-2__top__block-color-left-active');
        block_color_right.classList.add('screen-2__top__block-color-right-active');
        screen_2_heading.classList.add('screen-2__top__content__heading-active');
        slider.classList.add('screen-2__top__content__slider-active');
        subtract.classList.add('screen-2__top__content__subtract-active');
      }
    });
  }, options);
  observer.observe(targetElement);
});
