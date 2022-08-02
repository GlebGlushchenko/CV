const lang = navigator.language || navigator.userLanguage;

function changeLang(lan) {
  const ru = document.getElementById("ru");
  const en = document.getElementById("en");

  if (lan.lang === "ru") {
    en.style = "display: block";
    ru.style = "display: none";
  }

  if (lan.lang === "en") {
    en.style = "display: none";
    ru.style = "display: block";
  }

  const lengthObj = Object.getOwnPropertyNames(lan).length;

  for (let i = 1; i <= lengthObj - 1; i++) {
    const objKey = Object.getOwnPropertyNames(lan)[i];
    
    document.getElementById(objKey).innerText = func(objKey);
  }

  function func(a) {
    
    for (key in lan) {
      if (key == a) {
        return lan[key];
      }
    }
  }
}

if (lang === "ru-RU") {
  changeLang(ru);
} else changeLang(en);
