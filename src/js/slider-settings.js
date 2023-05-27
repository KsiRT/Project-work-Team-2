const sliderReview = new Swiper('.reviews-cards-container', {
  // slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
const sliderProd = new Swiper('.prod-list-container', {
  slidesPerView: 1,
  spaceBetween: 18,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.6,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
