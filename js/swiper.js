const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});