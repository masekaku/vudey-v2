import { initGateControl } from './gate-control.js';
import { initDynamicPlayer } from './dynamic-player.js';
import { initAutoPlaylist } from './auto-playlist.js';

/**
 * Main application entry point.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize static interactions like the gate
  initGateControl();

  // 2. Fetch dynamic content and populate the page
  loadDynamicContent();
});

/**
 * Fetches data and initializes dynamic modules.
 */
async function loadDynamicContent() {
  try {
    const response = await fetch('./data/videos.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Pass the data to the respective modules
    initDynamicPlayer(data.currentVideo);
    initAutoPlaylist(data);

  } catch (error) {
    console.error('Failed to load dynamic content:', error);
    // You could show an error message in the UI here
  }
}
