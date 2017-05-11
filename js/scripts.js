var myPopup = document.querySelector("div.hiding-block");
var btnBrown = document.querySelector("div.brown");

myPopup.classList.remove("show-me");
myPopup.classList.add("with-js");
btnBrown.classList.add("with-js");

btnBrown.addEventListener("click", function() {
  myPopup.classList.toggle("show-me");
});
