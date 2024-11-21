console.log("this is SearchArea.js");
const promptElemList = document.querySelectorAll("#promptList>*");

const DURATION = 3000;
let curr = 0;

const moveOut = (elem) => {
  elem.classList.add("-mt-8");
  setTimeout(() => {
    elem.classList.remove("!block");
    elem.classList.remove("-mt-8");
  }, 1000);
};
const moveIn = (elem) => {
  elem.classList.add("mt-8");
  elem.classList.add("!block");
  setTimeout(() => {
    elem.classList.remove("mt-8");
  }, 50);
};
moveIn(promptElemList[curr]);
setInterval(() => {
  moveOut(promptElemList[curr]);
  curr = curr === promptElemList.length - 1 ? 0 : curr + 1;
  moveIn(promptElemList[curr]);
}, DURATION);
