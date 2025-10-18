// Auto-playlist management
document.addEventListener('DOMContentLoaded', async function() {
    const playlistContainer = document.getElementById('playlist');
    const videoPlayer = document.getElementById('video-player');
    let currentIndex = 0;

    // Wait for videos to load
    await window.dynamicPlayer.loadVideos();
    const videos = window.dynamicPlayer.getVideos();

    // Render playlist
    function renderPlaylist() {
        playlistContainer.innerHTML = '';
        videos.forEach((video, index) => {
            const item = document.createElement('div');
            item.className = `bg-white border-2 border-text rounded-[8px] shadow-soft p-3 flex items-center space-x-3 playlist-item ${index === currentIndex ? 'active' : ''}`;
            item.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" class="w-16 h-9 rounded">
                <span class="text-sm font-medium">${video.title}</span>
            `;
            item.addEventListener('click', () => {
                currentIndex = index;
                window.dynamicPlayer.playVideo(video);
                renderPlaylist(); // Update active state
            });
            playlistContainer.appendChild(item);
        });
    }

    // Auto-play next video on end
    videoPlayer.addEventListener('ended', function() {
        currentIndex = (currentIndex + 1) % videos.length;
        window.dynamicPlayer.playVideo(videos[currentIndex]);
        renderPlaylist();
    });

    // Initial render and play first video
    renderPlaylist();
    if (videos.length > 0) {
        window.dynamicPlayer.playVideo(videos[0]);
    }
});