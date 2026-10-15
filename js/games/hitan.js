// hitan game module
GAMES.hitan=(()=>{const P=[[.95,.58],[.88,.44],[.78,.38],[.62,.34],[.46,.36],[.32,.42],[.22,.40],[.12,.28],[.04,.36],[.12,.50],[.06,.64],[.14,.74],[.22,.62],[.34,.62],[.48,.68],[.64,.70],[.74,.70],[.86,.68]];let pts=[],nxt=0,errs=0,bad=0,N=8;
 const lay=()=>{const bw=Math.min(W-30,440),bh=bw*.62;return{bw,bh,x0:(W-bw)/2,y0:Math.max(92,(H-bh)/2)}};
 const at=(L,q)=>[L.x0+q[0]*L.bw,L.y0+q[1]*L.bh];
 return{help:{en:"Tap the numbered bones in order to rebuild the ancient whale",ar:"اضغط على العظام المرقمة بالترتيب لإعادة بناء الحوت القديم"},
 start(){N=Math.min(18,8+Math.min(LV(),5)*2);pts=Array.from({length:N},(_,i)=>P[Math.floor(i*P.length/N)]);nxt=0;errs=0;bad=0},
 status(){return L2("Bones ","العظام ")+nxt+"/"+N},
 draw(t){const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#e9d4a0");g.addColorStop(1,"#c9a96a");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);const L=lay();
  if(nxt>=N){ctx.beginPath();pts.forEach((q,i)=>{const[x,y]=at(L,q);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();ctx.fillStyle="rgba(70,120,160,.55)";ctx.fill()}
  ctx.strokeStyle="#6a4a1a";ctx.lineWidth=4;ctx.lineCap="round";ctx.beginPath();for(let i=0;i<Math.min(nxt,N);i++){const[x,y]=at(L,pts[i]);i?ctx.lineTo(x,y):ctx.moveTo(x,y)}if(nxt>=N){const[x,y]=at(L,pts[0]);ctx.lineTo(x,y)}ctx.stroke();
  if(nxt>=N){const[ex,ey]=at(L,[.82,.5]);face(ex,ey,16,1)}
  pts.forEach((q,i)=>{const[x,y]=at(L,q),on=i===nxt,dn=i<nxt;ctx.beginPath();ctx.arc(x,y,16,0,7);ctx.fillStyle=dn?"#6ccf7f":"#f6efe0";ctx.fill();ctx.lineWidth=2;ctx.strokeStyle=t<bad&&on?"#d9534f":"#6a4a1a";ctx.stroke();
   ctx.fillStyle="#3a2208";ctx.font="bold 13px system-ui";ctx.textAlign="center";ctx.fillText(i+1,x,y+5);
   if(on&&LV()<2){ctx.strokeStyle="rgba(255,255,255,.9)";ctx.lineWidth=3;ctx.beginPath();ctx.arc(x,y,20+3*Math.sin(t/150),0,7);ctx.stroke()}})},
 tap(px,py){if(nxt>=N)return;const L=lay();let hit=-1,bd=24;pts.forEach((q,i)=>{const[x,y]=at(L,q),d=Math.hypot(px-x,py-y);if(d<bd){bd=d;hit=i}});if(hit<0||hit<nxt)return;
  if(hit===nxt){nxt++;snd("tap");if(nxt>=N)winGame(errs===0?3:errs<=2?2:1)}else{errs++;bad=performance.now()+400;snd("bad")}}}})();
/* Marsa Matruh: catch the pearls (timing rings) */
