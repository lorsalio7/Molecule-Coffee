document.addEventListener('DOMContentLoaded', function() {
  let promoSlider = document.querySelector(".promo__slider");

  if(promoSlider) {
    new Splide(promoSlider, {
      perMove: 1,
      arrows: true,
      pagination: true
    }).mount();
  }
});
