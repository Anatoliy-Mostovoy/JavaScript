//TODO DOM
const mainHeader = document.querySelector(".mainHeader");
console.log(mainHeader);
console.log(mainHeader.textContent);

setTimeout(() => {
  mainHeader.textContent = "Its change from JS";
  mainHeader.style.color = "red";
  mainHeader.style.backgroundColor = "black";
}, 2000);
