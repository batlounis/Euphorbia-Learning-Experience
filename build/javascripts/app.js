$(document).ready(function(){		
	
	
	// prevent scrolling on iOS
	$(document).bind(
	  'touchmove',
	  function(e) {
	    e.preventDefault();
	  }
	);
	
	var num_answers = 3; // specifies number of answers for current question
	var current_screen = null;
	var screen_height;
	var viewModel;
	var handle;	// used in drawn path by knockout js
	var c_transition = 3; // if you change this, change css also
	var step = 0;
	
	var playing_audio;
	playAudio = function(audio){
		if(playing_audio){
			playing_audio.pause();
		}
		if(audio){
			playing_audio = audio;
			playing_audio.play();
		}		
	}
	pauseAudio = function(){
		if(playing_audio){
			playing_audio.pause();
		}
	}
	
	// --- ONLOAD ---
	
	// set every screen div to take the whole screen
	fillScreen = function(){ // TODO: this should be made in knockout
		$('.screen').css('height', window.innerHeight+'px');
		$('.screen').css('margin-bottom', window.innerHeight+'px');
		screen_height = window.innerHeight;
		$('#setting').css('top', '-'+(step*2*screen_height)+'px');
	};
	fillScreen();
	$(window).resize(function(){fillScreen()});
	
	current_screen = $('.screen:first');
	
	$('#throw_button').click(function(){
		return selectAnswer();
	});
	
	// --- --- --- ---

	
	// shifts the screen up one whole screen each time the boat is clicked
	$('#continue_journey_button').click(function(){
		if(current_screen.next('.screen').hasClass('underwater')){
			var underwater_screen = current_screen.next('.screen')
			$('#character').removeClass('underwater');
			underwater_screen.css('top', screen_height);
			
			playIn(function(){
				$('.screen').css('margin-bottom', window.innerHeight+'px');
				underwater_screen.remove();
				$('#setting').removeClass('underwater');
				continue_journey();
			}, .5);
		}else{
			continue_journey();
		}
	});
	
	continue_journey = function(){
		step++;
		$('#consequence').removeClass('come');
		$('#character').addClass('walk');
		playIn(function(){ $('#character').removeClass('walk'); }, 4);
		$('#continue_journey_button').removeClass('come');
		$('#setting').css('top', '-'+(step*2*screen_height)+'px'); // TODO: fix other places where this is used

		current_screen = current_screen.next();
		viewModel.reset();
		
		if(!current_screen.hasClass('special')){
			$('#control .arrow').removeClass('stop');
			$('#control .arrow').addClass('swing');
			current_screen.find('.choices').addClass('come');
			$('#control').addClass('come');
			$('#throw_button').removeClass('leave');			
		}else{
			$('#character').hide();
			$('#score').hide();
		}
		
		playAudio(current_screen.find('audio').get(0));

		return false;
	}
	
	// tutorial frame sequence
	
	$('#play_tutorial').click(function(){
		$('#continue_journey_button').trigger('click');
		setTimeout(function(){play_tutorial();}, 2000);
	})
	
	$('#just_play').click(function(){
		$('.screen.tutorial').remove();
		$('#character').show();
		$('#score').show();
		$('#continue_journey_button').trigger('click');
	})
	
	play_tutorial = function(){
		var tutorial_animations = [];
		var anim;

		anim = setTimeout(function(){
			$('#control').removeClass('come');
			$('#throw_button').addClass('leave');
			$('#score').hide();
			$('#character').show();
			playAudio($('.screen.tutorial audio').get(0));
		}, 0)
		tutorial_animations.push(anim);

		anim = setTimeout(function(){
			$('#character').hide();
			$('.tutorial .character-intro').hide();
			$('.tutorial .advance-control-intro').show();
			playAudio($('.screen.tutorial audio').get(1));
		}, 4000);
		tutorial_animations.push(anim);

		anim = setTimeout(function(){
			$('.tutorial .advance-control-intro').hide();
			$('.tutorial .sea-intro').show();
			playAudio($('.screen.tutorial audio').get(2));
		}, 10000);
		tutorial_animations.push(anim);

		anim = setTimeout(function(){
			$('.tutorial .sea-intro').hide();
			$('.tutorial .arrow-intro').show();
			playAudio($('.screen.tutorial audio').get(3));
		}, 20000);
		tutorial_animations.push(anim);

		anim = setTimeout(function(){
			$('.tutorial .arrow-intro').addClass('next');
			playAudio($('.screen.tutorial audio').get(4));
		}, 27000);
		tutorial_animations.push(anim);

		anim = setTimeout(function(){
			$('.tutorial .arrow-intro').hide();
			$('.tutorial .choice-illuminates').show();
			playAudio($('.screen.tutorial audio').get(5));
		}, 37000);
		tutorial_animations.push(anim);

		anim = setTimeout(function(){
			$('.tutorial .choice-illuminates').hide();
			$('.tutorial .good-luck').show();
			playAudio($('.screen.tutorial audio').get(6));
		}, 45000);
		tutorial_animations.push(anim);

		last_tutorial_step = function(){
			$('#character').show();
			$('.tutorial .good-luck').hide();
			$('#score').show();
			$('#continue_journey_button').trigger('click');
		}

		anim = setTimeout(function(){
			last_tutorial_step();
		}, 47000);
		tutorial_animations.push(anim);

		$('#skip_tutorial').click(function(){
			for(var i = 0; i < tutorial_animations.length; i++){
				clearTimeout(tutorial_animations[i]);
			}
			last_tutorial_step();
			return false;
		});
	}

	
	
	// --- End Screen Functionality ---
	
	getScores = function(){
		var journey_character = $('body').attr('class');
		var stored_scores = localStorage[journey_character];
		var scores;
		
		if(stored_scores){
			scores = JSON.parse(localStorage[journey_character]);
		}else{
			scores = [];
		}
		
		return scores;
	}
	
	var score_saved = false; // Used to allow just one save per play
	
	addScore = function(name, score){
		var journey_character = $('body').attr('class');
		var scores = getScores();
		if(!score_saved){
			scores.unshift({'score':score, 'name':name});
			localStorage[journey_character] = JSON.stringify(scores);
			score_saved = true;
		}		
		return scores;		
	}
	
	
	$('#view_gallery, .close_gallery').click(function(){
		$('.drawings').toggleClass('show');
		$('.score_page').removeClass('show'); // Note: always hide the other box, just in case
	});
	
	$('#view_score, .close_score').click(function(){
		var scores = getScores();
		viewModel.scores(scores);
		$('.score_page').toggleClass('show');
		$('.drawings').removeClass('show'); // Note: always hide the other box, just in case
	});
	
	$('#save_score').click(function(){
		
		var score = viewModel.score();
		var name = $('#score_name').attr('value');
		var scores = addScore(name, score);
		$('.save_box').html('');
		
		viewModel.scores(scores);
	});
	
	
	
	// --- Gallery browsing ---
	
	// Go down
	$('#gallery_down').click(function(){
		var doc = $('.drawings section');
		var doc_height = parseInt(doc.css('height'));
		var window_height = parseInt($('.drawings').css('height'), 10);
		var current_top = parseInt(doc.css('top'), 10);
		if(-current_top+window_height < doc_height){
			doc.css('top', (current_top-window_height).toString()+'px');
		}else{
			doc.css('top', (-doc_height+window_height).toString()+'px');
		}
	})
	
	// Go up
	$('#gallery_up').click(function(){
		var doc = $('.drawings section');
		var window_height = parseInt($('.drawings').css('height'), 10);
		var current_top = parseInt(doc.css('top'), 10);
		if(current_top + window_height < 0){
			doc.css('top', (current_top+window_height).toString()+'px');
		}else{
			doc.css('top', '0px');
		}
	})
	
	

	  //
	  // View Model
	  //
	  var ViewModel = function () {
		// code from http://www.codeproject.com/Articles/439427/Trajectory-Motion-Simulator-with-HTML5-SVG-Knockou
	     var self;
	     var offset;


			self = this
			offset = 0;
			this.x = ko.observable(0);
	     this.y = ko.observable(0);
	     this.t = ko.observable(0);
	     this.vx = ko.observable(20);
	     this.vy = ko.observable(18);
	     this.g = ko.observable(10);
	
		this.scores = ko.observableArray([]);
	
			this.score = ko.observable(0);
			

	     this.trails = ko.observableArray([]);
	
		this.reset = function(){
				this.t(0);
				this.x(0);
				this.y(0);
				this.trails.removeAll();
			}

	     // Trajectory motion formula
	     // x = vx.t;
	     // y = vy.t - 1/2.(g.t^2)
	     this.update = function () {
	         self.t(self.t() + 0.04);
	         self.x(self.vx() * self.t());
	         self.y((self.vy() * self.t()) - (0.5 * self.g()) * Math.pow(self.t(), 2));
	         this.trails.push({ x: self.x(), y: self.y() });

	         if (self.y() < 0) {
							findSelectedChoice(self.x());				
	            clearInterval(handle);
	         }
	     }
	}
	
	viewModel = new ViewModel();
	ko.applyBindings(viewModel);
	
	// Triggered on a selected choice
	$('.choice').bind('select',function(e){
		viewModel.score(viewModel.score()+parseInt($(this).attr('score')));
		$(this).addClass('selected');
	});
	
	
	
	goAboveWater = function(consequence){
		var underwater_screen = current_screen.next('.screen')
		$('#character').removeClass('underwater');
		
		// underwater goes down
		underwater_screen.css('top', screen_height);
		
		
		playIn(function(){
			$('.screen').css('margin-bottom', window.innerHeight+'px');
			underwater_screen.remove();
			$('#setting').removeClass('underwater');
			
			$('#continue_journey_button').trigger('click');
		}, .5);
	}
	
	showConsequence = function(consequence){
		var consequence_content = consequence.find('.content');
		$('#consequence .content').html(consequence_content);
		$('#consequence').addClass('come');
		$('#continue_journey_button').addClass('come');
		
		playAudio(consequence_content.find('audio').get(0));
	}
	
	// find which choice was selected based on the x of the path's end point. returns choice div
	findSelectedChoice = function(x_percent){
		var width = $('.trajectory:first').width();
		var x = x_percent*width/100;
		var left, right;
		var choices = current_screen.find('.choices .choice');
		var choice;
		var found = false;
		for(var i = 0; !found && i < choices.length ; i++){
			choice = $(choices[i]);
			left = choice.offset().left;
			right = left+choice.width();
			if( x < right){
				found = true;
			}
		}
		
		$(choice).trigger('select');
		
		var consequence = choice.find('.consequence:first'); // this is not only used for underwater

		current_screen.find('.choices').removeClass('come');
		current_screen.find('.question').addClass('leave');
		$('#control').removeClass('come');
		$('#throw_button').addClass('leave');
		
		if(consequence.hasClass('underwater')){
			var sub_screen = consequence.find('.screen')
			sub_screen.insertAfter(current_screen);
			current_screen.css('margin-bottom', '0px');
			$('#setting').addClass('underwater');
			$('#character').addClass('underwater');
			$('#setting').css('top', '-'+((step)*2*screen_height+screen_height)+'px');
			
			// setTimeout(function(){bomb_animation(consequence, sub_screen)}, 7000);
			
			var pattern = /animation_/;
			var animation_id = sub_screen.attr('id');
			if(pattern.exec(animation_id)){
				setTimeout(function(){eval(animation_id+'(consequence, sub_screen)');}, 7000);
			}
		}else{
			showConsequence(consequence);
		}

	}

	
	
	// selecting an answer by clicking the control
	// TODO: it seems that the answers are unfairly distributed... the first one gets chosen more.. 
	// OR maybe the angle should start from a random location
	selectAnswer = function(){
		pauseAudio();
		$('#control .arrow').addClass('stop');
		var rotation = -getRotation($('#control .arrow'));
		var answer_range = 90/num_answers;
		var selection = Math.ceil(rotation/answer_range);		

		var vy = Math.tan(rotation*Math.PI/180)*viewModel.vx();
		viewModel.vy(vy);
		
		clearInterval(handle); // stops a previous event
		handle = setInterval(function() { viewModel.update() }, .01);
		
		return false;
	}

})
;
