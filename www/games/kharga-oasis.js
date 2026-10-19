/* Kharga Oasis – Temple of Hibis — Symbol grid puzzle */
definePlace({
  id:"kharga",
  // map pin
  lon:30.54, lat:25.46,
  en:"Kharga Oasis – Temple of Hibis",
  ar:"واحة الخارجة – معبد هيبس",
  eraEn:"Persian period · c. 500 BC",
  eraAr:"العصر الفارسي · نحو 500 ق.م",
  dEn:"A remote desert oasis with one of the best-preserved temples from the Persian period.",
  dAr:"واحة صحراوية نائية تضم أحد أفضل المعابد المحفوظة من العصر الفارسي.",
  // challenge meta
  challenge:["Symbol grid puzzle","أحجية شبكة الرموز"],
  par:80,                // seconds for full speed bonus at level 1
  starTip:["Fill the grid quickly","املأ الشبكة بسرعة"],
  levels:(x,k)=>gridTxt(4+(x>=2?1:0)+(x>=4?1:0)),
  fact:["The Temple of Hibis in Kharga is among the best-preserved temples of the Persian period in Egypt.","يُعد معبد هيبس في الخارجة من أفضل معابد العصر الفارسي المحفوظة في مصر."],
  icon(ctx){ctx.beginPath();ctx.moveTo(-8,8);ctx.lineTo(-8,-1);ctx.arc(0,-1,8,Math.PI,0);ctx.lineTo(8,8);ctx.closePath();ctx.fill();},
  game:(()=>{const SYM=["ankh","scarab","eye","coin","feather","lotus"];let N=4,sol=[],g=[],fixed=[],t0=0,empty=1,won=false;
 const lay=()=>{const s=Math.max(46,Math.min((W-30)/N,(H-240)/N,88));return{s,x0:(W-s*N)/2,y0:Math.max(84,(H-s*N)/2)}};
 const conflict=i=>{const v=g[i];if(!v)return false;const r=Math.floor(i/N),c=i%N;for(let k=0;k<N;k++){if(k!==c&&g[r*N+k]===v)return true;if(k!==r&&g[k*N+c]===v)return true}return false};
 return{help:{en:"Fill the grid so each row and column has every symbol exactly once",ar:"املأ الشبكة بحيث يظهر كل رمز مرة واحدة فقط في كل صف وعمود"},
 start(){N=4+(LV()>=2?1:0)+(LV()>=4?1:0);const rows=shf([...Array(N).keys()]),cols=shf([...Array(N).keys()]),sy=shf([...Array(N).keys()]);sol=[];
  for(let r=0;r<N;r++)for(let c=0;c<N;c++)sol.push(sy[(rows[r]+cols[c])%N]+1);
  const givens=Math.max(N+1,Math.round(N*N*(.55-Math.min(LV(),4)*.05)));g=Array(N*N).fill(0);fixed=Array(N*N).fill(false);
  shf([...Array(N*N).keys()]).slice(0,givens).forEach(i=>{g[i]=sol[i];fixed[i]=true});empty=N*N-givens;t0=performance.now();won=false},
 status(){return L2("Filled ","المملوء ")+g.filter(v=>v).length+"/"+N*N+" · "+Math.floor((performance.now()-t0)/1000)+"s"},
 draw(){papyrus();const{s,x0,y0}=lay();
  g.forEach((v,i)=>{const x=x0+(i%N)*s,y=y0+Math.floor(i/N)*s;ctx.fillStyle=fixed[i]?"rgba(180,150,100,.9)":"rgba(255,244,214,.8)";rr(x+3,y+3,s-6,s-6,8);ctx.fill();ctx.strokeStyle=conflict(i)?"#d9534f":"#8a6a35";ctx.lineWidth=conflict(i)?4:2;ctx.stroke();if(v)glyph(SYM[v-1],x+s/2,y+s/2,s/46)})},
 tap(px,py){if(won)return;const{s,x0,y0}=lay(),c=Math.floor((px-x0)/s),r=Math.floor((py-y0)/s);if(c<0||c>=N||r<0||r>=N)return;const i=r*N+c;if(fixed[i])return;g[i]=(g[i]+1)%(N+1);snd("tap");
  if(g.every(v=>v)&&g.every((v,k)=>!conflict(k))){won=true;const sec=(performance.now()-t0)/1000;winGame(sec<=empty*5?3:sec<=empty*10?2:1)}}}})()
});
