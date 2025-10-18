// gate-control.js
export function initGate(root, onAccepted) {
  // render gate markup
  root.innerHTML = `
    <div id="gate-screen" class="app-centered">
      <div class="gate-inner card retro-outline" style="max-width:760px;padding:32px;">
        <div style="text-align:center;">
          <h2 style="font-size:28px;margin:0 0 10px 0;font-weight:800;">Continue to Video?</h2>
          <p style="color:var(--grayish);margin:0 0 20px 0;">Your video is ready. Click the button below to start watching.</p>
          <button id="start-watch" style="background:var(--yellowish);border:3px solid var(--dark);padding:12px 18px;border-radius:12px;font-weight:700;box-shadow:4px 6px 0 var(--dark);">▶ Start Watching</button>
        </div>
      </div>
    </div>
  `;

  // if gate previously accepted - skip
  let accepted = false;
  try { accepted = localStorage.getItem("ohbro_gate") === "1"; } catch(e){ accepted = false; }

  if (accepted) {
    // remove gate element and run callback immediately
    onAccepted();
    return;
  }

  const btn = document.getElementById("start-watch");
  btn.addEventListener("click", () => {
    try { localStorage.setItem("ohbro_gate", "1"); } catch(e){}
    // fade out gate visually
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