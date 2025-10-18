// Playlist Handler Module
class PlaylistHandler {
    constructor() {
        this.playlistInfo = document.getElementById('playlistInfo');
    }
    
    updatePlaylistInfo(totalVideos) {
        this.playlistInfo.innerHTML = `
            <p>Playlist loaded: ${totalVideos} videos available</p>
            <p class="text-sm mt-1">Currently playing: 1 of ${totalVideos}</p>
        `;
    }
    
    updateCurrentVideo(current, total) {
        this.playlistInfo.innerHTML = `
            <p>Playlist loaded: ${total} videos available</p>
            <p class="text-sm mt-1">Currently playing: ${current} of ${total}</p>
        `;
    }
}

// Initialize playlist handler when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.playlistHandler = new PlaylistHandler();
});