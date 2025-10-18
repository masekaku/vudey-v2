// Gate Control Module
class GateControl {
    constructor() {
        this.gateScreen = document.getElementById('gateScreen');
        this.startButton = document.getElementById('startWatching');
        this.mainContent = document.getElementById('mainContent');
        
        this.init();
    }
    
    init() {
        // Add click event to start button
        this.startButton.addEventListener('click', () => {
            this.openGate();
        });
        
        // Prevent right-click context menu
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
    
    openGate() {
        // Hide gate screen with animation
        this.gateScreen.classList.add('hidden');
        
        // Show main content with animation
        setTimeout(() => {
            this.mainContent.classList.add('visible');
        }, 300);
        
        // Trigger player injection
        if (typeof window.playerInject !== 'undefined') {
            window.playerInject.injectPlayer();
        }
        
        // Dispatch custom event for other modules
        window.dispatchEvent(new CustomEvent('gateOpened'));
    }
}

// Initialize gate control when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.gateControl = new GateControl();
});