// matruh game module
GAMES.matruh=(()=>{let rings=[],hits=0,goal=8,misses=0,nextSp=0,fl=[];
 const D=()=>Math.max(.75,1.5-Math.min(LV(),6)*.12);
 return{help:{en:"Tap each pearl when its ring shrinks close to it",ar:"اضغط على كل لؤلؤة عندما تقترب منها الحلقة"},
 start(){goal=8+Math.min(LV(),6)*2;hits=0;misses=0;rings=[];fl=[];nextSp=performance.now()+500},
 status(){return L2("Pearls ","اللآلئ ")+hits+"/"+goal+" · "+L2("Misses ","الأخطاء ")+misses},
 draw(t){const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#27b5c9");g.addColorStop(1,"#0c5e8a");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.strokeStyle="rgba(255,255,255,.12)";ctx.lineWidth=2;for(let y=24;y<H;y+=34){ctx.beginPath();for(let x=0;x<=W;x+=20){const yy=y+Math.sin(x/38+t/600+y)*3;x?ctx.lineTo(x,yy):ctx.moveTo(x,yy)}ctx.stroke()}
  if(hits<goal&&t>=nextSp&&rings.length<2){rings.push({x:60+Math.random()*(W-120),y:110+Math.random()*(H-300),t0:t});nextSp=t+D()*650+Math.random()*350}
  rings=rings.filter(r=>{if((t-r.t0)/(D()*1000)>=1.05){if(hits<goal){misses++;snd("bad");fl.push({x:r.x,y:r.y,s:L2("Missed","فاتت"),c:"#ff8a80",t0:t})}return false}return true});
  rings.forEach(r=>{const k=Math.min(1,(t-r.t0)/(D()*1000)),rad=18+(1-k)*52;ctx.fillStyle="#fff7e6";ctx.beginPath();ctx.arc(r.x,r.y,15,0,7);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=2;ctx.stroke();face(r.x,r.y+1,11,1);
   ctx.strokeStyle=k>=.62?"#fff4a8":"#ffffff";ctx.lineWidth=k>=.62?5:3;ctx.beginPath();ctx.arc(r.x,r.y,rad,0,7);ctx.stroke()});
  fl=fl.filter(f=>t-f.t0<700);fl.forEach(f=>{const k=(t-f.t0)/700;ctx.globalAlpha=1-k;ctx.font="bold 22px system-ui";ctx.textAlign="center";ctx.lineWidth=4;ctx.strokeStyle="#07344f";ctx.fillStyle=f.c;ctx.strokeText(f.s,f.x,f.y-24-k*30);ctx.fillText(f.s,f.x,f.y-24-k*30);ctx.globalAlpha=1})},
 tap(px,py){const now=performance.now();let bi=-1,bd=48;rings.forEach((r,i)=>{const d=Math.hypot(px-r.x,py-r.y);if(d<bd){bd=d;bi=i}});if(bi<0)return;const r=rings[bi],k=(now-r.t0)/(D()*1000);rings.splice(bi,1);
  if(k>=.62){hits++;snd("ok");fl.push({x:r.x,y:r.y,s:k>=.85?L2("PERFECT","ممتاز"):L2("Good","جيد"),c:"#fff4d0",t0:now});if(hits>=goal)winGame(misses===0?3:misses<=2?2:1)}
  else{misses++;snd("bad");fl.push({x:r.x,y:r.y,s:L2("Too early","مبكرًا"),c:"#ff8a80",t0:now})}}}})();
/* Kharga: fill the Latin square with temple symbols */
