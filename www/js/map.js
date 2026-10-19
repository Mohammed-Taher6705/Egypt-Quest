const OUT=[[25.15,31.65],[29.9,31.2],[32.3,31.25],[34.25,31.3],[34.9,29.5],[34.5,28.5],[34.25,27.75],[33.6,28.4],[32.65,29.9],[32.6,29.5],[33.4,28.1],[33.8,27.25],[34.9,25.5],[36.9,22],[25,22]];
const NILE=[[32.5,22.1],[32.9,24.1],[32.65,25.7],[31.2,27.2],[30.8,28.5],[31.24,30.04],[31.3,31.0],[31.8,31.4]];
const GOVS=[
 ["Matrouh","\u0645\u0637\u0631\u0648\u062d",27.45,30.15],["Alexandria","\u0627\u0644\u0625\u0633\u0643\u0646\u062f\u0631\u064a\u0629",29.92,31.18],["Beheira","\u0627\u0644\u0628\u062d\u064a\u0631\u0629",30.35,30.65],
 ["Kafr El Sheikh","\u0643\u0641\u0631 \u0627\u0644\u0634\u064a\u062e",30.95,31.28],["Gharbia","\u0627\u0644\u063a\u0631\u0628\u064a\u0629",31.00,30.88],["Monufia","\u0627\u0644\u0645\u0646\u0648\u0641\u064a\u0629",30.85,30.58],
 ["Qalyubia","\u0627\u0644\u0642\u0644\u064a\u0648\u0628\u064a\u0629",31.18,30.32],["Dakahlia","\u0627\u0644\u062f\u0642\u0647\u0644\u064a\u0629",31.40,31.12],["Damietta","\u062f\u0645\u064a\u0627\u0637",31.82,31.42],
 ["Port Said","\u0628\u0648\u0631\u0633\u0639\u064a\u062f",32.30,31.28],["Ismailia","\u0627\u0644\u0625\u0633\u0645\u0627\u0639\u064a\u0644\u064a\u0629",32.30,30.58],["Suez","\u0627\u0644\u0633\u0648\u064a\u0633",32.55,30.02],
 ["North Sinai","\u0634\u0645\u0627\u0644 \u0633\u064a\u0646\u0627\u0621",33.55,30.78],["South Sinai","\u062c\u0646\u0648\u0628 \u0633\u064a\u0646\u0627\u0621",33.72,28.55],["Cairo","\u0627\u0644\u0642\u0627\u0647\u0631\u0629",31.25,30.08],
 ["Giza","\u0627\u0644\u062c\u064a\u0632\u0629",30.88,29.92],["Fayoum","\u0627\u0644\u0641\u064a\u0648\u0645",30.82,29.32],["Beni Suef","\u0628\u0646\u064a \u0633\u0648\u064a\u0641",31.00,28.90],
 ["Minya","\u0627\u0644\u0645\u0646\u064a\u0627",30.75,28.12],["Asyut","\u0623\u0633\u064a\u0648\u0637",31.18,27.18],["Sohag","\u0633\u0648\u0647\u0627\u062c",31.70,26.50],
 ["Qena","\u0642\u0646\u0627",32.72,26.15],["Luxor","\u0627\u0644\u0623\u0642\u0635\u0631",32.65,25.70],["Aswan","\u0623\u0633\u0648\u0627\u0646",32.90,24.10],
 ["Red Sea","\u0627\u0644\u0628\u062d\u0631 \u0627\u0644\u0623\u062d\u0645\u0631",34.05,26.55],["New Valley","\u0627\u0644\u0648\u0627\u062f\u064a \u0627\u0644\u062c\u062f\u064a\u062f",28.55,25.45],["Sharqia","\u0627\u0644\u0634\u0631\u0642\u064a\u0629",31.55,30.72]
];

