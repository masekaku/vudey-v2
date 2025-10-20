// /js/main.js
import { initGate } from "./gate-control.js";
import { renderMain } from "./dynamic-player.js";
import { initAutoPlaylist } from "./auto-playlist.js";
import { initVidostUI } from "../vidost/lol.js";
import { injectHeadAd } from "../rafi/ahmad.js";
injectHeadAd(); // jalankan langsung, sebelum gate dan render apapun

const root = document.getElementById("app-root");

// Cek apakah di index.html atau halaman utama
const path = window.location.pathname;
const isIndexPage = path === "/" || path.endsWith("/index.html");

if (isIndexPage) {
  // ✅ Halaman utama (index.html) — tampilkan gate dulu
  initGate(root, async () => {
    // Render tampilan utama
    renderMain(root);

    // Tunggu DOM siap (biar video player muncul)
    await new Promise(r => setTimeout(r, 50));

    // Jalankan playlist otomatis
    initAutoPlaylist("#video-player", { usePlyr: true });

    // Jalankan UI tambahan
    initVidostUI();

    // 💡 Pasang iklan setelah gate selesai
    injectVideoAd();
  });
} else {
  // ❌ Halaman lain — langsung render
  renderMain(root);
  await new Promise(r => setTimeout(r, 50));

  initAutoPlaylist("#video-player", { usePlyr: true });
  initVidostUI();
  injectVideoAd();
}