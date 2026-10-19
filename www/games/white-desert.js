/* White Desert, Farafra — Stack the chalk rocks */
definePlace({
  id:"whitedesert",
  // map pin
  lon:27.97, lat:27.35,
  en:"White Desert, Farafra",
  ar:"الصحراء البيضاء، الفرافرة",
  eraEn:"Natural wonder",
  eraAr:"أعجوبة طبيعية",
  dEn:"A surreal desert landscape of chalk rocks shaped by wind into mushrooms and other strange forms.",
  dAr:"مشهد صحراوي ساحر من صخور طباشيرية نحتتها الرياح على شكل فطر وأشكال غريبة.",
  // challenge meta
  challenge:["Stack the chalk rocks","كدّس الصخور الطباشيرية"],
  par:35,                // seconds for full speed bonus at level 1
  starTip:["Don't let the rocks crash","لا تدع الصخور تقع"],
  levels:(x,k)=>L2((6+Math.min(x,6))+" rocks",(6+Math.min(x,6))+" صخور"),
  fact:["The White Desert's mushroom-shaped chalk rocks were carved by wind-blown sand over thousands of years.","نحتت الرياح المحملة بالرمال صخور الصحراء البيضاء الطباشيرية على شكل الفطر عبر آلاف السنين."],
  icon(ctx){ctx.fillRect(-2,-1,4,9);ctx.beginPath();ctx.ellipse(0,-4,9,5,0,0,7);ctx.fill();},
  game:(()=>{let stack=[],cx=0,w=0,dir=1,goal=6,lives=3,falls=0,lastT=0,msg="",msgT=0,done0=false;const BH=26,W0=()=>Math.min(W*.5,200);
 function reset(){stack=[{x:W/2,w:W0()}];w=W0();cx=W*.2;dir=1}
 return{help:{en:"Tap to drop the rock. Overhang gets trimmed, so stack neatly!",ar:"اضغط لإسقاط الصخرة. الزائد يُقصّ، فكدّسها بدقة!"},
 start(){goal=6+Math.min(LV(),6);lives=3;falls=0;lastT=0;msg="";msgT=0;done0=false;reset()},
 status(){return L2("Height ","الارتفاع ")+(stack.length-1)+"/"+goal+" · "+"❤".repeat(Math.max(0,lives))},
 draw(t){const dt=lastT?Math.min(.05,(t-lastT)/1000):0;lastT=t;
  if(!done0){const sp=140+Math.min(LV(),6)*28+stack.length*7;cx+=dir*sp*dt;if(cx-w/2<20){cx=20+w/2;dir=1}if(cx+w/2>W-20){cx=W-20-w/2;dir=-1}}
  const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#9fd0f0");g.addColorStop(1,"#f6e3b0");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const base=H-100,off=Math.max(0,(stack.length-5)*BH);ctx.fillStyle="#e3c88a";ctx.fillRect(0,base,W,H-base);
  stack.forEach((b,i)=>{const y=base-(i+1)*BH+off;ctx.fillStyle="#f6f2e8";rr(b.x-b.w/2,y,b.w,BH-2,9);ctx.fill();ctx.strokeStyle="#a9a290";ctx.lineWidth=2;ctx.stroke()});
  if(!done0){const ym=base-(stack.length+1)*BH+off;ctx.fillStyle="#fff";rr(cx-w/2,ym,w,BH-2,9);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=3;ctx.stroke();face(cx,ym+BH/2,10,1)}
  if(t<msgT){ctx.font="bold 24px system-ui";ctx.textAlign="center";ctx.lineWidth=4;ctx.strokeStyle="#3a2208";ctx.fillStyle="#fff4d0";ctx.strokeText(msg,W/2,130);ctx.fillText(msg,W/2,130)}},
 tap(){if(done0)return;const top=stack[stack.length-1],l=Math.max(cx-w/2,top.x-top.w/2),r=Math.min(cx+w/2,top.x+top.w/2),ov=r-l,now=performance.now();
  if(ov<=6){lives--;falls++;snd("bad");msg=L2("Crash!","وقعت!");msgT=now+800;if(lives<=0){lives=3;reset()}return}
  if(Math.abs(cx-top.x)<6){stack.push({x:top.x,w});msg=L2("PERFECT!","ممتاز!");snd("ok")}else{w=ov;stack.push({x:(l+r)/2,w:ov});msg=L2("Nice!","حلو!");snd("tap")}msgT=now+700;
  if(stack.length-1>=goal){done0=true;winGame(falls===0?3:falls<=1?2:1)}}}})()
});
