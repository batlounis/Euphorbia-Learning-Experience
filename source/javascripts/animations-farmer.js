$(document).ready(function(){
	if(!$('body').hasClass('farmer')){
		return;
	}
	
	// useful function to count years on screen
	future_count = function(to_year, in_seconds, screen){
		var appear_time = 1;
		screen.addClass('future');
		var elem = screen.find('.clock');
		var from_year = new Date().getFullYear();
		elem.html(from_year);
		
		elem.addClass('show');
		var sec_per_year = in_seconds / (to_year - from_year + 1);
		
		update_count = function(current_year, target_year, sec_per_year){

			current_year++;
			elem.html(current_year);
			
			if(current_year < target_year){
				playIn(function(){update_count(current_year, target_year, sec_per_year)}, sec_per_year);
			}
		}
		
		playIn(function(){update_count(from_year, to_year, sec_per_year)}, sec_per_year + appear_time);
		
	}
	
	
	
	// ANIMATIONS:

	animation_1_a = function(consequence, sub_screen){
		playIn(function(){ 
			sub_screen.find('.vegetables').addClass('future');
			future_count(2020, 2, sub_screen);
		}, 2);
		playIn(function(){showConsequence(consequence)}, 5);	
	}
	
	animation_1_b = function(consequence, sub_screen){		
		playIn(function(){showConsequence(consequence)}, 2);		
	}
	
	animation_1_c = function(consequence, sub_screen){
		playIn(function(){ 
			sub_screen.find('.vegetables').addClass('future');
			future_count(2020, 2, sub_screen);
		}, 2);
		
		playIn(function(){showConsequence(consequence)}, 5);		
	}
	
	animation_2_a = function(consequence, sub_screen){
		playIn(function(){ 
			sub_screen.find('.maracuja-later-1').addClass('pop');
		}, 2);
		
		playIn(function(){ 
			sub_screen.find('.maracuja-later-2').addClass('pop');
		}, 3);
		
		playIn(function(){showConsequence(consequence)}, 4);
	}
	
	animation_2_b = function(consequence, sub_screen){
		playIn(function(){ 
			sub_screen.find('.bubble').addClass('show');
		}, 1);
		
		playIn(function(){ 
			sub_screen.find('.bubble').addClass('second');
		}, 2);
		
		playIn(function(){ 
			sub_screen.find('.bubble').addClass('third');
		}, 3);
		
		playIn(function(){ 
			sub_screen.find('.bubble').addClass('fourth');
		}, 4);
		
		playIn(function(){showConsequence(consequence)}, 5);
	}
	
	animation_2_c = function(consequence, sub_screen){
		playIn(function(){ 
			sub_screen.find('.peel').addClass('drop');
		}, 1);
		
		playIn(function(){ 
			sub_screen.find('.rat-1').addClass('come');
		}, 2);
		
		playIn(function(){ 
			sub_screen.find('.rat-2').addClass('come');
		}, 3);
		
		playIn(function(){ 
			sub_screen.find('.vegetables').addClass('future');
		}, 4);
		
		playIn(function(){showConsequence(consequence)}, 5);
	}
	
	animation_2_d = function(consequence, sub_screen){
		playIn(function(){showConsequence(consequence)}, 1);
	}
	
});