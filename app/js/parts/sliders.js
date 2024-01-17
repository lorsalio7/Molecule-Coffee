document.addEventListener('DOMContentLoaded', function() {
  let promoSlider = document.querySelector(".promo__slider");
  let coffeeSlider = document.querySelector(".coffee-slider");
  let snacksSlider = document.querySelector(".snacks-slider");
  let seasonalMenuSlider = document.querySelector(".seasonal-menu-slider");
  let orderSlider = document.querySelector(".order-big-slider");
  let orderThumbSlider = document.querySelector(".order-thumb-slider");

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
      gap: 32,
      breakpoints: {
        1250: {
          gap: 20
        },
        1090: {
          gap: 15
        },
        730: {
          perPage: 3
        },
        520: {
          perPage: 2
        },
        375: {
          perPage: 1
        }
      }
    }).mount();
  }

  if(snacksSlider) {
    new Splide(snacksSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32,
      breakpoints: {
        1250: {
          gap: 20
        },
        1090: {
          gap: 15
        },
        730: {
          perPage: 3
        },
        520: {
          perPage: 2
        },
        375: {
          perPage: 1
        }
      }
    }).mount();
  }

  if(seasonalMenuSlider) {
    new Splide(seasonalMenuSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32,
      breakpoints: {
        1250: {
          gap: 20
        },
        1090: {
          gap: 15
        },
        730: {
          perPage: 3
        },
        520: {
          perPage: 2
        },
        375: {
          perPage: 1
        }
      }
    }).mount();
  }

  if(orderSlider) {
    let thumbSliderPrevButton = document.querySelector(".order__thumb-slider-button--prev");
    let thumbSliderNextButton = document.querySelector(".order__thumb-slider-button--next");

    orderSlider = new Splide(orderSlider, {
      perMove: 1,
      arrows: false,
      pagination: false,
      gap: 32
    }).mount();

    thumbSliderPrevButton.addEventListener("click", (e) => {
      orderThumbSlider.go("-1");
    });

    thumbSliderNextButton.addEventListener("click", (e) => {
      orderThumbSlider.go("+1");
    });

    orderThumbSlider = new Splide(orderThumbSlider,{
      direction: 'ttb',
      height: 629,
      perPage: 3,
      arrows: false,
      isNavigation: true,
      gap: 20,
      pagination: false,
    }).mount();

    orderSlider.sync(orderThumbSlider);
  }
});
