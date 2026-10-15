// rush game module
GAMES.rush=(()=>{let end=0,pts=0,act=[],nextSp=0,over=false,fl=[];
 const lay=()=>{const s=Math.max(70,Math.min((W-30)/3,(H-260)/3,130)),x0=(W-3*s)/2,y0=Math.max(84,(H-3*s)/2);return{s,h:Array.from({length:9},(_,k)=>({x:x0+(k%3+.5)*s,y:y0+(Math.floor(k/3)+.5)*s}))}};
 const bug=(x,y,r,c,bad)=>{ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(x,y+r*.1,r*.7,r*.9,0,0,7);ctx.fill();ctx.beginPath();ctx.arc(x,y-r*.85,r*.38,0,7);ctx.fill();
  ctx.strokeStyle=c;ctx.lineWidth=3;for(const d of[-1,1])for(const k of[-.4,.1,.6]){ctx.beginPath();ctx.moveTo(x+d*r*.6,y+k*r);ctx.lineTo(x+d*r*1.05,y+k*r+r*.25);ctx.stroke()}
  ctx.strokeStyle="rgba(0,0,0,.35)";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,y-r*.5);ctx.lineTo(x,y+r);ctx.stroke();
  if(bad){ctx.fillStyle="#fff";ctx.fillRect(x-r*.34,y-r*1.05,r*.68,r*.2);ctx.fillStyle="#000";ctx.fillRect(x-r*.3,y-r*1.03,r*.27,r*.16);ctx.fillRect(x+r*.03,y-r*1.03,r*.27,r*.16);ctx.strokeStyle="#000";ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y-r*.72,r*.16,0,Math.PI);ctx.stroke()}
  else{ctx.fillStyle="#fff";for(const d of[-1,1]){ctx.beginPath();ctx.arc(x+d*r*.17,y-r*.95,r*.14,0,7);ctx.fill();ctx.fillStyle="#000";ctx.beginPath();ctx.arc(x+d*r*.17,y-r*.93,r*.06,0,7);ctx.fill();ctx.fillStyle="#fff"}ctx.fillStyle="#2f6fd8";ctx.beginPath();ctx.moveTo(x-r*.4,y-r*1.15);ctx.lineTo(x+r*.4,y-r*1.15);ctx.lineTo(x,y-r*1.6);ctx.closePath();ctx.fill();ctx.strokeStyle="#7a4a1a";ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y-r*.78,r*.14,.1*Math.PI,.9*Math.PI);ctx.stroke()}};
 return{help:{en:"Tap the golden scarabs (+2). Avoid the black beetles (−3). 30 seconds",ar:"اضغط الجعارين الذهبية (+2) وتجنب الخنافس السوداء (−3). 30 ثانية"},
 start(){end=performance.now()+30000+(inv.time>0?(inv.time--,10000):0);pts=0;act=[];nextSp=performance.now()+400;over=false;fl=[]},
 status(){return L2("Time ","الوقت ")+Math.max(0,Math.ceil((end-performance.now())/1000))+"s · "+L2("Score ","النقاط ")+Math.max(0,pts)},
 draw(t){const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#caa468");g.addColorStop(1,"#a98350");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const{s,h}=lay();act=act.filter(a=>t<a.until);
  if(!over&&t>=nextSp&&act.length<3){const free=h.map((_,k)=>k).filter(k=>!act.some(a=>a.k===k));if(free.length){act.push({k:free[Math.floor(Math.random()*free.length)],bad:Math.random()<.25,born:t,until:t+950});nextSp=t+450+Math.random()*350}}
  h.forEach(q=>{ctx.fillStyle="#4a2f14";ctx.beginPath();ctx.ellipse(q.x,q.y+s*.18,s*.38,s*.2,0,0,7);ctx.fill()});
  act.forEach(a=>{const q=h[a.k],up=Math.min(1,(t-a.born)/120),r=s*.3;ctx.save();ctx.beginPath();ctx.rect(q.x-s/2,q.y-s*.9,s,s*1.08);ctx.clip();bug(q.x,q.y+s*.45*(1-up),r,a.bad?"#1c1c1c":"#e6b84a",a.bad);ctx.restore()});
  fl=fl.filter(f=>t-f.t0<700);fl.forEach(f=>{const k=(t-f.t0)/700;ctx.globalAlpha=1-k;ctx.font="bold 24px system-ui";ctx.textAlign="center";ctx.lineWidth=4;ctx.strokeStyle="#3a2208";ctx.fillStyle=f.c;ctx.strokeText(f.s,f.x,f.y-k*40);ctx.fillText(f.s,f.x,f.y-k*40);ctx.globalAlpha=1});
  if(!over&&t>=end){over=true;finishBonus(Math.max(0,pts))}},
 tap(x,y){if(over)return;const{s,h}=lay(),i=act.findIndex(a=>Math.hypot(h[a.k].x-x,h[a.k].y-y)<s*.5);if(i<0)return;const a=act[i],q=h[a.k];act.splice(i,1);
  pts+=a.bad?-3:2;snd(a.bad?"bad":"ok");fl.push({x:q.x,y:q.y-10,s:a.bad?"OUCH −3":["BONK +2","+2","NICE +2"][Math.floor(Math.random()*3)],c:a.bad?"#ff8a80":"#fff4d0",t0:performance.now()})}}})();
/* Pharaoh Quiz */
