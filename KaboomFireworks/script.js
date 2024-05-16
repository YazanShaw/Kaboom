function showVideo(videoSrc) {
    var modal = document.getElementById('videoModal');
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSrc;
    modal.style.display = 'flex';
    videoPlayer.play();
}

function closeVideo() {
    var modal = document.getElementById('videoModal');
    var videoPlayer = document.getElementById('videoPlayer');
    modal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.src = '';
}
