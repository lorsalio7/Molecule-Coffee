"use strict";

var addMaximumScaleToMetaViewport = function addMaximumScaleToMetaViewport() {
  var el = document.querySelector('meta[name=viewport]');
  if (el !== null) {
    var content = el.getAttribute('content');
    var re = /maximum\-scale=[0-9\.]+/g;
    if (re.test(content)) {
      content = content.replace(re, 'maximum-scale=1.0');
    } else {
      content = [content, 'maximum-scale=1.0'].join(', ');
    }
    el.setAttribute('content', content);
  }
};
var disableIosTextFieldZoom = addMaximumScaleToMetaViewport;

// https://stackoverflow.com/questions/9038625/detect-if-device-is-ios/9039885#9039885
var checkIsIOS = function checkIsIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};
if (checkIsIOS()) {
  disableIosTextFieldZoom();
}
;
;
document.addEventListener('DOMContentLoaded', function () {
  var promoSlider = document.querySelector(".promo__slider");
  var coffeeSlider = document.querySelector(".coffee-slider");
  var snacksSlider = document.querySelector(".snacks-slider");
  var seasonalMenuSlider = document.querySelector(".seasonal-menu-slider");
  var orderSlider = document.querySelector(".order-big-slider");
  var orderThumbSlider = document.querySelector(".order-thumb-slider");
  var locationTabSlider = document.querySelector(".locations-tabs__slider");
  if (promoSlider) {
    promoSlider = new Splide(promoSlider, {
      perMove: 1,
      arrows: true,
      pagination: true,
      rewind: true,
      lazyLoad: "nearby"
    });
    promoSlider.on('mounted', function () {
      setTimeout(function () {
        promoSlider.root.classList.remove("promo__slider--skeleton");
      }, 500);
    });
    promoSlider.mount();
  }
  if (coffeeSlider) {
    new Splide(coffeeSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32,
      lazyLoad: "nearby",
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
  if (snacksSlider) {
    new Splide(snacksSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32,
      lazyLoad: "nearby",
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
  if (seasonalMenuSlider) {
    new Splide(seasonalMenuSlider, {
      perPage: 5,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 32,
      lazyLoad: "nearby",
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
  if (orderSlider) {
    var thumbSliderPrevButton = document.querySelector(".order__thumb-slider-button--prev");
    var thumbSliderNextButton = document.querySelector(".order__thumb-slider-button--next");
    orderSlider = new Splide(orderSlider, {
      perMove: 1,
      arrows: false,
      pagination: false,
      gap: 32,
      lazyLoad: "sequential",
      preloadPages: 1
    }).mount();
    thumbSliderPrevButton.addEventListener("click", function (e) {
      orderThumbSlider.go("-1");
    });
    thumbSliderNextButton.addEventListener("click", function (e) {
      orderThumbSlider.go("+1");
    });
    orderThumbSlider = new Splide(orderThumbSlider, {
      direction: 'ttb',
      height: 629,
      perPage: 3,
      lazyLoad: "sequential",
      arrows: false,
      isNavigation: true,
      gap: 20,
      pagination: false,
      preloadPages: 1,
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
  if (locationTabSlider) {
    locationTabSlider = new Splide(locationTabSlider, {
      drag: "free",
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
          gap: 6
        }
      }
    });
    locationTabSlider.on('overflow', function (isOverflow) {
      locationTabSlider.go(0);
      if (isOverflow) {
        locationTabSlider.options = {
          drag: isOverflow,
          arrows: isOverflow,
          clones: undefined
        };
      }
    });
    locationTabSlider.mount();
  }
});
;
var yandexMapsCDN = document.querySelector("#yandex-maps-cdn");
var mapsTabs = document.querySelector(".locations-tabs");
var isLoadedYandexCDN = false;
if (mapsTabs) {
  var removeActiveClass = function removeActiveClass(elements, class_name) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove(class_name);
      elements[i].removeAttribute("style");
    }
  };
  var yandexMapsLink = yandexMapsCDN.getAttribute("data-src");
  setTimeout(function () {
    yandexMapsCDN.removeAttribute("data-src");
    yandexMapsCDN.setAttribute("src", yandexMapsLink);
    isLoadedYandexCDN = true;
  }, 2700);
  var mapTabButtons = mapsTabs.querySelectorAll(".locations-tabs__control");
  var mapTabPanels = mapsTabs.querySelectorAll(".locations-tabs__panel");
  mapTabButtons.forEach(function (button, idx) {
    button.addEventListener("click", function (e) {
      removeActiveClass(mapTabButtons, "locations-tabs__control--active");
      e.preventDefault();
      button.classList.add("locations-tabs__control--active");
      removeActiveClass(mapTabPanels, "locations-tabs__panel--active");
      mapTabPanels[idx].classList.add("locations-tabs__panel--active");
    });
  });
}
;
var locationTabs = document.querySelector("#locations");
if (locationTabs) {
  var firstMapContainer = locationTabs.querySelector("#map-1");
  var secondMapContainer = locationTabs.querySelector("#map-2");
  var thirdMapContainer = locationTabs.querySelector("#map-3");
  var mapLoaded = false;
  var scrollTimeout;
  var mapOffset = locationTabs.getBoundingClientRect();
  window.addEventListener("scroll", function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      var scrollY = window.scrollY;
      if (!mapLoaded && scrollY >= mapOffset.top - 900 && isLoadedYandexCDN) {
        ymaps.ready(function () {
          var firstMapPlacemark = new ymaps.Placemark([53.91158508909563, 27.59594398101469], {}, {
            iconLayout: "default#image",
            iconImageHref: "img/map-pin.svg",
            iconImageSize: [106, 107],
            iconImageOffset: [-50, -80]
          });
          var firstMap = new ymaps.Map(firstMapContainer, {
              center: [53.91158508909563, 27.59594398101469],
              zoom: 17,
              controls: [],
              type: "yandex#map"
            }),
            ZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" + "<div id='first-map-zoom-in' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-in'>" + "<svg width='20' height='20' aria-hidden='true'>" + "<use xlink:href='img/sprite.svg#plus-ic'></use>" + "</svg>" + "</div>" + "<div id='first-map-zoom-out' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-out'>" + "<svg width='20' height='20' aria-hidden='true'>" + "<use xlink:href='img/sprite.svg#minus-ic'></use>" + "</svg>" + "</div>" + "</div>", {
              // Переопределяем методы макета, чтобы выполнять дополнительные действия
              // при построении и очистке макета.
              build: function build() {
                ZoomLayout.superclass.build.call(this);
                this.zoomInCallback = this.zoomIn.bind(this);
                this.zoomOutCallback = this.zoomOut.bind(this);
                document.getElementById("first-map-zoom-in").addEventListener('click', this.zoomInCallback);
                document.getElementById("first-map-zoom-out").addEventListener('click', this.zoomOutCallback);
              },
              clear: function clear() {
                document.getElementById("first-map-zoom-in").removeEventListener('click', this.zoomInCallback);
                document.getElementById("first-map-zoom-out").removeEventListener('click', this.zoomOutCallback);
                ZoomLayout.superclass.clear.call(this);
              },
              zoomIn: function zoomIn() {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, {
                  checkZoomRange: true
                });
              },
              zoomOut: function zoomOut() {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {
                  checkZoomRange: true
                });
              }
            }),
            zoomControl = new ymaps.control.ZoomControl({
              options: {
                layout: ZoomLayout,
                position: {
                  right: 25,
                  bottom: 55
                }
              }
            });
          firstMap.geoObjects.add(firstMapPlacemark);
          firstMap.behaviors.disable(["scrollZoom"]);
          firstMap.controls.add(zoomControl);
        });
        ymaps.ready(function () {
          var secondMapPlacemark = new ymaps.Placemark([53.90560630126001, 27.532580720901436], {}, {
            iconLayout: "default#image",
            iconImageHref: "img/map-pin.svg",
            iconImageSize: [106, 107],
            iconImageOffset: [-30, -75]
          });
          var secondMap = new ymaps.Map(secondMapContainer, {
              center: [53.90560630126001, 27.532580720901436],
              zoom: 17,
              controls: [],
              type: "yandex#map"
            }),
            ZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" + "<div id='second-map-zoom-in' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-in'>" + "<svg width='20' height='20' aria-hidden='true'>" + "<use xlink:href='img/sprite.svg#plus-ic'></use>" + "</svg>" + "</div>" + "<div id='second-map-zoom-out' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-out'>" + "<svg width='20' height='20' aria-hidden='true'>" + "<use xlink:href='img/sprite.svg#minus-ic'></use>" + "</svg>" + "</div>" + "</div>", {
              // Переопределяем методы макета, чтобы выполнять дополнительные действия
              // при построении и очистке макета.
              build: function build() {
                ZoomLayout.superclass.build.call(this);
                this.zoomInCallback = this.zoomIn.bind(this);
                this.zoomOutCallback = this.zoomOut.bind(this);
                document.getElementById("second-map-zoom-in").addEventListener('click', this.zoomInCallback);
                document.getElementById("second-map-zoom-out").addEventListener('click', this.zoomOutCallback);
              },
              clear: function clear() {
                document.getElementById("second-map-zoom-in").removeEventListener('click', this.zoomInCallback);
                document.getElementById("second-map-zoom-out").removeEventListener('click', this.zoomOutCallback);
                ZoomLayout.superclass.clear.call(this);
              },
              zoomIn: function zoomIn() {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, {
                  checkZoomRange: true
                });
              },
              zoomOut: function zoomOut() {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {
                  checkZoomRange: true
                });
              }
            }),
            zoomControl = new ymaps.control.ZoomControl({
              options: {
                layout: ZoomLayout,
                position: {
                  right: 25,
                  bottom: 55
                }
              }
            });
          secondMap.geoObjects.add(secondMapPlacemark);
          secondMap.behaviors.disable(["scrollZoom"]);
          secondMap.controls.add(zoomControl);
        });
        ymaps.ready(function () {
          var thirdMapPlacemark = new ymaps.Placemark([53.89415735177822, 27.5500537901783], {}, {
            iconLayout: "default#image",
            iconImageHref: "img/map-pin.svg",
            iconImageSize: [106, 107],
            iconImageOffset: [-50, -90]
          });
          var thirdMap = new ymaps.Map(thirdMapContainer, {
              center: [53.89415735177822, 27.5500537901783],
              zoom: 17,
              controls: [],
              type: "yandex#map"
            }),
            ZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" + "<div id='third-map-zoom-in' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-in'>" + "<svg width='20' height='20' aria-hidden='true'>" + "<use xlink:href='img/sprite.svg#plus-ic'></use>" + "</svg>" + "</div>" + "<div id='third-map-zoom-out' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-out'>" + "<svg width='20' height='20' aria-hidden='true'>" + "<use xlink:href='img/sprite.svg#minus-ic'></use>" + "</svg>" + "</div>" + "</div>", {
              // Переопределяем методы макета, чтобы выполнять дополнительные действия
              // при построении и очистке макета.
              build: function build() {
                ZoomLayout.superclass.build.call(this);
                this.zoomInCallback = this.zoomIn.bind(this);
                this.zoomOutCallback = this.zoomOut.bind(this);
                document.getElementById("third-map-zoom-in").addEventListener('click', this.zoomInCallback);
                document.getElementById("third-map-zoom-out").addEventListener('click', this.zoomOutCallback);
              },
              clear: function clear() {
                document.getElementById("third-map-zoom-in").removeEventListener('click', this.zoomInCallback);
                document.getElementById("third-map-zoom-out").removeEventListener('click', this.zoomOutCallback);
                ZoomLayout.superclass.clear.call(this);
              },
              zoomIn: function zoomIn() {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, {
                  checkZoomRange: true
                });
              },
              zoomOut: function zoomOut() {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {
                  checkZoomRange: true
                });
              }
            }),
            zoomControl = new ymaps.control.ZoomControl({
              options: {
                layout: ZoomLayout,
                position: {
                  right: 25,
                  bottom: 55
                }
              }
            });
          thirdMap.geoObjects.add(thirdMapPlacemark);
          thirdMap.behaviors.disable(["scrollZoom"]);
          thirdMap.controls.add(zoomControl);
        });
        mapLoaded = true;
      }
    }, 100);
  });
}
;
var phoneInput = document.querySelector(".order-form__phone");
var phoneCode = document.querySelector(".order-form__operator-code");
var dateOrder = document.querySelector(".order-form__date");
var timeOrder = document.querySelector(".order-form__time");
if (phoneCode) {
  phoneCode = new Cleave(phoneCode, {
    numeral: true,
    delimiter: ''
  });
}
if (phoneInput) {
  phoneInput = new Cleave(phoneInput, {
    numeral: true,
    delimiter: ''
  });
}
if (dateOrder) {
  dateOrder = new Cleave(dateOrder, {
    date: true,
    datePattern: ['d', 'm', 'Y']
  });
}
if (timeOrder) {
  timeOrder = new Cleave(timeOrder, {
    time: true,
    timePattern: ['h', 'm']
  });
}
;
var orderTimeInput = document.querySelector(".order-form__time");
var widthForInput = window.matchMedia("(max-width: 1090px)");
if (orderTimeInput) {
  var changePlaceholder = function changePlaceholder(matches) {
    if (matches) {
      console.log("small");
      orderTimeInput.setAttribute("placeholder", "Укажите удобное время доставки");
    } else {
      console.log("big");
      orderTimeInput.setAttribute("placeholder", "Укажите удобное время доставки (пример 20:00)");
    }
  };
  widthForInput.onchange = function (e) {
    changePlaceholder(e.matches);
  };
  changePlaceholder(widthForInput.matches);
}
;