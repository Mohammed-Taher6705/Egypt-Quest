/* Philae Temple, Aswan — Light the temple columns */
definePlace({
  id:"philae",
  // map pin
  lon:32.89, lat:24.03,
  en:"Philae Temple, Aswan",
  ar:"معبد فيلة، أسوان",
  eraEn:"Ptolemaic era · c. 280 BC",
  eraAr:"العصر البطلمي · نحو 280 ق.م",
  dEn:"Temple of Isis, relocated to Agilkia Island to save it from the rising waters of Lake Nasser.",
  dAr:"معبد إيزيس، نُقل إلى جزيرة أجيليكيا لإنقاذه من مياه بحيرة ناصر.",
  logo:"assets/images/philae.jpg",
  // challenge meta
  challenge:["Light the temple columns","أضئ أعمدة المعبد"],
  par:60,                // seconds for full speed bonus at level 1
  starTip:["Few moves and few hints","حركات قليلة وتلميحات قليلة"],
  levels:(x,k)=>gridTxt([4,5,5,6,6][k]),
  fact:["Philae Temple was moved to Agilkia Island in a UNESCO rescue campaign after the Aswan High Dam was built.","نُقل معبد فيلة إلى جزيرة أجيليكيا ضمن حملة إنقاذ لليونسكو بعد بناء السد العالي."],
  icon(ctx){ctx.fillRect(-9,-4,6,12);ctx.fillRect(3,-4,6,12);ctx.fillRect(-9,-7,18,3);},
  game:(()=>{let N=5;let g=[],moves=0,sol=new Set(),hintC=-1,hintUntil=0,hints=3,phH=0,parP=1;
 const lay=()=>{const s=Math.max(40,Math.min((W-30)/N,(H-230)/N,90));return{s,x0:(W-s*N)/2,y0:Math.max(78,(H-s*N)/2)}};
 const btn=()=>{const{s,y0}=lay();return{x:W/2-80,y:y0+s*N+16,w:160,h:40}};
 const tog=(r,c)=>[[0,0],[1,0],[-1,0],[0,1],[0,-1]].forEach(([a,b])=>{const R=r+a,C=c+b;if(R>=0&&R<N&&C>=0&&C<N)g[R*N+C]=!g[R*N+C]});
 return{help:{en:"Tapping a column flips it AND the 4 columns next to it. Light them all! (Stuck? Use Hint)",ar:"الضغط على عمود يقلبه ويقلب الأعمدة الأربعة المجاورة. أضئ الكل! (عالق؟ استخدم التلميح)"},
 start(){N=[4,5,5,6,6][Math.min(LV(),4)];g=Array(N*N).fill(true);moves=0;phH=0;hintC=-1;sol=new Set();[...Array(N*N).keys()].sort(()=>Math.random()-.5).slice(0,4+Math.min(LV(),8)*2).forEach(k=>{tog(Math.floor(k/N),k%N);sol.add(k)});if(g.every(v=>v)){const cc=Math.floor(N/2);tog(cc,cc);const kk=cc*N+cc;sol.has(kk)?sol.delete(kk):sol.add(kk)}parP=sol.size},
 status(){return L2("Lit ","مضاءة ")+g.filter(v=>v).length+"/"+N*N+" · "+L2("Moves ","حركات ")+moves},
 draw(){ctx.fillStyle="#2f86b5";ctx.fillRect(0,0,W,H);const{s,x0,y0}=lay();
  ctx.strokeStyle="rgba(255,255,255,.12)";ctx.lineWidth=2;for(let y=30;y<H;y+=46){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.setLineDash([36,30]);ctx.stroke();ctx.setLineDash([])}
  ctx.beginPath();ctx.ellipse(W/2,y0+s*N/2,s*N*.78,s*N*.68,0,0,7);ctx.fillStyle="#cdb88a";ctx.fill();ctx.lineWidth=6;ctx.strokeStyle="#e8dcb0";ctx.stroke();
  g.forEach((on,k)=>{const cx=x0+(k%N+.5)*s,cy=y0+(Math.floor(k/N)+.5)*s,r=s*.38;
   if(on){const rg=ctx.createRadialGradient(cx,cy,2,cx,cy,r*1.5);rg.addColorStop(0,"rgba(255,224,138,.9)");rg.addColorStop(1,"transparent");ctx.fillStyle=rg;ctx.beginPath();ctx.arc(cx,cy,r*1.5,0,7);ctx.fill()}
   ctx.fillStyle=on?"#e6b84a":"#6b6358";ctx.beginPath();ctx.arc(cx,cy,r,0,7);ctx.fill();ctx.strokeStyle="rgba(60,35,10,.7)";ctx.lineWidth=2;ctx.stroke();
   ctx.beginPath();ctx.arc(cx,cy,r*.55,0,7);ctx.stroke();face(cx,cy,r*.9,on?1:3)});
  const bt=btn(),now=performance.now();ctx.fillStyle=inv.hint>0?"#2a3350":"#444";rr(bt.x,bt.y,bt.w,bt.h,12);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=2;ctx.stroke();ctx.fillStyle="#fff";ctx.font="bold 16px system-ui";ctx.textAlign="center";ctx.fillText("💡 "+L2("Hint","تلميح")+" ("+inv.hint+")",bt.x+bt.w/2,bt.y+bt.h/2+6);
  if(now<hintUntil&&hintC>=0){const hx=x0+(hintC%N+.5)*s,hy=y0+(Math.floor(hintC/N)+.5)*s;ctx.strokeStyle="#fff";ctx.lineWidth=4;ctx.beginPath();ctx.arc(hx,hy,s*.5+3*Math.sin(now/120),0,7);ctx.stroke()}},
 tap(x,y){const bt=btn();if(x>=bt.x&&x<=bt.x+bt.w&&y>=bt.y&&y<=bt.y+bt.h){if(inv.hint>0&&sol.size){inv.hint--;phH++;hintC=[...sol][Math.floor(Math.random()*sol.size)];hintUntil=performance.now()+3000;snd("tap")}return}const{s,x0,y0}=lay(),c=Math.floor((x-x0)/s),r=Math.floor((y-y0)/s);if(c<0||c>=N||r<0||r>=N)return;tog(r,c);const k=r*N+c;sol.has(k)?sol.delete(k):sol.add(k);moves++;snd("tap");if(g.every(v=>v)){const sb=moves<=parP+2?3:moves<=parP+6?2:1;winGame(Math.max(1,sb-(phH>1?1:0)))}}}})()
});
