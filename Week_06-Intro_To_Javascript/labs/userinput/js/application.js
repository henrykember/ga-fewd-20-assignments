
"use strict";


function main () {

  var value1 = window.prompt("Gimme a number");
  var value2 = window.prompt("Now gimme another number");
  var finalval = parseInt(value1) * parseInt(value2);
  return window.alert("These make " + finalval);
  
}


window.addEventListener("load", main);
