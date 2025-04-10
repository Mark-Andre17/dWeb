if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/dWeb/sw.js', { 
      scope: '/dWeb/' 
    })
    .then(registration => {
      console.log('SW registered:', registration);
    })
    .catch(err => {
      console.log('SW registration failed:', err);
    });
  });
}