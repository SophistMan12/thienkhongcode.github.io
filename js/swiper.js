const swiper = new Swiper('.swiper-container', {
  loop: true, // Kích hoạt vòng lặp
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});