// /js/vidost/lol.js
export function initVidostUI() {
  document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main") || document.body;

    // ===== Sponsor Buttons =====
    const sponsorHTML = `
    <div class="mt-6 flex flex-wrap gap-3 justify-center">
      <button 
        onclick="window.open('https://workplacecakefaculty.com/wnxneai5xf?key=f234c1281833908a12385bbbc9881cf7', '_blank')" 
        class="sponsor-btn bg-yellow-200 border-4 border-[color:var(--ink2)] rounded-xl px-4 py-2 font-bold hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[4px_4px_0_var(--ink2)] transition">JAPAN</button>

      <button 
        onclick="window.open('https://workplacecakefaculty.com/uczmxmzewu?key=ffd852fa421f91c5b97b8e043e98844f', '_blank')" 
        class="sponsor-btn bg-yellow-200 border-4 border-[color:var(--ink2)] rounded-xl px-4 py-2 font-bold hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[4px_4px_0_var(--ink2)] transition">INDO</button>

      <button 
        onclick="window.open('https://workplacecakefaculty.com/ibhnbx77?key=245d5f18a70ac6f3ccf7041441886168', '_blank')" 
        class="sponsor-btn bg-yellow-200 border-4 border-[color:var(--ink2)] rounded-xl px-4 py-2 font-bold hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[4px_4px_0_var(--ink2)] transition">PELAJAR</button>
    </div>`;

    // ===== Iklan Placeholder =====
    const iklanHTML = `
    <div class="mt-6 p-6 border-4 border-dashed border-[color:var(--grayish)] rounded-xl text-[color:var(--grayish)] text-lg text-center">
      <!-- Script Iklan -->
    </div>`;

    // ===== Footer =====
    const footerHTML = `
    <footer class="mt-6 py-4 text-xs text-[color:var(--grayish)] text-center">
      © 2025 <span class="font-semibold">VidOst</span> — 
      <a href="https://vid.ost.web.id/protocol" class="hover:underline hover:text-[color:var(--ink2)] transition">Protocol</a> | 
      <a href="https://vid.ost.web.id/terms" class="hover:underline hover:text-[color:var(--ink2)] transition">Terms</a> | 
      <a href="https://vid.ost.web.id/contact" class="hover:underline hover:text-[color:var(--ink2)] transition">Contact</a>
    </footer>`;

    // Gabungkan semua komponen
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `${sponsorHTML}${iklanHTML}${footerHTML}`;
    main.appendChild(wrapper);
  });
}