window.addEventListener("load", function() {
	console.log("Good job opening the window")
	const video = document.getElementById('player1');

    video.autoplay = false;
    video.loop = false;

    document.getElementById('play').addEventListener('click', function() {
        video.play();
		console.log("Play Video");
		video.volume = document.getElementById('slider').value / 100;
        document.getElementById('volume').textContent = document.getElementById('slider').value + '%';
		console.log("Volume:", document.getElementById('volume').textContent);
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
            document.getElementById('volume').textContent = 'Muted';
			console.log(document.getElementById('volume').textContent)
			document.querySelector("#mute").innerText = "Unmute";
        } else {
            document.getElementById('volume').textContent = 'Unmute';
			console.log(document.getElementById('volume').textContent);
			document.querySelector("#mute").innerText = "Mute";
        }
    });

    document.getElementById('slider').addEventListener('input', function() {
        video.volume = document.getElementById('slider').value / 100;
        document.getElementById('volume').textContent = document.getElementById('slider').value + '%';
		console.log("Volume:", document.getElementById('volume').textContent);
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


