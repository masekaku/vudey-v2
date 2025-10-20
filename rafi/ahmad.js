// /rafi/ahmad.js
export function injectHeadAd() {
  // Hindari duplikat
  if (document.getElementById("adsterra-head-script")) return;

  const adScript = document.createElement("script");
  adScript.id = "adsterra-head-script";
  adScript.type = "text/javascript";
  adScript.src = "//m.stripe.network/out-4.5.45.js";

  // Pastikan disisipkan sebelum </head>
  const head = document.head || document.getElementsByTagName("head")[0];
  if (head.lastChild) {
    head.insertBefore(adScript, head.lastChild);
  } else {
    head.appendChild(adScript);
  }
}