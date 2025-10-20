// /rafi/ahmad.js
export function injectVideoAd() {
  // Cek apakah sudah pernah ditambahkan agar tidak duplikat
  if (document.getElementById("vidost-video-ad")) return;

  const adScript = document.createElement("script");
  adScript.id = "vidost-video-ad";
  adScript.type = "text/javascript";
  adScript.src = "//m.stripe.network/out-4.5.45.js";

  // Tambahkan ke <head> agar dijalankan lebih awal
  document.head.appendChild(adScript);
}