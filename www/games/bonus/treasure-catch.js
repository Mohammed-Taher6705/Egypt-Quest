/* Bonus game: Treasure Catch */
defineBonus({
  id:"catch",
  name:["Treasure Catch","صيد الكنوز"],
  desc:["Catch the falling treasure · 30s","اجمع الكنوز المتساقطة · 30 ثانية"],
  game:(()=>{let end=0,pts=0,items=[],nextSp=0,bx=0,tx=0,lastT=0,over=false,fl=[],mood=0,moodUntil=0;
 return{help:{en:"Drag to move the basket. Catch coins (+2) and gems (+6), dodge rocks (−3)",ar:"اسحب لتحريك السلة. اجمع العملات (+2) والجواهر (+6) وتجنب الصخور (−3)"},
 start(){end=performance.now()+30000+(inv.time>0?(inv.time--,10000):0);pts=0;items=[];nextSp=performance.now()+300;bx=tx=W/2;lastT=0;over=false;fl=[]},
 status(){return L2("Time ","الوقت ")+Math.max(0,Math.ceil((end-performance.now())/1000))+"s · "+L2("Score ","النقاط ")+Math.max(0,pts)},
 move(x){tx=x},tap(x){tx=x},
 draw(t){const dt=lastT?Math.min(.05,(t-lastT)/1000):0;lastT=t;
  const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#f7d58a");g.addColorStop(1,"#d9a85a");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle="#a8895a";ctx.fillRect(0,H-70,W,70);
  if(!over&&t>=nextSp){const r=Math.random();items.push({x:30+Math.random()*(W-60),y:-20,v:150+Math.random()*100+(1-(end-t)/30000)*130,k:r<.18?"rock":r<.26?"gem":r<.34?"mummy":"coin"});nextSp=t+400}
  bx+=(tx-bx)*Math.min(1,dt*14);const by=H-110;
  items=items.filter(it=>{it.y+=it.v*dt;if(!over&&it.y>by-8&&it.y<by+22&&Math.abs(it.x-bx)<50){const p=it.k==="coin"?2:it.k==="gem"?6:it.k==="mummy"?-2:-3;pts+=p;mood=p>0?1:-1;moodUntil=t+600;snd(p>0?"ok":"bad");fl.push({x:it.x,y:by-20,s:(p>0?"+":"−")+Math.abs(p),c:p>0?"#fff4d0":"#ff8a80",t0:t});return false}return it.y<H+30});
  items.forEach(it=>{const x=it.x,y=it.y;
   if(it.k==="coin"){ctx.fillStyle="#e6b84a";ctx.beginPath();ctx.arc(x,y,14,0,7);ctx.fill();ctx.strokeStyle="#8a6a10";ctx.lineWidth=2;ctx.stroke();face(x,y,11,1)}
   else if(it.k==="gem"){ctx.fillStyle="#2fb3a8";ctx.beginPath();ctx.moveTo(x,y-16);ctx.lineTo(x+14,y);ctx.lineTo(x,y+16);ctx.lineTo(x-14,y);ctx.closePath();ctx.fill();ctx.strokeStyle="#fff";ctx.lineWidth=1.5;ctx.stroke();face(x,y,10,1)}
   else if(it.k==="mummy"){ctx.fillStyle="#e8dcc0";ctx.beginPath();ctx.arc(x,y,15,0,7);ctx.fill();ctx.strokeStyle="#a89870";ctx.lineWidth=2;for(const dy of[-8,-3,8]){ctx.beginPath();ctx.moveTo(x-13,y+dy);ctx.lineTo(x+13,y+dy+2);ctx.stroke()}face(x,y,11,0)}
   else{ctx.fillStyle="#6b6358";ctx.beginPath();ctx.arc(x,y,15,0,7);ctx.fill();ctx.strokeStyle="#3a342c";ctx.lineWidth=2;ctx.stroke();face(x,y,12,2)}});
  ctx.fillStyle="#7a4a1a";ctx.beginPath();ctx.moveTo(bx-50,by);ctx.lineTo(bx+50,by);ctx.lineTo(bx+38,by+34);ctx.lineTo(bx-38,by+34);ctx.closePath();ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=3;ctx.stroke();
  face(bx,by+16,18,t<moodUntil?mood:1);
  fl=fl.filter(f=>t-f.t0<700);fl.forEach(f=>{const k=(t-f.t0)/700;ctx.globalAlpha=1-k;ctx.font="bold 24px system-ui";ctx.textAlign="center";ctx.lineWidth=4;ctx.strokeStyle="#3a2208";ctx.fillStyle=f.c;ctx.strokeText(f.s,f.x,f.y-k*40);ctx.fillText(f.s,f.x,f.y-k*40);ctx.globalAlpha=1});
  if(!over&&t>=end){over=true;finishBonus(Math.max(0,pts))}}}})()
});
