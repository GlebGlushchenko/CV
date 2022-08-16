const lang = navigator.language
 
type lanType ={
  [word:string]:string
 }

function changeLang(lan:lanType) {
  const ru = document.getElementById("ru")
  const en = document.getElementById("en")
  const lengthObj = Object.getOwnPropertyNames(lan).length
  
  switch (lan.lang) {
    case"ru":
    en.setAttribute("style",'display: block')
    ru.setAttribute("style",'display: none')
    break
      
    case"en":
    en.setAttribute("style",'display: none')
    ru.setAttribute("style",'display: block')
    break
  
    default:
      break
  }

  const translation = (str:string) => {
    for (const key in lan) {
      if (key == str) {
        return lan[key]
      }
    }
  }

  for (let i = 1; i <= lengthObj - 1; i++) {
    const objKey = Object.getOwnPropertyNames(lan)[i]
    document.getElementById(objKey).innerText = translation(objKey)
  }
}

if (lang === "ru-RU") {
  changeLang(ru)
} else changeLang(en)
