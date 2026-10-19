const QP={ok:[["Pharaoh-nomenal!","فرعوني جدًا!"],["Sphinx-tacular!","رائع زي أبو الهول!"],["Nile-ly perfect!","ممتاز زي النيل!"],["Mummy is proud!","ماما المومياء فخورة!"],["Egypt-ional!","مصري أصيل!"],["Queen Cleo approves!","الملكة كليوباترا موافقة!"]],
bad:[["Mummy mia!","يا مومياء!"],["Oops! Even pharaohs slip.","أوبس! حتى الفراعنة بتغلط!"],["That was un-bandage-able!","دي كانت صعبة!"],["Sand in my eyes!","رمل في عيني!"],["Camel says: nope.","الجمل بيقول: لأ."],["Tut tut tut…","توت توت توت…"]],
miss:[["Only sand here…","مفيش غير رمل هنا…"],["Cold. Desert cold.","برد… برد صحرا!"],["Not that one!","مش دي!"]],
win:[["You're a legend!","إنت أسطورة!"],["Pharaoh-mance complete!","اكتملت المغامرة!"],["Tut-ally awesome!","رائع بجد!"],["Bow to the new pharaoh!","انحنوا للفرعون الجديد!"]],
select:[["Pack your sandals!","جهّز صندلك!"],["Camel ride? Yes please.","ركوب جمل؟ طبعًا!"],["Adventure awaits!","المغامرة في انتظارك!"],["Sunscreen: SPF 5000!","واقي شمس بعامل 5000!"]]};
let qT=0,qTx="";
function quipFor(k){const P={ok:.3,bad:.8,miss:.5,win:1,select:.45}[k];if(!P||Math.random()>P||performance.now()<qT-1000)return;const a=QP[k][Math.floor(Math.random()*QP[k].length)];qTx=lang==="ar"?a[1]:a[0];qT=performance.now()+1900}

/* ---------- ENHANCEMENTS: sound, save, collection ---------- */
let AC=null,muted=false;
function note(f,at,d,ty){const o=AC.createOscillator(),g=AC.createGain(),n=AC.currentTime;o.type=ty||"sine";o.frequency.value=f;g.gain.setValueAtTime(.0001,n+at);g.gain.exponentialRampToValueAtTime(.18,n+at+.01);g.gain.exponentialRampToValueAtTime(.0001,n+at+d);o.connect(g);g.connect(AC.destination);o.start(n+at);o.stop(n+at+d+.02)}
const SN={ok:[[784,0,.1],[1047,.08,.14]],bad:[[160,0,.22,"sawtooth"]],win:[[523,0,.14],[659,.13,.14],[784,.26,.14],[1047,.39,.3]],fanfare:[[523,0,.12],[659,.1,.12],[784,.2,.12],[1047,.3,.16],[784,.46,.1],[1047,.56,.1],[1319,.68,.45]],tap:[[520,0,.06]],miss:[[220,0,.07,"triangle"]],p0:[[330,0,.28]],p1:[[392,0,.28]],p2:[[494,0,.28]],p3:[[587,0,.28]]};
function snd(k){quipFor(k);if(curseRun&&mode==="world"&&cur&&!cur.bonus&&(k==="bad"||k==="miss")){const n=loseBal(Math.max(1,Math.round((k==="bad"?5:2)*RATE)));if(n){curseLost+=n;toastTx="💀 −"+n;toastT=performance.now()+1000}}if(muted)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume();(SN[k]||[]).forEach(n=>note(n[0],n[1],n[2],n[3]));if(navigator.vibrate)navigator.vibrate(k==="bad"?60:k==="miss"?0:15)}catch(e){}}
const updMute=()=>{$("mute").textContent=$("gmute").textContent=muted?"🔇":"🔊"};
$("mute").onclick=$("gmute").onclick=()=>{muted=!muted;updMute();save()};
