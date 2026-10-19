/* El Gouna Film Festival — Egyptian movie quiz */
definePlace({
  id:"gouna",
  req:800,              // points needed to unlock (default formula when omitted)
  // map pin
  lon:33.68, lat:27.39,
  en:"El Gouna Film Festival",
  ar:"مهرجان الجونة السينمائي",
  eraEn:"Founded 2017 · Red Sea",
  eraAr:"تأسس عام 2017 · البحر الأحمر",
  dEn:"A film festival in the Red Sea resort town of El Gouna. Test your knowledge of Egyptian movies!",
  dAr:"مهرجان سينمائي في مدينة الجونة على البحر الأحمر. اختبر معلوماتك عن الأفلام المصرية!",
  logo:"assets/images/el-gouna.jpg",
  // challenge meta
  challenge:["Egyptian movie quiz","أسئلة عن الأفلام المصرية"],
  par:45,                // seconds for full speed bonus at level 1
  starTip:["Few mistakes and fast answers","أخطاء قليلة وإجابات سريعة"],
  levels:(x,k)=>L2((5+Math.min(x,5))+" questions",(5+Math.min(x,5))+" أسئلة"),
  fact:["El Gouna Film Festival was founded in 2017, and its awards are called the Stars of El Gouna.","تأسس مهرجان الجونة السينمائي عام 2017، وتُسمّى جوائزه «نجمة الجونة»."],
  icon(ctx){ctx.fillRect(-9,-1,18,9);ctx.beginPath();ctx.moveTo(-9,-3);ctx.lineTo(9,-8);ctx.lineTo(9,-4);ctx.lineTo(-9,1);ctx.closePath();ctx.fill();},
  game:(()=>{
 const FILMS=["الإرهاب والكباب","طيور الظلام","عمارة يعقوبيان","صعيدي في الجامعة الأمريكية","همام في أمستردام","إسماعيلية رايح جاي","الناظر","الكيف","إبراهيم الأبيض","عنتر شايل سيفه","ابن حميدو","سكر هانم","عبود على الحدود","بخيت وعديلة","الفيل الأزرق","الجزيرة","خلي بالك من زوزو","باب الحديد","الأرض","شيء من الخوف","إشاعة حب","اللمبي"];
 const MEN=["عادل إمام","محمد هنيدي","يحيى الفخراني","محمود عبد العزيز","علاء ولي الدين","أحمد زكي","محمد سعد","أحمد حلمي","نور الشريف","يوسف وهبي","توفيق الدقن","عبد المنعم مدبولي","إسماعيل ياسين","كريم عبد العزيز","أحمد مكي","محمد رمضان"];
 const WOMEN=["زينات صدقي","ماري منيب","تحية كاريوكا","سعاد حسني","فاتن حمامة","شادية","يسرا","ميرفت أمين","نادية الجندي","لبلبة"];
 const TY={film:["الإيفيه دا من فيلم إيه؟","Which film is this line from?"],actor:["الممثل دا كان اسمه إيه؟","What was this actor's name?"],scene:["المشهد دا من فيلم إيه؟","Which film is this scene from?"],punch:["الإيفيه في المشهد دا إيه؟","What's the punchline in this scene?"]};
 const F=(q,a)=>({t:"film",q:'"'+q+'"',a,pool:FILMS}),A=(q,a,pool,w)=>({t:"actor",q,a,pool,w}),S=(q,a)=>({t:"scene",q,a,pool:FILMS}),P=(q,a,w)=>({t:"punch",q,a,w});
 const BANK=[
  F("دا أنا حمار يا بيه","عنتر شايل سيفه"),F("انت جاي تعزي ولا جاي تهزر؟","الكيف"),F("كابتن كابتن هو كله ضرب ضرب مفيش شتيمة","الناظر"),F("الإنسان دعيف","إبراهيم الأبيض"),F("إنسان الغاب طويل الناب","ابن حميدو"),F("ست أنا مش شايف قدامي","سكر هانم"),F("دنا بدهبزه ودهرزه","الكيف"),F("قولي عملك إيه كرشي","عبود على الحدود"),F("ماما يا روح أمك","إشاعة حب"),
  A('مين الممثل اللي قال "دا أنا حمار يا بيه" في فيلم عنتر شايل سيفه؟',"عادل إمام",MEN),
  A('مين الممثل اللي لعب شخصية "خلف الدهشوري خلف" في صعيدي في الجامعة الأمريكية؟',"محمد هنيدي",MEN),
  A('مين قال "انت جاي تعزي ولا جاي تهزر؟ لأ أنا جاي أهزر" في فيلم الكيف؟',"يحيى الفخراني",MEN),
  A('مين الممثلة اللي قالت "إنسان الغاب طويل الناب" في فيلم ابن حميدو؟',"زينات صدقي",WOMEN),
  A('مين الممثل اللي قال "الإنسان دعيف" في فيلم إبراهيم الأبيض؟',"محمود عبد العزيز",MEN),
  A('مين الممثل اللي قال "كابتن كابتن" في فيلم الناظر؟',"علاء ولي الدين",MEN),
  A("مين بطل فيلم الإرهاب والكباب؟","عادل إمام",MEN),
  A('مين الممثل اللي قال "ست أنا مش شايف قدامي" في فيلم سكر هانم؟',"عبد الفتاح القصري",MEN),
  A('مين الممثل اللي قال "ماما يا روح أمك" في فيلم إشاعة حب؟',"يوسف وهبي",MEN),
  A("مين بطل فيلم همام في أمستردام؟","محمد هنيدي",null,["أحمد حلمي","محمد سعد","كريم عبد العزيز","أحمد مكي","عادل إمام"]),
  A("مين الممثل اللي شارك هنيدي بطولة إسماعيلية رايح جاي؟","محمد فؤاد",null,["أحمد حلمي","محمد سعد","كريم عبد العزيز","أحمد مكي","عادل إمام"]),
  S("مشهد: شاب مصري واقف في المحكمة بيعترف إنه اتضحك عليه في إيطاليا بعد عقد عمل مزور","عنتر شايل سيفه"),
  S("مشهد: موظف غلبان ماسك سلاح في مجمع التحرير والناس فاكرينهم رهائن","الإرهاب والكباب"),
  S("مشهد: شاب جاي من الصعيد يتعلم في الجامعة الأمريكية ويقع في مواقف مضحكة","صعيدي في الجامعة الأمريكية"),
  S("مشهد: رحلة سفر مليانة مغامرات ومقالب لشاب مصري في أمستردام","همام في أمستردام"),
  S("مشهد: حكايات ناس ساكنين في عمارة قديمة بوسط القاهرة، عن رواية لعلاء الأسواني","عمارة يعقوبيان"),
  S("مشهد: حد بيسأل واحد في عزاء: جاي تعزي ولا جاي تهزر؟","الكيف"),
  S('مشهد: ناظر مدرسة وطلبة مشاغبين، وواحد بيقول "كابتن كابتن"',"الناظر"),
  S("مشهد: فيلم بطولة محمد فؤاد ومحمد هنيدي عن حلم الشهرة","إسماعيلية رايح جاي"),
  P("عنتر في المحكمة بيعترف إنه اتضحك عليه، قال إيه للقاضي؟","دا أنا حمار يا بيه",["دا أنا بريء يا بيه","دي مؤامرة يا بيه","أنا ماكنتش أعرف حاجة يا بيه"]),
  P("في فيلم الكيف سألوه: انت جاي تعزي ولا جاي تهزر؟ رد إزاي؟","لأ أنا جاي أهزر",["أنا جاي أعزي طبعاً","لأ أنا جاي أشرب شاي","مش فاكر جاي ليه"]),
  P('زينات صدقي في ابن حميدو بتقول: "إنسان الغاب..." كمّل',"طويل الناب",["قصير القامة","واسع الباب","عالي الصوت"]),
  P('محمود عبد العزيز في إبراهيم الأبيض بيقول: "الإنسان..." كمّل زي ما اتقالت في الفيلم',"دعيف",["ضعيف","رهيف","لطيف"]),
  P('محمود عبد العزيز في الكيف: "دنا بدهبزه ودهرزه عشان..." كمّل',"يبرعش",["يتسطل","ينام","يهدى"]),
  P('علاء ولي الدين في الناظر: "كابتن كابتن هو كله ضرب ضرب مفيش..." كمّل',"شتيمة",["حكم","جزاء","كورة"]),
  P('عبد الفتاح القصري في سكر هانم: "ست أنا مش شايف..." كمّل',"قدامي",["حاجة","كويس","خالص"]),
  P('علاء ولي الدين في عبود على الحدود: "قولي عملك إيه كرشي، كرشي..." كمّل',"اللي إنت ناسيه",["اللي في بطني","اللي مش بيشبع","اللي إنت قاعد عليه"])];
 let qs=[],qi=0,opts=[],picked=-1,errs=0,qEnd=0,tlim=0,nq=5,wait=false;
 const shuf=a=>{for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a};
 function load(){const q=qs[qi],n=LV()<2?3:4;let wrong=q.w?[...q.w]:q.pool.filter(x=>x!==q.a);wrong=shuf(wrong).slice(0,n-1);opts=shuf([q.a,...wrong]);picked=-1;wait=false;qEnd=tlim?performance.now()+tlim*1000:0}
 const next=()=>{qi++;if(qi>=nq)winGame(errs===0?3:errs<=1?2:1);else load()};
 const lay=()=>{const bw=Math.min(W-70,420);ctx.font="bold 22px system-ui";const ls=wrapT(qs[qi].q,bw),top=Math.max(206,158+ls.length*30+26),bh=Math.max(40,Math.min(68,(H-top-60)/opts.length-10));return{bw,ls,top,bh,x:(W-bw)/2}};
 return{help:{en:"Egyptian movie quiz! Which film is a scene or a line from, who the actor is, and what the punchline is.",ar:"أسئلة عن الأفلام المصرية! المشهد ده من فيلم إيه، الإيفيه ده من فيلم إيه، الممثل ده مين، والإيفيه في المشهد ده إيه."},
 start(){const x=LV(),types=x<1?["film","actor"]:x<2?["film","actor","scene"]:["film","actor","scene","punch"];nq=5+Math.min(x,5);tlim=x>=3?Math.max(8,20-(x-3)*6):0;
  qs=shuf(BANK.filter(q=>types.includes(q.t))).slice(0,nq);nq=qs.length;qi=0;errs=0;load()},
 status(){return L2("Question ","السؤال ")+Math.min(qi+1,nq)+"/"+nq+" · "+L2("Mistakes ","الأخطاء ")+errs},
 draw(t){const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#3a0f1c");g.addColorStop(1,"#0e0a1a");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const sp=ctx.createRadialGradient(W/2,60,10,W/2,60,W*.7);sp.addColorStop(0,"rgba(255,224,138,.28)");sp.addColorStop(1,"rgba(255,224,138,0)");ctx.fillStyle=sp;ctx.fillRect(0,0,W,H);
  if(W>=340){ctx.fillStyle="#0a0a0f";ctx.fillRect(4,0,22,H);ctx.fillRect(W-26,0,22,H);ctx.fillStyle="#d8c8a0";for(let y=((t/40)%26)-26;y<H;y+=26){ctx.fillRect(9,y,12,14);ctx.fillRect(W-21,y,12,14)}}
  if(!qs[qi])return;const q=qs[qi],{bw,ls,top,bh,x}=lay(),ar=lang==="ar";ctx.textAlign="center";
  ctx.font="bold 15px system-ui";ctx.fillStyle="#e6b84a";ctx.fillText("🎬 "+(ar?TY[q.t][0]:TY[q.t][1]),W/2,146);if(!ar){ctx.font="13px system-ui";ctx.fillStyle="#c9b27a";ctx.fillText(TY[q.t][0],W/2,164)}
  ctx.font="bold 22px system-ui";ctx.fillStyle="#fff";ls.forEach((l,k)=>ctx.fillText(l,W/2,196+k*30));
  if(tlim&&picked<0&&qEnd){const left=Math.max(0,(qEnd-t)/(tlim*1000));ctx.fillStyle="rgba(255,255,255,.18)";ctx.fillRect(x,top-14,bw,5);ctx.fillStyle=left<.3?"#d9534f":"#e6b84a";ctx.fillRect(x,top-14,bw*left,5);if(left<=0&&!wait){wait=true;errs++;snd("bad");picked=-2;later(next,1100)}}
  opts.forEach((o,k)=>{const y=top+k*(bh+10);let c="#2a2a45";if(picked!==-1){if(o===q.a)c="#2e7d4f";else if(k===picked)c="#a33a3a"}ctx.fillStyle=c;rr(x,y,bw,bh,14);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=1.5;ctx.stroke();ctx.fillStyle="#fff";ctx.font="18px system-ui";ctx.fillText(o,W/2,y+bh/2+6)})},
 tap(px,py){if(picked!==-1||wait||!qs[qi])return;const{bw,top,bh,x}=lay(),k=opts.findIndex((o,i)=>{const y=top+i*(bh+10);return px>=x&&px<=x+bw&&py>=y&&py<=y+bh});if(k<0)return;
  picked=k;wait=true;if(opts[k]===qs[qi].a)snd("ok");else{errs++;snd("bad")}later(next,950)}}})()
});
