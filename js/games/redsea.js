// redsea game module
GAMES.redsea=(()=>{let rd=0,ph="watch",ps=0,fish=[],ans=0,opts=[],picked=-1,goal=3,wr=0;const COL=["#ff8a3d","#3d8bff","#ffd93d"];
 function startRound(){ph="watch";ps=performance.now();picked=-1;ans=2+Math.floor(Math.random()*(5+Math.min(LV(),6)));fish=[];
  const mk=c=>fish.push({c,d:Math.random()*3.5,y:Math.random(),dir:Math.random()<.5?1:-1,sz:.8+Math.random()*.5});
  for(let i=0;i<ans;i++)mk(0);const o=3+Math.min(LV(),6)+Math.floor(Math.random()*4);for(let i=0;i<o;i++)mk(1+Math.floor(Math.random()*2));
  const set=new Set([ans]);while(set.size<4)set.add(Math.max(1,ans+Math.floor(Math.random()*5)-2));opts=[...set].sort((a,b)=>a-b)}
 const lay=()=>{const bw=Math.min(W-40,300),bh=54;return{bw,bh,x:(W-bw)/2,y0:H*.42}};
 const drawFish=(x,y,f)=>{const r=22*f.sz,d=f.dir;ctx.fillStyle=COL[f.c];ctx.beginPath();ctx.ellipse(x,y,r,r*.6,0,0,7);ctx.fill();
  ctx.beginPath();ctx.moveTo(x-d*r*.8,y);ctx.lineTo(x-d*r*1.5,y-r*.55);ctx.lineTo(x-d*r*1.5,y+r*.55);ctx.closePath();ctx.fill();
  if(f.c===0){ctx.fillStyle="#fff";ctx.fillRect(x-d*r*.1-3,y-r*.55,6,r*1.1)}
  ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(x+d*r*.5,y-r*.2,r*.27,0,7);ctx.fill();ctx.fillStyle="#000";ctx.beginPath();ctx.arc(x+d*r*.58,y-r*.2+Math.sin(x/20)*2,r*.12,0,7);ctx.fill();if(f.c===1){ctx.strokeStyle="#000";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x+d*r*.75,y+r*.15);ctx.quadraticCurveTo(x+d*r*1.05,y+r*.05,x+d*r*1.15,y+r*.3);ctx.stroke()}};
 return{help:{en:"Watch the fish swim by, then tell how many ORANGE fish you saw",ar:"شاهد الأسماك ثم قل كم سمكة برتقالية رأيت"},
 start(){goal=3+Math.floor(Math.min(LV(),4)/2);wr=0;rd=0;startRound()},
 status(){return L2("Round ","الجولة ")+Math.min(rd+1,goal)+"/"+goal+" · "+(ph==="watch"?L2("Watch…","شاهد…"):L2("Count!","عدّ!"))},
 draw(t){const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#1b8fc7");g.addColorStop(1,"#0a3a5e");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  for(let i=0;i<14;i++){ctx.fillStyle=["#e8607a","#f0a040","#b04aa8"][i%3];ctx.beginPath();ctx.arc((i+.5)*W/14,H-8+Math.sin(i*2.3)*8,26+(i%4)*7,Math.PI,0);ctx.fill()}
  ctx.fillStyle="rgba(255,255,255,.25)";for(let i=0;i<8;i++){ctx.beginPath();ctx.arc((i*97)%W,H-((t/20+i*70)%H),3+i%3,0,7);ctx.fill()}
  const el0=(t-ps)/1000,sp=W/(3.4-.25*Math.min(LV(),4));
  if(ph==="watch"){fish.forEach(f=>{const el=el0-f.d;if(el<0)return;const x=f.dir>0?-60+el*sp:W+60-el*sp;if(x>-80&&x<W+80)drawFish(x,90+f.y*(H-300),f)});if(el0>7.3)ph="ask"}
  else{const{bw,bh,x,y0}=lay(),ar=lang==="ar";ctx.textAlign="center";ctx.fillStyle="#fff";ctx.font="bold 20px system-ui";
   wrapT(ar?"كم سمكة برتقالية مرّت؟":"How many orange fish passed?",bw).forEach((l,k)=>ctx.fillText(l,W/2,y0-30+k*26));
   opts.forEach((v,k)=>{const y=y0+k*(bh+10);let c="#2a3350";if(picked>=0){if(v===ans)c="#2e7d4f";else if(k===picked)c="#a33a3a"}ctx.fillStyle=c;rr(x,y,bw,bh,12);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=1.5;ctx.stroke();ctx.fillStyle="#fff";ctx.font="bold 22px system-ui";ctx.fillText(v,W/2,y+bh/2+8)})}},
 tap(px,py){if(ph!=="ask"||picked>=0)return;const{bw,bh,x,y0}=lay(),k=opts.findIndex((v,i)=>{const y=y0+i*(bh+10);return px>=x&&px<=x+bw&&py>=y&&py<=y+bh});if(k<0)return;picked=k;
  if(opts[k]===ans){snd("ok");rd++;setTimeout(()=>{if(rd>=goal)winGame(wr===0?3:wr===1?2:1);else startRound()},900)}else{wr++;snd("bad");setTimeout(startRound,1300)}}}})();
/* ---------- MORE PLACES: Abydos, White Desert, Valley of the Whales, Marsa Matruh, Kharga ---------- */
const glyph=(type,x,y,s,rot)=>{ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.scale(s,s);art([0,0,type],0,-2);ctx.restore()};
const papyrus=()=>{const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#d8bf8a");g.addColorStop(1,"#b99a62");ctx.fillStyle=g;ctx.fillRect(0,0,W,H)};
/* Abydos: find the odd hieroglyph */
