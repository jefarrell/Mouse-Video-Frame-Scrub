

document.addEventListener("DOMContentLoaded", function() {

		var v = document.getElementById('thevideo');
		v.muted=true;
		v.load();

		var duration = 1/30;  //duration of one frame
		var canvas = document.getElementById("c");
		var context = canvas.getContext("2d");

		var cw = canvas.width;
		var ch = canvas.height;
		console.log(cw);


		v.addEventListener("play", function() {
			draw(this, context, cw, ch);
		}, false);

		var text = document.getElementById("demo");

		function mouseMove(event) {
			var mouseX = event.clientX;
			var mouseY = event.clientY;	
			if (mouseX > 175 || mouseX < 900) {
				v.currentTime = mouseX/(720/375)*duration;
				console.log(mouseX/(720/420));
			}
			//text.innerHTML = "Coordinates: (" + mouseX + "," + mouseY + ")";
			
		}

		function clearCoord(event) {
			text.innerHTML = "";
		}

		mouseMove(v);
		clearCoord(v);
		v.addEventListener("mousemove", mouseMove);
		v.addEventListener("mouseout", clearCoord);

		window.requestAnimFrame = (function(){ // reduce CPU consumption, improve performance and make this possible
		  return  window.requestAnimationFrame       || 
				  window.webkitRequestAnimationFrame || 
				  window.mozRequestAnimationFrame    || 
				  window.oRequestAnimationFrame      || 
				  window.msRequestAnimationFrame     || 
				  function( callback ){
					window.setTimeout(callback, 1000 / 60);
				  };
		})();


	}, false);

		function draw(v,c,w,h) {
			if(v.paused || v.ended) return false;
			c.drawImage(v,0,0,w,h);
			setTimeout(draw,20,v,c,w,h);
		}
	
