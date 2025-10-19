// /js/gate-control.js
export function initGate(root, onAccepted) {
  // render gate markup
  root.innerHTML = `
    <div id="gate-screen" class="app-centered">
      <div class="gate-inner card retro-outline" style="max-width:760px;padding:32px;">
        <div style="text-align:center;">
          <h2 style="font-size:28px;margin:0 0 10px 0;font-weight:800;">Continue to Video?</h2>
          <p style="color:var(--grayish);margin:0 0 20px 0;">Your video is ready. Click the button below to start watching.</p>
          
          <!-- 🟡 IKLAN DITEMPATKAN DI SINI -->
          <div id="gate-ad" style="margin:20px auto; text-align:center;">
            <div style="display:inline-block; border:4px dashed var(--grayish); border-radius:12px; padding:12px; color:var(--grayish);">
              <span>Loading ads…</span>
            </div>
          </div>

          <button id="start-watch" style="background:var(--yellowish);border:3px solid var(--dark);padding:12px 18px;border-radius:12px;font-weight:700;box-shadow:4px 6px 0 var(--dark);margin-top:16px;">▶ Start Watching</button>
        </div>
      </div>
    </div>
  `;

  // 🟢 Tampilkan iklan internal
  showInlineAd();

  // ✅ Jika pernah diterima, langsung lanjut
  let accepted = false;
  try { accepted = localStorage.getItem("ohbro_gate") === "1"; } catch(e){ accepted = false; }

  if (accepted) {
    onAccepted();
    return;
  }

  // 🎬 Tombol mulai
  const btn = document.getElementById("start-watch");
  btn.addEventListener("click", () => {
    try { localStorage.setItem("ohbro_gate", "1"); } catch(e){}
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

// 🟣 Fungsi menampilkan iklan langsung tanpa file tambahan
function showInlineAd() {
  const adContainer = document.getElementById("gate-ad");
  if (!adContainer) return;

  // Contoh format iklan langsung (iframe/script/banner)
  const adHTML = `
    <div style="display:inline-block; padding:8px;">
      <a href="https://workplacecakefaculty.com/ibhnbx77?key=245d5f18a70ac6f3ccf7041441886168" target="_blank" rel="noopener noreferrer">
        <img src="https://via.placeholder.com/300x250?text=Your+Ad+Here" 
             alt="Advertisement" 
             style="max-width:100%; border-radius:12px; box-shadow:3px 3px 0 var(--dark);">
      </a>
    </div>
  `;

  // Ganti placeholder "Loading ads…" dengan konten iklan
  adContainer.innerHTML = adHTML;
}