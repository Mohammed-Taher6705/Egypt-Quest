function startBonus(k){runSeq++;bonusKey=k;runWon=false;curseRun=false;cur=BONUS[k];showIntro(()=>{$("bmenu").style.display="none";cur.game.start();bonusMode=true;mode="world";document.body.classList.add("g");render()},{bonus:true})}
function openBonus(){const ar=lang==="ar",m=$("bmenu");
 m.innerHTML='<div class="box"><h2 style="color:var(--gold);margin:0 0 4px">🎮 '+L2("Bonus games","ألعاب إضافية")+'</h2><p style="margin:0 0 6px;color:var(--mut);font-size:13px">'+L2("Replay anytime to earn more points","العب في أي وقت لتربح نقاطًا أكثر")+'</p>'+
 Object.keys(BONUS).map(k=>'<button class="bbtn" data-k="'+k+'"><b>'+BONUS[k].bonus[ar?1:0]+'</b><small>'+BONUS[k].desc[ar?1:0]+'</small></button>').join("")+
 '<button class="bbtn" data-k="" style="text-align:center">'+L2("Close","إغلاق")+'</button></div>';
 m.style.display="flex";m.querySelectorAll(".bbtn").forEach(b=>b.onclick=()=>b.dataset.k?startBonus(b.dataset.k):(m.style.display="none"))}

let bonusMode=false;
function finishBonus(p){doneMode="win";$("dnext").style.display=$("dre").style.display="none";p=Math.round(p*eventMult()*RATE);snd("win");confetti();qAdd("bonus",1);score+=p;lastWin=p;Ads.countFinish();render();$("dh").textContent=L2("Great job!","أحسنت!");$("dp").textContent=L2("You earned +"+p+" points","ربحت +"+p+" نقطة");$("dbtn").textContent=L2("Back to map","العودة للخريطة");offerDouble();$("done").style.display="flex"}
const wrapT=(tx,w)=>{const ws=tx.split(" "),ls=[];let c="";ws.forEach(x=>{const n=c?c+" "+x:x;if(ctx.measureText(n).width>w&&c){ls.push(c);c=x}else c=n});if(c)ls.push(c);return ls};


/* Bonus game lost (below target): no points, offer a retry */
function loseBonus(msg){if(mode!=="world")return;Ads.countFinish();snd("lose");doneMode="bonusLose";
 $("dh").textContent="💀 "+L2("Not this time!","مش المرة دي!");$("dp").textContent=msg||"";$("dad").style.display="none";
 $("dnext").style.display="none";$("dre").style.display="block";$("dre").textContent="↻ "+L2("Try again","حاول مرة أخرى");$("dbtn").textContent=L2("Back to map","العودة للخريطة");
 later(()=>{$("done").style.display="flex"},700)}
