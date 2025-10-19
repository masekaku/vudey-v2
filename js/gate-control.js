// /js/gate-control.js
export function initGate(root, onAccepted) {
  // cek apakah sudah pernah diterima
  const accepted = localStorage.getItem("vidost_gate_ok") === "1";
  if (accepted) {
    onAccepted();
    return;
  }

  // render gate + iklan
  root.innerHTML = `
    <div id="gate-screen" class="app-centered">
      <div class="gate-inner card retro-outline" style="max-width:760px;padding:32px;">
        <div style="text-align:center;">
          <h2 style="font-size:28px;margin:0 0 10px 0;font-weight:800;">Continue to Video?</h2>
          <p style="color:var(--grayish);margin:0 0 20px 0;">Your video is ready. Click below to start watching.</p>
          
          <!-- Tombol -->
          <button id="start-watch" style="background:var(--yellowish);border:3px solid var(--dark);padding:12px 18px;border-radius:12px;font-weight:700;box-shadow:4px 6px 0 var(--dark);">
            ▶ Start Watching
          </button>

          <!-- Iklan -->
          <div id="gate-ad" style="margin-top:30px; padding:20px; border:3px dashed var(--grayish); border-radius:16px; color:var(--grayish); font-size:16px;">
            <!-- Script iklan dimuat di sini -->
          </div>
        </div>
      </div>
    </div>
  `;

  // panggil script iklan (bisa juga dari file eksternal)
  loadGateAd();

  // tombol handler
  const btn = document.getElementById("start-watch");
  btn.addEventListener("click", () => {
    // simpan status diterima
    localStorage.setItem("vidost_gate_ok", "1");

    const gateScreen = document.getElementById("gate-screen");
    if (gateScreen) {
      gateScreen.style.transition = "opacity .35s ease, transform .35s ease";
      gateScreen.style.opacity = "0";
      gateScreen.style.transform = "translateY(8px) scale(.98)";
      setTimeout(() => { onAccepted(); }, 320);
    } else {
      onAccepted();
    }
  });
}

// fungsi memuat iklan
function loadGateAd() {
  const adContainer = document.getElementById("gate-ad");
  if (!adContainer) return;

  // Contoh isi iklan — bisa kamu ganti dengan script eksternal
  adContainer.innerHTML = `
    <div style="border:4px solid var(--ink2); border-radius:12px; padding:12px; background:#fff;">
      <p style="margin:0; font-weight:600;">Sponsored Ad</p>
      <a href="https://workplacecakefaculty.com/wnxneai5xf?key=f234c1281833908a12385bbbc9881cf7" target="_blank" 
         style="color:var(--ink2); text-decoration:underline; font-weight:bold;">Visit Sponsor</a>
    </div>
  `;
}