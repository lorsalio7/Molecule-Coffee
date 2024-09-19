let yandexMapsCDN = document.querySelector("#yandex-maps-cdn");
let mapsTabs = document.querySelector(".locations-tabs");
let isLoadedYandexCDN = false;

if(mapsTabs) {
  let yandexMapsLink = yandexMapsCDN.getAttribute("data-src");
  setTimeout(() => {
    yandexMapsCDN.removeAttribute("data-src");
    yandexMapsCDN.setAttribute("src", yandexMapsLink);
    isLoadedYandexCDN = true;
  }, 2700);
  let mapTabButtons = mapsTabs.querySelectorAll(".locations-tabs__control");
  let mapTabPanels = mapsTabs.querySelectorAll(".locations-tabs__panel");

  mapTabButtons.forEach((button, idx) => {
    button.addEventListener("click", (e) => {
      removeActiveClass(mapTabButtons, "locations-tabs__control--active");
      e.preventDefault();
      button.classList.add("locations-tabs__control--active");
      removeActiveClass(mapTabPanels, "locations-tabs__panel--active");
      mapTabPanels[idx].classList.add("locations-tabs__panel--active");
    })
  })

  function removeActiveClass(elements, class_name) {
    for(let i = 0; i < elements.length; i++) {
      elements[i].classList.remove(class_name);
      elements[i].removeAttribute("style");
    }
  }
}
