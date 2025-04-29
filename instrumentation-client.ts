// Set up performance monitoring
performance.mark('app-init')
 
// Initialize analytics
console.log('Analytics initialized')
 
// Set up error tracking
window.addEventListener('error', (event) => {
  // Send to your error tracking service
  reportError(event.error)
})