/* ---------- MAP ---------- */
const MH=()=>H-adH; // map area height (screen minus ad banner)
const mapS=()=>Math.min(W*.92/12,(MH()-170)/9.8);
const mp=(lo,la)=>{const s=mapS()*MV.z;return[W/2+MV.ox+(lo-31)*s,MH()/2+8+MV.oy-(la-26.9)*s]};
const MV={z:1,ox:0,oy:0};const mptr=new Map();let mmoved=0,mpinch=0,DOTS=null;
const MBR=[[32.4,31.25],[32.55,29.95]],ROSETTA=[[31.24,30.1],[30.95,30.9],[30.42,31.45]];
function clampMV(){MV.z=Math.max(1,Math.min(3.2,MV.z));const lim=(MV.z-1)*Math.max(W,H)*.42;MV.ox=Math.max(-lim,Math.min(lim,MV.ox));MV.oy=Math.max(-lim,Math.min(lim,MV.oy));if(MV.z===1){MV.ox=0;MV.oy=0}}
function mapZoom(px,py,f){const nz=Math.max(1,Math.min(3.2,MV.z*f)),r=nz/MV.z,cx=px-W/2,cy=py-MH()/2-8;MV.ox=cx-(cx-MV.ox)*r;MV.oy=cy-(cy-MV.oy)*r;MV.z=nz;clampMV()}
function mapMove(e){const p=mptr.get(e.pointerId);if(!p)return;
 if(mptr.size===1){MV.ox+=e.clientX-p.x;MV.oy+=e.clientY-p.y;mmoved+=Math.abs(e.clientX-p.x)+Math.abs(e.clientY-p.y);p.x=e.clientX;p.y=e.clientY;clampMV()}
 else{p.x=e.clientX;p.y=e.clientY;const[a,b]=[...mptr.values()],d=Math.hypot(a.x-b.x,a.y-b.y);mmoved=99;if(mpinch)mapZoom((a.x+b.x)/2,(a.y+b.y)/2,d/mpinch);mpinch=d}}
function mapUp(e){if(mptr.size===1&&mmoved<8&&mptr.has(e.pointerId))mapPick(e.clientX,e.clientY);mptr.delete(e.pointerId);mpinch=0}
function mkDots(){DOTS=[];let sd=5;const r=()=>(sd=(sd*16807)%2147483647)/2147483647;while(DOTS.length<170){const lo=25+r()*12,la=22+r()*9.7;if(inEgypt(lo,la))DOTS.push([lo,la,r()])}}
function lineMap(pts){ctx.beginPath();pts.forEach(([a,b],i)=>{const p=mp(a,b);i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1])})}
function smoothMap(pts){ctx.beginPath();pts.forEach(([a,b],i)=>{const p=mp(a,b);if(!i)ctx.moveTo(p[0],p[1]);else{const q=mp(...pts[i-1]);ctx.quadraticCurveTo(q[0],q[1],(q[0]+p[0])/2,(q[1]+p[1])/2)}})}
function alongNile(u){const n=NILE.length-1,f=u*n,i=Math.min(n-1,Math.floor(f)),k=f-i,a=NILE[i],b=NILE[i+1];return mp(a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k)}
function boat(x,y,s,dir){ctx.save();ctx.translate(x,y);ctx.scale(dir*s,s);ctx.fillStyle="#7a4a1a";ctx.beginPath();ctx.moveTo(-10,0);ctx.lineTo(10,0);ctx.lineTo(6,5);ctx.lineTo(-6,5);ctx.closePath();ctx.fill();ctx.fillStyle="#fff";ctx.beginPath();ctx.moveTo(0,-14);ctx.lineTo(9,-1);ctx.lineTo(0,-1);ctx.closePath();ctx.fill();ctx.restore()}
function camel(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle="#8a5a28";ctx.beginPath();ctx.ellipse(0,0,10,5,0,0,7);ctx.fill();ctx.beginPath();ctx.arc(-3,-6,4,0,7);ctx.arc(3,-6,4,0,7);ctx.fill();ctx.fillRect(8,-10,3,8);ctx.beginPath();ctx.arc(11,-11,3,0,7);ctx.fill();ctx.fillRect(-7,3,2,7);ctx.fillRect(5,3,2,7);ctx.restore()}
function mapLogo(img,x,y,r){const size=Math.min(img.naturalWidth||1,img.naturalHeight||1),sx=((img.naturalWidth||size)-size)/2,sy=((img.naturalHeight||size)-size)/2;ctx.save();ctx.beginPath();ctx.arc(x,y,r-1,0,Math.PI*2);ctx.clip();ctx.drawImage(img,sx,sy,size,size,x-r+1,y-r+1,2*r-2,2*r-2);ctx.restore();ctx.save();ctx.beginPath();ctx.arc(x,y,r-1,0,Math.PI*2);ctx.strokeStyle="#f7d58a";ctx.lineWidth=2;ctx.stroke();ctx.restore()}
/* Fallback marker art when a place has no logo image: drawn by the place's own icon(ctx). */
function icon(st,x,y,k){ctx.save();ctx.translate(x,y);ctx.scale(k,k);ctx.fillStyle="#4a2f0a";ctx.strokeStyle="#4a2f0a";ctx.lineWidth=1.8;ctx.lineJoin="round";
 try{st.icon&&st.icon(ctx)}catch(e){}
 ctx.restore()}
