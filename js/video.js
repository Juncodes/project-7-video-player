window.onload = function() {

	  // Video
	  var video = document.getElementById("video");
	
	  // Buttons
	  var playIcon = document.getElementById("play-icon")
	  var muteIcon = document.getElementById("mute-icon");
	  var fullScreenButton = document.getElementById("full-screen");
	 
	  // Sliders 
	  var $seekBar = $('#seek-bar');
	  var seekBar = document.getElementById("seek-bar");
	  var volumeBar = document.getElementById("volume-bar");
	  
	
	// Event listener for the play/pause button
	playIcon.addEventListener("click", function() {
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
		
	// Event listener for the mute button
	muteIcon.addEventListener("click", function() {
	  if (video.muted == false) {
	    // Mute the video
	    video.muted = true;
	  } else {
	    // Unmute the video
	    video.muted = false;
	    muteIcon.src = "icons/volume-on-icon.png";
		}
	});
	// On click, volume seekbar shows
	
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
	});
	
	
		
	// Pause the video when the slider handle is being dragged
	seekBar.addEventListener("mousedown", function() {
	  video.pause();
	  // Update the button text to 'Play'
	  playIcon.src = "icons/play-icon.png";
	  
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
	  } else {
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
	var $video = $('#video');
	var $controls = $('#controls');
	$('.wrapper').mouseenter(function() {
		if ($controls.is(":hidden")) {
			$controls.show();	
			$('#media-controls').removeClass("no-controls");
		}else if($('.wrapper').mouseout()){
			$controls.hide();
			$('#media-controls').addClass("no-controls");
		}
	});// end mouseover
	
	// Shows currentTime/totalTime
	var $currentTime = video.currentTime;
	var $totalTime = video.duration;
	var $timeCheck = '<div class="currentTime">' + $currentTime.toFixed(0) + '</div>';
	$timeCheck += '<div class="split">'+ "/" +'</div>';
	$timeCheck += '<div class="totalTime">' + $totalTime.toFixed(0)+ '</div>';
	
	$('#l-control-container').append($timeCheck).attr('currentTime, 0');
		

};





