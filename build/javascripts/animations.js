$(document).ready(function(){
	
	
	// useful function to count years on screen
	future_count = function(to_year, in_seconds, screen){
		var appear_time = 1;
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
		
		playIn(function(){showConsequence(consequence)}, 5);
		
	}
	
	animation_1_b = function(consequence, sub_screen){

		playIn(function(){ sub_screen.find('.net').addClass('throw') }, 0);
		
		playIn(function(){ future_count(2030, 5, sub_screen) }, 1);
		
		playIn(function(){
			sub_screen.find('.environment').removeClass('first');
			sub_screen.find('.environment').addClass('later');
		}, 4);
		
		playIn(function(){showConsequence(consequence)}, 6);
	}
	
	animation_1_c = function(consequence, sub_screen){
		playIn(function(){showConsequence(consequence)}, 3);
	}
	
	animation_2_a = function(consequence, sub_screen){
		playIn(function(){showConsequence(consequence)}, 3);
	}
	
	animation_2_b = function(consequence, sub_screen){
		
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
		
				
		playIn(function(){showConsequence(consequence)}, 12.2);

	}
	
	animation_2_c = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.hooks').addClass('show')}, 1);
		playIn(function(){showConsequence(consequence)}, 4);
	}
	
	animation_3_a = function(consequence, sub_screen){
		playIn(function(){ future_count(2020, 2, sub_screen) }, 1);
		playIn(function(){sub_screen.find('.environment').addClass('future')}, 3);
		playIn(function(){showConsequence(consequence)}, 5);
	}
	
	animation_3_b = function(consequence, sub_screen){
		playIn(function(){ future_count(2020, 2, sub_screen) }, 1);
		playIn(function(){sub_screen.find('.environment').addClass('future')}, 3);
		playIn(function(){showConsequence(consequence)}, 5);
	}
	
	animation_3_c = function(consequence, sub_screen){
		playIn(function(){ future_count(2020, 2, sub_screen) }, 1);
		playIn(function(){sub_screen.find('.environment').addClass('future')}, 3);
		playIn(function(){showConsequence(consequence)}, 5);
	}
	
	animation_4_b = function(consequence, sub_screen){
		playIn(function(){showConsequence(consequence)}, 2);
	}
	
	animation_5_b = function(consequence, sub_screen){
		playIn(function(){$('.net').addClass('throw')}, 1);
		playIn(function(){$('.net, .fish-group').addClass('net-2')}, 2);
		playIn(function(){$('.net, .fish-group').removeClass('net-2'); $('.net, .fish-group').addClass('net-3');}, 3);
		playIn(function(){showConsequence(consequence)}, 5);
	}
	
	animation_5_c = function(consequence, sub_screen){
		playIn(function(){$('.net').addClass('throw')}, 1);
		playIn(function(){showConsequence(consequence)}, 2);
	}
	
	animation_6_a = function(consequence, sub_screen){
		playIn(function(){$('.net').addClass('throw')}, 1);
		playIn(function(){$('.money').addClass('show');}, 2);
		playIn(function(){$('.fish-non-profitable').addClass('future')}, 2);
		playIn(function(){$('.money').addClass('less');}, 2);
		playIn(function(){$('.money').removeClass('less'); $('.money').addClass('and-less');}, 3);
		playIn(function(){showConsequence(consequence)}, 4);
	}
	
	animation_7_a = function(consequence, sub_screen){
		playIn(function(){$('#character').addClass('sideways')}, 1);
		playIn(function(){showConsequence(consequence)}, 2);
	}
	
});
