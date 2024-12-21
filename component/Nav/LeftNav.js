console.log(`this is LeftNav.js`)
const leftNavUL_Elem = document.querySelector("#leftNavUL");
const imgELem = leftNavUL_Elem.parentElement.querySelector(".absolute>img");
const imgContainerElem=imgELem.parentElement
const navItemElemList = leftNavUL_Elem.querySelectorAll("li");


navItemElemList.forEach((e, i) => {
  e.addEventListener("mouseenter", () => {
    imgELem.src = `images/nav${i+1}.png`;
    console.log(imgELem.src)
    imgContainerElem.classList.remove("!hidden")
  });
  e.addEventListener("mouseleave", () => {
    imgContainerElem.classList.add("!hidden")

  });
});
