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

function maskPhoneNumbers() {
  const eventCallback = function (event) {
    const el = event.target;
    const clearVal = el.dataset.phoneClear;
    const pattern = el.dataset.phonePattern;
    const matrixDef = "+380(__) ___-__-__";
    const matrix = pattern ? pattern : matrixDef;
    const def = matrix.replace(/\D/g, "");
    let val = event.target.value.replace(/\D/g, "");
    let i = 0;

    if (clearVal !== "false" && event.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        event.target.value = "";
        return;
      }
    }

    if (def.length >= val.length) val = def;

    event.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };

  const phoneInputs = document.querySelectorAll("[data-phone-pattern]");
  phoneInputs.forEach(function (elem) {
    ["input", "blur", "focus"].forEach(function (ev) {
      elem.addEventListener(ev, eventCallback);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  maskPhoneNumbers();
});
