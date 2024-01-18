let orderTimeInput = document.querySelector(".order-form__time");
let widthForInput = window.matchMedia("(max-width: 1090px)");
if(orderTimeInput) {

  function changePlaceholder(matches) {
    if(matches) {
      console.log("small");
      orderTimeInput.setAttribute("placeholder", "Укажите удобное время доставки");
    } else {
      console.log("big");
      orderTimeInput.setAttribute("placeholder", "Укажите удобное время доставки (пример 20:00)");
    }
  }

  widthForInput.onchange = (e) => {
    changePlaceholder(e.matches);
  };

  changePlaceholder(widthForInput.matches);
}
