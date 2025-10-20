// /js/gate-control.js
export function initGate(root, onAccepted) {
  // 🚫 Tidak pakai localStorage — gate akan selalu muncul setiap kali
  const accepted = false;

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
        <div class="mt-6 p-6 border-4 border-dashed border-[color:var(--grayish)] rounded-xl text-[color:var(--grayish)] text-lg text-center">
      <!-- Script Iklan -->
    <div id="frame" style="width: 300px;margin: auto;z-index: 99998;height: auto">
          <iframe data-aa='2414290' src='//ad.a-ads.com/2414290/?size=300x250&background_color=transparent&title_color=292C30&title_hover_color=979AA0&text_color=DE4C4C&link_color=1C1E22&link_hover_color=2E3238'
                            style='border:0; padding:0; width:300px; height:250px; overflow:hidden;display: block;margin: auto'></iframe>
          <div style="width: 300px;margin:auto;position: absolute;left: 0;right: 0">
            <a target="_blank" style="display:inline-block;font-size: 13px;color: #263238;padding: 4px 10px;background: #F8F8F9;text-decoration: none; border-radius: 0 0 4px 4px;" id="frame-link" href="https://aads.com/campaigns/new/?source_id=2414290&source_type=ad_unit&partner=2414290">Advertise here</a>
          </div>
        </div>
    </div>
  `;
}