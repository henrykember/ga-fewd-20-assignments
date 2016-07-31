"use strict";

var main = function () {
	
	 var box = $('#box1');
	 var clickfirst = $('form#clickfirst');
	var clicknext = $('form#clicknext');

	clickfirst.on('submit', function ()  {
	
	 
	  colorbox.css('background-color', 'red')
	});

	clicknext.on('submit', function ()  {

	colorbox.css('background-color', 'blue')
	});

};

$(document).ready(main);