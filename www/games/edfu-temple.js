/* Temple of Horus, Edfu — Rotate the temple tiles */
definePlace({
  id:"edfu",
  // map pin
  lon:32.873, lat:24.978,
  en:"Temple of Horus, Edfu",
  ar:"معبد حورس، إدفو",
  eraEn:"Ptolemaic era · 237–57 BC",
  eraAr:"العصر البطلمي · 237–57 ق.م",
  dEn:"One of the best-preserved ancient temples in Egypt, dedicated to the falcon god Horus.",
  dAr:"من أفضل المعابد القديمة حفظًا في مصر، وهو مكرس للإله حورس برأس الصقر.",
  logo:"assets/images/edfu.jpg",
  // challenge meta
  challenge:["Rotate the temple tiles","دوّر قطع المعبد"],
  par:50,                // seconds for full speed bonus at level 1
  starTip:["Solve it in few moves","حلّها بحركات قليلة"],
  levels:(x,k)=>gridTxt([2,3,3,4,5][k]),
  fact:["The Temple of Horus at Edfu took about 180 years to build, from 237 BC to 57 BC.","استغرق بناء معبد حورس في إدفو نحو 180 عامًا، من 237 ق.م إلى 57 ق.م."],
  icon(ctx){ctx.beginPath();ctx.ellipse(0,0,10,5.5,0,0,7);ctx.stroke();ctx.beginPath();ctx.arc(0,0,2.5,0,7);ctx.fill();},
  game:(()=>{let pic,n=3,rot=[],moves=0,par=1,eq=[];
 const okAll=()=>rot.every((r,i)=>eq[i][r]);
 function calcEq(){const N=n*n,ps=300/n,S=24,a=document.createElement("canvas");a.width=a.height=S;const ga=a.getContext("2d");eq=[];
  for(let i=0;i<N;i++){const sx=(i%n)*ps,sy=Math.floor(i/n)*ps,im=[];
   for(let r=0;r<4;r++){ga.clearRect(0,0,S,S);ga.save();ga.translate(S/2,S/2);ga.rotate(r*Math.PI/2);ga.drawImage(pic,sx,sy,ps,ps,-S/2,-S/2,S,S);ga.restore();let d=null;try{d=ga.getImageData(0,0,S,S).data}catch(e){}im.push(d)}
   eq.push([0,1,2,3].map(r=>{if(r===0)return true;const A=im[0],B=im[r];if(!A||!B||!A.length)return false;let sum=0;for(let k=0;k<A.length;k+=4)sum+=Math.abs(A[k]-B[k])+Math.abs(A[k+1]-B[k+1])+Math.abs(A[k+2]-B[k+2]);return sum/(S*S*3)<14}))}}
 return{help:{en:"Tap a tile to rotate it. Make the whole picture upright. Higher levels use smaller pieces",ar:"اضغط على القطعة لتدويرها. اجعل الصورة كلها معتدلة. المستويات الأعلى بقطع أصغر"},
 start(){const lv=Math.min(LV(),4);n=[2,3,3,4,5][lv];const N=n*n;let cand=[];
  for(let tries=0;tries<6&&cand.length<2;tries++){pic=pickScene("edfu");calcEq();cand=[...Array(N).keys()].filter(i=>eq[i].some(v=>!v))}
  rot=Array(N).fill(0);shf(cand).slice(0,Math.min(cand.length,[2,4,7,11,18][lv])).forEach(i=>{const bad=[1,2,3].filter(r=>!eq[i][r]);rot[i]=bad[Math.floor(Math.random()*bad.length)]});
  moves=0;par=rot.reduce((m,r,i)=>{let k=0;while(!eq[i][(r+k)%4])k++;return m+k},0)},
 status(){return L2("Upright ","معتدلة ")+rot.filter((r,i)=>eq[i][r]).length+"/"+rot.length+" · "+L2("Moves ","حركات ")+moves+"/"+(par*2+6)},
 draw(){sandBg();const{s,x0,y0,t}=tileLay(n),ps=300/n;ctx.fillStyle="#3a2208";ctx.fillRect(x0-6,y0-6,s+12,s+12);
  rot.forEach((r,i)=>{const x=x0+(i%n)*t,y=y0+Math.floor(i/n)*t;ctx.save();ctx.translate(x+t/2,y+t/2);ctx.rotate(r*Math.PI/2);ctx.drawImage(pic,(i%n)*ps,Math.floor(i/n)*ps,ps,ps,-t/2,-t/2,t,t);ctx.restore();ctx.strokeStyle="rgba(58,34,8,.85)";ctx.lineWidth=2;ctx.strokeRect(x,y,t,t)})},
 tap(px,py){const{x0,y0,t}=tileLay(n),c=Math.floor((px-x0)/t),r=Math.floor((py-y0)/t);if(c<0||c>=n||r<0||r>=n)return;const i=r*n+c;rot[i]=(rot[i]+1)%4;moves++;snd("tap");if(okAll())winGame(moves<=par?3:moves<=par+3?2:1);else if(moves>=par*2+6)loseGame(L2("Out of moves!","نفدت الحركات!"))}}})()
});
