// Player Injection Module
class PlayerInject {
    constructor() {
        this.playerContainer = document.getElementById('playerContainer');
        this.player = null;
        this.currentVideoIndex = 0;
        this.videos = [];
        
        // Listen for gate opened event
        window.addEventListener('gateOpened', () => {
            this.loadVideos();
        });
    }
    
    async loadVideos() {
        try {
            // Fetch video data from JSON
            const response = await fetch('Data/videos.json');
            this.videos = await response.json();
            
            // Initialize player with first video
            this.injectPlayer();
            
            // Update playlist info
            if (typeof window.playlistHandler !== 'undefined') {
                window.playlistHandler.updatePlaylistInfo(this.videos.length);
            }
        } catch (error) {
            console.error('Failed to load videos:', error);
            this.playerContainer.innerHTML = `
                <div class="bg-[#FAFAF3] p-8 text-center rounded-2xl border-2 border-[#292C30]">
                    <p class="text-[#DE4C4C] font-bold mb-2">Failed to load videos</p>
                    <p class="text-[#979AA0]">Please check your connection and try again</p>
                </div>
            `;
        }
    }
    
    injectPlayer() {
        if (this.videos.length === 0) return;
        
        // Create video element dynamically (after user interaction)
        const videoElement = document.createElement('video');
        videoElement.id = 'player';
        videoElement.controls = true;
        videoElement.crossOrigin = "anonymous";
        
        // Add source based on current video index
        const source = document.createElement('source');
        source.src = this.videos[this.currentVideoIndex].url;
        source.type = 'video/mp4';
        
        videoElement.appendChild(source);
        this.playerContainer.innerHTML = '';
        this.playerContainer.appendChild(videoElement);
        
        // Initialize Plyr.js
        this.initializePlyr();
    }
    
    initializePlyr() {
        // Initialize Plyr player
        this.player = new Plyr('#player', {
            controls: [
                'play-large',
                'play',
                'progress',
                'current-time',
                'mute',
                'volume',
                'settings',
                'fullscreen'
            ],
            ratio: '16:9'
        });
        
        // Add event listener for video end
        this.player.on('ended', () => {
            this.playNextVideo();
        });
        
        // Play the video
        this.player.play().catch(error => {
            console.log('Auto-play prevented:', error);
        });
    }
    
    playNextVideo() {
        // Move to next video in playlist
        this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
        
        // Update video source
        const videoElement = document.getElementById('player');
        videoElement.querySelector('source').src = this.videos[this.currentVideoIndex].url;
        
        // Reload and play the new video
        videoElement.load();
        this.player.play().catch(error => {
            console.log('Auto-play prevented:', error);
        });
        
        // Update playlist info
        if (typeof window.playlistHandler !== 'undefined') {
            window.playlistHandler.updateCurrentVideo(this.currentVideoIndex + 1, this.videos.length);
        }
    }
}

// Initialize player injection when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.playerInject = new PlayerInject();
});