var myPopup = document.querySelector(".hiding-block");
var btnBrown = document.querySelector(".brown");

myPopup.classList.remove("show-me");

btnBrown.addEventListener("click", function() {
  myPopup.classList.toggle("show-me");
});
