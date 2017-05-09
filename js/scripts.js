var myPopup = document.querySelector(".hiding-block");
var btnBrown = document.querySelector(".brown");
var qtyAd = document.querySelector(".qty-adult").value;
qtyAd = 2;
var btnMinAd = document.querySelector(".button-minus-adult");
var btnPlAd = document.querySelector(".button-plus-adult");
var qtyCh = document.querySelector(".qty-child").value;
qtyCh = 0;
var btnMinCh = document.querySelector(".button-minus-child");
var btnPlCh = document.querySelector(".button-plus-child");

btnBrown.addEventListener("click", function() {
  myPopup.classList.toggle("show-me");
});

btnMinAd.addEventListener("click", function() {
  if(qtyAd < 99) {
  qtyAd = qtyAd + 1;
  document.querySelector(".qty-adult").value = qtyAd;
}
});

btnPlAd.addEventListener("click", function() {
  if(qtyAd > 1) {
  qtyAd = qtyAd - 1;
  document.querySelector(".qty-adult").value = qtyAd;
}
});

btnMinCh.addEventListener("click", function() {
  if(qtyCh < 99) {
  qtyCh = qtyCh + 1;
  document.querySelector(".qty-child").value = qtyCh;
}
});

btnPlCh.addEventListener("click", function() {
  if(qtyCh > 0) {
  qtyCh = qtyCh - 1;
  document.querySelector(".qty-child").value = qtyCh;
}
});
