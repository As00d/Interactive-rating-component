const oneRate = document.querySelector(".button-1");
const twoRate = document.querySelector(".button-2");
const threeRate = document.querySelector(".button-3");
const fourRate = document.querySelector(".button-4");
const fiveRate = document.querySelector(".button-5");
const submitButton = document.querySelector(".submitButton");
const displayMessage = document.querySelector(".displayMessage");
let selectedButton = "";
let count = 0;
console.log(displayMessage.textContent);

// select/unselect feature of rating number on card
const selectingButton = function (button) {
  if (selectedButton === "") {
    button.style.backgroundColor = "white";
    button.style.color = "black";
    selectedButton = button.textContent;
  } else if (selectedButton === button.textContent) {
    button.style.backgroundColor = "hsl(216, 9%, 23%)";
    button.style.color = "hsl(217, 12%, 63%)";
    selectedButton = "";
  }
};

oneRate.addEventListener("click", function () {
  selectingButton(oneRate);
  console.log(selectedButton);
});

twoRate.addEventListener("click", function () {
  selectingButton(twoRate);
  console.log(selectedButton);
});

threeRate.addEventListener("click", function () {
  selectingButton(threeRate);
  console.log(selectedButton);
});

fourRate.addEventListener("click", function () {
  selectingButton(fourRate);
  console.log(selectedButton);
});

fiveRate.addEventListener("click", function () {
  selectingButton(fiveRate);
  console.log(selectedButton);
});

submitButton.addEventListener("click", function () {
  if (selectedButton !== "") {
    submitButton.style.backgroundColor = "white";
    submitButton.style.color = "black";
    setTimeout(function () {
      document.querySelector(".feedbackForm").classList.add("displayNone");
      document.querySelector(".feedbackResponse").classList.add("display");
      document.querySelector(".feedbackResponse").classList.remove("nodisplay");

      displayMessage.textContent = `You selected ${selectedButton} out of 5`;
    }, 500);
  }
});
