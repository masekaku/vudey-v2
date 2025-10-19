// /js/main.js
import { initGate } from "./gate-control.js";
import { renderMain } from "./dynamic-player.js";
import { initAutoPlaylist } from "./auto-playlist.js";
import { initVidostUI } from "../vidost/lol.js";

const root = document.getElementById("app-root");

// Cek jika halaman saat ini adalah index.html atau root domain
const path = window.location.pathname;
const isIndexPage = path === "/" || path.endsWith("/index.html");

// URL iklan (gunakan file HTML iklan sendiri, lebih aman daripada script langsung)
const adSrc = "/ads/gate-ad.html"; 
// pastikan kamu punya file:  /ads/gate-ad.html  berisi kode iklan / banner

if (isIndexPage) {
  // ✅ Halaman utama (index.html) — tampilkan gate dulu
  initGate(
    root,
    async () => {
      // Render tampilan utama
      renderMain(root);

      // Tunggu DOM siap (biar video player bisa ditemukan)
      await new Promise(r => setTimeout(r, 50));

      // Jalankan playlist otomatis
      initAutoPlaylist("#video-player", { usePlyr: true });

      // Jalankan UI tambahan dari vidost/lol.js
      initVidostUI();
    },
    {
      // 🔽 Opsi tambahan untuk gate iklan
      adSrc,                // file iframe iklan
      height: 160,          // tinggi iklan
      sandbox: "allow-popups allow-scripts", // sandbox agar aman
    }
  );
} else {
  // ❌ Bukan halaman utama — langsung tampilkan konten
  renderMain(root);

  // Tunggu DOM siap
  await new Promise(r => setTimeout(r, 50));

  // Jalankan fitur lain
  initAutoPlaylist("#video-player", { usePlyr: true });
  initVidostUI();
}