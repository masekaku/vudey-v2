// /js/main.js
import { initGate } from "./gate-control.js";
import { renderMain } from "./dynamic-player.js";
import { initAutoPlaylist } from "./auto-playlist.js";
import { initVidostUI } from "../vidost/lol.js";

const root = document.getElementById("app-root");

initGate(root, async () => {
  // Render tampilan utama
  renderMain(root);

  // Tunggu DOM siap
  await new Promise(r => setTimeout(r, 50));

  // Jalankan playlist otomatis dengan dukungan Plyr
  initAutoPlaylist("#video-player", { usePlyr: true });

  // 🔥 Tambahkan pemanggilan UI global setelah semuanya siap
  initVidostUI(root);
});