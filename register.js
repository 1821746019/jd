const submitBtnList = document.querySelectorAll(".submit-btn");

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

      currStep.hidden = true;

      currStep.nextElementSibling.hidden = null;
    }
  });
});
