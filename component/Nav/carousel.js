console.log(`this is carousel.js`);
const INTERVAL = 2500;
let currIdx = 0;
let isHovering = false;
const carousel = document.querySelector("#carousel");
const images = Array.from(carousel.querySelectorAll(".images>*"));
const buttonContainer = carousel.querySelector(".buttons");
console.log(carousel, images, buttonContainer);
// hide all elem first
// children.forEach((child) => {
//   child.classList.add("opacity-0");
// });
const procNavBtn = () => {
  images.forEach((e, i) => {
    const btn = document.createElement("button");
    // btn.classList.add()
    btn.className =
      "w-3 aspect-square bg-white rounded-full border border-gray-400  transition";
    const showCorrespondingImg = () => {
      hideElem(images[currIdx], currIdx);
      currIdx = i;
      showElem(images[currIdx], currIdx);
      isHovering = true;
      // setTimeout(() => isHovering = false, INTERVAL);
    };
    const cancelIsHovering = () => {
      // setTimeout(()=> isHovering = false,INTERVAL)
      isHovering = false;
    };
    btn.onmouseover = showCorrespondingImg;
    btn.onmouseleave = cancelIsHovering;
    buttonContainer.append(btn);
  });
};
procNavBtn();
const showElem = (elem, idx = 0) => {
  // elem.classList.add("z-[99]");
  elem.classList.add("opacity-100");
  elem.classList.remove("opacity-0");
  buttonContainer.children[idx].classList.add("bg-red-500");
  buttonContainer.children[idx].classList.add("scale-[135%]");

  // elem.classList.remove("hidden");
};
const hideElem = (elem, idx = 0) => {
  // elem.classList.remove("z-[99]");
  elem.classList.add("opacity-0");
  elem.classList.remove("opacity-100");
  buttonContainer.children[idx].classList.remove("bg-red-500");
  buttonContainer.children[idx].classList.remove("scale-[135%]");
  // elem.classList.add("hidden");
};

showElem(images[currIdx]);
setInterval(() => {
  if (isHovering) return;
  hideElem(images[currIdx], currIdx);
  currIdx = currIdx === images.length - 1 ? 0 : currIdx + 1;
  showElem(images[currIdx], currIdx);
}, INTERVAL);
