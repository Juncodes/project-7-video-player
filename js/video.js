window.onload = function() {

	// Video
	  var video = document.getElementById("video");
	  
	// Buttons
	var playBtn = document.getElementById("play-pause");
	var playIcon = document.getElementById("play-icon");
	var muteIcon = document.getElementById("mute-icon");
	var fullScreenButton = document.getElementById("full-screen");
	
	// Sliders 
	var $seekBar = $('#seek-bar');
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");
	
	
	// Event listener for the play/pause button
	playBtn.addEventListener("click", function() {
	  if (video.paused == true) {
	    // Play the video
	    video.play();
	    // Update the button text to 'Pause-icon'
	    playIcon.src="icons/pause-icon.png"
	  } else {
	    // Pause the video
	    video.pause();
	    // Update the button text to 'Play'
	    playIcon.src = "icons/play-icon.png";
	  }
	});
		
	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
	  if (video.requestFullscreen) {
	    video.requestFullscreen();
	  } else if (video.mozRequestFullScreen) {
	    video.mozRequestFullScreen(); // Firefox
	  } else if (video.webkitRequestFullscreen) {
	    video.webkitRequestFullscreen(); // Chrome and Safari
	  }
	});
	
	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (video.currentTime / video.duration)*100;
		// Update the slider value
		seekBar.value = value;	 
		// Update played video background color with value
		seekBar.style.background = "-moz-linear-gradient(left,  #e78636 0%, #e78636 "+ value +"%, #525252 "+ value +"%, #525252 100%)";
		seekBar.style.background = "-webkit-gradient(linear, left top, right top, color-stop(0%,#e78636), color-stop("+ value +"%,#e78636), color-stop("+ value +"%,#525252), color-stop(100%,#525252))";
		seekBar.style.background = "-webkit-linear-gradient(left,  #e78636 0%,#e78636 "+ value +"%,#525252 "+ value +"%,#525252 100%)";
		seekBar.style.background = "-o-linear-gradient(left,  #e78636 0%,#e78636 "+ value +"%,#525252 "+ value +"%,#525252 100%)";
		seekBar.style.background = "-ms-linear-gradient(left,  #e78636 0%,#e78636 "+ value +"%,#525252 "+ value +"%,#525252 100%)";
		seekBar.style.background = "linear-gradient(to right,  #e78636 0%,#e78636 "+ value +"%,#525252 "+ value +"%,#525252 100%)";
	});
	
	// Pause the video when the slider handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
		// Update the button text to 'Play'
		playIcon.src = "icons/pause-icon.png";
	});

	// Play the video when the slider handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.pause();
		
		// Update the button text to 'Play'
		playIcon.src = "icons/play-icon.png";
	});
	
	
  // Event listener for the volume bar
  volumeBar.addEventListener("change", function() {
  // Update the video volume
  video.volume = volumeBar.value;
		if(volumeBar.value == 0) {
		  //update the icon on mute
		  muteIcon.src = "icons/volume-off-icon.png";
		} else if(volumeBar.value > 0) {
		  muteIcon.src = "icons/volume-on-icon.png";
		}
	});
	
	// toggle volume bar
	$('.mute').on("click", function() {
		var volumeBar = $('#volume-bar');
		if (volumeBar.css('display') == 'none') {
			volumeBar.css('display', 'block');
		} else {
			volumeBar.css('display', 'none');
		};
	});
	
	//Video show hide controls on mouse over
	var $video = $('#video-wrapper');
	var $controls = $('#controls');
	$video.mouseenter(function() {
		if ($controls.is(":hidden")) {
			$controls.show();	
			$('#media-controls').removeClass("no-controls");
		}
	});// end mouseover
	
	$video.mouseleave(function(){
		if ($controls.is(":visible")) {
			$controls.hide();	
			$('#media-controls').addClass("no-controls");
		}
	});// end mouseleave
	

	// Event listener for the seek bar
	$(document).ready(function(){
		$('#video').on("timeupdate", function(event){
			onTrackedVideoFrame(this.currentTime, this.duration);
		});
	});
	var timeFormat = function(seconds){
	var m = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60);
	var s = Math.floor(seconds - (m * 60)) < 10 ? '0' + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
	return m + ':' + s;
	};
	
	function onTrackedVideoFrame(currentTime, duration){
		$("#current").text(timeFormat(currentTime));
		$("#totalTime").text(timeFormat(duration));
	}
	var timeText = $('.timeSelected');
	
	//Event listener for on click seek bar update
	video.addEventListener("timeupdate", function() {
		
		// Event listener for the seek bar
		seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);
		// Update the video time
		video.currentTime = time;
		});
	});
	
	// Event Listener for track follow on transcript
	$(document).ready(function(){
		$('#video').on("timeupdate", function(event){		
			switch(true) {
				case (this.currentTime > 0 && this.currentTime < 4.1):
					$('li').css("backgroundColor", "white");
					$('#twoSec').css("backgroundColor", "orange");	
					break;
				
				case (this.currentTime > 4.1 && this.currentTime < 7.5):
					$('li').css("backgroundColor", "white");
					$('#fourSec').css("backgroundColor", "orange");
					break;
				
			
				case (this.currentTime > 7.5 && this.currentTime < 11.27):
					$('li').css("backgroundColor", "white");
					$('#sevenSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 11.27 && this.currentTime < 13.9):
					$('li').css("backgroundColor", "white");
					$('#elevenSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 13.9 && this.currentTime < 17.9):
					$('li').css("backgroundColor", "white");
					$('#fourteenSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 17.9 && this.currentTime < 22.37):
					$('li').css("backgroundColor", "white");
					$('#eighteenSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 22.37 && this.currentTime < 26.88):
					$('li').css("backgroundColor", "white");
					$('#twentytwoSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 26.88 && this.currentTime < 32.1):
					$('li').css("backgroundColor", "white");
					$('#twentysevenSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 32.1 && this.currentTime < 34.73):
					$('li').css("backgroundColor", "white");
					$('#thirtytwoSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 34.73 && this.currentTime < 39.43):
					$('li').css("backgroundColor", "white");
					$('#thirtyfiveSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 39.43 && this.currentTime < 41.19):
					$('li').css("backgroundColor", "white");
					$('#thirtynineSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 42.35 && this.currentTime < 46.3):
					$('li').css("backgroundColor", "white");
					$('#fourtyoneSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 46.3 && this.currentTime < 49.27):
					$('li').css("backgroundColor", "white");
					$('#fourtysixSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 49.27 && this.currentTime < 53.76):
					$('li').css("backgroundColor", "white");
					$('#fourtynineSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 53.76 && this.currentTime < 57.78):
					$('li').css("backgroundColor", "white");
					$('#fiftythreeSec').css("backgroundColor", "orange");
					break;
				
				case (this.currentTime > 57.78 && this.currentTime < 60.1):
					$('li').css("backgroundColor", "white");
					$('#fiftysevenSec').css("backgroundColor", "orange");
					break;		
			} // end of cases for time tracking 
		}); 
	});	
};






