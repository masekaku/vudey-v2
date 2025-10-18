/**
 * Populates the sponsor links and ad box.
 * @param {object} data - The full data object from JSON.
 */
export function initAutoPlaylist(data) {
  const { sponsors, ad } = data;
  const sponsorContainer = document.getElementById('sponsor-links-container');
  const adBox = document.getElementById('ad-space-box');

  // Populate Sponsors
  if (sponsorContainer && sponsors) {
    sponsorContainer.innerHTML = sponsors.map(sponsor => `
      <a href="${sponsor.url}" 
         class="block w-full rounded-[12px] border-2 border-main bg-white p-[14px] text-center font-bold text-main shadow-2d transition-all duration-150 ease-in-out hover:-translate-y-[2px] hover:shadow-2d-hover">
        ${sponsor.text}
      </a>
    `).join('');
  }

  // Populate Ad Box
  if (adBox && ad) {
    adBox.innerHTML = `
      <span class="text-lg font-medium text-main/40">${ad.text}</span>
    `;
  }
}
