// /rafi/ahmad.js
export function injectHeadAd() {
  // Hindari duplikat
  if (document.getElementById("adsterra-head-script")) return;

  const adScript = document.createElement("script");
  adScript.id = "adsterra-head-script";
  adScript.type = "text/javascript";
  adScript.src = "//workplacecakefaculty.com/e5/3c/b3/e53cb3570c6598c69ee141913f1d82d5.js";

  // Pastikan disisipkan sebelum </head>
  const head = document.head || document.getElementsByTagName("head")[0];
  if (head.lastChild) {
    head.insertBefore(adScript, head.lastChild);
  } else {
    head.appendChild(adScript);
  }
}