$(document).ready(function(){

	animation_1_a = function(consequence, sub_screen){

		playIn(function(){ sub_screen.find('.net').addClass('throw') }, 0);
		
		playIn(function(){ future_count(2030, 5, sub_screen) }, 1);
		
		playIn(function(){
			sub_screen.find('.environment').removeClass('first');
			sub_screen.find('.environment').addClass('later');
		}, 3);
		
		playIn(function(){
			sub_screen.find('.environment').removeClass('later');
			sub_screen.find('.environment').addClass('and-later');
		}, 5);
		
		playIn(function(){goAboveWater(consequence)}, 7);
	}


	// useful function to count years on screen
	future_count = function(to_year, in_seconds, screen){
		var appear_time = 1;
		var elem = screen.find('.future');
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
	
	bomb_animation = function(consequence, sub_screen){
		
		playIn(function(){ $('#a1-bomb').show(); }, 1.5);
		
		playIn(function(){ $('#a1-fish-1').addClass('swim') }, 0);
		playIn(function(){ $('#a1-fish-2').addClass('swim') }, 0);
		playIn(function(){ $('#a1-fish-3').addClass('swim') }, 0);
		playIn(function(){ $('#a1-fish-4').addClass('swim') }, 0);
		playIn(function(){ $('#a1-fish-5').addClass('swim') }, 0);
		playIn(function(){ $('#a1-fish-6').addClass('swim') }, 0);
		playIn(function(){ $('#a1-fish-7').addClass('swim') }, 0);
		playIn(function(){ $('#a1-fish-8').addClass('swim') }, 0);
		
		playIn(function(){ $('#a1-bomb').addClass('drop'); }, 2);
		playIn(function(){ $('#a1-bomb').addClass('bomb-1'); }, 5);
		playIn(function(){ $('#a1-bomb').addClass('bomb-2'); }, 5.2);
		
		
		playIn(function(){ $('#a1-fish-1').addClass('die') }, 5.2);
		playIn(function(){ $('#a1-fish-2').addClass('die') }, 5.2);
		playIn(function(){ $('#a1-fish-3').addClass('die') }, 5.2);
		playIn(function(){ $('#a1-fish-4').addClass('die') }, 5.2);
		playIn(function(){ $('#a1-fish-5').addClass('die') }, 5.2);
		playIn(function(){ $('#a1-fish-6').addClass('die') }, 5.2);
		playIn(function(){ $('#a1-fish-7').addClass('die') }, 5.2);
		playIn(function(){ $('#a1-fish-8').addClass('die') }, 5.2);
		
		playIn(function(){ future_count(2030, 5, sub_screen); }, 6);
		playIn(function(){ $('#a1-bomb').hide(); }, 6);
		playIn(function(){ $('#a1-after-fish-1').addClass('swim'); }, 6);
		
				
		playIn(function(){goAboveWater(consequence)}, 12.2);

	}
	
});