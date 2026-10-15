// abydos game module
GAMES.abydos=(()=>{const BASE=["ankh","feather","lotus","eye"],ALL=["ankh","scarab","eye","coin","feather","lotus","pyramid","sun"];let rd=0,n=3,odd=0,bt="ankh",ot="eye",mode=0,errs=0,bad=0;
 const lay=()=>{const s=Math.max(44,Math.min((W-36)/n,(H-250)/n,92));return{s,x0:(W-s*n)/2,y0:Math.max(84,(H-s*n)/2)}};
 function nr(){n=3+Math.min(LV(),4);odd=Math.floor(Math.random()*n*n);bt=BASE[Math.floor(Math.random()*BASE.length)];mode=LV()<2?0:LV()<4?1:2;if(mode===0){do{ot=ALL[Math.floor(Math.random()*ALL.length)]}while(ot===bt)}else ot=bt}
 return{help:{en:"Find the hieroglyph that is different (5 rounds)",ar:"اعثر على الرمز المختلف (5 جولات)"},
 start(){rd=0;errs=0;bad=0;nr()},
 status(){return L2("Round ","الجولة ")+Math.min(rd+1,5)+"/5 · "+L2("Mistakes ","الأخطاء ")+errs},
 draw(t){papyrus();const{s,x0,y0}=lay();
  for(let k=0;k<n*n;k++){const x=x0+(k%n)*s,y=y0+Math.floor(k/n)*s,isO=k===odd;ctx.fillStyle="rgba(255,244,214,.78)";rr(x+3,y+3,s-6,s-6,8);ctx.fill();ctx.strokeStyle="#8a6a35";ctx.lineWidth=2;ctx.stroke();
   glyph(isO?ot:bt,x+s/2,y+s/2,s/46,isO?(mode===1?Math.PI:mode===2?Math.PI/2:0):0)}
  if(t<bad){ctx.fillStyle="rgba(217,83,79,.25)";ctx.fillRect(0,0,W,H)}},
 tap(px,py){const{s,x0,y0}=lay(),c=Math.floor((px-x0)/s),r=Math.floor((py-y0)/s);if(c<0||c>=n||r<0||r>=n)return;
  if(r*n+c===odd){rd++;snd("ok");if(rd>=5)winGame(errs===0?3:errs<=2?2:1);else nr()}else{errs++;bad=performance.now()+400;snd("bad")}}}})();
/* White Desert: stack the chalk rocks */
