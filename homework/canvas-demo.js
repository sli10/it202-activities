// canvas-demo.js

const demoCanvas = document.getElementById('canvas-demo').getContext('2d');

window.onload = function() {// make sure to use onload
	
	demoCanvas.moveTo(10, 10);// start at (10,10)
	demoCanvas.lineTo(110, 10);
	demoCanvas.moveTo(10, 10);
	demoCanvas.lineTo(10, 80);
	demoCanvas.lineTo(110, 80);
	demoCanvas.lineTo(110, 150);
	demoCanvas.lineTo(10, 150);
	
	demoCanvas.stroke();

	demoCanvas.closePath();
    
}