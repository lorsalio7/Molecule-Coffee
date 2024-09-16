let locationTabs = document.querySelector("#locations");

if(locationTabs) {
  let firstMapContainer = locationTabs.querySelector("#map-1");
  let firstMapCoordinates = +firstMapContainer.dataset.coordinates;

  // console.log(typeof(firstMapCoordinates));

  let secondMapContainer = locationTabs.querySelector("#map-2");
  let thirdMapContainer = locationTabs.querySelector("#map-3");
  let mapLoaded = false;
  let scrollTimeout;
  let mapOffset = locationTabs.getBoundingClientRect();



  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      let scrollY = window.scrollY;
      if(!mapLoaded && scrollY >= (mapOffset.top - 500)) {
        ymaps.ready(() => {
          let firstMapPlacemark = new ymaps.Placemark([firstMapCoordinates], {}, {
            iconLayout: "default#image",
            iconImageHref: "img/map-pin.svg",
            iconImageSize: [106, 107],
            iconImageOffset: [-50, -80]
          });

          let firstMap = new ymaps.Map(firstMapContainer, {
            center: [firstMapCoordinates],
            zoom: 17,
            controls: [],
            type: "yandex#map"
          }),
            ZoomLayout = ymaps.templateLayoutFactory.createClass(
              "<div>" +
              "<div id='first-map-zoom-in' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-in'>" +
              "<svg width='20' height='20' aria-hidden='true'>" +
              "<use xlink:href='img/sprite.svg#plus-ic'></use>" +
              "</svg>" +
              "</div>" +
              "<div id='first-map-zoom-out' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-out'>" +
              "<svg width='20' height='20' aria-hidden='true'>" +
              "<use xlink:href='img/sprite.svg#minus-ic'></use>" +
              "</svg>" +
              "</div>" +
              "</div>", {

              // Переопределяем методы макета, чтобы выполнять дополнительные действия
              // при построении и очистке макета.
              build: function () {
                ZoomLayout.superclass.build.call(this);
                this.zoomInCallback = this.zoomIn.bind(this);
                this.zoomOutCallback = this.zoomOut.bind(this);
                document.getElementById("first-map-zoom-in").addEventListener('click', this.zoomInCallback);
                document.getElementById("first-map-zoom-out").addEventListener('click', this.zoomOutCallback);
              },
              clear: function () {
                document.getElementById("first-map-zoom-in").removeEventListener('click', this.zoomInCallback);
                document.getElementById("first-map-zoom-out").removeEventListener('click', this.zoomOutCallback);
                ZoomLayout.superclass.clear.call(this);
              },
              zoomIn: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
              },
              zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
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
          firstMap.controls.add(zoomControl)
        });


        mapLoaded = true;
      }
    }, 100);
  })

  ymaps.ready(() => {
    let secondMapPlacemark = new ymaps.Placemark([53.90560630126001,27.532580720901436], {}, {
      iconLayout: "default#image",
      iconImageHref: "img/map-pin.svg",
      iconImageSize: [106, 107],
      iconImageOffset: [-30, -75]
    });

    let secondMap = new ymaps.Map(secondMapContainer, {
      center: [53.90560630126001,27.532580720901436],
      zoom: 17,
      controls: [],
      type: "yandex#map"
    }),
      ZoomLayout = ymaps.templateLayoutFactory.createClass(
        "<div>" +
        "<div id='second-map-zoom-in' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-in'>" +
        "<svg width='20' height='20' aria-hidden='true'>" +
        "<use xlink:href='img/sprite.svg#plus-ic'></use>" +
        "</svg>" +
        "</div>" +
        "<div id='second-map-zoom-out' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-out'>" +
        "<svg width='20' height='20' aria-hidden='true'>" +
        "<use xlink:href='img/sprite.svg#minus-ic'></use>" +
        "</svg>" +
        "</div>" +
        "</div>", {

        // Переопределяем методы макета, чтобы выполнять дополнительные действия
        // при построении и очистке макета.
        build: function () {
          ZoomLayout.superclass.build.call(this);
          this.zoomInCallback = this.zoomIn.bind(this);
          this.zoomOutCallback = this.zoomOut.bind(this);
          document.getElementById("second-map-zoom-in").addEventListener('click', this.zoomInCallback);
          document.getElementById("second-map-zoom-out").addEventListener('click', this.zoomOutCallback);
        },
        clear: function () {
          document.getElementById("second-map-zoom-in").removeEventListener('click', this.zoomInCallback);
          document.getElementById("second-map-zoom-out").removeEventListener('click', this.zoomOutCallback);
          ZoomLayout.superclass.clear.call(this);
        },
        zoomIn: function () {
          var map = this.getData().control.getMap();
          map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
        },
        zoomOut: function () {
          var map = this.getData().control.getMap();
          map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
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
    secondMap.controls.add(zoomControl)
  });

  ymaps.ready(() => {
    let thirdMapPlacemark = new ymaps.Placemark([53.89415735177822,27.5500537901783], {}, {
      iconLayout: "default#image",
      iconImageHref: "img/map-pin.svg",
      iconImageSize: [106, 107],
      iconImageOffset: [-50, -90]
    });

    let thirdMap = new ymaps.Map(thirdMapContainer, {
      center: [53.89415735177822,27.5500537901783],
      zoom: 17,
      controls: [],
      type: "yandex#map"
    }),
      ZoomLayout = ymaps.templateLayoutFactory.createClass(
        "<div>" +
        "<div id='third-map-zoom-in' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-in'>" +
        "<svg width='20' height='20' aria-hidden='true'>" +
        "<use xlink:href='img/sprite.svg#plus-ic'></use>" +
        "</svg>" +
        "</div>" +
        "<div id='third-map-zoom-out' class='locations-tabs__zoom-button locations-tabs__zoom-button--zoom-out'>" +
        "<svg width='20' height='20' aria-hidden='true'>" +
        "<use xlink:href='img/sprite.svg#minus-ic'></use>" +
        "</svg>" +
        "</div>" +
        "</div>", {

        // Переопределяем методы макета, чтобы выполнять дополнительные действия
        // при построении и очистке макета.
        build: function () {
          ZoomLayout.superclass.build.call(this);
          this.zoomInCallback = this.zoomIn.bind(this);
          this.zoomOutCallback = this.zoomOut.bind(this);
          document.getElementById("third-map-zoom-in").addEventListener('click', this.zoomInCallback);
          document.getElementById("third-map-zoom-out").addEventListener('click', this.zoomOutCallback);
        },
        clear: function () {
          document.getElementById("third-map-zoom-in").removeEventListener('click', this.zoomInCallback);
          document.getElementById("third-map-zoom-out").removeEventListener('click', this.zoomOutCallback);
          ZoomLayout.superclass.clear.call(this);
        },
        zoomIn: function () {
          var map = this.getData().control.getMap();
          map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
        },
        zoomOut: function () {
          var map = this.getData().control.getMap();
          map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
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
    thirdMap.controls.add(zoomControl)
  });

}

