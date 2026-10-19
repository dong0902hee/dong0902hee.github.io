(() => {
  const comparison=document.querySelector('[data-comparison]');
  if(comparison){
    const update=value=>{comparison.setAttribute('aria-valuenow',String(value));comparison.style.setProperty('--cut',value+'%');};
    comparison.addEventListener('keydown',e=>{const value=Number(comparison.getAttribute('aria-valuenow'));const next={ArrowLeft:value-1,ArrowRight:value+1,Home:0,End:100}[e.key];if(next===undefined)return;e.preventDefault();update(Math.max(0,Math.min(100,next)));});
    const move=e=>{const r=comparison.getBoundingClientRect();update(Math.max(0,Math.min(100,Math.round((e.clientX-r.left)/r.width*100))));};
    comparison.addEventListener('pointerdown',e=>{if(e.button!==0)return;comparison.setPointerCapture(e.pointerId);move(e);});
    comparison.addEventListener('pointermove',e=>{if(comparison.hasPointerCapture(e.pointerId))move(e);});
    comparison.addEventListener('pointerup',e=>{if(comparison.hasPointerCapture(e.pointerId))comparison.releasePointerCapture(e.pointerId);});
  }
  const dialog=document.querySelector('#image-viewer');if(!dialog||typeof dialog.showModal!=='function')return;
  const image=dialog.querySelector('#viewer-image'),caption=dialog.querySelector('#viewer-caption');
  for(const link of document.querySelectorAll('[data-screen]'))link.addEventListener('click',event=>{
    if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    const url=new URL(link.href,location.href);
    if(url.origin!==location.origin||!url.pathname.startsWith('/assets/framediary/'))return;
    event.preventDefault();image.src=url.href;image.alt=link.querySelector('img').alt;caption.textContent=link.dataset.screen;dialog.showModal();
  });
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>image.removeAttribute('src'));
})();
