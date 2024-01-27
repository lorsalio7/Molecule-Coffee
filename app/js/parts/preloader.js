// =========================== Фикс скачка браузерного скролла и плавной прокрутки ==========================================
const preloader = document.querySelector(".preloader");

if(!localStorage.getItem("preloaderShown")) {

  showPreloader(preloader);

} else {
  // return;
}

const scrollController = {
  scrollPosition: 0,
  disabledScroll(fixedElement) {

    if(fixedElement) {
      let fixedElements = document.querySelectorAll(fixedElement);
      fixedElements.forEach(element => {
        element.style.paddingRight = `${parseInt(window.innerWidth - document.body.offsetWidth)}px`;
      });
    }

    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${parseInt(window.innerWidth - document.body.offsetWidth)}px;
    `;
    document.documentElement.style.scrollBehavior = "unset";
  },
  enabledScrool(fixedElement) {
    document.body.style.cssText = "";
    window.scroll({top: scrollController.scrollPosition});
    document.documentElement.style.scrollBehavior = "";

    if(fixedElement) {
      let fixedElements = document.querySelectorAll(fixedElement);
      fixedElements.forEach(element => {
        element.style.paddingRight = "0";
      });
    }
  }
}

function showPreloader(preloader) {
  // preloader.style.display = "block";
  scrollController.disabledScroll("");
  localStorage.setItem("preloaderShown", "true");

  window.addEventListener("load", () => {
    preloader.classList.add("preloader-hide");
  })
}
