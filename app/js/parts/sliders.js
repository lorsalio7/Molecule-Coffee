document.addEventListener('DOMContentLoaded', function() {
  let promoSlider = document.querySelector(".promo__slider");
  let coffeeSlider = document.querySelector(".coffee-slider");
  let snacksSlider = document.querySelector(".snacks-slider");
  let seasonalMenuSlider = document.querySelector(".seasonal-menu-slider");
  let orderSlider = document.querySelector(".order-big-slider");
  let orderThumbSlider = document.querySelector(".order-thumb-slider");
  let locationTabSlider = document.querySelector(".locations-tabs__slider");


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
      breakpoints: {
        1360: {
          height: 529
        },
        1090: {
          height: 390
        },
        780: {
          height: 336
        },
        700: {
          height: 116,
          direction: 'ttr',
          pagination: true
        }
      }
    }).mount();

    orderSlider.sync(orderThumbSlider);
  }

  if(locationTabSlider) {
    locationTabSlider = new Splide(locationTabSlider, {
      drag   : "free",
      perPage: 2,
      arrowPath: "M17.4107 13.5893C17.7362 13.2638 18.2638 13.2638 18.5893 13.5893L24.4818 19.4818C24.8072 19.8072 24.8072 20.3349 24.4818 20.6603L18.5893 26.5529C18.2638 26.8783 17.7362 26.8783 17.4107 26.5529C17.0853 26.2274 17.0853 25.6998 17.4107 25.3744L22.714 20.0711L17.4107 14.7678C17.0853 14.4423 17.0853 13.9147 17.4107 13.5893Z",
      perMove: 1,
      gap: 11,
      autoWidth: true,
      snap: true,
      omitEnd: true,
      pagination: false,
      mediaQuery: "max",
      breakpoints: {
        780: {
          gap: 6,
        }
      }
    });

    locationTabSlider.on('overflow', function ( isOverflow ) {
      locationTabSlider.go( 0 );
      if(isOverflow) {
        locationTabSlider.options = {
          drag: isOverflow,
          arrows: isOverflow,
          clones: undefined
        };
      }
    })

    locationTabSlider.mount();
  }
});
