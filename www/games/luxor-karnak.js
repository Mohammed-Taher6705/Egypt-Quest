/* Karnak Temple, Luxor — Hieroglyph memory match */
definePlace({
  id:"luxor",
  // map pin
  lon:32.66, lat:25.72,
  en:"Karnak Temple, Luxor",
  ar:"معبد الكرنك، الأقصر",
  eraEn:"New Kingdom · c. 2000–300 BC",
  eraAr:"الدولة الحديثة · 2000–300 ق.م",
  dEn:"A vast temple complex dedicated to Amun-Ra, famous for its Hypostyle Hall.",
  dAr:"مجمع معابد ضخم مخصص لآمون رع، ويشتهر بقاعة الأعمدة.",
  logo:"assets/images/luxor.webp",
  // challenge meta
  challenge:["Hieroglyph memory match","مطابقة الرموز"],
  par:50,                // seconds for full speed bonus at level 1
  starTip:["Match the pairs with few flips","طابق الأزواج بقلبات قليلة"],
  levels:(x,k)=>L2(Math.min(4+x,8)+" pairs",Math.min(4+x,8)+" أزواج"),
  fact:["Karnak's Hypostyle Hall holds 134 enormous columns.","تضم قاعة الأعمدة الكبرى في الكرنك 134 عمودًا ضخمًا."],
  icon(ctx){[-7,-1,5].forEach(a=>ctx.fillRect(a,-6,3,13));ctx.fillRect(-9,-8,18,3);ctx.fillRect(-9,7,18,2);},
  game:(()=>{const TY=["ankh","scarab","eye","coin","feather","lotus","pyramid","sun"];let cards=[],first=-1,lock=0,pairs=0,tries=0;
 const lay=()=>{const n=cards.length||12,cols=W<H?(n<=12?3:4):4,rows=Math.ceil(n/cols),gap=10,aw=W-32,ah=H-190,ch=Math.min((ah-(rows-1)*gap)/rows,(aw-(cols-1)*gap)/cols*1.15),cw=ch*.85,tw=cols*cw+(cols-1)*gap,th=rows*ch+(rows-1)*gap;return{cols,cw,ch,gap,x0:(W-tw)/2,y0:Math.max(70,(H-th)/2)}};
 const pos=(L,k)=>[L.x0+(k%L.cols)*(L.cw+L.gap),L.y0+Math.floor(k/L.cols)*(L.ch+L.gap)];
 return{help:{en:"Flip two cards at a time and match the pairs",ar:"اقلب بطاقتين في كل مرة وطابق الأزواج"},
 start(){const ty=TY.slice(0,4+LV()),a=[...ty,...ty];for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}cards=a.map(type=>({type,up:false,ok:false}));first=-1;lock=0;pairs=0;tries=0},
 status(){const fr=Math.max(0,cards.length/2-(tries-pairs));return L2("Pairs ","الأزواج ")+pairs+"/"+cards.length/2+" · "+L2("Free misses ","أخطاء مسموحة ")+fr},
 draw(){const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#caa468");g.addColorStop(1,"#a98350");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const L=lay();cards.forEach((c,k)=>{const[x,y]=pos(L,k);
   if(c.up||c.ok){ctx.fillStyle="#f3ead2";rr(x,y,L.cw,L.ch,10);ctx.fill();ctx.lineWidth=c.ok?4:2;ctx.strokeStyle=c.ok?"#4caf6a":"#8a6a35";ctx.stroke();
    ctx.save();ctx.translate(x+L.cw/2,y+L.ch/2);const z=Math.min(L.cw,L.ch)/34;ctx.scale(z,z);art([0,0,c.type],0,-2);ctx.restore()}
   else{ctx.fillStyle="#1d2b4a";rr(x,y,L.cw,L.ch,10);ctx.fill();ctx.lineWidth=2;ctx.strokeStyle="#e6b84a";ctx.stroke();
    pharaoh(x+L.cw/2,y+L.ch/2,Math.min(L.cw,L.ch)*.3)}})},
 tap(x,y){const now=performance.now();if(now<lock)return;const L=lay();
  const k=cards.findIndex((c,i)=>{const[cx,cy]=pos(L,i);return x>=cx&&x<=cx+L.cw&&y>=cy&&y<=cy+L.ch});if(k<0)return;const c=cards[k];if(c.up||c.ok)return;c.up=true;snd("tap");
  if(first<0){first=k;return}
  const a=cards[first];first=-1;tries++;
  if(a.type===c.type){a.ok=c.ok=true;pairs++;snd("ok");if(pairs===cards.length/2)winGame(tries<=pairs*1.5?3:tries<=pairs*2.2?2:1)}
  else{lock=now+800;if(tries-pairs>cards.length/2)snd("bad");later(()=>{a.up=false;c.up=false},800)}}}})()
});
