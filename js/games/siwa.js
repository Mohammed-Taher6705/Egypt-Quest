// siwa game module
GAMES.siwa=(()=>{let pic,n=3,a=[],moves=0,solved=false,md0=1;
 const NN=()=>n*n;
 const nb=b=>{const r=Math.floor(b/n),c=b%n,o=[];if(r>0)o.push(b-n);if(r<n-1)o.push(b+n);if(c>0)o.push(b-1);if(c<n-1)o.push(b+1);return o};
 const isSolved=()=>a.every((v,i)=>v===i);
 return{help:{en:"Slide the tiles to rebuild the Siwa Oasis picture. Higher levels use smaller pieces",ar:"حرّك القطع لإعادة بناء صورة واحة سيوة. المستويات الأعلى بقطع أصغر"},
 start(){const lv=Math.min(LV(),4);n=[3,3,4,4,5][lv];pic=pickScene("siwa");a=[...Array(NN()).keys()];moves=0;solved=false;let b=NN()-1,last=-1;
  const step=()=>{const c=nb(b).filter(x=>x!==last),m=c[Math.floor(Math.random()*c.length)];[a[b],a[m]]=[a[m],a[b]];last=b;b=m};
  const steps=Math.round([14,45,60,120,200][lv]*(n>3?1.6:1));for(let k=0;k<steps;k++)step();while(isSolved())step();
  md0=a.reduce((m,v,i)=>v===NN()-1?m:m+Math.abs(Math.floor(i/n)-Math.floor(v/n))+Math.abs(i%n-v%n),0)},
 status(){return L2("Moves ","الحركات ")+moves},
 draw(){sandBg();const{s,x0,y0,t}=tileLay(n),ps=300/n;ctx.fillStyle="#3a2208";ctx.fillRect(x0-6,y0-6,s+12,s+12);
  a.forEach((v,i)=>{if(v===NN()-1&&!solved)return;const x=x0+(i%n)*t,y=y0+Math.floor(i/n)*t;ctx.drawImage(pic,(v%n)*ps,Math.floor(v/n)*ps,ps,ps,x,y,t,t);ctx.strokeStyle="rgba(58,34,8,.85)";ctx.lineWidth=2;ctx.strokeRect(x,y,t,t);
   ctx.font="bold "+Math.max(10,Math.round(t*.2))+"px system-ui";ctx.textAlign="left";ctx.lineWidth=3;ctx.strokeStyle="rgba(0,0,0,.6)";ctx.fillStyle="rgba(255,255,255,.9)";ctx.strokeText(v+1,x+4,y+t*.22);ctx.fillText(v+1,x+4,y+t*.22)})},
 tap(px,py){if(solved)return;const{x0,y0,t}=tileLay(n),c=Math.floor((px-x0)/t),r=Math.floor((py-y0)/t);if(c<0||c>=n||r<0||r>=n)return;const i=r*n+c,b=a.indexOf(NN()-1);
  if(!nb(b).includes(i))return;[a[b],a[i]]=[a[i],a[b]];moves++;snd("tap");if(isSolved()){solved=true;winGame(moves<=md0*2.5+6?3:moves<=md0*4+12?2:1)}}}})();
/* Edfu: rotate the tiles upright (finishes when the picture LOOKS upright, even if some tiles are look-alikes) */
