let increaseButton = document.querySelector("#increase-btn");
let decreaseButton = document.querySelector("#decrease-btn");
let resetButton = document.querySelector("#reset-btn");

let counterText = document.querySelector("#counter");
let maxText = document.querySelector("#max-text");

let count = 0;

const max = 20;
const min = 0;

increaseButton.addEventListener("click", function(){

  if(count < max){
    count++;
  }

  counterText.textContent = count;

  if(count === max){
    maxText.style.display = "block";
  }

});

decreaseButton.addEventListener("click", function(){

  if(count > min){
    count--;
  }

  counterText.textContent = count;

  if(count < max){
    maxText.style.display = "none";
  }

});

resetButton.addEventListener("click", function(){

  count = 0;

  counterText.textContent = count;

  maxText.style.display = "none";

});