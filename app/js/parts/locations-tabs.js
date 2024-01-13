let mapsTabs = document.querySelector(".locations-tabs");

if(mapsTabs) {
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
