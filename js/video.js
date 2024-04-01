window.addEventListener("load", function() {
	console.log("Good job opening the window")
	const video = document.getElementById('player1');
    // const playBtn = document.getElementById('play');
    // const pauseBtn = document.getElementById('pause');
    // const slowerBtn = document.getElementById('slower');
    // const fasterBtn = document.getElementById('faster');
    // const skipBtn = document.getElementById('skip');
    // const muteBtn = document.getElementById('mute');
    const volumeSlider = document.getElementById('slider');
    const volumeText = document.getElementById('volume');
    // const vintageBtn = document.getElementById('vintage');
    // const origBtn = document.getElementById('orig');

    video.autoplay = false;
    video.loop = false;

    document.getElementById('play').addEventListener('click', function() {
        video.play();
		console.log("Play Video");
    });

    document.getElementById('pause').addEventListener('click', function() {
        video.pause();
		console.log("Pause Video");
    });

    document.getElementById('slower').addEventListener('click', function() {
        video.playbackRate *= 0.9;
        console.log("New speed:", video.playbackRate.toFixed(5));
    });

    document.getElementById('faster').addEventListener('click', function() {
        video.playbackRate /= 0.9;
        console.log("New speed:", video.playbackRate.toFixed(5));
    });

    document.getElementById('skip').addEventListener('click', function() {
        if (video.currentTime + 10 < video.duration) {
            video.currentTime += 10;
        } else {
            video.currentTime = 0;
        }
        console.log("Current timestamp:", video.currentTime.toFixed(2));
    });

    document.getElementById('mute').addEventListener('click', function() {
        video.muted = !video.muted;
        if (video.muted) {
            volumeText.textContent = 'Muted';
			console.log(volumeText.textContent)
        } else {
            volumeText.textContent = 'Unmuted';
			console.log(volumeText.textContent);
        }
    });

    volumeSlider.addEventListener('input', function() {
        video.volume = volumeSlider.value / 100;
        volumeText.textContent = volumeSlider.value + '%';
		console.log("Volume Slider:", volumeText.textContent);
    });

    document.getElementById('vintage').addEventListener('click', function() {
        video.classList.add('oldSchool');
		console.log("Styled");
    });

    document.getElementById('orig').addEventListener('click', function() {
        video.classList.remove('oldSchool');
		console.log("Original");
    });
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
