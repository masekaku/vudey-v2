/**
 * Populates the video player section.
 * @param {object} videoData - The video data object from JSON.
 */
export function initDynamicPlayer(videoData) {
  const playerFrame = document.getElementById('video-player-frame');
  if (!playerFrame || !videoData) {
    console.error('Video player frame or data not found.');
    return;
  }

  // In a real app, you would use an <iframe> with videoData.embedUrl
  // For this demo, we just show the title.
  playerFrame.innerHTML = `
    <span class="text-xl font-medium text-main/60">
      Player Loaded: ${videoData.title}
    </span>
  `;
}
