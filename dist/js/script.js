"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var promoSlider = document.querySelector(".promo__slider");
  var coffeeSlider = document.querySelector(".coffee-slider");
  var snacksSlider = document.querySelector(".snacks-slider");
  var seasonalMenuSlider = document.querySelector(".seasonal-menu-slider");
  if (promoSlider) {
    new Splide(promoSlider, {
      perMove: 1,
      arrows: true,
      pagination: true,
      rewind: true
    }).mount();
  }
  if (coffeeSlider) {
    new Splide(coffeeSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32
    }).mount();
  }
  if (snacksSlider) {
    new Splide(snacksSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32
    }).mount();
  }
  if (seasonalMenuSlider) {
    new Splide(seasonalMenuSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32
    }).mount();
  }
});
;