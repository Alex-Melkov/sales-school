let btn_up = document.querySelector('.btn-up');

btn_up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
