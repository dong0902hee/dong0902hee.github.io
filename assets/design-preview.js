const phones=document.querySelectorAll('.preview-phone');
const resize=new ResizeObserver(entries=>{for(const e of entries)e.target.style.setProperty('--preview-scale',e.contentRect.width/393);});
for(const phone of phones)resize.observe(phone);
