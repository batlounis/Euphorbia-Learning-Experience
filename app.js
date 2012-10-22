$(document).ready(function(){
	
	// set every screen div to take the whole screen
	fillScreen = function(){
		$('.screen').css('height', window.innerHeight+'px');
		$('.screen').css('margin-bottom', window.innerHeight+'px');
	};
	fillScreen();
	$(window).resize(function(){fillScreen()});
	
	// shifts the screen up one whole screen each time the boat is clicked
	var step = 1;
	$('#character, .continue a').click(function(){
		$('#setting').css('top', '-'+(step*200)+'%');
		step++;
		return false;
	});
	
	// hides question and answers, and shows response when a response is clicked
	$('.choices a').click(function(){
		var screen = $(this).closest('.screen');
		screen.find('.question, .choices, .response, .continue').toggle();
	})
})