// sinai game module
GAMES.sinai=(()=>{const C=[{en:"Great Pyramid of Giza",ar:"الهرم الأكبر بالجيزة",y:-2600,de:"c. 2600 BC",da:"نحو 2600 ق.م"},{en:"Karnak Temple",ar:"معبد الكرنك",y:-2000,de:"begun c. 2000 BC",da:"بدأ نحو 2000 ق.م"},{en:"Abu Simbel",ar:"أبو سمبل",y:-1264,de:"c. 1264 BC",da:"نحو 1264 ق.م"},{en:"Temple of the Oracle, Siwa",ar:"معبد الوحي، سيوة",y:-570,de:"6th century BC",da:"القرن السادس ق.م"},{en:"Philae Temple",ar:"معبد فيلة",y:-280,de:"c. 280 BC",da:"نحو 280 ق.م"},{en:"Temple of Horus, Edfu",ar:"معبد حورس، إدفو",y:-237,de:"begun 237 BC",da:"بدأ 237 ق.م"},{en:"Saint Catherine's Monastery",ar:"دير سانت كاترين",y:548,de:"6th century AD",da:"القرن السادس الميلادي"},{en:"Qaitbay Citadel",ar:"قلعة قايتباي",y:1477,de:"1477 AD",da:"1477م"}];
 let order=[],chron=[],nxt=0,bad=0,errs=0;
 const lay=()=>{const n=order.length||5,bw=Math.min(W-40,420),bh=Math.max(40,Math.min(72,(H-250)/n-10));return{bw,bh,x:(W-bw)/2,y0:Math.max(84,(H-(n*bh+(n-1)*10))/2)}};
 return{help:{en:"Tap the monuments in order, from the OLDEST to the newest",ar:"اضغط على المعالم بالترتيب، من الأقدم إلى الأحدث"},
 start(){chron=shf([...C.keys()]).slice(0,3+LV()).sort((a,b)=>C[a].y-C[b].y);do{order=shf([...chron])}while(order.every((v,i)=>v===chron[i]));nxt=0;bad=0;errs=0},
 status(){return L2("Placed ","مرتبة ")+nxt+"/"+chron.length},
 draw(t){const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#1c2540");g.addColorStop(1,"#0e1420");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const{bw,bh,x,y0}=lay(),ar=lang==="ar";
  order.forEach((id,p)=>{const y=y0+p*(bh+10),rank=chron.indexOf(id),ok=rank<nxt;ctx.fillStyle=ok?"#2e7d4f":(t<bad?"#a33a3a":"#2a3350");rr(x,y,bw,bh,12);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=1.5;ctx.stroke();
   ctx.textAlign="center";ctx.fillStyle="#fff";ctx.font="bold 16px system-ui";ctx.fillText(ar?C[id].ar:C[id].en,W/2,y+bh/2-(ok?4:-5));
   if(ok){ctx.font="13px system-ui";ctx.fillStyle="#ffe9a8";ctx.fillText((rank+1)+" · "+(ar?C[id].da:C[id].de),W/2,y+bh/2+14)}})},
 tap(px,py){const{bw,bh,x,y0}=lay(),p=order.findIndex((id,k)=>{const y=y0+k*(bh+10);return px>=x&&px<=x+bw&&py>=y&&py<=y+bh});if(p<0)return;const rank=chron.indexOf(order[p]);if(rank<nxt)return;
  if(rank===nxt){nxt++;snd("ok");if(nxt===chron.length)winGame(errs===0?3:errs===1?2:1)}else{errs++;bad=performance.now()+500;snd("bad");setTimeout(()=>{nxt=0},700)}}}})();
/* Red Sea: count the orange fish */
