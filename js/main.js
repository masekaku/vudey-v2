// entry orchestrator (ES module)
import { initGate } from "./gate-control.js";
import { renderMain } from "./dynamic-player.js";
import { initAutoPlaylist } from "./auto-playlist.js";

const root = document.getElementById("app-root");

initGate(root, async () => {
  // render main layout
  renderMain(root);

  // small delay to ensure DOM nodes exist
  await new Promise(r => setTimeout(r, 20));

  // init sequential playlist with Plyr integration (optional)
  initAutoPlaylist("#video-player", { usePlyr: true });
});