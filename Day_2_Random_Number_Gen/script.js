const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
  // Generate number btn 1 and 100
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  number.innerHTML = randomNumber;
};
btn.addEventListener("click", generateNumber);
// If you do mot want to set random number zero then call this function
// generateNumber();

// const rand = Math.floor(Math.random() * 10 + 1);
// console.log(rand);
