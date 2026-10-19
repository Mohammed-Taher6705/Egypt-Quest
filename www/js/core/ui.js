function openCollection(){const ar=lang==="ar",m=$("bmenu");let n=0;
 const rows=SITES.map(s=>{const ok=done.has(s.id);if(ok)n++;return'<div class="bbtn" style="cursor:default"><b>'+(ok?"✅ ":"🔒 ")+(ar?s.ar:s.en)+' · ★ '+starSum(s.id)+'/15</b><small>'+(ok?FACTS[s.id][ar?1:0]:L2("Finish this site's challenge to reveal a fact","أكمل تحدي هذا الموقع لتكشف معلومة"))+'</small></div>'}).join("")+achBox();
 m.innerHTML='<div class="box" style="max-height:88vh;overflow:auto"><h2 style="color:var(--gold);margin:0 0 4px">📜 '+L2("Collection","المجموعة")+'</h2><p style="margin:0 0 6px;color:var(--mut);font-size:13px">'+L2("Sites completed ","المواقع المكتملة ")+n+'/'+SITES.length+' · '+L2("Balance ","الرصيد ")+bal()+" · "+L2("Earned ","المكتسب ")+score+'</p><p style="margin:0 0 8px;font-size:12px;color:var(--mut)">'+L2("✓ Progress saves automatically on this device","✓ يُحفظ تقدمك تلقائيًا على هذا الجهاز")+'</p>'+rows+
 '<button class="bbtn" id="bk" style="text-align:center">💾 '+L2("Backup / restore progress","نسخ احتياطي / استعادة التقدم")+'</button><button class="bbtn" id="rst" style="text-align:center">'+L2("Reset progress","إعادة ضبط التقدم")+'</button><button class="bbtn" id="cl" style="text-align:center">'+L2("Close","إغلاق")+'</button></div>';
 m.style.display="flex";$("cl").onclick=()=>{m.style.display="none"};$("bk").onclick=openBackup;let armed=false;
 $("rst").onclick=()=>{if(!armed){armed=true;$("rst").textContent=L2("Tap again to confirm","اضغط مرة أخرى للتأكيد");return}score=0;done.clear();seen.clear();for(const k in prog)delete prog[k];Object.keys(lvl).forEach(k=>delete lvl[k]);ach.clear();streak=0;lastDay="";dailyClaim="";for(const k in SR)delete SR[k];spent=0;inv.hint=5;inv.time=0;inv.boost=0;inv.freeze=0;inv.ward=0;curseOn=false;own.clear();theme="classic";qDay="";qIds=[];qp={};qcl={};chestAt=0;loginDay=0;for(const k in ENDL)delete ENDL[k];sel=null;m.style.display="none";render()}}

/* ---------- UI ---------- */
function select(id){snd("tap");quipFor("select");sel=SITES.find(s=>s.id===id);if(!seen.has(id)){seen.add(id);score+=Math.round(10*RATE)}render()}
$("x").onclick=()=>{sel=null;render()};
$("lang").onclick=()=>{lang=lang==="en"?"ar":"en";render()};
function exitWorld(){runSeq++;mode="map";bonusMode=false;ptr.clear();document.body.classList.remove("g");render();if(loginPending)openLogin()}
$("enter").onclick=()=>{if(!sel)return;if(!unlocked(SITES.indexOf(sel)))return;openLevels()};
$("gback").onclick=exitWorld;$("ginfo").onclick=()=>showIntro(null);
$("hintbtn").onclick=()=>{if(inv.hint<1){adForHints();return}const rem=cur.arts.map((a,i)=>i).filter(i=>!found.has(i));if(!rem.length)return;
 hintIdx=rem[Math.floor(Math.random()*rem.length)];hintUntil=performance.now()+2500;inv.hint--;huntHints++;
 const a=cur.arts[hintIdx];V.ox=W/2-a[0]*V.z;V.oy=H/2-a[1]*V.z;clampV();render()};
