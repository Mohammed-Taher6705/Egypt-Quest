/* Grand Egyptian Museum — Connect 4 */
definePlace({
  id:"gem",
  req:0,              // points needed to unlock (default formula when omitted)
  // map pin
  lon:31.08, lat:29.99, mapDx:-18, mapDy:-12,
  en:"Grand Egyptian Museum",
  ar:"المتحف المصري الكبير",
  eraEn:"Modern museum · Giza",
  eraAr:"متحف حديث · الجيزة",
  dEn:"Explore the Grand Egyptian Museum and test your curator skills among Egypt's greatest treasures.",
  dAr:"استكشف المتحف المصري الكبير واختبر مهاراتك كأمين متحف بين أعظم كنوز مصر.",
  logo:"assets/images/gem.png",
  // challenge meta
  challenge:["Curator's artifact challenge","تحدي أمين المتحف"],
  par:45,                // seconds for full speed bonus at level 1
  starTip:["Find the treasures accurately and quickly","اعثر على الكنوز بدقة وسرعة"],
  fact:["The Grand Egyptian Museum is one of the world's largest museums dedicated to a single civilization.","المتحف المصري الكبير من أكبر المتاحف في العالم المخصصة لحضارة واحدة."],
  icon(ctx){ctx.fillStyle="#f47700";ctx.beginPath();ctx.moveTo(0,-11);ctx.lineTo(11,0);ctx.lineTo(0,11);ctx.lineTo(-11,0);ctx.closePath();ctx.fill();ctx.fillStyle="#fff4d0";ctx.font="bold 7px system-ui";ctx.textAlign="center";ctx.fillText("GEM",0,3);},
  ticketUrl:"https://tickets.gem.eg/?hl=en-US",
  game:(()=>{
 /* Connect 4 vs the computer.
    AI strength scales with level: L1 random, L2+ takes wins / blocks yours,
    L3+ also prefers centre columns and avoids gifting you a win. */
 let board=[],turn=1,winner=0,thinking=false,gen=0,loseUntil=0;const COLS=7,ROWS=6;
 const lay=()=>{const bw=Math.min(W-32,420),cell=bw/COLS;return{bw,cell,x0:(W-bw)/2,y0:Math.max(196,H/2-bw*.36)}};
 const reset=()=>{board=Array(COLS*ROWS).fill(0);turn=1;winner=0;thinking=false;gen++};
 const win=(p)=>{for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){if(board[r*COLS+c]!==p)continue;for(const[dc,dr]of[[1,0],[0,1],[1,1],[1,-1]]){let n=1;for(let k=1;k<4;k++){const rr=r+dr*k,cc=c+dc*k;if(rr<0||rr>=ROWS||cc<0||cc>=COLS||board[rr*COLS+cc]!==p)break;n++}if(n>=4)return true}}return false};
 const drop=(c,p)=>{for(let r=ROWS-1;r>=0;r--)if(!board[r*COLS+c]){board[r*COLS+c]=p;return r}return-1};
 const undo=(c)=>{for(let r=0;r<ROWS;r++)if(board[r*COLS+c]){board[r*COLS+c]=0;return}};
 const free=()=>{const a=[];for(let c=0;c<COLS;c++)if(!board[c])a.push(c);return a};
 const winsWith=(c,p)=>{if(drop(c,p)<0)return false;const w=win(p);undo(c);return w};
 function pick(){const ch=free(),lv=LV();if(lv<1)return ch[Math.floor(Math.random()*ch.length)];
  for(const c of ch)if(winsWith(c,2))return c;            // win now
  for(const c of ch)if(winsWith(c,1))return c;            // block
  let pool=ch;if(lv>=2){const safe=ch.filter(c=>{drop(c,2);const bad=free().some(x=>winsWith(x,1));undo(c);return!bad});if(safe.length)pool=safe;
   pool=[...pool].sort((a,b)=>Math.abs(a-3)-Math.abs(b-3)).slice(0,Math.max(1,4-lv))}
  return pool[Math.floor(Math.random()*pool.length)]}
 const full=()=>board.every(Boolean);
 const ai=(g)=>{if(g!==gen||winner||mode!=="world")return;const ch=free();if(!ch.length){reset();render();return}
  drop(pick(),2);if(win(2)){winner=2;thinking=false;loseUntil=performance.now()+1400;snd("bad");render();const g2=gen;later(()=>{if(g2===gen){reset();render()}},1400)}
  else if(full()){reset();render()}else{turn=1;thinking=false;render()}};
 return{help:{en:"Play Connect 4 against the computer. Get four of your pieces in a row first!",ar:"العب كونكت 4 ضد بطل المتحف. كوّن أربعة أقراص متتالية أولاً!"},
 start(){reset()},
 status(){return winner===1?L2("You win!","لقد فزت!"):winner===2?L2("Computer wins — try again","الكمبيوتر يفوز — حاول مرة أخرى"):thinking?L2("Computer is thinking…","الكمبيوتر يفكر…"):L2("Your turn — tap a column","دورك — اضغط على عمود")},
 draw(t){const l=lay(),ar=lang==="ar";ctx.fillStyle="#172536";ctx.fillRect(0,0,W,H);ctx.textAlign="center";
  ctx.fillStyle="#e6b84a";ctx.font="bold 21px system-ui";ctx.fillText(ar?"المتحف المصري الكبير":"GRAND EGYPTIAN MUSEUM",W/2,l.y0-50);
  ctx.fillStyle="#f3ead2";ctx.font="15px system-ui";ctx.fillText(ar?"كوّن أربعة أقراص متتالية":"Connect four pieces in a row",W/2,l.y0-24);
  ctx.fillStyle="#244e70";rr(l.x0-8,l.y0-8,l.bw+16,l.cell*ROWS+16,18);ctx.fill();
  for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){const x=l.x0+c*l.cell+l.cell/2,y=l.y0+r*l.cell+l.cell/2;ctx.beginPath();ctx.arc(x,y,l.cell*.38,0,7);ctx.fillStyle=board[r*COLS+c]===1?"#e85b45":board[r*COLS+c]===2?"#f2c14e":"#0e1b2b";ctx.fill();ctx.strokeStyle="rgba(255,255,255,.18)";ctx.lineWidth=2;ctx.stroke()}
  ctx.fillStyle="#e6b84a";ctx.font="bold 13px system-ui";ctx.fillText(ar?"أنت الأحمر · الكمبيوتر الأصفر":"You are red · computer is yellow",W/2,Math.min(H-28,l.y0+l.cell*ROWS+42));
  if(t<loseUntil){const a=.18+.12*Math.sin(t/70);ctx.save();ctx.fillStyle="rgba(190,30,30,"+a+")";ctx.fillRect(0,0,W,H);ctx.strokeStyle="rgba(255,220,180,.8)";ctx.lineWidth=8;ctx.strokeRect(10,10,W-20,H-20);ctx.fillStyle="#fff4d0";ctx.font="bold 24px system-ui";ctx.fillText(L2("Computer wins — try again!","الكمبيوتر يفوز — حاول مرة أخرى!"),W/2,Math.min(H-72,l.y0+l.cell*ROWS+80));ctx.restore()}},
 tap(px,py){if(turn!==1||thinking||winner)return;const l=lay(),c=Math.floor((px-l.x0)/l.cell);if(c<0||c>=COLS||px<l.x0||px>l.x0+l.bw)return;if(drop(c,1)<0)return;snd("tap");
  if(win(1)){winner=1;winGame(3);return}if(full()){reset();render();return}turn=2;thinking=true;render();const g=gen;later(()=>ai(g),550)}}})()
});
