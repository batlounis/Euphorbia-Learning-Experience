$(document).ready(function(){
	
	var num_answers = 3; // specifies number of answers for current question
	var current_screen = null;
	var viewModel;
	var handle;	// used in drawn path by knockout js
	
	// --- ONLOAD ---
	
	// set every screen div to take the whole screen
	fillScreen = function(){
		$('.screen').css('height', window.innerHeight+'px');
		$('.screen').css('margin-bottom', window.innerHeight+'px');
	};
	fillScreen();
	$(window).resize(function(){fillScreen()});
	
	current_screen = $('.screen:first');
	
	$('#throw_button').click(function(){return selectAnswer();});
	
	// --- --- --- ---
	
	// shows control for current question
	// TODO: remove
	showControl = function(){
		current_screen.append('<div class="control-wrap"></div>')
		$('.control-wrap').load('screens/control-fisherman', function(){
			$('.arrow').click(function(){return selectAnswer();})		
		});
	}	

	
	// shifts the screen up one whole screen each time the boat is clicked
	var step = 1;
	$('#continue_journey_button').click(function(){
		// $('#consequence').addClass('leave');
		$('#consequence').removeClass('come');
		$('#continue_journey_button').removeClass('come');
		current_screen.find('.arrow').removeClass('swing');
		// $('#consequence .content').html('');
		$('#setting').css('top', '-'+(step*200)+'%');
		step++;
		current_screen = current_screen.next();
		viewModel.reset();
		current_screen.find('.control, .choices').addClass('come');
		current_screen.find('.arrow').addClass('swing');
		$('#throw_button').removeClass('leave');
		return false;
	});
	

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
			// alert(x+', '+left+', '+right);
			if( x >= left && x <= right){
				found = true;
			}
		}
		
		$('#consequence .content').html(choice.find('.consequence'));
		current_screen.find('.choices').removeClass('come');
		current_screen.find('.question').addClass('leave');
		current_screen.find('.control').removeClass('come');
		$('#throw_button').addClass('leave');
		// $('#consequence').show();
		$('#consequence').addClass('come');
		$('#continue_journey_button').addClass('come');
	}
	
	
	// selecting an answer by clicking the control
	// TODO: it seems that the answers are unfairly distributed... the first one gets chosen more.. 
	// OR maybe the angle should start from a random location
	selectAnswer = function(){
		var rotation = -getRotation(current_screen.find('.arrow'));
		var answer_range = 90/num_answers;
		var selection = Math.ceil(rotation/answer_range);
		$('.line').addClass('answer-'+selection);
		current_screen.find('.arrow').addClass('stop');
		viewModel = new ViewModel();
		var vy = Math.tan(rotation*Math.PI/180)*viewModel.vx();
		viewModel.vy(vy);
		ko.applyBindings(viewModel);
		
		clearInterval(handle); // stops a previous event
		handle = setInterval(function() { viewModel.update() }, .01);
		
		return false;
	}

})