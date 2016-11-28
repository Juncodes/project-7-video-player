window.onload = function() {

	  // Video
	  var video = document.getElementById("video");
	  
	  //Track
	  var textTracks = videoElement.textTracks; // one for each track element
	  var textTrack = textTracks[0]; // corresponds to the first track element
	  var kind = textTrack.kind // e.g. "subtitles"
	  var mode = textTrack.mode // e.g. "disabled", hidden" or "showing"

	  //Cues
	  var cues = textTrack.cues;
	  var cue = cues[0]; // corresponds to the first cue in a track src file
	  var cueId = cue.id // cue.id corresponds to the cue id set in the WebVTT file
	  var cueText = cue.text; // "The Web is always changing", for example (or some JSON!)

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
	}); // end time update  
	
/*	$seekBar.on("click", function(){
		// Calculate the slider value
		var value = 
		// Update the slider value 
	});
*/	
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
/*	function transcriptFollow(currentTime == timeText){
			$('.time').style.css(orange);
	}
*/	
	// Event Listener for track follow on transcript
	$(document).ready(function(){
		$('#video').on("timeupdate", function(event){		
			
			switch(true) {
				case (this.currentTime < 4):
					console.log("less than 4");
					break;
				
				case (this.currentTime < 7.6):
					console.log("greater than 8");
					break;
			
				case (this.currentTime < 11.2):
					console.log("greater than 11");
					break;
				
				case (this.currentTime < 13.9):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 17.9):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 22.3):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 26.8):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 30.9):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 34.7):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 39.4):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 41.1):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 46.3):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 49.2):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 53.7):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 57.7):
					console.log("greater than 5");
					break;
				
				case (this.currentTime < 60.1):
					console.log("greater than 5");
					break;		
			} // end of cases for time tracking
		});
	});
};






