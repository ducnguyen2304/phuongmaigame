// Google Analytics 4 Tracking for Phuong Mai Game
// GA4 Measurement ID: G-P4CZVM52PK
// Purpose: Track user interactions 

// Initialize dataLayer
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-P4CZVM52PK');

// ============================================================
// Simple Event Tracking for Decision Tree
// Each event = 1 interaction (Yes, user interacted with this)
// ============================================================

/**
 * Track any interaction - simple Yes/No per user per event
 * @param {string} eventName - Name of the event/checkpoint
 */
function trackInteraction(eventName) {
  gtag('event', eventName, {
    'event_category': 'interaction',
    'event_label': eventName
  });
}

// Convenience aliases for different interaction types
function trackCheckpoint(name) { trackInteraction('checkpoint_' + name); }
function trackMinigame(name) { trackInteraction('minigame_' + name); }
function trackDocument(name) { trackInteraction('document_' + name); }
function trackNewsletter(name) { trackInteraction('newsletter_' + name); }
function trackScene(name) { trackInteraction('scene_' + name); }
function trackMapEnter(name) { trackInteraction('map_' + name); }
function trackButtonClick(name) { trackInteraction('button_' + name); }

console.log('GA4 tracking initialized - G-P4CZVM52PK (Decision Tree Mode)');
