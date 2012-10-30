$(document).ready(function(){
	
	num_answers = 3; // specifies number of answers for current question
	
	// set every screen div to take the whole screen
	fillScreen = function(){
		$('.screen').css('height', window.innerHeight+'px');
		$('.screen').css('margin-bottom', window.innerHeight+'px');
	};
	fillScreen();
	$(window).resize(function(){fillScreen()});
	
	
	// get value of rotation
	// code from: http://css-tricks.com/get-value-of-css-rotation-through-javascript/
	getRotation = function(element_id){
		var el = document.getElementById(element_id);
		var st = window.getComputedStyle(el, null);
		var tr = st.getPropertyValue("-webkit-transform") ||
		         st.getPropertyValue("-moz-transform") ||
		         st.getPropertyValue("-ms-transform") ||
		         st.getPropertyValue("-o-transform") ||
		         st.getPropertyValue("transform") ||
		         "fail...";

		// With rotate(30deg)...
		// matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
		console.log('Matrix: ' + tr);

		// rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix

		var values = tr.split('(')[1];
		    values = values.split(')')[0];
		    values = values.split(',');
		var a = values[0];
		var b = values[1];
		var c = values[2];
		var d = values[3];

		var scale = Math.sqrt(a*a + b*b);
		var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
		
		return angle;
		
	}

	
	// shows fisherman control to first question (TODO: current question)
	$('.screen:first').append('<div id="control-wrap"></div>')
	$('#control-wrap').load('screens/control-fisherman', function(){
		$('#arrow').click(function(){return selectAnswer();})		
	});
	
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
		return false;
	})
	
	
	  //
	  // View Model
	  //
	  var ViewModel = function () {
	     var self = this;
	     var offset = 0;
	     this.x = ko.observable(0);
	     this.y = ko.observable(0);
	     this.t = ko.observable(0);
	     this.vx = ko.observable(6);
	     this.vy = ko.observable(6);
	     this.g = ko.observable(200);
	     var handle;
	     this.trails = ko.observableArray([]);

	     // Trajectory motion formula
	     // x = vx.t;
	     // y = vy.t - 1/2.(g.t^2)
	     this.update = function () {
	         self.t(self.t() + 0.01);
	         self.x(self.x() + self.vx() * self.t());
	         self.y(self.y() + (self.vy() * self.t()) - (0.5 * self.g()) * Math.pow(self.t(), 2));

	         this.trails.push({ x: self.x(), y: self.y() });

	         if (self.y() < 0) {
	             clearInterval(handle);
	         }
	     }
	}
	

	
	
	// selecting an answer by clicking the control
	selectAnswer = function(){
		var rotation = -getRotation('arrow');
		var answer_range = 90/num_answers;
		var selection = Math.ceil(rotation/answer_range);
		$('#line').addClass('answer-'+selection);
		$('#arrow').addClass('stop');
		var viewModel = new ViewModel();
		viewModel.vx(40);
		// viewModel.vy(25);
		viewModel.vy(Math.tan(rotation*Math.PI/180)*viewModel.vx());
		ko.applyBindings(viewModel);
		setInterval(function() { viewModel.update() }, 10);
		
		return false;
	}

})