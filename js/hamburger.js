// BTN

const hamburgerMenu = document.querySelector(".hamburger");
const menuIsActive = () => {
  hamburgerMenu.classList.toggle("active");
};
hamburgerMenu.addEventListener("click", menuIsActive);

// MENU

let menuBtn = document.querySelector(".dropdown-menu__btn");
let menu = document.querySelector(".dropdown-menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
});

menu.addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    menu.classList.remove("open");
    menuBtn.classList.toggle("open");
    menuBtn.classList.remove("active");
  }
});

menuBtn.addEventListener("click", () => {
  setTimeout(() => {
    menu.classList.remove("open");
    menuBtn.classList.remove("active");
  }, 5000);
});
