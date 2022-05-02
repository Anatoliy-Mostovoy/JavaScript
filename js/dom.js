//TODO DOM
const ref = {
  mainHeader: document.querySelector(".mainHeader"),
  button: document.querySelector(".button"),
};

ref.button.addEventListener("click", changeHeaderStyle);

console.log(ref.mainHeader);
console.log(ref.mainHeader.textContent);

// setTimeout(() => {
//   ref.mainHeader.textContent = "Its change from JS";
//   ref.mainHeader.style.color = "red";
//   ref.mainHeader.style.backgroundColor = "black";
// }, 2000);

function changeHeaderStyle() {
  ref.mainHeader.textContent = "Its change from JS";
  ref.mainHeader.style.color = "red";
  ref.mainHeader.style.backgroundColor = "black";
}
