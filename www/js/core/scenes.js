const shf=a=>{for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a};
const lastScene={};
const gr=(g,c1,c2,y0,y1)=>{y0=y0||0;y1=y1||300;const k=g.createLinearGradient(0,y0,0,y1);k.addColorStop(0,c1);k.addColorStop(1,c2);g.fillStyle=k;g.fillRect(0,y0,300,y1-y0)};
const rectG=(g,c,x,y,w,h)=>{g.fillStyle=c;g.fillRect(x,y,w,h)};
const circG=(g,c,x,y,r)=>{g.fillStyle=c;g.beginPath();g.arc(x,y,r,0,7);g.fill()};
const polyG=(g,c,pts,st)=>{g.fillStyle=c;g.beginPath();pts.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fill();if(st){g.strokeStyle=st;g.lineWidth=2;g.stroke()}};
const palmG=(g,x,y,h,c)=>{rectG(g,c?"#101820":"#6a4a1a",x-2,y,4,h);g.fillStyle=c?"#0c1a14":"#3f8f4a";for(let i=0;i<7;i++){const a=i*.9;g.beginPath();g.ellipse(x+Math.cos(a)*h*.35,y+Math.sin(a)*h*.18,h*.4,h*.1,a*.5,0,7);g.fill()}};
const cloudG=(g,x,y,s)=>{g.fillStyle="rgba(255,255,255,.8)";[[0,0,12],[14,-4,15],[30,0,11],[15,5,13]].forEach(([dx,dy,r])=>{g.beginPath();g.arc(x+dx*s,y+dy*s,r*s,0,7);g.fill()})};
const birdG=(g,x,y,s)=>{g.strokeStyle="#3a2208";g.lineWidth=2;g.beginPath();g.moveTo(x-8*s,y);g.quadraticCurveTo(x-3*s,y-7*s,x,y);g.quadraticCurveTo(x+3*s,y-4*s,x+9*s,y+2*s);g.stroke();circG(g,"#3a2208",x,y,2*s)};
const boatG=(g,x,y,s)=>{polyG(g,"#7a4a1a",[[x-14*s,y],[x+14*s,y],[x+9*s,y+7*s],[x-9*s,y+7*s]]);polyG(g,"#fff",[[x,y-22*s],[x+13*s,y-2*s],[x,y-2*s]],"#999")};
const camelG=(g,x,y,s)=>{g.fillStyle="#8a5a28";g.beginPath();g.ellipse(x,y,14*s,7*s,0,0,7);g.fill();g.beginPath();g.arc(x-4*s,y-8*s,5*s,0,7);g.arc(x+4*s,y-8*s,5*s,0,7);g.fill();g.fillRect(x+12*s,y-14*s,4*s,12*s);g.beginPath();g.arc(x+16*s,y-16*s,4*s,0,7);g.fill();g.fillRect(x-10*s,y+4*s,3*s,10*s);g.fillRect(x+7*s,y+4*s,3*s,10*s)};
const fishG=(g,x,y,s,c)=>{g.fillStyle=c;g.beginPath();g.ellipse(x,y,10*s,6*s,0,0,7);g.fill();polyG(g,c,[[x-9*s,y],[x-17*s,y-6*s],[x-17*s,y+6*s]]);circG(g,"#fff",x+5*s,y-2*s,2*s)};
const pyrG=(g,x,y,w,h,c)=>{polyG(g,c,[[x-w/2,y],[x,y-h],[x+w/2,y]],"#6a4a1a");polyG(g,"rgba(0,0,0,.2)",[[x,y-h],[x+w/2,y],[x,y]])};
const glyphG=(g,t,x,y,s,c)=>{g.save();g.translate(x,y);g.scale(s,s);g.lineCap="round";c=c||"#7a4a10";
 if(t==="ankh"){g.strokeStyle=c;g.lineWidth=4;g.beginPath();g.ellipse(0,-7,6,8,0,0,7);g.moveTo(0,1);g.lineTo(0,14);g.moveTo(-8,5);g.lineTo(8,5);g.stroke()}
 else if(t==="feather"){g.fillStyle=c;g.beginPath();g.ellipse(0,-2,5,13,.25,0,7);g.fill();g.strokeStyle="#fff";g.lineWidth=1.5;g.beginPath();g.moveTo(-3,14);g.lineTo(3,-12);g.stroke()}
 else if(t==="eye"){g.strokeStyle=c;g.lineWidth=3;g.beginPath();g.ellipse(0,0,12,6,0,0,7);g.stroke();circG(g,c,0,0,3.5);g.beginPath();g.moveTo(0,6);g.lineTo(-3,15);g.stroke()}
 else if(t==="lotus"){g.fillStyle=c;for(const a of[-.7,0,.7]){g.save();g.rotate(a);g.beginPath();g.ellipse(0,-7,4.5,10,0,0,7);g.fill();g.restore()}g.fillStyle="#3f8f4a";g.beginPath();g.ellipse(0,6,10,3.5,0,0,7);g.fill()}
 else{g.fillStyle=c;g.beginPath();g.ellipse(0,0,8,11,0,0,7);g.fill();g.strokeStyle="#e6b84a";g.lineWidth=2;g.beginPath();g.moveTo(0,-11);g.lineTo(0,11);g.moveTo(-8,-2);g.lineTo(8,-2);g.stroke()}
 g.restore()};
