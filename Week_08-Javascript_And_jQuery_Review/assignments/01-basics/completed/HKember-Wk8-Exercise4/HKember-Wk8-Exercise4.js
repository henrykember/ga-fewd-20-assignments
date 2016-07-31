"use strict";

var main = function () {
	
	var clickfirst = $('#clickfirst');
	
	clickfirst.on('click', function ()  {
	
	  var box = $('#box1');
	  colorbox.css(background-color, red)
	});

	var clicknext = $('#clicknext');

	clicknext.on('click', function ()  {

	  colorbox.css(background-color, blue)
	});

};

$(document).ready(main);