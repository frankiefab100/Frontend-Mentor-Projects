const formElement = document.querySelector("form");
const inputElements = document.querySelectorAll(".input-field input");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  let i = 0;
  while (i < inputElements.length) {
    if (!inputElements[i].value) {
      inputElements[i].parentElement.classList.add("error");
    } else {
      inputElements[i].parentElement.classList.remove("error");
    }
    i++;
  }
});
