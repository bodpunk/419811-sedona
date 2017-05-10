var myPopup = document.querySelector(".hiding-block");
var btnBrown = document.querySelector(".brown");
var qtyAdult = document.querySelector(".qty-adult").value;
qtyAdult = 2;
var btnMinusAdult = document.querySelector(".button-minus-adult");
var btnPlusAdult = document.querySelector(".button-plus-adult");
var btnPlusAdultInner = document.querySelector(".qty-adults div.button-minus");
var btnMinusAdultInner = document.querySelector(".qty-adults div.button-plus");
var qtyChild = document.querySelector(".qty-child").value;
qtyChild = 0;
var btnMinusChild = document.querySelector(".button-minus-child");
var btnPlusChild = document.querySelector(".button-plus-child");
var btnPlusChildInner = document.querySelector(".qty-childs div.button-minus");
var btnMinusChildInner = document.querySelector(".qty-childs div.button-plus");

myPopup.classList.remove("show-me");

btnBrown.addEventListener("click", function() {
  myPopup.classList.toggle("show-me");
});

btnMinusAdult.addEventListener("click", function() {
  if(qtyAdult < 99) {
  qtyAdult = qtyAdult + 1;
  document.querySelector(".qty-adult").value = qtyAdult;
}
});

btnMinusAdultInner.addEventListener("click", function() {
  if(qtyAdult < 99) {
  qtyAdult = qtyAdult + 1;
  document.querySelector(".qty-adult").value = qtyAdult;
}
});

btnPlusAdult.addEventListener("click", function() {
  if(qtyAdult > 1) {
  qtyAdult = qtyAdult - 1;
  document.querySelector(".qty-adult").value = qtyAdult;
}
});

btnPlusAdultInner.addEventListener("click", function() {
  if(qtyAdult > 1) {
  qtyAdult = qtyAdult - 1;
  document.querySelector(".qty-adult").value = qtyAdult;
}
});

btnMinusChild.addEventListener("click", function() {
  if(qtyChild < 99) {
  qtyChild = qtyChild + 1;
  document.querySelector(".qty-child").value = qtyChild;
}
});

btnMinusChildInner.addEventListener("click", function() {
  if(qtyChild < 99) {
  qtyChild = qtyChild + 1;
  document.querySelector(".qty-child").value = qtyChild;
}
});

btnPlusChild.addEventListener("click", function() {
  if(qtyChild > 0) {
  qtyChild = qtyChild - 1;
  document.querySelector(".qty-child").value = qtyChild;
}
});

btnPlusChildInner.addEventListener("click", function() {
  if(qtyChild > 0) {
  qtyChild = qtyChild - 1;
  document.querySelector(".qty-child").value = qtyChild;
}
});
