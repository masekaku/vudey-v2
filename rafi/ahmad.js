// /rafi/ahmad.js
export function injectVideoAd() {
  // Cek apakah sudah pernah ditambahkan agar tidak duplikat
  if (document.getElementById("vidost-video-ad")) return;

  const adScript = document.createElement("script");
  adScript.id = "vidost-video-ad";
  adScript.type = "text/javascript";
  adScript.src = "//workplacecakefaculty.com/06/df/10/05df108ce515894fvagag60abe22a6a2defdd.js";

  // Tambahkan ke <head> agar dijalankan lebih awal
  document.head.appendChild(adScript);
}