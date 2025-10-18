// Gate screen control
document.addEventListener('DOMContentLoaded', function() {
    const gateScreen = document.getElementById('gate-screen');
    const enterBtn = document.getElementById('enter-btn');
    const mainContent = document.getElementById('main-content');

    enterBtn.addEventListener('click', function() {
        gateScreen.classList.add('gate-hidden');
        setTimeout(() => {
            mainContent.classList.remove('hidden');
            mainContent.classList.add('opacity-100');
        }, 500);
    });
});