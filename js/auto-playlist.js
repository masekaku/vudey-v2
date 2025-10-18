// /js/auto-playlist.js

// Options: { usePlyr: boolean } - jika true, inisialisasi Plyr
export async function initAutoPlaylist(playerSelector = "#video-player", options = { usePlyr: false }) {
  const playerEl = document.querySelector(playerSelector);
  if (!playerEl) {
    console.warn("Player element not found:", playerSelector);
    return;
  }

  let plyrInstance = null;
  if (options.usePlyr) {
    if (typeof Plyr === "undefined") {
      await loadScript("https://cdn.plyr.io/3.7.8/plyr.polyfilled.js");
    }
    try {
      plyrInstance = new Plyr(playerEl);
    } catch (e) {
      console.warn("Plyr init failed", e);
      plyrInstance = null;
    }
  }

  try {
    const res = await fetch("/data/videos.json");
    if (!res.ok) throw new Error("Failed HTTP " + res.status);
    const videos = await res.json();
    if (!Array.isArray(videos) || videos.length === 0) throw new Error("videos.json is empty or invalid");

    let idx = 0;

    // base domain untuk video streaming
    const BASE_URL = "https://example.com/v/";

    const loadIndex = (i) => {
      idx = i % videos.length;

      // Bentuk URL dari ID
      const videoUrl = videos[idx].url || `${BASE_URL}${videos[idx].id}`;

      if (plyrInstance) {
        plyrInstance.source = {
          type: "video",
          sources: [{ src: videoUrl, type: "video/mp4" }]
        };
        plyrInstance.play().catch(() => {});
      } else {
        playerEl.src = videoUrl;
        playerEl.play().catch(() => {});
      }
    };

    // load pertama
    loadIndex(idx);

    // lanjut otomatis saat video berakhir
    const endedHandler = () => {
      idx = (idx + 1) % videos.length;
      loadIndex(idx);
    };

    if (plyrInstance) {
      plyrInstance.on("ended", endedHandler);
    } else {
      playerEl.addEventListener("ended", endedHandler);
    }
  } catch (err) {
    console.error("Auto playlist error:", err);
    const container = document.querySelector(".container") || document.body;
    const msg = document.createElement("div");
    msg.style.color = "var(--redish)";
    msg.style.marginTop = "18px";
    msg.style.fontWeight = "700";
    msg.textContent = "⚠️ Failed to load playlist. Check /data/videos.json";
    container.appendChild(msg);
  }
}

// helper load script eksternal
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = (e) => reject(e);
    document.head.appendChild(s);
  });
}