const rnd=(a,b)=>a+Math.random()*(b-a);
const SCN=[
 g=>{gr(g,"#f7d58a","#f2a65a");rectG(g,"#d9b46c",0,270,300,30);g.strokeStyle="#6a4a1a";g.lineWidth=3;polyG(g,"#c9a366",[[25,270],[60,115],[135,115],[135,270]],"#6a4a1a");polyG(g,"#c9a366",[[275,270],[240,115],[165,115],[165,270]],"#6a4a1a");rectG(g,"#2a1d10",135,160,30,110);rectG(g,"#b9935a",125,100,50,20);
  g.fillStyle="#f3ead2";g.strokeStyle="#1d4f8a";g.lineWidth=5;g.beginPath();g.ellipse(150,62,62,26,0,0,7);g.fill();g.stroke();circG(g,"#1d4f8a",150,62,14);circG(g,"#000",150,62,6);g.lineWidth=6;g.beginPath();g.moveTo(92,30);g.quadraticCurveTo(150,0,208,30);g.stroke();g.beginPath();g.moveTo(130,86);g.lineTo(118,140);g.lineTo(100,150);g.stroke();g.beginPath();g.moveTo(172,86);g.quadraticCurveTo(205,112,195,138);g.quadraticCurveTo(180,150,172,134);g.stroke();
  for(let i=0;i<5;i++)cloudG(g,rnd(10,250),rnd(10,90),rnd(.5,.9));for(let i=0;i<9;i++)birdG(g,rnd(10,290),rnd(10,110),rnd(.7,1.2));for(let i=0;i<5;i++)glyphG(g,["ankh","feather","lotus"][i%3],rnd(40,260),rnd(180,255),.9)},
 g=>{gr(g,"#ff8a5a","#ffd9a0",0,190);circG(g,"#fff0a0",210,130,30);gr(g,"#2f86b5","#14507e",190,300);g.strokeStyle="rgba(255,255,255,.35)";g.lineWidth=2;for(let y=200;y<300;y+=14){g.beginPath();for(let x=0;x<=300;x+=12){const yy=y+Math.sin(x/17+y)*3;x?g.lineTo(x,yy):g.moveTo(x,yy)}g.stroke()}
  pyrG(g,75,190,100,70,"#a8693a");pyrG(g,150,190,60,42,"#b9784a");palmG(g,20,150,46);palmG(g,285,160,40);boatG(g,110,232,1.3);boatG(g,215,262,.9);for(let i=0;i<4;i++)cloudG(g,rnd(0,250),rnd(10,80),rnd(.5,1));for(let i=0;i<7;i++)birdG(g,rnd(10,290),rnd(15,120),rnd(.7,1.2))},
 g=>{gr(g,"#dcc28e","#b99a62");g.strokeStyle="#8a6a35";g.lineWidth=3;for(const y of[0,100,200,298]){g.beginPath();g.moveTo(0,y);g.lineTo(300,y);g.stroke()}
  const T=["ankh","feather","eye","lotus","scarab"];for(let r=0;r<6;r++)for(let c=0;c<6;c++){glyphG(g,T[Math.floor(Math.random()*5)],c*50+25+rnd(-6,6),r*50+25+rnd(-6,6),rnd(.8,1.15),["#7a4a10","#1d4f8a","#2f6f4a","#8a2a2a"][Math.floor(Math.random()*4)])}
  g.strokeStyle="#6a4a1a";g.lineWidth=4;g.beginPath();g.ellipse(150,150,46,64,0,0,7);g.stroke();glyphG(g,T[Math.floor(Math.random()*5)],150,150,2.2,"#8a2a2a")},
 g=>{gr(g,"#8ed0f0","#fbe7b0");circG(g,"#fff2b0",240,50,24);g.fillStyle="#e6c27a";for(const [x,y,w,h] of[[60,250,220,50],[220,235,200,45],[10,270,200,40]]){g.beginPath();g.ellipse(x,y,w,h,0,0,7);g.fill()}
  pyrG(g,215,215,100,70,"#c9a366");for(let i=0;i<3;i++)camelG(g,60+i*48,238+i*3,1.1);palmG(g,20,170,45);palmG(g,270,185,38);for(let i=0;i<4;i++)cloudG(g,rnd(0,250),rnd(10,70),rnd(.5,.9));for(let i=0;i<6;i++)birdG(g,rnd(10,290),rnd(10,120),rnd(.7,1.2))},
 g=>{gr(g,"#0b1030","#3b2a6b");g.fillStyle="#fff";for(let i=0;i<55;i++){const x=rnd(0,300),y=rnd(0,220),s=Math.random()<.2?2.5:1.3;g.fillRect(x,y,s,s)}circG(g,"#f4f0d0",60,62,26);circG(g,"#13193f",70,56,22);
  polyG(g,"#8a7a6a",[[205,262],[200,110],[210,80],[220,110],[215,262]],"#4a3a2a");rectG(g,"#2a2014",0,262,300,38);for(const x of[20,60,100,240,275])rectG(g,"#4a3a2a",x,215,14,48);rectG(g,"#4a3a2a",10,205,100,12);palmG(g,150,200,50,true);palmG(g,285,215,40,true);for(let i=0;i<6;i++)glyphG(g,["ankh","feather","eye"][i%3],rnd(20,280),rnd(230,290),.7,"#e6b84a")},
 g=>{gr(g,"#7ec8f0","#f7e1a0");rectG(g,"#d9b46c",0,170,300,130);g.fillStyle="#2f86b5";g.beginPath();g.ellipse(190,240,85,28,0,0,7);g.fill();polyG(g,"#b99358",[[10,175],[70,95],[130,175]]);rectG(g,"#c9a366",52,70,36,28);rectG(g,"#c9a366",60,56,20,16);rectG(g,"#6a4a1a",64,80,8,18);
  for(const [x,y] of[[210,150],[250,165],[30,215],[150,200],[100,260],[270,230]])palmG(g,x+rnd(-8,8),y,40);circG(g,"#fff2b0",240,45,22);for(let i=0;i<3;i++)cloudG(g,rnd(0,200),rnd(10,70),rnd(.5,.9));for(let i=0;i<5;i++)birdG(g,rnd(10,290),rnd(10,110),rnd(.7,1.2))},
 g=>{gr(g,"#f6a8c0","#ffe0a0",0,250);circG(g,"#ffd07a",90,205,34);pyrG(g,230,250,120,95,"#c4925a");pyrG(g,170,250,70,52,"#d3a06a");rectG(g,"#dcb46c",0,250,300,50);
  g.fillStyle="#b9935a";g.beginPath();g.ellipse(120,238,52,16,0,0,7);g.fill();rectG(g,"#b9935a",100,206,26,36);circG(g,"#c9a366",114,200,15);polyG(g,"#2f6fd8",[[98,200],[130,200],[126,222],[102,222]]);rectG(g,"#a8834a",150,232,32,10);
  for(let i=0;i<2;i++)camelG(g,40+i*34,278,.8);for(let i=0;i<5;i++)cloudG(g,rnd(0,250),rnd(10,110),rnd(.5,.9));for(let i=0;i<6;i++)birdG(g,rnd(10,290),rnd(10,150),rnd(.7,1.2))},
 g=>{gr(g,"#27b5c9","#0c5e8a");g.fillStyle="rgba(255,255,255,.12)";for(let i=0;i<4;i++){polyG(g,"rgba(255,255,255,.12)",[[40+i*70,0],[70+i*70,0],[40+i*70+rnd(-30,30),300],[10+i*70+rnd(-30,30),300]])}
  rectG(g,"#e3c88a",0,268,300,32);for(let i=0;i<14;i++){g.fillStyle=["#e8607a","#f0a040","#b04aa8","#e0e060"][i%4];g.beginPath();g.arc(i*22+rnd(0,10),276,rnd(14,26),Math.PI,0);g.fill()}
  for(let i=0;i<5;i++){g.strokeStyle="#2f8f4a";g.lineWidth=4;g.beginPath();const x=rnd(10,290);g.moveTo(x,270);g.quadraticCurveTo(x+12,235,x,200);g.quadraticCurveTo(x-10,170,x+4,150+rnd(0,30));g.stroke()}
  for(let i=0;i<13;i++)fishG(g,rnd(20,280),rnd(20,230),rnd(.8,1.5),["#ff8a3d","#3d8bff","#ffd93d","#e8607a"][i%4]);g.fillStyle="rgba(255,255,255,.35)";for(let i=0;i<16;i++){g.beginPath();g.arc(rnd(0,300),rnd(0,260),rnd(2,5),0,7);g.fill()}}];
function makeScene(i){const c=document.createElement("canvas");c.width=c.height=300;SCN[i](c.getContext("2d"));return c}
function pickScene(key){let i;do{i=Math.floor(Math.random()*SCN.length)}while(i===lastScene[key]&&SCN.length>1);lastScene[key]=i;return makeScene(i)}
const tileLay=n=>{const s=Math.max(150,Math.min(W-30,H-230,380));return{s,x0:(W-s)/2,y0:Math.max(80,(H-s)/2),t:s/n}};
const sandBg=()=>{const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#caa468");g.addColorStop(1,"#a98350");ctx.fillStyle=g;ctx.fillRect(0,0,W,H)};
const glyph=(type,x,y,s,rot)=>{ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.scale(s,s);art([0,0,type],0,-2);ctx.restore()};
const papyrus=()=>{const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#d8bf8a");g.addColorStop(1,"#b99a62");ctx.fillStyle=g;ctx.fillRect(0,0,W,H)};
