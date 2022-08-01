const lang = navigator.language || navigator.userLanguage; 


const en = {
  'firstName': 'Gleb Glushchenko',
  'about': 'Skills:',
  'skils_1': '- Good knowledge of JavaScript ES6',
  'skils_2': '- Experience with TypeScript',
  'skils_3': '- Development of applications on React.js / Vue.js',
  'skils_4': '- Basic knowledge of Node.js',
  'skils_5': '- Understanding the principles of client-server interaction (HTTP, REST API, WebSocket)',
  'skils_6': '- Ability to work with GIT',
  'skils_7': '- Responsive and cross-browser layout',
  'skils_8': '- Layout of web interfaces based on layouts from Figma using BEM methodology and SASS preprocessor',
  'skils_9': '- Experience with real orders',
  'working': 'Working experiences',
  'attainments' : 'Attainments',
  'developer':'JavaScript developer',
  'individual' : 'individual entrepreneur MELDO',
  'workSkills_1': 'Resolving domestic objectives',
  'workSkills_2': 'Care of your system',
  'workSkills_3': 'Development of new solutions',
  'date_1': 'May',
  'date_2': 'June'
};
const ru = {
  
  'firstName': 'Глеб Глущенко',
  'about': 'Ключевые навыки:',
  'skils_1': '- Хорошие знания JavaScript ES6',
  'skils_2': '- Опыт работы с TypeScript',
  'skils_3': '- Разработка приложений на React.js  / Vue.js',
  'skils_4': '- Базовые знания Node.js',
  'skils_5': '- Понимание принципов клиент-серверного взаимодействия (HTTP, REST API, WebSocket)',
  'skils_6': '- Умение работать с GIT',
  'skils_7': '- Адаптивная и кроссбраузерная вёрстка',
  'skils_8': '- Верстка веб-интерфейсов по макетам из Figma с использованием методологии БЭМ и препроцессора SASS',
  'skils_9': '- Опыт работы с реальными заказами',
  'working': 'Опыт',
  'attainments' : 'Навыки',
  'developer':'JavaScript разработчик',
  'individual' : 'ИП МЕЛЬДО',
  'workSkills_1': 'Решение внутренних задач',
  'workSkills_2': 'Поддержка работы систем предприятия',
  'workSkills_3': 'Разработка новых решений',
  'date_1': 'Май',
  'date_2': 'Июнь'
  
  
};



function changeLang(lan) {
  const btnRu = document.getElementById('ru')
  const btnEn = document.getElementById('en')
  if(lan.date_1 ==='Май' ){
    btnEn.style = 'display: block'
    btnRu.style = 'display: none'
   
  } if(lan.date_1 ==='May') {
    btnEn.style = 'display: none'
    btnRu.style = 'display: block'
  }
  lengthObj = Object.getOwnPropertyNames(lan).length;
  for (var i = 0; i <= lengthObj - 1; i++) {
     objKey = Object.getOwnPropertyNames(lan)[i];
    document.getElementById(objKey).innerText = func(objKey);
  }

  function func(a) {
    
    for (key in lan) {
      if (key == a) {
        return (lan[key]);
      }
    }
  }
}

if(lang === 'ru-RU'){
  changeLang(ru)
} else changeLang(en)



const checkbox = document.querySelector(".theme-switch__checkbox");

checkbox.addEventListener("change", function () {
  transition();
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

const transition = () => {
  document.documentElement.classList.add("transition");
  setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 250);
};


