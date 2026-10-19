/* Abu Simbel — Sun alignment timing */
definePlace({
  id:"abu",
  // map pin
  lon:31.62, lat:22.34,
  en:"Abu Simbel",
  ar:"أبو سمبل",
  eraEn:"New Kingdom · c. 1264 BC",
  eraAr:"الدولة الحديثة · نحو 1264 ق.م",
  dEn:"Rock temples carved by Ramesses II, aligned so the sun lights the inner sanctuary twice a year.",
  dAr:"معابد منحوتة في الصخر أمر ببنائها رمسيس الثاني، تتعامد الشمس على قدس أقداسها مرتين سنويًا.",
  logo:"assets/images/abu-simbel.jpg",
  // challenge meta
  challenge:["Sun alignment timing","تعامد الشمس"],
  par:35,                // seconds for full speed bonus at level 1
  starTip:["Don't miss the alignment","لا تُخطئ في التعامد"],
  levels:(x,k)=>L2((3+Math.round(Math.min(x,4)*.75))+" alignments",(3+Math.round(Math.min(x,4)*.75))+" تعامدات"),
  fact:["Abu Simbel was cut into huge blocks and rebuilt on higher ground in the 1960s to save it from Lake Nasser.","قُطع معبدا أبو سمبل إلى كتل ضخمة وأُعيد بناؤهما في موقع أعلى في ستينيات القرن الماضي لإنقاذهما من بحيرة ناصر."],
  icon(ctx){[-8,-2,4].forEach(a=>{ctx.beginPath();ctx.arc(a+2,-3,2.6,0,7);ctx.fill();ctx.fillRect(a,0,4,8)});},
  game:(()=>{let hits=0,phase=0,lastT=0,flash=0,ok=true,lsx=0,lzw=40,need=3,ms=0;
 return{help:{en:"Tap when the sun lines up with the sanctuary door",ar:"اضغط عندما تتعامد الشمس على باب قدس الأقداس"},
 start(){need=3+Math.round(Math.min(LV(),4)*.75);ms=0;hits=0;phase=0;lastT=0;flash=0},
 status(){return L2("Alignments ","التعامدات ")+hits+"/"+need},
 draw(t){const dt=lastT?Math.min(.05,(t-lastT)/1000):0;lastT=t;phase+=dt*(1.5+hits*.7+Math.min(LV(),8)*.4);
  const cx=W/2,sy=H*.27,sx=cx+Math.sin(phase)*W*.4,zw=Math.max(26,W*.08*Math.pow(.8,hits));lsx=sx;lzw=zw;
  const sk=ctx.createLinearGradient(0,0,0,H*.5);sk.addColorStop(0,"#f7d58a");sk.addColorStop(1,"#f2a65a");ctx.fillStyle=sk;ctx.fillRect(0,0,W,H*.5);
  ctx.fillStyle="#a8895a";ctx.fillRect(0,H*.5,W,H*.5);ctx.fillStyle="#d9b46c";ctx.fillRect(0,H*.84,W,H*.16);
  const sw=W*.1,sh2=H*.2,sx0=[cx-W*.3,cx-W*.17,cx+W*.07,cx+W*.2];
  sx0.forEach(x=>{ctx.fillStyle="#c9a366";ctx.fillRect(x,H*.5+8,sw,sh2);ctx.strokeStyle="#6a4a1a";ctx.lineWidth=2;ctx.strokeRect(x,H*.5+8,sw,sh2);ctx.beginPath();ctx.arc(x+sw/2,H*.5+8,sw*.32,0,7);ctx.fillStyle="#d8b57a";ctx.fill();ctx.stroke();face(x+sw/2,H*.5+8,sw*.3,t<flash&&ok?1:0)});
  const dw=W*.08,dh=H*.14,dy=H*.5+8;ctx.fillStyle="#2a1d10";ctx.fillRect(cx-dw/2,dy,dw,dh);
  ctx.fillStyle="rgba(255,255,255,.22)";ctx.fillRect(cx-zw,sy,zw*2,dy-sy);
  if(t<flash){if(ok){ctx.fillStyle="rgba(255,224,138,.55)";ctx.beginPath();ctx.moveTo(sx-8,sy);ctx.lineTo(sx+8,sy);ctx.lineTo(cx+dw/2,dy+dh);ctx.lineTo(cx-dw/2,dy+dh);ctx.closePath();ctx.fill();ctx.fillStyle="#ffe08a";ctx.fillRect(cx-dw/2,dy,dw,dh)}else{ctx.fillStyle="rgba(217,83,79,.25)";ctx.fillRect(0,0,W,H)}}
  const rg=ctx.createRadialGradient(sx,sy,4,sx,sy,60);rg.addColorStop(0,"rgba(255,240,170,.9)");rg.addColorStop(1,"transparent");ctx.fillStyle=rg;ctx.beginPath();ctx.arc(sx,sy,60,0,7);ctx.fill();
  ctx.fillStyle="#fff2b0";ctx.beginPath();ctx.arc(sx,sy,24,0,7);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=3;ctx.stroke();sunFace(sx,sy,t<flash?(ok?1:-1):0)},
 tap(){const now=performance.now();if(Math.abs(lsx-W/2)<lzw){ok=true;snd("ok");hits++;flash=now+600;if(hits>=need)winGame(ms===0?3:ms<=2?2:1)}else{ok=false;snd("bad");ms++;hits=0;flash=now+400}}}})()
});
