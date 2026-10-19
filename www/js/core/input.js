/* ---------- input ---------- */
const ptr=new Map();let pinch0=0,moved=0;
cv.addEventListener("pointerdown",e=>{cv.setPointerCapture(e.pointerId);
 if(mode==="map"){mptr.set(e.pointerId,{x:e.clientX,y:e.clientY});mmoved=0;mpinch=0;return}
 if(cur.game){if(runWon&&!cur.bonus)return;cur.game.tap(e.clientX,e.clientY);return}
 ptr.set(e.pointerId,{x:e.clientX,y:e.clientY});moved=0;pinch0=0});
cv.addEventListener("pointermove",e=>{if(mode==="map"){mapMove(e);return}if(mode==="world"&&cur.game){if(cur.game.move&&e.buttons)cur.game.move(e.clientX,e.clientY);return}if(mode!=="world"||!ptr.has(e.pointerId))return;
 const p=ptr.get(e.pointerId),nx=e.clientX,ny=e.clientY;
 if(ptr.size===1){V.ox+=nx-p.x;V.oy+=ny-p.y;moved+=Math.abs(nx-p.x)+Math.abs(ny-p.y);p.x=nx;p.y=ny;clampV()}
 else{p.x=nx;p.y=ny;const[a,b]=[...ptr.values()],d=Math.hypot(a.x-b.x,a.y-b.y);moved=99;if(pinch0)zoomAt((a.x+b.x)/2,(a.y+b.y)/2,d/pinch0);pinch0=d}});
cv.addEventListener("pointerup",e=>{if(mode==="map"){mapUp(e);return}if(mode!=="world")return;if(ptr.size===1&&moved<8&&ptr.has(e.pointerId))worldTap(e.clientX,e.clientY);ptr.delete(e.pointerId);pinch0=0});
cv.addEventListener("pointercancel",e=>{ptr.delete(e.pointerId);mptr.delete(e.pointerId);pinch0=0;mpinch=0});
cv.addEventListener("wheel",e=>{if(mode==="map"){e.preventDefault();mapZoom(e.clientX,e.clientY,e.deltaY<0?1.12:.9);return}if(mode==="world"){e.preventDefault();zoomAt(e.clientX,e.clientY,e.deltaY<0?1.1:.9)}},{passive:false});
