// Main Application Module
class OhBroApp {
    constructor() {
        this.init();
    }
    
    init() {
        console.log('OhBro.co initialized');
        
        // Additional anti-bot measures
        this.preventDevTools();
        this.detectAutomation();
    }
    
    preventDevTools() {
        // Basic protection against opening dev tools
        const devtools = /./;
        devtools.toString = function() {
            window.location.reload();
            return '';
        };
        
        console.log('%c', devtools);
    }
    
    detectAutomation() {
        // Detect common automation tools
        if (navigator.webdriver || 
            window.callPhantom || 
            window._phantom || 
            window.phantom) {
            window.location.href = 'about:blank';
        }
    }
}

// Initialize main application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.ohBroApp = new OhBroApp();
});