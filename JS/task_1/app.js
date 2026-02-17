const number = document.querySelector("#number span");
const btn = document.querySelector(".btn-click button");
let counter = 0;

btn.addEventListener("click", () => {
  counter++;
  number.textContent = counter;

  if (counter > 10) {
    counter = 0;
    number.textContent = counter;
  }
});
