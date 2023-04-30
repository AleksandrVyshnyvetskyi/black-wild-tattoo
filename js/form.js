// import axios from "axios";

const TOKEN = "5705447846:AAHWEE_RLafs8S-4Dea8TUIS0KTCu9Q2tEA";
const CHAT_ID = "-1001940417717";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const form = document.getElementById("tg-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formValidate();
  console.log("функция сработала !");

  let message = `<em>Прийшла заявка з сайту !</em>\n`;
  message += `<i>Ім'я: </i><b>${this.name.value}</b>\n`;
  message += `<i>Номер: </i><b>${this.tel.value}</b>\n`;
  message += `<i>Повідомлення: </i><b>${this.textarea.value}</b>`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.tel.value = "";
      this.textarea.value = "";
      console.log("аксиос запустился !");
      Notiflix.Report.success(
        "Super !",
        "Твоє повідомлення вже в мене !",
        "Закрити",
        {
          svgSize: "200px",
          titleFontSize: "24px",
          messageFontSize: "20px",
          buttonFontSize: "16px",
          width: "300px",
          backOverlay: true,
          backOverlayClickToClose: true,
        }
      );
    })
    .catch((error) => {
      console.log("функция дала ошибку !");
      Notiflix.Report.failure(
        "Oopps...",
        "Щось пішло не так, спробуй ще !",
        "Закрити",
        {
          svgSize: "200px",
          titleFontSize: "24px",
          messageFontSize: "18px",
          buttonFontSize: "16px",
          width: "300px",
          backOverlay: true,
          backOverlayClickToClose: true,
        }
      );
    });

  function formValidate() {
    let formValidate = document.querySelectorAll(".validation");
    for (let index = 0; index < formValidate.length; index++) {
      const input = formValidate[index];
      if (input.classList.contains("validation")) {
        if (input.value === "") {
          Notiflix.Report.warning(
            "Увага !",
            "Будь ласка, заповніть всі поля !",
            "Закрити",
            {
              svgSize: "200px",
              titleFontSize: "24px",
              messageFontSize: "18px",
              buttonFontSize: "16px",
              width: "300px",
              backOverlay: true,
              backOverlayClickToClose: true,
            }
          );
        }
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+380(__) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };
  var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});
