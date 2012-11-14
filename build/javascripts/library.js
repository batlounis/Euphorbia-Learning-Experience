

// get value of rotation
// code from: http://css-tricks.com/get-value-of-css-rotation-through-javascript/
getRotation = function(element){

	var tr = element.css("-webkit-transform") ||
	         element.css("-moz-transform") ||
	         element.css("-ms-transform") ||
	         element.css("-o-transform") ||
	         element.css("transform") ||
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

// used as such:
// playIn(function(){ code_goes_here }, in_seconds)
playIn = function(func, in_seconds){
	setTimeout(func, in_seconds*1000);
}





;
