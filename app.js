const button = document.querySelector(".btn");
const givingAdvice = document.getElementById("advice");
const spanEl = document.getElementById("seriNo");

button.addEventListener("click", () => {
  //  For the solution below, write adviceGenerator here instead of ().
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((resJson) => {
      givingAdvice.innerHTML = resJson.slip.advice;
      spanEl.innerHTML = `${resJson.slip.id}`;
    });
});

// function adviceGenerator() {
//   fetch("https://api.adviceslip.com/advice")
//     .then((res) => res.json())
//     .then((resJson) => {
//       givingAdvice.innerHTML = resJson.slip.advice;
//       spanEl.innerHTML = `${resJson.slip.id}`;
//     });
// }
