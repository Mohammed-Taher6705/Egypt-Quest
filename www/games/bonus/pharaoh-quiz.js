/* Bonus game: Pharaoh Quiz */
defineBonus({
  id:"quiz",
  name:["Pharaoh Quiz","مسابقة الفراعنة"],
  desc:["5 history questions · +10 each","5 أسئلة تاريخية · +10 لكل سؤال"],
  game:(()=>{const BANK=[
 [["Which river flows through Egypt?","أي نهر يجري في مصر؟"],[["The Nile","النيل"],["The Tigris","دجلة"],["The Danube","الدانوب"],["The Amazon","الأمازون"]]],
 [["Who built the Great Pyramid of Giza?","من بنى الهرم الأكبر بالجيزة؟"],[["Khufu","خوفو"],["Ramesses II","رمسيس الثاني"],["Tutankhamun","توت عنخ آمون"],["Cleopatra","كليوباترا"]]],
 [["Which pharaoh built Abu Simbel?","أي فرعون بنى أبو سمبل؟"],[["Ramesses II","رمسيس الثاني"],["Khufu","خوفو"],["Akhenaten","إخناتون"],["Ptolemy I","بطليموس الأول"]]],
 [["In which city is Karnak Temple?","في أي مدينة يقع معبد الكرنك؟"],[["Luxor","الأقصر"],["Aswan","أسوان"],["Cairo","القاهرة"],["Alexandria","الإسكندرية"]]],
 [["Philae Temple was dedicated to which goddess?","لأي إلهة كُرّس معبد فيلة؟"],[["Isis","إيزيس"],["Hathor","حتحور"],["Bastet","باستت"],["Sekhmet","سخمت"]]],
 [["Which famous lighthouse stood in Alexandria?","أي فنار شهير كان في الإسكندرية؟"],[["The Pharos","فنار الإسكندرية"],["The Colossus","تمثال رودس"],["Big Ben","بيغ بن"],["Eddystone","إيديستون"]]],
 [["Which stone helped decode hieroglyphs?","أي حجر ساعد في فك رموز الهيروغليفية؟"],[["The Rosetta Stone","حجر رشيد"],["The Blue Stone","الحجر الأزرق"],["The Black Stone","الحجر الأسود"],["The Sphinx Stone","حجر أبو الهول"]]],
 [["The ankh symbol stands for…","يرمز مفتاح الحياة (عنخ) إلى…"],[["Life","الحياة"],["War","الحرب"],["Gold","الذهب"],["Rain","المطر"]]],
 [["Whose tomb was found almost intact in 1922?","مقبرة من وُجدت شبه سليمة عام 1922؟"],[["Tutankhamun","توت عنخ آمون"],["Khufu","خوفو"],["Ramesses II","رمسيس الثاني"],["Hatshepsut","حتشبسوت"]]],
 [["The Great Sphinx has the body of a…","جسد أبو الهول الأكبر هو جسد…"],[["Lion","أسد"],["Falcon","صقر"],["Bull","ثور"],["Crocodile","تمساح"]]],
 [["Which temple is famous for the Abydos King List?","أي معبد اشتهر بقائمة ملوك أبيدوس؟"],[["Temple of Seti I","معبد سيتي الأول"],["Karnak","الكرنك"],["Abu Simbel","أبو سمبل"],["Philae","فيلة"]]],
 [["Wadi Al-Hitan is known for fossils of early…","وادي الحيتان مشهور بحفريات…"],[["Whales","الحيتان"],["Dinosaurs","الديناصورات"],["Mammoths","الماموث"],["Sharks","أسماك القرش"]]],
 [["The White Desert is famous for its…","الصحراء البيضاء مشهورة بـ…"],[["Chalk rock formations","التكوينات الطباشيرية"],["Red sand dunes","الكثبان الحمراء"],["Salt flats","السبخات الملحية"],["Volcanoes","البراكين"]]],
 [["Which oasis is home to the Oracle of Amun?","أي واحة تضم وحي آمون؟"],[["Siwa","سيوة"],["Kharga","الخارجة"],["Bahariya","البحرية"],["Dakhla","الداخلة"]]]];
 let qs=[],qi=0,opts=[],picked=-1,correct=0;
 const shuf=a=>{for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a};
 const load=i=>{opts=shuf(qs[i][1].map((t,k)=>({t,ok:k===0})));picked=-1};
 const lay=()=>{const bw=Math.min(W-40,420),top=H*.34,bh=Math.max(40,Math.min(64,(H-top-120)/4-10));return{bw,x:(W-bw)/2,top,bh}};
 return{help:{en:"Answer 5 questions about ancient Egypt (+10 each)",ar:"أجب عن 5 أسئلة عن مصر القديمة (+10 لكل إجابة)"},
 start(){qs=shuf([...BANK]).slice(0,5);qi=0;correct=0;load(0)},
 status(){return L2("Question ","السؤال ")+Math.min(qi+1,5)+"/5 · "+L2("Score ","النقاط ")+correct*10},
 draw(){const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#16213a");g.addColorStop(1,"#0e1420");ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  if(!qs[qi])return;const{bw,x,top,bh}=lay();ctx.textAlign="center";ctx.fillStyle="#f3ead2";ctx.font="bold 20px system-ui";
  const ls=wrapT(qs[qi][0][lang==="ar"?1:0],bw);ls.forEach((l,k)=>ctx.fillText(l,W/2,Math.max(96,top-30-(ls.length-1)*26)+k*26));
  opts.forEach((o,k)=>{const y=top+k*(bh+12);let c="#2a3350";if(picked>=0){if(o.ok)c="#2e7d4f";else if(k===picked)c="#a33a3a"}
   ctx.fillStyle=c;rr(x,y,bw,bh,12);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=1.5;ctx.stroke();ctx.fillStyle="#fff";ctx.font="17px system-ui";ctx.fillText(o.t[lang==="ar"?1:0],W/2,y+bh/2+6)})},
 tap(px,py){if(picked>=0||!qs[qi])return;const{bw,x,top,bh}=lay(),k=opts.findIndex((o,i)=>{const y=top+i*(bh+12);return px>=x&&px<=x+bw&&py>=y&&py<=y+bh});if(k<0)return;
  picked=k;snd(opts[k].ok?"ok":"bad");if(opts[k].ok)correct++;
  later(()=>{qi++;if(qi>=5){finishBonus(correct*10)}else load(qi)},900)}}})()
});
