$(document).ready(function(){
	
	bomb_animation = function(){
		// var manager = new jsAnimManager();
		// 		manager.registerPosition('a1-bomb', true);
		// 		var anim = manager.createAnimObject('a1-bomb');
		// 		anim.add({property: Prop.top, from: 50, to: 500, duration: 2000});		
		// 		
		// 		
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
				
		playIn(function(){goAboveWater()}, 6);

	}
	
});