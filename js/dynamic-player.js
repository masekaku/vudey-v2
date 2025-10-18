// Dynamic video player
document.addEventListener('DOMContentLoaded', async function() {
    const videoPlayer = document.getElementById('video-player');
    let videos = [];

    // Load videos from JSON
    async function loadVideos() {
        try {
            const response = await fetch('data/videos.json');
            videos = await response.json();
            console.log('Videos loaded:', videos);
        } catch (error) {
            console.error('Error loading videos:', error);
        }
    }

    // Play a specific video
    function playVideo(video) {
        videoPlayer.src = video.url;
        videoPlayer.poster = video.thumbnail;
        videoPlayer.load();
        videoPlayer.play();
    }

    // Expose functions for playlist use
    window.dynamicPlayer = {
        loadVideos,
        playVideo,
        getVideos: () => videos
    };

    // Initial load
    await loadVideos();
});