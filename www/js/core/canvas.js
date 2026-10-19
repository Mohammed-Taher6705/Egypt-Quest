const cv=$("c"),ctx=cv.getContext("2d");let W=0,H=0;
function resize(){const d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0)}
addEventListener("resize",()=>{resize();if(cur&&mode==="world")clampV()});resize();
const rr=(x,y,w,h,r)=>{ctx.beginPath();ctx.roundRect?ctx.roundRect(x,y,w,h,r):ctx.rect(x,y,w,h)};
function face(x,y,r,m){ctx.save();ctx.lineCap="round";const ex=r*.38,ey=y-r*.15,er=r*.2,lw=Math.max(1.5,r*.1);ctx.strokeStyle="#3a2208";ctx.lineWidth=lw;
 if(m===3){[-1,1].forEach(d=>{ctx.beginPath();ctx.moveTo(x+d*ex-er,ey);ctx.lineTo(x+d*ex+er,ey);ctx.stroke()});ctx.fillStyle="#3a2208";ctx.font="bold "+Math.round(r*.7)+"px system-ui";ctx.textAlign="left";ctx.fillText("z",x+r*.55,y-r*.55)}
 else{[-1,1].forEach(d=>{ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(x+d*ex,ey,er*1.35,0,7);ctx.fill();ctx.lineWidth=1;ctx.stroke();ctx.fillStyle="#222";ctx.beginPath();ctx.arc(x+d*ex,ey+(m===-1?er*.35:0),er*.65,0,7);ctx.fill()});
  ctx.lineWidth=lw;if(m===2)[-1,1].forEach(d=>{ctx.beginPath();ctx.moveTo(x+d*(ex+er*1.5),ey-er*2.4);ctx.lineTo(x+d*(ex-er*1.2),ey-er*1.4);ctx.stroke()})}
 ctx.beginPath();if(m===1)ctx.arc(x,y+r*.05,r*.45,.15*Math.PI,.85*Math.PI);else if(m===-1||m===2)ctx.arc(x,y+r*.75,r*.4,1.15*Math.PI,1.85*Math.PI);else{ctx.moveTo(x-r*.3,y+r*.45);ctx.lineTo(x+r*.3,y+r*.45)}ctx.stroke();ctx.restore()}
function sunFace(x,y,m){ctx.save();ctx.fillStyle="#1a1a1a";ctx.strokeStyle="#1a1a1a";ctx.lineWidth=2;[-1,1].forEach(d=>{ctx.beginPath();ctx.ellipse(x+d*9,y-3,8,5.5,0,0,7);ctx.fill()});ctx.beginPath();ctx.moveTo(x-3,y-3);ctx.lineTo(x+3,y-3);ctx.stroke();
 ctx.strokeStyle="#7a4a1a";ctx.lineWidth=2.5;ctx.lineCap="round";ctx.beginPath();if(m>0)ctx.arc(x,y+4,10,.1*Math.PI,.9*Math.PI);else if(m<0)ctx.arc(x,y+17,9,1.15*Math.PI,1.85*Math.PI);else ctx.arc(x,y+6,6,.2*Math.PI,.8*Math.PI);ctx.stroke();ctx.restore()}
function pharaoh(x,y,r){ctx.fillStyle="#e6b84a";ctx.beginPath();ctx.moveTo(x-r*1.2,y+r*1.3);ctx.lineTo(x-r*.95,y-r*.9);ctx.quadraticCurveTo(x,y-r*1.6,x+r*.95,y-r*.9);ctx.lineTo(x+r*1.2,y+r*1.3);ctx.closePath();ctx.fill();
 ctx.fillStyle="#2f6fd8";[-1,1].forEach(d=>ctx.fillRect(x+d*r*1.0-3,y-r*.3,6,r*1.4));ctx.fillStyle="#d9a77a";ctx.beginPath();ctx.ellipse(x,y+r*.1,r*.8,r*.95,0,0,7);ctx.fill();face(x,y+r*.1,r*.75,1);ctx.fillStyle="#2f6fd8";ctx.fillRect(x-3,y+r*.9,6,r*.5)}
