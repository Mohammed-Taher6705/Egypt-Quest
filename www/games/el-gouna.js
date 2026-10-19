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
 /* Hand-written Egyptian cinema bank (Arabic) — mixed with fresh Wikidata
    questions with photos: who is this actor, which film, director, release year. */
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
 const LOCAL=BANK.map((q,i)=>{const n=4;let wrong=q.w?[...q.w]:q.pool.filter(x=>x!==q.a);wrong=QGen.shuf(wrong).slice(0,n-1);const opts=QGen.shuf([q.a,...wrong]).map(x=>[x,x]);
  return{key:"gl:"+i,lt:q.t,cat:["🎬 "+TY[q.t][1],"🎬 "+TY[q.t][0]],q:[q.q,q.q],opts,ans:opts.findIndex(o=>o[0]===q.a)}});
 let nq=5,tlim=0,nopt=3;
 const film=t=>{const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#3a0f1c");g.addColorStop(1,"#0e0a1a");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const sp=ctx.createRadialGradient(W/2,60,10,W/2,60,W*.7);sp.addColorStop(0,"rgba(255,224,138,.28)");sp.addColorStop(1,"rgba(255,224,138,0)");ctx.fillStyle=sp;ctx.fillRect(0,0,W,H);
  if(W>=340){ctx.fillStyle="#0a0a0f";ctx.fillRect(4,0,22,H);ctx.fillRect(W-26,0,22,H);ctx.fillStyle="#d8c8a0";for(let y=((t/40)%26)-26;y<H;y+=26){ctx.fillRect(9,y,12,14);ctx.fillRect(W-21,y,12,14)}}};
 const V=makeQuizView({bg:film,timeLimit:()=>tlim,onEnd:(c,e)=>winGame(e===0?3:e<=1?2:1)});
 return{help:{en:"Egyptian cinema quiz! Recognise the stars from their photos, the films, directors and famous lines. Every game has new questions.",ar:"مسابقة السينما المصرية! اعرف النجوم من صورهم، والأفلام والمخرجين والإيفيهات. أسئلة جديدة في كل مرة."},
 start(){const x=LV();nq=5+Math.min(x,5);nopt=x<2?3:4;tlim=x>=3?Math.max(8,20-(x-3)*6):0;
  const kinds=x<1?["photo","film"]:x<2?["photo","film","year"]:["photo","film","year","dir"];
  const types=x<1?["film","actor"]:x<2?["film","actor","scene"]:["film","actor","scene","punch"];
  const local=LOCAL.filter(q=>types.includes(q.lt)).map(q=>{if(q.opts.length>nopt){const a=q.opts[q.ans],w=QGen.shuf(q.opts.filter((_,i)=>i!==q.ans)).slice(0,nopt-1),o=QGen.shuf([a,...w]);return{...q,opts:o,ans:o.indexOf(a)}}return q});
  V.load(QGen.cinema(nq,nopt,kinds,local))},
 status(){return V.loading?L2("Loading…","جاري التحميل…"):L2("Question ","السؤال ")+Math.min(V.index+1,V.count||nq)+"/"+(V.count||nq)+" · "+L2("Mistakes ","الأخطاء ")+V.errs},
 draw:t=>V.draw(t),tap:(x,y)=>V.tap(x,y)}})()
});
