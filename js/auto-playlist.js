// /js/auto-playlist.js
// Options: { usePlyr: boolean } - if true, initializes Plyr for better video controls

export async function initAutoPlaylist(playerSelector = "#video-player", options = { usePlyr: false }) {
  const playerEl = document.querySelector(playerSelector);
  if (!playerEl) {
    console.warn("Player element not found:", playerSelector);
    return;
  }

  // Initialize Plyr if requested
  let plyrInstance = null;
  if (options.usePlyr) {
    if (typeof Plyr === "undefined") {
      await loadScript("https://cdn.plyr.io/3.7.8/plyr.polyfilled.js");
    }
    try {
      plyrInstance = new Plyr(playerEl);
    } catch (e) {
      console.warn("Plyr initialization failed:", e);
      plyrInstance = null;
    }
  }

  try {
    // Load video list
    const res = await fetch("/data/videos.json").catch(() => fetch("/videos.json"));
    if (!res.ok) throw new Error("Failed HTTP " + res.status);
    const videos = await res.json();
    if (!Array.isArray(videos) || videos.length === 0) throw new Error("videos.json is empty or invalid");

    // --- 🧠 Determine which video to play ---
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");

    // Support short path like /v/:id
    const pathMatch = window.location.pathname.match(/\/v\/([^/]+)/);
    const pathId = pathMatch ? pathMatch[1] : null;

    const selectedId = idParam || pathId;
    let idx = 0;

    if (selectedId) {
      const foundIndex = videos.findIndex(v => v.id.toLowerCase() === selectedId.toLowerCase());
      if (foundIndex !== -1) {
        idx = foundIndex;
        console.log("Playing video by ID:", selectedId);
      } else {
        console.warn("Video ID not found, playing first item instead:", selectedId);
      }
    }

    // --- 🎬 Load the selected video ---
    const loadIndex = (i) => {
      idx = i % videos.length;
      const currentVideo = videos[idx];
      console.log(`Now playing [${idx + 1}/${videos.length}]:`, currentVideo.id);

      if (plyrInstance) {
        plyrInstance.source = {
          type: "video",
          sources: [{ src: currentVideo.url, type: "video/mp4" }]
        };
        plyrInstance.play().catch(() => {});
      } else {
        playerEl.src = currentVideo.url;
        playerEl.play().catch(() => {});
      }

      // Update document title dynamically
      document.title = `VidOst - ${currentVideo.id}`;
    };

    loadIndex(idx);

    // --- ⏭ Handle autoplay next ---
    const handleEnded = () => {
      idx = (idx + 1) % videos.length;
      loadIndex(idx);
    };

    if (plyrInstance) {
      plyrInstance.on("ended", handleEnded);
    } else {
      playerEl.addEventListener("ended", handleEnded);
    }

  } catch (err) {
    console.error("Auto playlist error:", err);
    const container = document.querySelector(".container") || document.body;
    const msg = document.createElement("div");
    msg.style.color = "var(--redish)";
    msg.style.marginTop = "18px";
    msg.style.fontWeight = "700";
    msg.textContent = "⚠️ Failed to load playlist. Check /data/videos.json or /videos.json.";
    container.appendChild(msg);
  }
}

// Small helper to dynamically load external scripts
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