
"use strict"

function main()  {

  var sqtl = document.getElementById("sqtl");
  var sqtr = document.getElementById("sqtr");
  var sqbl = document.getElementById("sqbl");
  var sqbr = document.getElementById("sqbr");

  sqtl.addEventListener("click", clickedsqtl);
  sqtr.addEventListener("click", clickedsqtr);
  sqbl.addEventListener("click", clickedsqbl);
  sqbl.addEventListener("click", clickedsqbr);
}

function clickedsqtl()  {
  var sqtl = document.getElementById("sqtl");
  var sqtr = document.getElementById("sqtr");
  var sqbl = document.getElementById("sqbl");
  var sqbr = document.getElementById("sqbr");

  sqtl.style.transform = "rotate(45deg)";
  sqtr.style.transform = "rotate(75deg)";
  sqbl.style.transform = "rotate(22deg)";
  sqbl.style.transform = "rotate(45deg)";
}

function clickedsqtr()  {
  var sqtl = document.getElementById("sqtl");
  var sqtr = document.getElementById("sqtr");
  var sqbl = document.getElementById("sqbl");
  var sqbr = document.getElementById("sqbr");

  sqtl.style.transform = "rotate(45deg)";
  sqtr.style.transform = "rotate(75deg)";
  sqbl.style.transform = "rotate(22deg)";
  sqbl.style.transform = "rotate(45deg)";
}
window.addEventListener("load", main);