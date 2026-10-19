/* Qaitbay Citadel, Alexandria — Pharos signal memory */
definePlace({
  id:"alex",
  // map pin
  lon:29.89, lat:31.21,
  en:"Qaitbay Citadel, Alexandria",
  ar:"قلعة قايتباي، الإسكندرية",
  eraEn:"Mamluk era · 1477 AD",
  eraAr:"العصر المملوكي · 1477م",
  dEn:"A 15th-century fort built on the site of the ancient Pharos lighthouse.",
  dAr:"حصن من القرن الخامس عشر بُني على موقع فنار الإسكندرية القديم.",
  logo:"assets/images/alexandria.jpg",
  // challenge meta
  challenge:["Pharos signal memory","ذاكرة إشارات الفنار"],
  par:45,                // seconds for full speed bonus at level 1
  starTip:["No mistakes in the sequence","بدون أخطاء في التسلسل"],
  levels:(x,k)=>L2((5+Math.min(x,7))+" signals",(5+Math.min(x,7))+" إشارات"),
  fact:["Qaitbay Citadel was built in 1477 using stone from the ruins of the ancient Pharos lighthouse.","بُنيت قلعة قايتباي عام 1477م باستخدام أحجار من أنقاض فنار الإسكندرية القديم."],
  icon(ctx){ctx.beginPath();ctx.moveTo(-4,8);ctx.lineTo(-2,-4);ctx.lineTo(2,-4);ctx.lineTo(4,8);ctx.closePath();ctx.fill();ctx.fillRect(-4,-8,8,4);ctx.beginPath();ctx.moveTo(-9,-6);ctx.lineTo(-5,-6);ctx.moveTo(9,-6);ctx.lineTo(5,-6);ctx.stroke();},
  game:(()=>{const col=["#e6b84a","#2fb3a8","#d9534f","#4a8ee0"];let seq=[],ph="wait",i=0,next=0,lit=-1,litUntil=0,inp=0,bad=0,goal=5,errs=0;
 const lay=()=>{const s=Math.max(60,Math.min((W-36)/2,(H-270)/2,190)),cx=W/2,cy=H/2+20;return{s,p:[[cx-s-6,cy-s-6],[cx+6,cy-s-6],[cx-s-6,cy+6],[cx+6,cy+6]]}};
 function addRound(){seq.push(Math.floor(Math.random()*4));ph="show";i=0;next=performance.now()+700;lit=-1}
 return{help:{en:"Watch the lighthouse signals, then repeat them",ar:"راقب إشارات الفنار ثم كررها"},
 start(){goal=5+Math.min(LV(),7);errs=0;seq=[];ph="wait";inp=0;bad=0;lit=-1;addRound()},
 status(){return L2("Round ","الجولة ")+Math.min(seq.length,goal)+"/"+goal+" · "+(ph==="input"?L2("Your turn","دورك"):ph==="show"?L2("Watch…","شاهد…"):"…")},
 draw(t){const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#0b2a45");g.addColorStop(1,"#14405e");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  if(ph==="show"&&t>=next){if(i<seq.length){lit=seq[i];snd("p"+lit);litUntil=t+450;next=t+Math.max(420,750-LV()*110);i++}else{ph="input";inp=0;lit=-1}}
  if(t>litUntil)lit=-1;
  const{s,p}=lay(),top=p[0][1],cx=W/2;
  ctx.fillStyle="#e8dcc0";ctx.beginPath();ctx.moveTo(cx-16,top-10);ctx.lineTo(cx+16,top-10);ctx.lineTo(cx+10,top-80);ctx.lineTo(cx-10,top-80);ctx.closePath();ctx.fill();
  ctx.fillStyle="#6a4a1a";ctx.fillRect(cx-12,top-92,24,12);
  ctx.fillStyle=lit>=0?col[lit]:"#caa84a";ctx.beginPath();ctx.arc(cx,top-98,lit>=0?14:9,0,7);ctx.fill();face(cx,top-48,11,lit>=0?1:3);
  if(lit>=0){const r=ctx.createRadialGradient(cx,top-98,5,cx,top-98,90);r.addColorStop(0,col[lit]+"cc");r.addColorStop(1,"transparent");ctx.fillStyle=r;ctx.fillRect(cx-100,top-190,200,180)}
  p.forEach((q,k)=>{const on=lit===k;ctx.globalAlpha=on?1:.5;ctx.fillStyle=col[k];rr(q[0],q[1],s,s,18);ctx.fill();ctx.globalAlpha=1;ctx.lineWidth=on?6:2;ctx.strokeStyle=on?"#fff":"rgba(255,255,255,.35)";ctx.stroke()});
  if(t<bad){ctx.fillStyle="rgba(217,83,79,.25)";ctx.fillRect(0,0,W,H)}},
 tap(x,y){if(ph!=="input")return;const{s,p}=lay(),k=p.findIndex(q=>x>=q[0]&&x<=q[0]+s&&y>=q[1]&&y<=q[1]+s);if(k<0)return;const now=performance.now();lit=k;litUntil=now+250;snd(k===seq[inp]?"p"+k:"bad");
  if(k===seq[inp]){inp++;if(inp===seq.length){ph="wait";if(seq.length>=goal)winGame(errs===0?3:errs===1?2:1);else later(addRound,800)}}
  else{errs++;bad=now+500;ph="wait";later(()=>{ph="show";i=0;next=performance.now()+300},900)}}}})()
});
