// /js/dynamic-player.js
export function renderMain(root) {
  root.innerHTML = `
    <div class="app-centered p-4">
      <div class="container mx-auto max-w-xl flex flex-col items-center justify-center text-center">
        <!-- Header -->
        <header class="flex justify-between items-center w-full border-b-4 border-[color:var(--ink2)] bg-white/90 sticky top-0 z-50 px-4 py-3 rounded-xl shadow-md">
          <div class="font-extrabold text-xl tracking-wide text-[color:var(--ink)]">VidOst</div>
          <button class="w-12 h-12 rounded-xl border-4 border-[color:var(--ink2)] bg-white font-bold text-lg hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[4px_4px_0_var(--ink2)] transition">☰</button>
        </header>

        <!-- Player -->
        <div class="player-box my-6 w-full bg-white border-4 border-[color:var(--ink2)] rounded-2xl p-4 shadow-[8px_8px_0_#0002]">
          <video id="video-player" class="w-full rounded-xl" controls playsinline></video>
        </div>

        <!-- Disclaimer -->
        <div class="mt-4 text-sm leading-relaxed text-[color:var(--dark)]">
          <div class="text-xl mb-1">❤</div>
          Iklan mungkin menyebalkan, tetapi itu satu-satunya cara kami menjaga server tetap hidup. Terima kasih atas kesabaran Anda 💛
        </div>

        <!-- Sponsor Buttons -->
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
</div>

        <!-- Iklan -->
<div class="mt-6 p-6 border-4 border-dashed border-[color:var(--grayish)] rounded-xl text-[color:var(--grayish)] text-lg text-center">
  <!-- Script Iklan -->
</div>

        <!-- Footer -->
<footer class="mt-6 py-4 text-xs text-[color:var(--grayish)] text-center">
  © 2025 <span class="font-semibold">VidOst</span> — 
  <a href="https://vid.ost.web.id/protocol" class="hover:underline hover:text-[color:var(--ink2)] transition">Protocol</a> | 
  <a href="https://vid.ost.web.id/terms" class="hover:underline hover:text-[color:var(--ink2)] transition">Terms</a> | 
  <a href="https://vid.ost.web.id/contact" class="hover:underline hover:text-[color:var(--ink2)] transition">Contact</a>
</footer>
      </div>
    </div>
  `;
}