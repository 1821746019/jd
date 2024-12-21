const submitBtnList = document.querySelectorAll(".submit-btn");

// const hideAll

const showElem = (elem) => {
  console.log(elem);
  // elem.hidden = false;
  elem.classList.remove("!hidden");
};
const hideElem = (elem) => {
  // elem.hidden = true;
  elem.classList.add("!hidden");
};
showElem(document.querySelector('[class^="step-1"]'));
submitBtnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const stepElems = [...document.querySelectorAll('[class^="step-"]')];
    console.log(stepElems);
    console.log(e.target);
    const currStep = stepElems.find((stepElem) => {
      const btnStepParent = e.target.closest('[class^="step-"]');
      console.log(btnStepParent);
      return btnStepParent === stepElem;
    });
    if (currStep.nextElementSibling) {
      console.log(currStep.nextElementSibling);

      hideElem(currStep);
      showElem(currStep.nextElementSibling);
    }
  });
});