function drawMap(t){
 if(!DOTS)mkDots();
 const ar=lang==="ar",s0=mapS()*MV.z;
 let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,TH[theme].s1);g.addColorStop(1,TH[theme].s2);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
 ctx.strokeStyle="rgba(255,255,255,.10)";ctx.lineWidth=2;
 for(let y=24;y<H;y+=34){ctx.beginPath();for(let x=0;x<=W;x+=20){const yy=y+Math.sin(x/38+t/700+y)*3;x?ctx.lineTo(x,yy):ctx.moveTo(x,yy)}ctx.stroke()}
 const lp=()=>{ctx.beginPath();OUT.forEach(([a,b],i)=>{const[x,y]=mp(a,b);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath()};
 lp();ctx.save();ctx.shadowColor="rgba(0,0,0,.35)";ctx.shadowBlur=18;ctx.fillStyle="#d9b46c";ctx.fill();ctx.restore();
 const g2=ctx.createLinearGradient(0,mp(31,31.7)[1],0,mp(31,22)[1]);g2.addColorStop(0,TH[theme].l1);g2.addColorStop(1,TH[theme].l2);ctx.fillStyle=g2;ctx.fill();
 ctx.lineWidth=3;ctx.strokeStyle="#9a7536";ctx.stroke();
 ctx.save();lp();ctx.clip();
 const zz=Math.sqrt(MV.z);DOTS.forEach(d=>{const[x,y]=mp(d[0],d[1]);ctx.fillStyle="rgba(120,80,30,.2)";ctx.beginPath();ctx.ellipse(x,y,(5+d[2]*8)*zz,(2+d[2]*3)*zz,0,0,7);ctx.fill()});
 ctx.lineCap="round";ctx.strokeStyle="rgba(106,168,79,.55)";smoothMap(NILE);ctx.lineWidth=Math.max(10,s0*.34);ctx.stroke();smoothMap(ROSETTA);ctx.lineWidth=Math.max(6,s0*.18);ctx.stroke();
 const c0=mp(31.24,30.05),r0=mp(30.4,31.45),d0=mp(31.8,31.4);ctx.fillStyle="rgba(106,168,79,.5)";ctx.beginPath();ctx.moveTo(c0[0],c0[1]);ctx.lineTo(r0[0],r0[1]);ctx.lineTo(d0[0],d0[1]);ctx.closePath();ctx.fill();
 ctx.restore();
 ctx.strokeStyle="#4db3ea";smoothMap(NILE);ctx.lineWidth=Math.max(3,s0*.09);ctx.stroke();smoothMap(ROSETTA);ctx.stroke();
 lineMap([[32.5,22.1],[32.9,23.9]]);ctx.lineWidth=Math.max(7,s0*.2);ctx.stroke();
 lineMap(MBR);ctx.strokeStyle="#7fd0f5";ctx.lineWidth=Math.max(2,s0*.05);ctx.stroke();
 ctx.save();ctx.textAlign="center";ctx.font="italic "+Math.round(Math.max(11,s0*.22))+"px system-ui";
 const sl=(tx,a,b)=>{const p=mp(a,b);ctx.fillText(tx,p[0],p[1])};
 ctx.fillStyle="rgba(255,255,255,.6)";sl(ar?"البحر المتوسط":"Mediterranean Sea",29.5,32.1);sl(ar?"البحر الأحمر":"Red Sea",36,26.3);
 ctx.fillStyle="rgba(90,55,15,.6)";sl(ar?"الصحراء الغربية":"Western Desert",27.8,26.3);sl(ar?"سيناء":"Sinai",33.7,29.7);ctx.restore();
 // governorate names
 ctx.save();ctx.textAlign="center";ctx.textBaseline="middle";
 const gf=Math.max(8,Math.min(13,Math.round(s0*.16)));ctx.font="600 "+gf+"px system-ui";
 GOVS.forEach(([en,arName,lo,la])=>{const[x,y]=mp(lo,la),name=ar?arName:en;
  ctx.fillStyle="rgba(246,235,201,.72)";ctx.strokeStyle="rgba(55,35,12,.5)";ctx.lineWidth=3;ctx.strokeText(name,x,y);ctx.fillText(name,x,y);
 });ctx.restore();
 // life on the map
 for(const[ph,sp]of[[0,7000],[2.2,9000]]){const u=.5+.45*Math.sin(t/sp+ph),d=Math.cos(t/sp+ph)>=0?1:-1,p=alongNile(u);boat(p[0],p[1],Math.max(.8,zz),d)}
 {const u=(t/22000)%1;for(let k=0;k<3;k++){const uu=((u-k*.06)+1)%1,p=mp(26.3+uu*2.8,27.3+Math.sin(uu*6)*.18);camel(p[0],p[1],1.1*Math.max(.8,zz))}}
 {const p=mp(27+((t/30000)%1)*5,32.0);boat(p[0],p[1],Math.max(.9,zz),1);const q=mp(35.7,25.6+((t/40000)%1)*2.2);boat(q[0],q[1],Math.max(.9,zz),-1)}
 // compass
 ctx.save();ctx.translate(46,MH()-122);ctx.strokeStyle="rgba(255,255,255,.75)";ctx.fillStyle="rgba(255,255,255,.75)";ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,20,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(0,-16);ctx.lineTo(5,0);ctx.lineTo(-5,0);ctx.closePath();ctx.fill();ctx.font="bold 11px system-ui";ctx.textAlign="center";ctx.fillText("N",0,-24);ctx.restore();
 // markers
 const nl=nextLocked();SITES.forEach((st,i)=>{if(!unlocked(i)&&i!==nl)return;const[qx,qy]=mp(st.lon,st.lat),x=qx+(st.mapDx||0),y=qy+(st.mapDy||0),on=sel&&sel.id===st.id,lk=!unlocked(i),dn=done.has(st.id),bob=on?Math.sin(t/180)*3:0,k=on?1.25:1,R=17*k;
  if(!lk&&!dn){const p=1+.22*Math.sin(t/400+i);ctx.beginPath();ctx.arc(x,y+bob,(R+6)*p,0,7);ctx.strokeStyle="rgba(255,224,138,.8)";ctx.lineWidth=2;ctx.stroke()}
  ctx.fillStyle="rgba(0,0,0,.25)";ctx.beginPath();ctx.ellipse(x+2,y+R+4,R*.8,5,0,0,7);ctx.fill();
  ctx.beginPath();ctx.arc(x,y+bob,R,0,7);ctx.fillStyle=lk?"#8a8f9c":dn?"#6ccf7f":"#f2c14e";ctx.fill();ctx.lineWidth=3;ctx.strokeStyle="#fff7dd";ctx.stroke();
  if(lk)ctx.globalAlpha=.45;if(st.logoImg&&st.logoImg.complete&&st.logoImg.naturalWidth)mapLogo(st.logoImg,x,y+bob,R);else icon(st,x,y+bob,k*(lk?.9:1));ctx.globalAlpha=1;
  if(lk){ctx.fillStyle="#2a2f40";ctx.fillRect(x+6*k,y+bob+4*k,10*k,8*k);ctx.strokeStyle="#2a2f40";ctx.lineWidth=2;ctx.beginPath();ctx.arc(x+11*k,y+bob+4*k,3.5*k,Math.PI,0);ctx.stroke()}
  const n3=starSum(st.id);if(n3){ctx.font="11px system-ui";ctx.textAlign="center";ctx.fillStyle="#fff4d0";ctx.strokeStyle="#3a2208";ctx.lineWidth=3;const tx="★"+n3;ctx.strokeText(tx,x,y+bob-R-6);ctx.fillText(tx,x,y+bob-R-6)}
  if(st.id===dailyId&&dailyClaim!==today()&&!lk){ctx.font="16px system-ui";ctx.textAlign="center";ctx.fillStyle="#fff";ctx.fillText("⭐",x+R,y+bob-R+4)}
  if(on||MV.z>1.35||W>720){ctx.font="bold 12px system-ui";const nm=ar?st.ar:st.en,w=ctx.measureText(nm).width+14;ctx.fillStyle="rgba(20,26,40,.82)";rr(x-w/2,y+R+10,w,20,10);ctx.fill();ctx.fillStyle="#fff4d0";ctx.textAlign="center";ctx.fillText(nm,x,y+R+24)}});
}
function mapPick(px,py){if(gs){const[gx,gy]=mp(gs.lo,gs.la);if(Math.hypot(px-gx,py-gy)<36){if(gs.cursed){const n=loseBal(Math.round(20*RATE));gfx.push({x:gx,y:gy,t0:performance.now(),txt:n?"−"+n+" ☠":"🛡️",bad:true});gs=null;snd("bad");render();return}gfx.push({x:gx,y:gy,t0:performance.now()});gs=null;score+=Math.round(15*RATE);qAdd("scarab",1);snd("ok");render();return}}let best=null,bd=26;const nl=nextLocked();SITES.forEach((s,k)=>{if(!unlocked(k)&&k!==nl)return;const[x,y]=mp(s.lon,s.lat),d=Math.hypot(px-x,py-y);if(d<bd){bd=d;best=s}});if(best)select(best.id)}
let gs=null,gsNext=performance.now()+12000,gfx=[];
const inEgypt=(lo,la)=>{let c=false;for(let i=0,j=OUT.length-1;i<OUT.length;j=i++){const[a,b]=OUT[i],[p,q]=OUT[j];if((b>la)!==(q>la)&&lo<(p-a)*(la-b)/(q-b)+a)c=!c}return c};
function updGS(t){if(!gs&&t>gsNext){for(let k=0;k<40;k++){const lo=26+Math.random()*8.5,la=22.5+Math.random()*8.8;if(inEgypt(lo,la)){gs={lo,la,until:t+7000,cursed:Math.random()<.3};break}}gsNext=t+(18000+Math.random()*18000)*(own.has("lucky")?.5:1)}if(gs&&t>gs.until)gs=null}
function drawGS(t){if(gs){const[x,y]=mp(gs.lo,gs.la),p=1+.2*Math.sin(t/150);ctx.fillStyle=gs.cursed?"rgba(217,83,79,.45)":"rgba(255,224,138,.35)";ctx.beginPath();ctx.arc(x,y,24*p,0,7);ctx.fill();
  ctx.fillStyle=gs.cursed?"#1a1a1a":"#e6b84a";ctx.beginPath();ctx.ellipse(x,y,9,12,0,0,7);ctx.fill();ctx.strokeStyle=gs.cursed?"#d9534f":"#6a4a10";ctx.lineWidth=2;ctx.stroke();ctx.beginPath();ctx.moveTo(x,y-12);ctx.lineTo(x,y+12);ctx.moveTo(x-9,y-2);ctx.lineTo(x+9,y-2);ctx.stroke()}
 gfx=gfx.filter(f=>t-f.t0<800);gfx.forEach(f=>{const k=(t-f.t0)/800;ctx.globalAlpha=1-k;ctx.font="bold 22px system-ui";ctx.textAlign="center";ctx.lineWidth=4;ctx.strokeStyle="#3a2208";ctx.fillStyle=f.bad?"#ff8a80":"#fff4d0";ctx.strokeText(f.txt||"+"+Math.round(15*RATE),f.x,f.y-k*36);ctx.fillText(f.txt||"+"+Math.round(15*RATE),f.x,f.y-k*36);ctx.globalAlpha=1})}
