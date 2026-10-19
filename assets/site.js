(() => {
  const range = document.querySelector('[data-compare-range]');
  const comparison = document.querySelector('[data-comparison]');
  if (range && comparison) {
    range.addEventListener('input', () => comparison.style.setProperty('--cut', range.value + '%'));
  }
  const dialog = document.querySelector('#image-viewer');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('#viewer-image');
  const caption = dialog.querySelector('#viewer-caption');
  for (const link of document.querySelectorAll('[data-screen]')) {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || !url.pathname.startsWith('/assets/framediary/screens/')) return;
      event.preventDefault();
      image.src = url.href;
      image.alt = link.querySelector('img').alt;
      caption.textContent = link.dataset.screen;
      dialog.showModal();
    });
  }
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => image.removeAttribute('src'));
})();
