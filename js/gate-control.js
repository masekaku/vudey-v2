/**
 * Initializes the gate screen interaction.
 */
export function initGateControl() {
  const gateScreen = document.getElementById('gate-screen');
  const mainContent = document.getElementById('main-content');
  const enterButton = document.getElementById('enter-button');

  if (!gateScreen || !mainContent || !enterButton) {
    console.error('Gate control elements not found.');
    return;
  }

  enterButton.addEventListener('click', () => {
    // Start fading out the gate screen
    gateScreen.classList.add('transition-opacity', 'duration-300', 'ease-in-out', 'opacity-0');

    setTimeout(() => {
      // Hide gate screen completely
      gateScreen.style.display = 'none';
      
      // Show main content
      mainContent.classList.remove('hidden');
      
      // Force a reflow to ensure the transition applies
      void mainContent.offsetWidth; 

      // Start fading in the main content
      mainContent.classList.add('transition-opacity', 'duration-500', 'ease-in-out', 'opacity-100');
    }, 300); // Must match the gate's fade-out duration
  });
}
