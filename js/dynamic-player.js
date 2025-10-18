// dynamic-player.js
// renders main layout matching wireframe and integrates Plyr (optional for controls)
export function renderMain(root) {
  root.innerHTML = `
    <div class="app-centered">
      <div class="container">
        <header class="header" role="banner">
          <div class="logo-pill">StremOkep</div>
          <button aria-label="menu" class="logo-pill" style="width:48px;height:48px;border-radius:10px;">☰</button>
        </header>

        <div style="padding:22px 0;">
          <div class="player-box card retro-outline">
            <video id="video-player" controls playsinline></video>
          </div>

          <div class="disclaimer" style="margin-top:18px;">
            <div class="icon">❤</div>
            <div style="font-size:14px;color:var(--dark);line-height:1.45;">
              Iklan mungkin menyebalkan, tetapi itu satu-satunya cara kami untuk menjaga server. Kesabaran Anda sangat kami hargai dan kami harap layanan kami sepadan dengan usaha Anda.
            </div>
          </div>

          <div class="sponsor-list" style="margin-top:18px;">
            <button class="sponsor-btn">Tombol sponsor</button>
            <button class="sponsor-btn">Tombol sponsor</button>
            <button class="sponsor-btn">Tombol sponsor</button>
          </div>

          <div class="ad-box" role="region" aria-label="advertisement" style="margin-top:18px;">
            <div style="color:var(--grayish);font-size:18px;">Iklan 300×250</div>
          </div>

          <div class="footer-pill" style="margin-top:18px;">
            © 2025 ohbro.co — Protocol | Terms | Contact
          </div>
        </div>
      </div>
    </div>
  `;
}