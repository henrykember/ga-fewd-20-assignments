"use strict";

var main = function () {
	
	var clickbox = $('#box1');
	clickbox.on('click', function ()  {
	
	  var colorbox = $('#box2');
	  colorbox.fadeout('5000', function ()  {

	  	   clickbox.css('background-color', 'red')
	       });

    });

};

$(document).ready(main);