const unSet=new Set();let unInit=false;
function checkUnlocks(){SITES.forEach((st,i)=>{if(unlocked(i)&&!unSet.has(st.id)){unSet.add(st.id);if(unInit){toastTx="🗺️ "+L2("New place unlocked: ","مكان جديد: ")+(lang==="ar"?st.ar:st.en);toastT=performance.now()+3500;snd("win")}}});unInit=true}
const chestShort=()=>{const ms=chestAt-Date.now();if(ms<=0)return L2("OPEN","افتح");const m=Math.ceil(ms/60000);return Math.floor(m/60)+"h"+m%60+"m"};
function render(){checkUnlocks();newQuestDay();checkAch();save();const t=T[lang],ar=lang==="ar";
 document.documentElement.lang=lang;document.documentElement.dir=ar?"rtl":"ltr";
 $("title").textContent=t.title;$("score").textContent=t.score+": "+bal()+(streak>0?"  🔥"+streak:"");{const nx=nextLocked();$("hint").textContent=t.hintMap+(nx>=0?"\n🔒 "+L2("Next: ","التالي: ")+(ar?SITES[nx].ar:SITES[nx].en)+" — "+lockText(nx):"")}$("lang").textContent=ar?"English":"العربية";
 const idx=sel?SITES.indexOf(sel):0,lk=!!sel&&!unlocked(idx);
 $("enter").textContent=lk?"🔒 "+lockText(idx):t.enter;$("enter").disabled=lk;
 const cs=mode==="world"&&cur&&cur.bonus?cur.bonus[ar?1:0]:mode==="world"&&sel?(ar?sel.ar:sel.en):"";$("gtitle").textContent=(cur&&cur.bonus?"":L2("Lv ","م ")+curLevel+(curseRun?" ☠":"")+" · ")+"🪙"+bal()+" · "+cs;$("gtitle").title=cs;$("gback").textContent=t.back;
 $("gline").textContent="";$("ginfo").style.display=cur&&cur.bonus?"none":"";$("hintbtn").innerHTML='<span class="e">💡</span><span class="l">'+(inv.hint>0?inv.hint:Ads.canReward()?"🎬+"+ADS.rewardedHints:"0")+'</span>';$("hintbtn").style.display=cur&&cur.game?"none":"";
 if(cur&&mode==="world"&&!cur.game){const n=found.size,tot=cur.arts.length;$("tray").textContent="🔎 "+n+"/"+tot}
 {const tk=sel&&mode==="map"&&sel.ticketUrl;$("itix").style.display=tk?"inline-block":"none";if(tk){$("itix").textContent="🎟 "+L2("Book tickets","احجز التذاكر");$("itix").onclick=e=>{e.preventDefault();openExternal(sel.ticketUrl)}}}
 const sb=(side,emoji,label,onclick,cls)=>{const b=document.createElement("button");b.className="sbtn"+(cls?" "+cls:"");const e=document.createElement("span");e.className="e";e.textContent=emoji;const keys=side==="lside"?["daily","chest","quests"]:["bonus","book","shop"];e.dataset.icon=keys[$(side).children.length]||"quests";const l=document.createElement("span");l.className="l";l.textContent=label;b.appendChild(e);b.appendChild(l);if(onclick)b.onclick=onclick;$(side).appendChild(b);return l};
$("lside").innerHTML="";$("rside").innerHTML="";
{const dI=getDaily(),dn=dailyClaim===today(),dl=sb("lside","⭐",dn?"✓"+(streak>1?"🔥"+streak:""):L2("Daily","يومي"),()=>{select(dI);if(unlocked(SITES.findIndex(x=>x.id===dI)))openLevels()},dn?"done":"");
 chestEl=sb("lside","🎁",chestShort(),openChest);
 sb("lside","📋",qDone()+"/3",openQuests,qDone()>=3?"done":"");
 if(eventMult()>1)sb("lside","🎉","×2",null,"done")}
sb("rside","🎮",L2("Bonus","إضافي"),openBonus);sb("rside","📜",L2("Book","السجل"),openCollection);sb("rside","🛒",L2("Shop","المتجر"),openShop);

 const inf=$("info");if(sel&&mode==="map"){inf.style.display="block";$("iname").textContent=ar?sel.ar:sel.en;$("iera").textContent=ar?sel.eraAr:sel.eraEn;$("idesc").textContent=(ar?sel.dAr:sel.dEn)+"\n🎮 "+CH[sel.id][ar?1:0]+"\n★ "+starSum(sel.id)+"/15"+(lk?"\n🔒 "+lockText(idx):"")}else inf.style.display="none";Ads.update()}

/* Rewarded ad: +N hints (offered when you are out of hints, and in the shop) */
async function adForHints(after){if(!Ads.canReward()){toastTx=L2("Out of hints — get more in the 🛒 shop","انتهت التلميحات — اشترِ المزيد من 🛒 المتجر");toastT=performance.now()+2200;return}
 const ok=await Ads.rewarded("hints");if(ok){inv.hint+=ADS.rewardedHints;toastTx="💡 +"+ADS.rewardedHints;toastT=performance.now()+1800;snd("ok")}
 else{toastTx=L2("No ad available right now","لا يوجد إعلان متاح الآن");toastT=performance.now()+2000}render();after&&after()}
