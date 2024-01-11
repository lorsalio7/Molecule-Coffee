document.addEventListener('DOMContentLoaded', function() {
  let promoSlider = document.querySelector(".promo__slider");
  let coffeeSlider = document.querySelector(".coffee-slider");
  let snacksSlider = document.querySelector(".snacks-slider");
  let seasonalMenuSlider = document.querySelector(".seasonal-menu-slider");

  if(promoSlider) {
    new Splide(promoSlider, {
      perMove: 1,
      arrows: true,
      pagination: true,
      rewind : true
    }).mount();
  }

  if(coffeeSlider) {
    new Splide(coffeeSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32
    }).mount();
  }

  if(snacksSlider) {
    new Splide(snacksSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32
    }).mount();
  }

  if(seasonalMenuSlider) {
    new Splide(seasonalMenuSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32
    }).mount();
  }
});
