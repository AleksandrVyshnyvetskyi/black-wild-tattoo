const burger = document.querySelector(".burger");
const menu = document.querySelector(".dropdown-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("open");
  menu.classList.toggle("open");
});

// burger.addEventListener("click", () => {
//   setTimeout(() => {
//     menu.classList.remove("open");
//     burger.classList.remove("open");
//   }, 3000);
// });

menu.addEventListener("click", function (event) {
  if (event.target.matches("a")) {
    menu.classList.remove("open");
    burger.classList.remove("open");
  }
});
