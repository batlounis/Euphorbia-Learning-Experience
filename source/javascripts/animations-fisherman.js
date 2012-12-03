$(document).ready(function(){
	if(!$('body').hasClass('fisherman')){
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
			sub_screen.find('.net').addClass('throw');
			sub_screen.find('.fish-left, .fish-right').addClass('swim');
		}, 0);
		
		playIn(function(){ 
			sub_screen.find('.net').removeClass('throw');
			future_count(2030, 5, sub_screen);
		}, 2);
		
		playIn(function(){
			sub_screen.find('.fish-left, .fish-right').addClass('future');
		}, 4);
		
		
		playIn(function(){showConsequence(consequence)}, 5);
		
	}
	
	animation_1_b = function(consequence, sub_screen){

		playIn(function(){
			sub_screen.find('.net').addClass('throw');
			sub_screen.find('.fish-left, .fish-right').addClass('swim');
		}, 0);
		
		playIn(function(){ future_count(2030, 5, sub_screen) }, 1);
		
		playIn(function(){
			sub_screen.find('.fish-left, .fish-right').addClass('future');
		}, 3);
		
		playIn(function(){showConsequence(consequence)}, 6);
	}
	
	animation_1_c = function(consequence, sub_screen){
		playIn(function(){
			sub_screen.find('.fish-left, .fish-right').addClass('swim');
		}, 0);
		
		playIn(function(){showConsequence(consequence)}, 3);
	}
	
	animation_2_a = function(consequence, sub_screen){
		playIn(function(){
			sub_screen.find('.fish-right').addClass('swim');
		}, 0);
		
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
		playIn(function(){
			sub_screen.find('.fish-left, .fish-right').addClass('swim');
		}, 0);
		
		playIn(function(){
			sub_screen.find('.hooks').addClass('show');
			sub_screen.find('.fished-1, .fished-2').addClass('fished');
		}, 1);
		
		
		playIn(function(){showConsequence(consequence)}, 4);
	}
	
	animation_3_a = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.egg').addClass('drop')}, 1);
		playIn(function(){sub_screen.find('.fish, .nature').addClass('future')}, 4);		
		playIn(function(){ future_count(2020, 2, sub_screen) }, 3);
		playIn(function(){showConsequence(consequence)}, 7);
	}
	
	animation_3_b = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.calendar').addClass('come')}, 0);
		playIn(function(){sub_screen.find('.calendar').removeClass('come')}, 2);
		playIn(function(){ future_count(2020, 2, sub_screen) }, 2);
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('future')}, 4);
		playIn(function(){showConsequence(consequence)}, 6);
	}
	
	animation_3_c = function(consequence, sub_screen){
		playIn(function(){ future_count(2020, 2, sub_screen) }, 2);
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('future')}, 4);
		playIn(function(){showConsequence(consequence)}, 6);
	}
	
	animation_4_a = function(consequence, sub_screen){
		playIn(function(){ sub_screen.find('.fish-left, .fish-right').addClass('swim'); }, 0);
		playIn(function(){ sub_screen.find('.organic').addClass('throw'); }, 0);
		playIn(function(){ sub_screen.find('.birds-left').addClass('come'); }, 1);
		playIn(function(){ sub_screen.find('.birds-right').addClass('come'); }, 1.5);
		playIn(function(){showConsequence(consequence)}, 3);
	}

	animation_4_b = function(consequence, sub_screen){
		playIn(function(){ sub_screen.find('.fish-left, .fish-right').addClass('swim'); }, 0);
		playIn(function(){showConsequence(consequence)}, 3);
	}
	
	animation_5_a = function(consequence, sub_screen){
		playIn(function(){ sub_screen.find('.fish, .monk-seal').addClass('swim'); }, 0);
		
		playIn(function(){ sub_screen.find('.bomb').show(); }, 1.5);
		
		playIn(function(){ sub_screen.find('.bomb').addClass('drop'); }, 2);
		playIn(function(){ sub_screen.find('.bomb').addClass('bomb-1'); }, 5);
		playIn(function(){ sub_screen.find('.bomb').addClass('bomb-2'); }, 5.2);
		
		playIn(function(){ sub_screen.find('.monk-seal').addClass('scared'); }, 5.2);
		
		playIn(function(){ $('#5a-bomb').hide(); }, 6);
		
		playIn(function(){showConsequence(consequence)}, 7);
	}
	
	animation_5_b = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.net').addClass('throw')}, 1);
		playIn(function(){sub_screen.find('.net, .fish-group').addClass('net-2')}, 2);
		playIn(function(){sub_screen.find('.net, .fish-group').removeClass('net-2'); 
											sub_screen.find('.net, .fish-group').addClass('net-3');}, 3);
		playIn(function(){showConsequence(consequence)}, 5);
	}
	
	animation_5_c = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.net').addClass('throw')}, 1);
		playIn(function(){showConsequence(consequence)}, 2);
	}
	
	animation_6_a = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.fish-non-profitable').addClass('swim')}, 0);
		playIn(function(){sub_screen.find('.net').addClass('throw')}, 1);
		playIn(function(){sub_screen.find('.money').addClass('show');}, 3);
		playIn(function(){sub_screen.find('.fish-non-profitable').addClass('future')}, 3);
		playIn(function(){sub_screen.find('.money').addClass('less');}, 4);
		playIn(function(){sub_screen.find('.money').removeClass('less'); $('.money').addClass('and-less');}, 5);
		playIn(function(){showConsequence(consequence)}, 6);
	}
	
	animation_6_b = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('swim')}, 0);
		playIn(function(){sub_screen.find('.net').addClass('throw')}, 1);
		playIn(function(){sub_screen.find('.net, .fish-group').addClass('net-2')}, 2);
		playIn(function(){sub_screen.find('.net, .fish-group').removeClass('net-2'); $('.net, .fish-group').addClass('net-3');}, 3);
		playIn(function(){future_count(2020, 2, sub_screen);}, 3);		
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('future')},5);
		playIn(function(){showConsequence(consequence)}, 5);
	}
	
	animation_7_a = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('swim')}, 0);
		playIn(function(){sub_screen.find('.tangled-fish').addClass('pass')}, 1);
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('future')}, 5);
		playIn(function(){sub_screen.find('.passing-boat').addClass('drive')}, 6);
		playIn(function(){sub_screen.find('.shredded-net').addClass('tangle')}, 6);
		playIn(function(){showConsequence(consequence)}, 10);
	}
	
	animation_7_b = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('swim')}, 0);
		playIn(function(){sub_screen.find('.broken-net').addClass('show')}, 1);
		playIn(function(){sub_screen.find('.thought-bubble').addClass('show')}, 2);
		playIn(function(){showConsequence(consequence)}, 4);
	}
	
	animation_7_c = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('swim')}, 0);
		playIn(function(){sub_screen.find('.broken-net').addClass('show')}, 1);
		playIn(function(){sub_screen.find('.thought-bubble').addClass('show')}, 2);
		playIn(function(){sub_screen.find('.trashcan').addClass('show')}, 3);
		playIn(function(){sub_screen.find('.trashcan-lid').addClass('show')}, 4);
		playIn(function(){showConsequence(consequence)}, 5);
	}
	
	animation_8_a = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('swim')}, 0);
		playIn(function(){sub_screen.find('.trash.num1').addClass('show')}, 1);
		playIn(function(){sub_screen.find('.trash.num2').addClass('show')}, 2);
		playIn(function(){sub_screen.find('.trash.num3').addClass('show')}, 3);
		playIn(function(){sub_screen.find('.trash.num4').addClass('show')}, 4);
		playIn(function(){sub_screen.find('.trash.num5').addClass('show')}, 5);
		playIn(function(){showConsequence(consequence)}, 6);
	}
	
	animation_8_b = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('swim')}, 0);
		playIn(function(){sub_screen.find('.thought-bubble').addClass('show')}, 1);
		playIn(function(){showConsequence(consequence)}, 3);
	}
	
	animation_8_c = function(consequence, sub_screen){
		playIn(function(){sub_screen.find('.fish-left, .fish-right').addClass('swim')}, 0);
		playIn(function(){sub_screen.find('.battery.num1').addClass('show')}, 1);
		playIn(function(){sub_screen.find('.battery.num2').addClass('show')}, 2);
		playIn(function(){sub_screen.find('.battery.num3').addClass('show')}, 3);
		playIn(function(){sub_screen.find('.chemicals').addClass('show')}, 4);
		playIn(function(){showConsequence(consequence)}, 6);
	}
	
});