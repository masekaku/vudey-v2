document.addEventListener("DOMContentLoaded", () => {
  const appRoot = document.getElementById("app-root");
  showGate(appRoot);
});

/* ============================================================
   1️⃣ GATE CONTROL — Anti-bot protection
============================================================ */
function showGate(root) {
  root.innerHTML = `
  <section id="gate-screen" class="flex flex-col justify-center items-center text-center w-full max-w-lg">
    <div class="card-bg border-4 border-dark rounded-2xl p-8 retro-shadow-lg">
      <h2 class="text-3xl font-extrabold mb-3">Continue to Video?</h2>
      <p class="text-grayish mb-6">Your video is ready. Click below to start watching.</p>
      <button id="start-btn" class="bg-yellowish hover:bg-pinkish transition text-dark font-semibold rounded-xl px-6 py-3 border-4 border-dark retro-shadow-md flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Start Watching
      </button>
    </div>
  </section>`;

  const startBtn = document.getElementById("start-btn");
  startBtn.addEventListener("click", () => {
    root.innerHTML = ""; // Hapus gate
    loadPlayer(root);
  });
}

/* ============================================================
   2️⃣ PLAYER TEMPLATE — Inject after gate approval
============================================================ */
function loadPlayer(root) {
  root.innerHTML = `
  <main class="flex flex-col items-center px-4 pb-12 w-full">
    <div class="w-full max-w-4xl my-8 rounded-xl overflow-hidden retro-shadow-lg">
      <video id="player" controls playsinline crossorigin></video>
    </div>
    <div class="card-bg border-2 border-dark rounded-xl mt-6 p-5 max-w-2xl text-dark text-center text-sm">
      Iklan mungkin menyebalkan, tetapi itu satu-satunya cara kami untuk menjaga server. Kesabaran Anda sangat kami hargai dan kami harap layanan kami sepadan dengan usaha Anda.
    </div>
  </main>
  <footer class="w-full text-center text-sm text-grayish py-6 border-t border-grayish/20">
    © 2025 <span class="font-bold text-dark">ohbro.co</span> —
    <a href="#" class="hover:text-pinkish">Protocol</a> |
    <a href="#" class="hover:text-pinkish">Terms</a> |
    <a href="#" class="hover:text-pinkish">Contact</a>
  </footer>`;

  // Load Plyr dynamically
  const script = document.createElement("script");
  script.src = "https://cdn.plyr.io/3.7.8/plyr.polyfilled.js";
  script.onload = () => initVideoPlaylist();
  document.body.appendChild(script);
}

/* ============================================================
   3️⃣ PLAYLIST HANDLER — Auto playlist + JSON fetch
============================================================ */
async function initVideoPlaylist() {
  try {
    const response = await fetch("data/videos.json");
    const videos = await response.json();

    if (!Array.isArray(videos) || videos.length === 0) {
      throw new Error("No videos found in videos.json");
    }

    let currentIndex = 0;
    const player = new Plyr("#player", {
      controls: ["play", "progress", "current-time", "mute", "volume", "fullscreen"]
    });

    function loadVideo(index) {
      const videoData = videos[index];
      player.source = {
        type: "video",
        sources: [{ src: videoData.url, type: "video/mp4" }]
      };
      player.play().catch(() => {});
    }

    loadVideo(currentIndex);

    player.on("ended", () => {
      currentIndex = (currentIndex + 1) % videos.length;
      loadVideo(currentIndex);
    });
  } catch (err) {
    console.error("Error loading playlist:", err);
    document.getElementById("app-root").innerHTML = `
      <div class="text-center text-redish font-semibold mt-12">
        ⚠️ Gagal memuat playlist video. Pastikan file videos.json valid.
      </div>`;
  }
}