// gate-control.js
export function initGate(root, onAccepted, options = {}) {
  const adContainerId = "gate-ad";
  const adHtml = options.adHtml || "";
  const adSrc = options.adSrc || ""; // kalau mau iframe

  root.innerHTML = `
    <div id="gate-screen" class="app-centered">
      <div class="gate-inner card retro-outline" style="max-width:760px;padding:24px;">
        <div style="text-align:center;">
          <h2 style="font-size:28px;margin:0 0 10px 0;font-weight:800;">Continue to Video?</h2>
          <p style="color:var(--grayish);margin:0 0 18px 0;">Your video is ready. Click below to start watching.</p>

          <div id="${adContainerId}" style="margin:12px 0;"></div>

          <button id="start-watch" style="background:var(--yellowish);border:3px solid var(--dark);padding:12px 18px;border-radius:12px;font-weight:700;box-shadow:4px 6px 0 var(--dark);">▶ Start Watching</button>
        </div>
      </div>
    </div>
  `;

  // isi ad container
  const adContainer = document.getElementById(adContainerId);
  if (adSrc) {
    const iframe = document.createElement('iframe');
    iframe.src = adSrc;
    iframe.width = "100%";
    iframe.height = options.height || "160";
    iframe.style.border = "none";
    iframe.loading = "lazy";
    iframe.sandbox = options.sandbox || "allow-popups";
    adContainer.appendChild(iframe);
  } else if (adHtml) {
    adContainer.innerHTML = adHtml;
  } else {
    // fallback kosong / placeholder
    adContainer.innerHTML = `<div style="padding:8px;color:var(--grayish);font-size:13px;">Sponsor</div>`;
  }

  const btn = document.getElementById("start-watch");
  btn.addEventListener("click", () => {
    const gateScreen = document.getElementById("gate-screen");
    if (gateScreen) {
      gateScreen.style.transition = "opacity .35s ease, transform .35s ease";
      gateScreen.style.opacity = "0";
      gateScreen.style.transform = "translateY(8px) scale(.98)";
      setTimeout(() => { gateScreen.remove(); onAccepted(); }, 320);
    } else {
      onAccepted();
    }
  });
}