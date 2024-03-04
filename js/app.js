const skills = [
  "JavaScript",
  "TypeScript",
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

const sectionSkills = document.querySelector(".skills");
const li = document.createElement("li");

skills.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("skills__item");
  li.innerHTML = item;
  sectionSkills.appendChild(li);
});
