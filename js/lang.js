const lang = navigator.language;
let langStor = window.localStorage.getItem("lang");

if (langStor === "ru") {
  changeLang(ru);
} else changeLang(en);

function changeLang(lan) {
  if (lan.lang === "ru") {
    window.localStorage.setItem("lang", "ru");
  } else if (lan.lang === "en") {
    window.localStorage.setItem("lang", "en");
  }

  const ru = document.getElementById("ru");
  const en = document.getElementById("en");
  const lengthObj = Object.getOwnPropertyNames(lan).length;

  switch (lan.lang) {
    case "ru":
      en.setAttribute("style", "display: block");
      ru.setAttribute("style", "display: none");
      break;
    case "en":
      en.setAttribute("style", "display: none");
      ru.setAttribute("style", "display: block");
      break;
    default:
      break;
  }

  const translation = (str) => {
    for (const key in lan) {
      if (key == str) {
        return lan[key];
      }
    }
  };

  for (let i = 1; i <= lengthObj - 1; i++) {
    const objKey = Object.getOwnPropertyNames(lan)[i];
    document.getElementById(objKey).innerText = translation(objKey);
  }
}

const skills = [
  "Typescript",
  "React JS",
  "VueJS",
  "AngularJS",
  "Redux",
  "React Native",
  "SCSS",
  "CSS",
  "HTML5",
  "Figma",
];

const sectionSkills = document.querySelector(".skils");
const li = document.createElement("li");

skills.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("skills__item");
  li.innerHTML = item;
  sectionSkills.appendChild(li);
});
