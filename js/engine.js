
const T={en:{title:"Egypt Quest",score:"Points",hintMap:"Tap a marker · pinch to zoom · catch golden scarabs (+4) · avoid the black ☠",enter:"Enter this world",back:"← Map",egypt:"EGYPT",locked:"Needs # total points (you have %)",hint:"Hint",gl:"Find the hidden artifacts · tap to collect · drag to pan · pinch to zoom",doneH:"World complete!",doneP:"Challenge complete! +50 points.",unl:" New site unlocked!",next:"Continue"},
ar:{title:"مغامرة مصر",score:"النقاط",hintMap:"اضغط على علامة · قرّب بالأصابع · اصطد الجعارين الذهبية (+4) · تجنب الأسود ☠",enter:"ادخل هذا العالم",back:"الخريطة",egypt:"مصر",locked:"يحتاج # نقطة إجمالية (لديك %)",hint:"تلميح",gl:"ابحث عن القطع الأثرية المخفية · اضغط للجمع · اسحب للتحريك · قرّب بالأصابع",doneH:"اكتملت المرحلة!",doneP:"أتممت التحدي! +50 نقطة.",unl:" تم فتح موقع جديد!",next:"متابعة"}};
const SITES=[
{id:"gem",req:0,lon:31.08,lat:29.99,en:"Grand Egyptian Museum",ar:"المتحف المصري الكبير",eraEn:"Modern museum · Giza",eraAr:"متحف حديث · الجيزة",dEn:"Explore the Grand Egyptian Museum and test your curator skills among Egypt's greatest treasures.",dAr:"استكشف المتحف المصري الكبير واختبر مهاراتك كأمين متحف بين أعظم كنوز مصر."},
{id:"giza",lon:31.13,lat:29.98,en:"Giza Pyramids",ar:"أهرامات الجيزة",eraEn:"Old Kingdom · c. 2600 BC",eraAr:"الدولة القديمة · نحو 2600 ق.م",dEn:"Home of the Great Pyramid of Khufu, the Sphinx and the pyramids of Khafre and Menkaure.",dAr:"موطن هرم خوفو الأكبر وأبو الهول وهرمي خفرع ومنكاورع."},
{id:"alex",lon:29.89,lat:31.21,en:"Qaitbay Citadel, Alexandria",ar:"قلعة قايتباي، الإسكندرية",eraEn:"Mamluk era · 1477 AD",eraAr:"العصر المملوكي · 1477م",dEn:"A 15th-century fort built on the site of the ancient Pharos lighthouse.",dAr:"حصن من القرن الخامس عشر بُني على موقع فنار الإسكندرية القديم."},
{id:"luxor",lon:32.66,lat:25.72,en:"Karnak Temple, Luxor",ar:"معبد الكرنك، الأقصر",eraEn:"New Kingdom · c. 2000–300 BC",eraAr:"الدولة الحديثة · 2000–300 ق.م",dEn:"A vast temple complex dedicated to Amun-Ra, famous for its Hypostyle Hall.",dAr:"مجمع معابد ضخم مخصص لآمون رع، ويشتهر بقاعة الأعمدة."},
{id:"philae",lon:32.89,lat:24.03,en:"Philae Temple, Aswan",ar:"معبد فيلة، أسوان",eraEn:"Ptolemaic era · c. 280 BC",eraAr:"العصر البطلمي · نحو 280 ق.م",dEn:"Temple of Isis, relocated to Agilkia Island to save it from the rising waters of Lake Nasser.",dAr:"معبد إيزيس، نُقل إلى جزيرة أجيليكيا لإنقاذه من مياه بحيرة ناصر."},
{id:"abu",lon:31.62,lat:22.34,en:"Abu Simbel",ar:"أبو سمبل",eraEn:"New Kingdom · c. 1264 BC",eraAr:"الدولة الحديثة · نحو 1264 ق.م",dEn:"Rock temples carved by Ramesses II, aligned so the sun lights the inner sanctuary twice a year.",dAr:"معابد منحوتة في الصخر أمر ببنائها رمسيس الثاني، تتعامد الشمس على قدس أقداسها مرتين سنويًا."},
{id:"siwa",lon:25.52,lat:29.2,en:"Siwa Oasis – Temple of the Oracle",ar:"واحة سيوة – معبد الوحي",eraEn:"Saite period · 6th century BC",eraAr:"العصر الصاوي · القرن السادس ق.م",dEn:"A remote desert oasis home to the Oracle of Amun, which Alexander the Great is said to have visited in 331 BC.",dAr:"واحة صحراوية نائية تضم معبد وحي آمون الذي يُروى أن الإسكندر الأكبر زاره عام 331 ق.م."},
{id:"edfu",lon:32.873,lat:24.978,en:"Temple of Horus, Edfu",ar:"معبد حورس، إدفو",eraEn:"Ptolemaic era · 237–57 BC",eraAr:"العصر البطلمي · 237–57 ق.م",dEn:"One of the best-preserved ancient temples in Egypt, dedicated to the falcon god Horus.",dAr:"من أفضل المعابد القديمة حفظًا في مصر، وهو مكرس للإله حورس برأس الصقر."},
{id:"sinai",lon:33.976,lat:28.556,en:"Saint Catherine's Monastery, Sinai",ar:"دير سانت كاترين، سيناء",eraEn:"Byzantine era · 6th century AD",eraAr:"العصر البيزنطي · القرن السادس الميلادي",dEn:"A fortified monastery at the foot of Mount Sinai, among the oldest continuously inhabited Christian monasteries in the world.",dAr:"دير محصّن عند سفح جبل سيناء، ويُعد من أقدم الأديرة المسيحية المأهولة باستمرار في العالم."},
{id:"redsea",lon:34.3,lat:26.8,en:"Red Sea Reefs, Hurghada",ar:"شعاب البحر الأحمر، الغردقة",eraEn:"Natural wonder",eraAr:"أعجوبة طبيعية",dEn:"A world-famous diving coast with colorful coral reefs and hundreds of fish species.",dAr:"ساحل شهير للغوص بشعابه المرجانية الملونة ومئات أنواع الأسماك."}
,{id:"abydos",lon:31.919,lat:26.185,en:"Abydos – Temple of Seti I",ar:"أبيدوس – معبد سيتي الأول",eraEn:"New Kingdom · c. 1290 BC",eraAr:"الدولة الحديثة · نحو 1290 ق.م",dEn:"Famous for the Abydos King List, a wall relief naming earlier pharaohs, and its beautifully colored carvings.",dAr:"اشتهر بقائمة ملوك أبيدوس، وهي نقش جداري يذكر أسماء الفراعنة السابقين، ونقوشه الملونة الجميلة."},
{id:"whitedesert",lon:27.97,lat:27.35,en:"White Desert, Farafra",ar:"الصحراء البيضاء، الفرافرة",eraEn:"Natural wonder",eraAr:"أعجوبة طبيعية",dEn:"A surreal desert landscape of chalk rocks shaped by wind into mushrooms and other strange forms.",dAr:"مشهد صحراوي ساحر من صخور طباشيرية نحتتها الرياح على شكل فطر وأشكال غريبة."},
{id:"hitan",lon:28.22,lat:29.27,en:"Wadi Al-Hitan, Valley of the Whales",ar:"وادي الحيتان",eraEn:"Fossils · about 40 million years old",eraAr:"حفريات · عمرها نحو 40 مليون سنة",dEn:"A World Heritage site in the desert where skeletons of early whales lie in the sand.",dAr:"موقع تراث عالمي في الصحراء تستلقي فيه هياكل حيتان قديمة على الرمال."},
{id:"matruh",lon:27.23,lat:31.35,en:"Marsa Matruh – Cleopatra Beach",ar:"مرسى مطروح – شاطئ كليوباترا",eraEn:"Mediterranean coast",eraAr:"ساحل البحر المتوسط",dEn:"A coastal city with turquoise bays and white sand beaches on the Mediterranean.",dAr:"مدينة ساحلية بخلجانها الفيروزية وشواطئها ذات الرمال البيضاء على البحر المتوسط."},
{id:"kharga",lon:30.54,lat:25.46,en:"Kharga Oasis – Temple of Hibis",ar:"واحة الخارجة – معبد هيبس",eraEn:"Persian period · c. 500 BC",eraAr:"العصر الفارسي · نحو 500 ق.م",dEn:"A remote desert oasis with one of the best-preserved temples from the Persian period.",dAr:"واحة صحراوية نائية تضم أحد أفضل المعابد المحفوظة من العصر الفارسي."},
{id:"gouna",req:800,lon:33.68,lat:27.39,en:"El Gouna Film Festival",ar:"مهرجان الجونة السينمائي",eraEn:"Founded 2017 · Red Sea",eraAr:"تأسس عام 2017 · البحر الأحمر",dEn:"A film festival in the Red Sea resort town of El Gouna. Test your knowledge of Egyptian movies!",dAr:"مهرجان سينمائي في مدينة الجونة على البحر الأحمر. اختبر معلوماتك عن الأفلام المصرية!"}];
Object.assign(SITES.find(s=>s.id==="gem"),{mapDx:-18,mapDy:-12});Object.assign(SITES.find(s=>s.id==="giza"),{mapDx:18,mapDy:12});
const OUT=[[25.15,31.65],[29.9,31.2],[32.3,31.25],[34.25,31.3],[34.9,29.5],[34.5,28.5],[34.25,27.75],[33.6,28.4],[32.65,29.9],[32.6,29.5],[33.4,28.1],[33.8,27.25],[34.9,25.5],[36.9,22],[25,22]];
const NILE=[[32.5,22.1],[32.9,24.1],[32.65,25.7],[31.2,27.2],[30.8,28.5],[31.24,30.04],[31.3,31.0],[31.8,31.4]];
const GOVS=[
 ["Matrouh","\u0645\u0637\u0631\u0648\u062d",27.45,30.15],["Alexandria","\u0627\u0644\u0625\u0633\u0643\u0646\u062f\u0631\u064a\u0629",29.92,31.18],["Beheira","\u0627\u0644\u0628\u062d\u064a\u0631\u0629",30.35,30.65],
 ["Kafr El Sheikh","\u0643\u0641\u0631 \u0627\u0644\u0634\u064a\u062e",30.95,31.28],["Gharbia","\u0627\u0644\u063a\u0631\u0628\u064a\u0629",31.00,30.88],["Monufia","\u0627\u0644\u0645\u0646\u0648\u0641\u064a\u0629",30.85,30.58],
 ["Qalyubia","\u0627\u0644\u0642\u0644\u064a\u0648\u0628\u064a\u0629",31.18,30.32],["Dakahlia","\u0627\u0644\u062f\u0642\u0647\u0644\u064a\u0629",31.40,31.12],["Damietta","\u062f\u0645\u064a\u0627\u0637",31.82,31.42],
 ["Port Said","\u0628\u0648\u0631\u0633\u0639\u064a\u062f",32.30,31.28],["Ismailia","\u0627\u0644\u0625\u0633\u0645\u0627\u0639\u064a\u0644\u064a\u0629",32.30,30.58],["Suez","\u0627\u0644\u0633\u0648\u064a\u0633",32.55,30.02],
 ["North Sinai","\u0634\u0645\u0627\u0644 \u0633\u064a\u0646\u0627\u0621",33.55,30.78],["South Sinai","\u062c\u0646\u0648\u0628 \u0633\u064a\u0646\u0627\u0621",33.72,28.55],["Cairo","\u0627\u0644\u0642\u0627\u0647\u0631\u0629",31.25,30.08],
 ["Giza","\u0627\u0644\u062c\u064a\u0632\u0629",30.88,29.92],["Fayoum","\u0627\u0644\u0641\u064a\u0648\u0645",30.82,29.32],["Beni Suef","\u0628\u0646\u064a \u0633\u0648\u064a\u0641",31.00,28.90],
 ["Minya","\u0627\u0644\u0645\u0646\u064a\u0627",30.75,28.12],["Asyut","\u0623\u0633\u064a\u0648\u0637",31.18,27.18],["Sohag","\u0633\u0648\u0647\u0627\u062c",31.70,26.50],
 ["Qena","\u0642\u0646\u0627",32.72,26.15],["Luxor","\u0627\u0644\u0623\u0642\u0635\u0631",32.65,25.70],["Aswan","\u0623\u0633\u0648\u0627\u0646",32.90,24.10],
 ["Red Sea","\u0627\u0644\u0628\u062d\u0631 \u0627\u0644\u0623\u062d\u0645\u0631",34.05,26.55],["New Valley","\u0627\u0644\u0648\u0627\u062f\u064a \u0627\u0644\u062c\u062f\u064a\u062f",28.55,25.45],["Sharqia","\u0627\u0644\u0634\u0631\u0642\u064a\u0629",31.55,30.72]
];
let lang="en",score=0,sel=null,mode="map",cur=null;const seen=new Set(),done=new Set();const need=i=>SITES[i]&&SITES[i].req!=null?SITES[i].req:50*i*(i+2);const unlocked=i=>i===0||score>=need(i)||done.has(SITES[i].id);
const $=id=>document.getElementById(id);
const cv=$("c"),ctx=cv.getContext("2d");let W=0,H=0;
function resize(){const d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0)}
addEventListener("resize",()=>{resize();if(cur&&mode==="world")clampV()});resize();

/* ---------- MAP ---------- */
const mapS=()=>Math.min(W*.92/12,(H-170)/9.8);
const mp=(lo,la)=>{const s=mapS()*MV.z;return[W/2+MV.ox+(lo-31)*s,H/2+8+MV.oy-(la-26.9)*s]};
const MV={z:1,ox:0,oy:0};const mptr=new Map();let mmoved=0,mpinch=0,DOTS=null;
const MBR=[[32.4,31.25],[32.55,29.95]],ROSETTA=[[31.24,30.1],[30.95,30.9],[30.42,31.45]];
function clampMV(){MV.z=Math.max(1,Math.min(3.2,MV.z));const lim=(MV.z-1)*Math.max(W,H)*.42;MV.ox=Math.max(-lim,Math.min(lim,MV.ox));MV.oy=Math.max(-lim,Math.min(lim,MV.oy));if(MV.z===1){MV.ox=0;MV.oy=0}}
function mapZoom(px,py,f){const nz=Math.max(1,Math.min(3.2,MV.z*f)),r=nz/MV.z,cx=px-W/2,cy=py-H/2-8;MV.ox=cx-(cx-MV.ox)*r;MV.oy=cy-(cy-MV.oy)*r;MV.z=nz;clampMV()}
function mapMove(e){const p=mptr.get(e.pointerId);if(!p)return;
 if(mptr.size===1){MV.ox+=e.clientX-p.x;MV.oy+=e.clientY-p.y;mmoved+=Math.abs(e.clientX-p.x)+Math.abs(e.clientY-p.y);p.x=e.clientX;p.y=e.clientY;clampMV()}
 else{p.x=e.clientX;p.y=e.clientY;const[a,b]=[...mptr.values()],d=Math.hypot(a.x-b.x,a.y-b.y);mmoved=99;if(mpinch)mapZoom((a.x+b.x)/2,(a.y+b.y)/2,d/mpinch);mpinch=d}}
function mapUp(e){if(mptr.size===1&&mmoved<8&&mptr.has(e.pointerId))mapPick(e.clientX,e.clientY);mptr.delete(e.pointerId);mpinch=0}
function mkDots(){DOTS=[];let sd=5;const r=()=>(sd=(sd*16807)%2147483647)/2147483647;while(DOTS.length<170){const lo=25+r()*12,la=22+r()*9.7;if(inEgypt(lo,la))DOTS.push([lo,la,r()])}}
function lineMap(pts){ctx.beginPath();pts.forEach(([a,b],i)=>{const p=mp(a,b);i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1])})}
function smoothMap(pts){ctx.beginPath();pts.forEach(([a,b],i)=>{const p=mp(a,b);if(!i)ctx.moveTo(p[0],p[1]);else{const q=mp(...pts[i-1]);ctx.quadraticCurveTo(q[0],q[1],(q[0]+p[0])/2,(q[1]+p[1])/2)}})}
function alongNile(u){const n=NILE.length-1,f=u*n,i=Math.min(n-1,Math.floor(f)),k=f-i,a=NILE[i],b=NILE[i+1];return mp(a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k)}
function boat(x,y,s,dir){ctx.save();ctx.translate(x,y);ctx.scale(dir*s,s);ctx.fillStyle="#7a4a1a";ctx.beginPath();ctx.moveTo(-10,0);ctx.lineTo(10,0);ctx.lineTo(6,5);ctx.lineTo(-6,5);ctx.closePath();ctx.fill();ctx.fillStyle="#fff";ctx.beginPath();ctx.moveTo(0,-14);ctx.lineTo(9,-1);ctx.lineTo(0,-1);ctx.closePath();ctx.fill();ctx.restore()}
function camel(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle="#8a5a28";ctx.beginPath();ctx.ellipse(0,0,10,5,0,0,7);ctx.fill();ctx.beginPath();ctx.arc(-3,-6,4,0,7);ctx.arc(3,-6,4,0,7);ctx.fill();ctx.fillRect(8,-10,3,8);ctx.beginPath();ctx.arc(11,-11,3,0,7);ctx.fill();ctx.fillRect(-7,3,2,7);ctx.fillRect(5,3,2,7);ctx.restore()}
function mapLogo(img,x,y,r){const size=Math.min(img.naturalWidth||1,img.naturalHeight||1),sx=((img.naturalWidth||size)-size)/2,sy=((img.naturalHeight||size)-size)/2;ctx.save();ctx.beginPath();ctx.arc(x,y,r-1,0,Math.PI*2);ctx.clip();ctx.drawImage(img,sx,sy,size,size,x-r+1,y-r+1,2*r-2,2*r-2);ctx.restore();ctx.save();ctx.beginPath();ctx.arc(x,y,r-1,0,Math.PI*2);ctx.strokeStyle="#f7d58a";ctx.lineWidth=2;ctx.stroke();ctx.restore()}
function icon(id,x,y,k){ctx.save();ctx.translate(x,y);ctx.scale(k,k);ctx.fillStyle="#4a2f0a";ctx.strokeStyle="#4a2f0a";ctx.lineWidth=1.8;ctx.lineJoin="round";
 switch(id){
 case"giza":ctx.beginPath();ctx.moveTo(-10,6);ctx.lineTo(-3,-8);ctx.lineTo(4,6);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(0,6);ctx.lineTo(5,-2);ctx.lineTo(10,6);ctx.closePath();ctx.fill();break;
 case"alex":ctx.beginPath();ctx.moveTo(-4,8);ctx.lineTo(-2,-4);ctx.lineTo(2,-4);ctx.lineTo(4,8);ctx.closePath();ctx.fill();ctx.fillRect(-4,-8,8,4);ctx.beginPath();ctx.moveTo(-9,-6);ctx.lineTo(-5,-6);ctx.moveTo(9,-6);ctx.lineTo(5,-6);ctx.stroke();break;
 case"luxor":[-7,-1,5].forEach(a=>ctx.fillRect(a,-6,3,13));ctx.fillRect(-9,-8,18,3);ctx.fillRect(-9,7,18,2);break;
 case"philae":ctx.fillRect(-9,-4,6,12);ctx.fillRect(3,-4,6,12);ctx.fillRect(-9,-7,18,3);break;
 case"abu":[-8,-2,4].forEach(a=>{ctx.beginPath();ctx.arc(a+2,-3,2.6,0,7);ctx.fill();ctx.fillRect(a,0,4,8)});break;
 case"siwa":ctx.fillRect(-1,-2,2,10);for(let i=0;i<5;i++){const a=-2.6+i*.65;ctx.beginPath();ctx.ellipse(Math.cos(a)*6,-3+Math.sin(a)*4,6,2,a*.5,0,7);ctx.fill()}break;
 case"edfu":ctx.beginPath();ctx.ellipse(0,0,10,5.5,0,0,7);ctx.stroke();ctx.beginPath();ctx.arc(0,0,2.5,0,7);ctx.fill();break;
 case"sinai":ctx.fillRect(-8,0,16,8);ctx.beginPath();ctx.moveTo(-8,0);ctx.lineTo(0,-8);ctx.lineTo(8,0);ctx.closePath();ctx.fill();break;
 case"abydos":ctx.beginPath();ctx.ellipse(0,-1,6,9,0,0,7);ctx.stroke();ctx.fillRect(-7,6,14,2.5);break;
 case"whitedesert":ctx.fillRect(-2,-1,4,9);ctx.beginPath();ctx.ellipse(0,-4,9,5,0,0,7);ctx.fill();break;
 case"hitan":ctx.beginPath();ctx.ellipse(-1,2,9,5,0,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(7,2);ctx.lineTo(12,-3);ctx.lineTo(12,6);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(-2,-3);ctx.lineTo(-2,-8);ctx.moveTo(-5,-7);ctx.lineTo(1,-7);ctx.stroke();break;
 case"matruh":ctx.beginPath();ctx.moveTo(-10,2);ctx.quadraticCurveTo(-5,-5,0,2);ctx.quadraticCurveTo(5,9,10,2);ctx.stroke();ctx.beginPath();ctx.arc(5,-5,3,0,7);ctx.fill();break;
 case"kharga":ctx.beginPath();ctx.moveTo(-8,8);ctx.lineTo(-8,-1);ctx.arc(0,-1,8,Math.PI,0);ctx.lineTo(8,8);ctx.closePath();ctx.fill();break;
 case"gouna":ctx.fillRect(-9,-1,18,9);ctx.beginPath();ctx.moveTo(-9,-3);ctx.lineTo(9,-8);ctx.lineTo(9,-4);ctx.lineTo(-9,1);ctx.closePath();ctx.fill();break;
 case"gem":ctx.fillStyle="#f47700";ctx.beginPath();ctx.moveTo(0,-11);ctx.lineTo(11,0);ctx.lineTo(0,11);ctx.lineTo(-11,0);ctx.closePath();ctx.fill();ctx.fillStyle="#fff4d0";ctx.font="bold 7px system-ui";ctx.textAlign="center";ctx.fillText("GEM",0,3);break;
 case"redsea":ctx.beginPath();ctx.ellipse(-1,0,8,5,0,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(6,0);ctx.lineTo(11,-5);ctx.lineTo(11,5);ctx.closePath();ctx.fill();break}
 ctx.restore()}
function drawMap(t){
 if(!DOTS)mkDots();
 const ar=lang==="ar",s0=mapS()*MV.z;
 let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,TH[theme].s1);g.addColorStop(1,TH[theme].s2);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
 ctx.strokeStyle="rgba(255,255,255,.10)";ctx.lineWidth=2;
 for(let y=24;y<H;y+=34){ctx.beginPath();for(let x=0;x<=W;x+=20){const yy=y+Math.sin(x/38+t/700+y)*3;x?ctx.lineTo(x,yy):ctx.moveTo(x,yy)}ctx.stroke()}
 const lp=()=>{ctx.beginPath();OUT.forEach(([a,b],i)=>{const[x,y]=mp(a,b);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath()};
 lp();ctx.save();ctx.shadowColor="rgba(0,0,0,.35)";ctx.shadowBlur=18;ctx.fillStyle="#d9b46c";ctx.fill();ctx.restore();
 const g2=ctx.createLinearGradient(0,mp(31,31.7)[1],0,mp(31,22)[1]);g2.addColorStop(0,TH[theme].l1);g2.addColorStop(1,TH[theme].l2);ctx.fillStyle=g2;ctx.fill();
 ctx.lineWidth=3;ctx.strokeStyle="#9a7536";ctx.stroke();
 ctx.save();lp();ctx.clip();
 const zz=Math.sqrt(MV.z);DOTS.forEach(d=>{const[x,y]=mp(d[0],d[1]);ctx.fillStyle="rgba(120,80,30,.2)";ctx.beginPath();ctx.ellipse(x,y,(5+d[2]*8)*zz,(2+d[2]*3)*zz,0,0,7);ctx.fill()});
 ctx.lineCap="round";ctx.strokeStyle="rgba(106,168,79,.55)";smoothMap(NILE);ctx.lineWidth=Math.max(10,s0*.34);ctx.stroke();smoothMap(ROSETTA);ctx.lineWidth=Math.max(6,s0*.18);ctx.stroke();
 const c0=mp(31.24,30.05),r0=mp(30.4,31.45),d0=mp(31.8,31.4);ctx.fillStyle="rgba(106,168,79,.5)";ctx.beginPath();ctx.moveTo(c0[0],c0[1]);ctx.lineTo(r0[0],r0[1]);ctx.lineTo(d0[0],d0[1]);ctx.closePath();ctx.fill();
 ctx.restore();
 ctx.strokeStyle="#4db3ea";smoothMap(NILE);ctx.lineWidth=Math.max(3,s0*.09);ctx.stroke();smoothMap(ROSETTA);ctx.stroke();
 lineMap([[32.5,22.1],[32.9,23.9]]);ctx.lineWidth=Math.max(7,s0*.2);ctx.stroke();
 lineMap(MBR);ctx.strokeStyle="#7fd0f5";ctx.lineWidth=Math.max(2,s0*.05);ctx.stroke();
 ctx.save();ctx.textAlign="center";ctx.font="italic "+Math.round(Math.max(11,s0*.22))+"px system-ui";
 const sl=(tx,a,b)=>{const p=mp(a,b);ctx.fillText(tx,p[0],p[1])};
 ctx.fillStyle="rgba(255,255,255,.6)";sl(ar?"البحر المتوسط":"Mediterranean Sea",29.5,32.1);sl(ar?"البحر الأحمر":"Red Sea",36,26.3);
 ctx.fillStyle="rgba(90,55,15,.6)";sl(ar?"الصحراء الغربية":"Western Desert",27.8,26.3);sl(ar?"سيناء":"Sinai",33.7,29.7);ctx.restore();
 // governorate names
 ctx.save();ctx.textAlign="center";ctx.textBaseline="middle";
 const gf=Math.max(8,Math.min(13,Math.round(s0*.16)));ctx.font="600 "+gf+"px system-ui";
 GOVS.forEach(([en,arName,lo,la])=>{const[x,y]=mp(lo,la),name=ar?arName:en;
  ctx.fillStyle="rgba(246,235,201,.72)";ctx.strokeStyle="rgba(55,35,12,.5)";ctx.lineWidth=3;ctx.strokeText(name,x,y);ctx.fillText(name,x,y);
 });ctx.restore();
 // life on the map
 for(const[ph,sp]of[[0,7000],[2.2,9000]]){const u=.5+.45*Math.sin(t/sp+ph),d=Math.cos(t/sp+ph)>=0?1:-1,p=alongNile(u);boat(p[0],p[1],Math.max(.8,zz),d)}
 {const u=(t/22000)%1;for(let k=0;k<3;k++){const uu=((u-k*.06)+1)%1,p=mp(26.3+uu*2.8,27.3+Math.sin(uu*6)*.18);camel(p[0],p[1],1.1*Math.max(.8,zz))}}
 {const p=mp(27+((t/30000)%1)*5,32.0);boat(p[0],p[1],Math.max(.9,zz),1);const q=mp(35.7,25.6+((t/40000)%1)*2.2);boat(q[0],q[1],Math.max(.9,zz),-1)}
 // compass
 ctx.save();ctx.translate(46,H-122);ctx.strokeStyle="rgba(255,255,255,.75)";ctx.fillStyle="rgba(255,255,255,.75)";ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,20,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(0,-16);ctx.lineTo(5,0);ctx.lineTo(-5,0);ctx.closePath();ctx.fill();ctx.font="bold 11px system-ui";ctx.textAlign="center";ctx.fillText("N",0,-24);ctx.restore();
 // markers
 SITES.forEach((st,i)=>{if(!unlocked(i))return;const[qx,qy]=mp(st.lon,st.lat),x=qx+(st.mapDx||0),y=qy+(st.mapDy||0),on=sel&&sel.id===st.id,lk=!unlocked(i),dn=done.has(st.id),bob=on?Math.sin(t/180)*3:0,k=on?1.25:1,R=17*k;
  if(!lk&&!dn){const p=1+.22*Math.sin(t/400+i);ctx.beginPath();ctx.arc(x,y+bob,(R+6)*p,0,7);ctx.strokeStyle="rgba(255,224,138,.8)";ctx.lineWidth=2;ctx.stroke()}
  ctx.fillStyle="rgba(0,0,0,.25)";ctx.beginPath();ctx.ellipse(x+2,y+R+4,R*.8,5,0,0,7);ctx.fill();
  ctx.beginPath();ctx.arc(x,y+bob,R,0,7);ctx.fillStyle=lk?"#8a8f9c":dn?"#6ccf7f":"#f2c14e";ctx.fill();ctx.lineWidth=3;ctx.strokeStyle="#fff7dd";ctx.stroke();
  if(st.id==="gem"&&GEM_LOGO.complete)mapLogo(GEM_LOGO,x,y+bob,R);else if(st.id==="giza"&&GIZA_LOGO.complete)mapLogo(GIZA_LOGO,x,y+bob,R);else if(st.id==="gouna"&&GOUNA_LOGO.complete)mapLogo(GOUNA_LOGO,x,y+bob,R);else if(st.id==="sinai"&&SINAI_LOGO.complete)mapLogo(SINAI_LOGO,x,y+bob,R);else if(st.id==="abu"&&ABU_LOGO.complete)mapLogo(ABU_LOGO,x,y+bob,R);else if(st.id==="philae"&&PHILAE_LOGO.complete)mapLogo(PHILAE_LOGO,x,y+bob,R);else if(st.id==="redsea"&&REDSEA_LOGO.complete)mapLogo(REDSEA_LOGO,x,y+bob,R);else if(st.id==="edfu"&&EDFU_LOGO.complete)mapLogo(EDFU_LOGO,x,y+bob,R);else if(st.id==="luxor"&&LUXOR_LOGO.complete)mapLogo(LUXOR_LOGO,x,y+bob,R);else if(st.id==="alex"&&ALEX_LOGO.complete)mapLogo(ALEX_LOGO,x,y+bob,R);else if(st.id==="siwa"&&SIWA_LOGO.complete)mapLogo(SIWA_LOGO,x,y+bob,R);else icon(st.id,x,y+bob,k*(lk?.9:1));
  if(lk){ctx.fillStyle="#2a2f40";ctx.fillRect(x+6*k,y+bob+4*k,10*k,8*k);ctx.strokeStyle="#2a2f40";ctx.lineWidth=2;ctx.beginPath();ctx.arc(x+11*k,y+bob+4*k,3.5*k,Math.PI,0);ctx.stroke()}
  const n3=starSum(st.id);if(n3){ctx.font="11px system-ui";ctx.textAlign="center";ctx.fillStyle="#fff4d0";ctx.strokeStyle="#3a2208";ctx.lineWidth=3;const tx="★"+n3;ctx.strokeText(tx,x,y+bob-R-6);ctx.fillText(tx,x,y+bob-R-6)}
  if(st.id===dailyId&&dailyClaim!==today()&&!lk){ctx.font="16px system-ui";ctx.textAlign="center";ctx.fillStyle="#fff";ctx.fillText("⭐",x+R,y+bob-R+4)}
  if(on||MV.z>1.35||W>720){ctx.font="bold 12px system-ui";const nm=ar?st.ar:st.en,w=ctx.measureText(nm).width+14;ctx.fillStyle="rgba(20,26,40,.82)";rr(x-w/2,y+R+10,w,20,10);ctx.fill();ctx.fillStyle="#fff4d0";ctx.textAlign="center";ctx.fillText(nm,x,y+R+24)}});
}
function mapPick(px,py){if(gs){const[gx,gy]=mp(gs.lo,gs.la);if(Math.hypot(px-gx,py-gy)<36){if(gs.cursed){const n=loseBal(Math.round(20*RATE));gfx.push({x:gx,y:gy,t0:performance.now(),txt:n?"−"+n+" ☠":"🛡️",bad:true});gs=null;snd("bad");render();return}gfx.push({x:gx,y:gy,t0:performance.now()});gs=null;score+=Math.round(15*RATE);qAdd("scarab",1);snd("ok");render();return}}let best=null,bd=26;SITES.forEach((s,k)=>{if(!unlocked(k))return;const[x,y]=mp(s.lon,s.lat),d=Math.hypot(px-x,py-y);if(d<bd){bd=d;best=s}});if(best)select(best.id)}

/* ---------- WORLD BUILDING BLOCKS ---------- */
const B=(x,y,w,h,c="#cfa86a",s=true)=>({t:"blk",x,y,w,h,c,s});
const C=(x,y,r,c="#d8bd86")=>({t:"col",x,y,r,c,s:true});
const WA=(x,y,w,h)=>({t:"water",x,y,w,h,s:true});
const PA=(x,y)=>({t:"palm",x,y,s:false});
const PY=(x,y,sz)=>({t:"pyr",x,y,sz,s:true});
const OB=(x,y)=>({t:"obe",x,y,s:true});
const LD=(x,y,w,h,c)=>({t:"land",x,y,w,h,c,s:false});
const EL=(x,y,rx,ry,c)=>({t:"ell",x,y,rx,ry,c,s:false});
const LB=(x,y,en,ar)=>({t:"lbl",x,y,en,ar,s:false});
function sandDeco(seed,w,h){let s=seed;const r=()=>(s=(s*16807)%2147483647)/2147483647,a=[];
 for(let i=0;i<14;i++)a.push({t:"dune",x:r()*w,y:r()*h,w:120+r()*180,h:14+r()*16,s:false});
 for(let i=0;i<60;i++)a.push({t:"rock",x:r()*w,y:r()*h,r:3+r()*7,s:false});return a}
function mk(o){o.sol=o.items.filter(i=>i.s).map(i=>i.t==="col"?{x:i.x-i.r,y:i.y-i.r,w:2*i.r,h:2*i.r}:i.t==="pyr"?{x:i.x-i.sz/2,y:i.y-i.sz/2,w:i.sz,h:i.sz}:i.t==="obe"?{x:i.x-11,y:i.y-11,w:22,h:22}:{x:i.x,y:i.y,w:i.w,h:i.h});return o}

const WORLDS={
giza:mk({w:1400,h:1000,ground:"#d9b46c",bg:"#b08850",start:[700,900],items:[...sandDeco(7,1400,1000),
 PY(420,300,220),PY(780,480,200),PY(1080,640,100),
 B(495,742,95,36,"#d9b87a"),B(575,738,32,44,"#e3c48a"),B(607,750,35,9,"#c9a366",false),B(607,769,35,9,"#c9a366",false),
 PA(150,850),PA(1250,300),PA(1280,880),
 LB(420,170,"Pyramid of Khufu","هرم خوفو"),LB(780,362,"Pyramid of Khafre","هرم خفرع"),LB(1080,572,"Pyramid of Menkaure","هرم منكاورع"),LB(560,722,"The Great Sphinx","أبو الهول")]}),
alex:mk({w:1400,h:1000,sea:"#2b7ba8",start:[700,900],walk:(x,y)=>y>600||(x>560&&x<840&&y>200),items:[
 LD(0,600,1400,400,"#d9c9a0"),LD(560,200,280,420,"#d9c9a0"),
 B(280,380,90,34,"#8b5a2b",false),B(1050,300,80,30,"#8b5a2b",false),B(980,480,100,36,"#a06a35",false),
 B(580,200,240,24,"#c8b384"),B(580,200,24,220,"#c8b384"),B(796,200,24,220,"#c8b384"),B(580,396,90,24,"#c8b384"),B(730,396,90,24,"#c8b384"),
 C(592,212,26,"#bfa971"),C(808,212,26,"#bfa971"),C(592,408,26,"#bfa971"),C(808,408,26,"#bfa971"),
 B(660,250,80,80,"#b59f6e"),
 PA(120,700),PA(260,800),PA(1180,720),PA(1300,860),PA(900,680),PA(480,720),
 LB(700,170,"Qaitbay Citadel","قلعة قايتباي"),LB(700,360,"Keep","البرج الرئيسي")]}),
luxor:mk({w:1400,h:1000,ground:"#d6b783",bg:"#b08850",start:[700,960],items:[...sandDeco(11,1400,1000),
 ...Array.from({length:8},(_,i)=>[B(625,740+i*30,40,24,"#c9a366"),B(735,740+i*30,40,24,"#c9a366")]).flat(),
 B(530,640,125,56,"#d2ad6f"),B(745,640,125,56,"#d2ad6f"),
 B(500,360,22,280,"#c79f60"),B(878,360,22,280,"#c79f60"),
 ...Array.from({length:24},(_,i)=>C(545+(i%6)*62,410+Math.floor(i/6)*62,15)),
 B(520,310,135,44,"#d2ad6f"),B(745,310,135,44,"#d2ad6f"),B(630,170,140,110,"#c79f60"),
 OB(590,270),OB(810,270),WA(960,330,300,220),
 PA(920,300),PA(1290,300),PA(920,570),PA(1290,570),PA(300,500),PA(250,820),PA(1150,850),
 LB(700,725,"Avenue of Sphinxes","طريق الكباش"),LB(700,380,"Hypostyle Hall","قاعة الأعمدة"),LB(700,150,"Sanctuary","قدس الأقداس"),LB(1110,312,"Sacred Lake","البحيرة المقدسة"),LB(700,615,"First Pylon","الصرح الأول")]}),
philae:mk({w:1400,h:1000,sea:"#2f86b5",start:[700,760],walk:(x,y)=>((x-700)/400)**2+((y-520)/280)**2<1,items:[
 EL(700,520,420,300,"#cdb88a"),
 B(250,490,100,100,"#e0cfa0",false),
 B(580,620,100,46,"#d2ad6f"),B(720,620,100,46,"#d2ad6f"),B(590,500,90,40,"#d2ad6f"),B(720,500,90,40,"#d2ad6f"),B(620,330,160,100,"#c79f60"),
 ...[0,1,2].flatMap(i=>[0,1].map(j=>C(265+i*35,505+j*70,10,"#e8d9a8"))),
 B(1000,480,90,70,"#c79f60"),
 C(560,560,12),C(840,560,12),
 B(1080,720,70,24,"#8b5a2b",false),
 PA(430,420),PA(450,640),PA(940,430),PA(960,640),PA(700,260),
 LB(700,305,"Temple of Isis","معبد إيزيس"),LB(300,470,"Kiosk of Trajan","كشك تراجان"),LB(1045,455,"Temple of Hathor","معبد حتحور")]}),
abu:mk({w:1400,h:1000,ground:"#d9b46c",bg:"#b08850",start:[700,740],items:[...sandDeco(23,1400,800),
 B(650,250,100,80,"#2a1d10",false),
 B(200,0,450,330,"#a8895a"),B(750,0,450,330,"#a8895a"),B(650,0,100,250,"#a8895a"),
 B(410,330,90,110,"#c9a366"),B(520,330,90,110,"#c9a366"),B(790,330,90,110,"#c9a366"),B(900,330,90,110,"#c9a366"),
 B(1050,440,170,110,"#b8955a"),B(1085,550,40,50,"#c9a366"),B(1145,550,40,50,"#c9a366"),
 WA(0,820,1400,180),PA(150,600),PA(300,720),PA(1250,700),PA(1320,600),
 LB(700,160,"Great Temple of Ramesses II","معبد رمسيس الثاني الأكبر"),LB(1135,422,"Temple of Nefertari","معبد نفرتاري")]})};

WORLDS.alex.arts=[[136,712,"coin",1],[1286,874,"scarab",1],[630,300,"ankh",0],[640,520,"eye",0],[1000,750,"scarab",0],[350,960,"coin",0]];
WORLDS.luxor.arts=[[314,516,"ankh",1],[1276,586,"eye",1],[576,441,"scarab",0],[700,332,"coin",0],[1100,640,"scarab",0],[236,836,"coin",1]];
WORLDS.philae.arts=[[444,404,"coin",1],[946,656,"eye",1],[300,540,"ankh",0],[700,580,"eye",0],[1045,590,"coin",0],[686,278,"scarab",1]];
WORLDS.abu.arts=[[164,584,"coin",1],[1236,716,"eye",1],[700,300,"ankh",0],[560,500,"scarab",0],[1135,620,"coin",0],[350,780,"eye",0]];

/* ---------- WORLD DRAW ---------- */
const sh=(x,y,w,h)=>{ctx.fillStyle="rgba(60,35,10,.22)";ctx.fillRect(x+6,y+6,w,h)};
function item(it){switch(it.t){
 case"land":ctx.fillStyle=it.c;ctx.fillRect(it.x,it.y,it.w,it.h);break;
 case"ell":ctx.beginPath();ctx.ellipse(it.x,it.y,it.rx,it.ry,0,0,7);ctx.fillStyle=it.c;ctx.fill();ctx.lineWidth=6;ctx.strokeStyle="#e8dcb0";ctx.stroke();break;
 case"dune":ctx.fillStyle="rgba(255,235,180,.35)";ctx.beginPath();ctx.ellipse(it.x,it.y,it.w,it.h,0,0,7);ctx.fill();break;
 case"rock":ctx.fillStyle="#a88a58";ctx.beginPath();ctx.arc(it.x,it.y,it.r,0,7);ctx.fill();break;
 case"water":ctx.fillStyle="#2f86b5";ctx.fillRect(it.x,it.y,it.w,it.h);ctx.strokeStyle="rgba(255,255,255,.18)";ctx.lineWidth=2;
  for(let y=it.y+20;y<it.y+it.h;y+=38){ctx.beginPath();ctx.moveTo(it.x+10,y);ctx.lineTo(it.x+it.w-10,y);ctx.setLineDash([30,24]);ctx.stroke();ctx.setLineDash([])}break;
 case"palm":ctx.fillStyle="rgba(0,0,0,.2)";ctx.beginPath();ctx.arc(it.x+5,it.y+6,20,0,7);ctx.fill();ctx.fillStyle="#3f8f4a";
  for(let i=0;i<7;i++){const a=i*Math.PI*2/7;ctx.beginPath();ctx.ellipse(it.x+Math.cos(a)*14,it.y+Math.sin(a)*14,15,5,a,0,7);ctx.fill()}
  ctx.fillStyle="#6a4a1a";ctx.beginPath();ctx.arc(it.x,it.y,5,0,7);ctx.fill();break;
 case"blk":if(it.s)sh(it.x,it.y,it.w,it.h);ctx.fillStyle=it.c;ctx.fillRect(it.x,it.y,it.w,it.h);
  ctx.fillStyle="rgba(255,255,255,.18)";ctx.fillRect(it.x,it.y,it.w,Math.min(it.h*.3,14));
  ctx.strokeStyle="rgba(80,50,15,.55)";ctx.lineWidth=1.5;ctx.strokeRect(it.x,it.y,it.w,it.h);break;
 case"col":ctx.fillStyle="rgba(60,35,10,.25)";ctx.beginPath();ctx.arc(it.x+4,it.y+5,it.r,0,7);ctx.fill();
  ctx.fillStyle=it.c;ctx.beginPath();ctx.arc(it.x,it.y,it.r,0,7);ctx.fill();ctx.strokeStyle="rgba(80,50,15,.6)";ctx.lineWidth=1.5;ctx.stroke();
  ctx.beginPath();ctx.arc(it.x,it.y,it.r*.55,0,7);ctx.stroke();break;
 case"obe":sh(it.x-11,it.y-11,22,22);ctx.fillStyle="#b9855a";ctx.fillRect(it.x-11,it.y-11,22,22);
  ctx.fillStyle="#e6b84a";ctx.beginPath();ctx.moveTo(it.x,it.y-8);ctx.lineTo(it.x+8,it.y+8);ctx.lineTo(it.x-8,it.y+8);ctx.closePath();ctx.fill();break;
 case"pyr":{const h=it.sz/2,x0=it.x-h,y0=it.y-h,x1=it.x+h,y1=it.y+h,c=[it.x,it.y];
  ctx.fillStyle="rgba(60,35,10,.22)";ctx.fillRect(x0+it.sz*.12,y0+it.sz*.12,it.sz,it.sz);
  const f=(col,a,b)=>{ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.lineTo(c[0],c[1]);ctx.closePath();ctx.fillStyle=col;ctx.fill()};
  f("#ecca8c",[x0,y0],[x1,y0]);f("#dcb672",[x0,y0],[x0,y1]);f("#bb904f",[x1,y0],[x1,y1]);f("#a67c42",[x0,y1],[x1,y1]);
  ctx.strokeStyle="rgba(80,50,15,.5)";ctx.lineWidth=1.5;ctx.strokeRect(x0,y0,it.sz,it.sz);
  ctx.beginPath();[[x0,y0],[x1,y0],[x1,y1],[x0,y1]].forEach(q=>{ctx.moveTo(q[0],q[1]);ctx.lineTo(c[0],c[1])});ctx.stroke();break}
 case"lbl":ctx.font="bold 15px system-ui";ctx.textAlign="center";ctx.lineWidth=4;ctx.strokeStyle="rgba(20,12,0,.7)";
  const tx=lang==="ar"?it.ar:it.en;ctx.strokeText(tx,it.x,it.y);ctx.fillStyle="#fff4d0";ctx.fillText(tx,it.x,it.y);break}}
const GRD={land:1,ell:1,dune:1,rock:1,water:1};
const V={z:1,ox:0,oy:0};let fx=[],hintUntil=0,hintIdx=-1,hintsLeft=3,found=new Set();const prog={};
const minZ=()=>Math.max(.2,Math.min(W/cur.w,H/cur.h));
function clampV(){V.z=Math.max(minZ(),Math.min(2.2,V.z));const sw=cur.w*V.z,sh=cur.h*V.z;
 V.ox=sw<=W?(W-sw)/2:Math.max(W-sw,Math.min(0,V.ox));V.oy=sh<=H?(H-sh)/2:Math.max(H-sh,Math.min(0,V.oy))}
function initView(){V.z=Math.max(minZ(),Math.min(1,W/800));V.ox=W/2-cur.w/2*V.z;V.oy=H/2-cur.h/2.2*V.z;clampV()}
function zoomAt(sx,sy,f){const nz=Math.max(minZ(),Math.min(2.2,V.z*f)),r=nz/V.z;V.ox=sx-(sx-V.ox)*r;V.oy=sy-(sy-V.oy)*r;V.z=nz;clampV()}
function art(a,t,i){if(found.has(i))return;ctx.save();ctx.translate(a[0],a[1]);const sc=i<0?1:Math.max(.6,1-LV()*.08);ctx.scale(sc,sc);if(i>=0){const gr=ctx.createRadialGradient(0,0,2,0,0,26);gr.addColorStop(0,"rgba(255,255,255,.75)");gr.addColorStop(1,"rgba(255,255,255,0)");ctx.fillStyle=gr;ctx.beginPath();ctx.arc(0,0,26,0,7);ctx.fill();ctx.globalAlpha=.8+.2*Math.sin(t/260+i)}
 if(hintIdx===i&&t<hintUntil){ctx.strokeStyle="#fff";ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,0,26+6*Math.sin(t/120),0,7);ctx.stroke()}
 switch(a[2]){
 case"ankh":for(const[c,w]of[["#4a2f0a",8],["#e6b84a",4]]){ctx.strokeStyle=c;ctx.lineWidth=w;ctx.beginPath();ctx.ellipse(0,-7,6,8,0,0,7);ctx.moveTo(0,1);ctx.lineTo(0,14);ctx.moveTo(-8,5);ctx.lineTo(8,5);ctx.stroke()}break;
 case"scarab":ctx.fillStyle="#2f9e9e";ctx.beginPath();ctx.ellipse(0,0,8,11,0,0,7);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,-11);ctx.lineTo(0,11);ctx.moveTo(-8,-2);ctx.lineTo(8,-2);ctx.stroke();break;
 case"eye":ctx.fillStyle="#f3ead2";ctx.beginPath();ctx.ellipse(0,0,13,7,0,0,7);ctx.fill();ctx.strokeStyle="#1d4f8a";ctx.lineWidth=2.5;ctx.stroke();ctx.fillStyle="#1d4f8a";ctx.beginPath();ctx.arc(0,0,3.5,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(0,7);ctx.lineTo(-3,15);ctx.stroke();break;
 case"pyramid":ctx.fillStyle="#c9a366";ctx.beginPath();ctx.moveTo(-12,9);ctx.lineTo(0,-11);ctx.lineTo(12,9);ctx.closePath();ctx.fill();ctx.strokeStyle="#6a4a1a";ctx.lineWidth=2;ctx.stroke();break;
 case"sun":ctx.fillStyle="#ffcf4a";ctx.beginPath();ctx.arc(0,0,7,0,7);ctx.fill();ctx.strokeStyle="#ffcf4a";ctx.lineWidth=2.5;for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.beginPath();ctx.moveTo(Math.cos(a)*10,Math.sin(a)*10);ctx.lineTo(Math.cos(a)*14,Math.sin(a)*14);ctx.stroke()}break;
 case"feather":ctx.fillStyle="#3a7bd5";ctx.beginPath();ctx.ellipse(0,-2,5,13,.25,0,7);ctx.fill();ctx.strokeStyle="#f3ead2";ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(-3,14);ctx.lineTo(3,-12);ctx.stroke();break;
 case"lotus":ctx.fillStyle="#e87aa8";for(const a of[-.7,0,.7]){ctx.save();ctx.rotate(a);ctx.beginPath();ctx.ellipse(0,-7,4.5,10,0,0,7);ctx.fill();ctx.restore()}ctx.fillStyle="#3f8f4a";ctx.beginPath();ctx.ellipse(0,6,10,3.5,0,0,7);ctx.fill();break;
 case"coin":ctx.fillStyle="#e6b84a";ctx.beginPath();ctx.arc(0,0,10,0,7);ctx.fill();ctx.strokeStyle="#8a6a10";ctx.lineWidth=2;ctx.stroke();ctx.beginPath();ctx.arc(0,0,5,0,7);ctx.stroke();break}
 ctx.restore()}
function drawWorld(t){
 ctx.fillStyle=cur.bg||"#0e1420";ctx.fillRect(0,0,W,H);
 ctx.save();ctx.translate(V.ox,V.oy);ctx.scale(V.z,V.z);
 ctx.fillStyle=cur.sea||cur.ground;ctx.fillRect(0,0,cur.w,cur.h);
 if(cur.sea){ctx.strokeStyle="rgba(255,255,255,.12)";ctx.lineWidth=2;for(let y=30;y<cur.h;y+=46){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(cur.w,y);ctx.setLineDash([36,30]);ctx.stroke();ctx.setLineDash([])}}
 cur.items.forEach(i=>GRD[i.t]&&item(i));
 cur.items.forEach(i=>!GRD[i.t]&&item(i));
 cur.arts.forEach((a,i)=>art(a,t,i));
 {const rem=cur.arts.map((a,i)=>i).filter(i=>!found.has(i));if(rem.length===1&&t-lastFindT>15000){const a=cur.arts[rem[0]];ctx.strokeStyle="rgba(255,255,255,.85)";ctx.lineWidth=3;ctx.beginPath();ctx.arc(a[0],a[1],30+5*Math.sin(t/200),0,7);ctx.stroke()}}
 ctx.strokeStyle="#8a6a35";ctx.lineWidth=4;ctx.strokeRect(0,0,cur.w,cur.h);
 fx=fx.filter(f=>t-f.t0<900);
 fx.forEach(f=>{const k=Math.max(0,(t-f.t0)/900);ctx.globalAlpha=1-k;
  if(f.k==="pop"){ctx.strokeStyle="#ffe08a";ctx.lineWidth=4;ctx.beginPath();ctx.arc(f.x,f.y,12+k*50,0,7);ctx.stroke()}
  else if(f.k==="txt"){ctx.font="bold 22px system-ui";ctx.textAlign="center";ctx.fillStyle="#fff4d0";ctx.strokeStyle="#5a3a10";ctx.lineWidth=4;ctx.strokeText(f.s,f.x,f.y-k*40);ctx.fillText(f.s,f.x,f.y-k*40)}
  else{ctx.strokeStyle="#fff";ctx.lineWidth=2;ctx.beginPath();ctx.arc(f.x,f.y,6+k*22,0,7);ctx.stroke()}});
 ctx.globalAlpha=1;ctx.restore();
 {const rem=cur.arts.map((a,i)=>i).filter(i=>!found.has(i));if(rem.length===1&&!runWon){const a=cur.arts[rem[0]],sx=V.ox+a[0]*V.z,sy=V.oy+a[1]*V.z;if(sx<10||sx>W-10||sy<70||sy>H-90){const cx=W/2,cy=H/2,ang=Math.atan2(sy-cy,sx-cx),px=Math.max(24,Math.min(W-24,cx+Math.cos(ang)*1000)),py=Math.max(84,Math.min(H-100,cy+Math.sin(ang)*1000));ctx.save();ctx.translate(px,py);ctx.rotate(ang);ctx.fillStyle="#fff";ctx.strokeStyle="#3a2208";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(14,0);ctx.lineTo(-8,-10);ctx.lineTo(-8,10);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore()}}}}
function worldTap(sx,sy){if(runWon)return;const wx=(sx-V.ox)/V.z,wy=(sy-V.oy)/V.z,R=Math.max(34,26/V.z);let bi=-1,bd=R;
 cur.arts.forEach((a,i)=>{if(found.has(i))return;const d=Math.hypot(a[0]-wx,a[1]-wy);if(d<bd){bd=d;bi=i}});
 const now=performance.now();
 if(bi<0){fx.push({k:"miss",x:wx,y:wy,t0:now});snd("miss");huntMiss++;return}
 found.add(bi);lastFindT=performance.now();score+=Math.round(20*RATE);snd("ok");const a=cur.arts[bi];fx.push({k:"pop",x:a[0],y:a[1],t0:now},{k:"txt",s:"+"+Math.round(20*RATE),x:a[0],y:a[1]-10,t0:now});
 if(found.size===cur.arts.length)winGame(huntMiss<=4&&huntHints===0?3:huntMiss<=10&&huntHints<=1?2:1);
 render()}

/* ---------- MINI-GAMES (one different challenge per world) ---------- */
const CH={giza:["Hidden artifacts","القطع المخفية"],alex:["Pharos signal memory","ذاكرة إشارات الفنار"],luxor:["Hieroglyph memory match","مطابقة الرموز"],philae:["Light the temple columns","أضئ أعمدة المعبد"],abu:["Sun alignment timing","تعامد الشمس"],siwa:["Sliding picture puzzle","أحجية الصورة المنزلقة"],edfu:["Rotate the temple tiles","دوّر قطع المعبد"],sinai:["Order the monuments by age","رتّب المعالم حسب العمر"],redsea:["Count the orange fish","عدّ الأسماك البرتقالية"],abydos:["Spot the odd hieroglyph","اعثر على الرمز المختلف"],whitedesert:["Stack the chalk rocks","كدّس الصخور الطباشيرية"],hitan:["Connect the whale bones","صل عظام الحوت"],matruh:["Catch the pearls (timing)","اصطد اللآلئ (توقيت)"],kharga:["Symbol grid puzzle","أحجية شبكة الرموز"],gouna:["Egyptian movie quiz","أسئلة عن الأفلام المصرية"]};
CH.gem=["Curator's artifact challenge","تحدي أمين المتحف"];
const L2=(en,ar)=>lang==="ar"?ar:en;
const rr=(x,y,w,h,r)=>{ctx.beginPath();ctx.roundRect?ctx.roundRect(x,y,w,h,r):ctx.rect(x,y,w,h)};

const GAMES={};
























const BDESC={rush:["Whack the golden scarabs · 30s","اضرب الجعارين الذهبية · 30 ثانية"],quiz:["5 history questions · +10 each","5 أسئلة تاريخية · +10 لكل سؤال"],catch:["Catch the falling treasure · 30s","اجمع الكنوز المتساقطة · 30 ثانية"]};
function startBonus(k){runWon=false;curseRun=false;cur=BONUS[k];showIntro(()=>{$("bmenu").style.display="none";cur.game.start();bonusMode=true;mode="world";document.body.classList.add("g");render()},{bonus:true})}
function openBonus(){const ar=lang==="ar",m=$("bmenu");
 m.innerHTML='<div class="box"><h2 style="color:var(--gold);margin:0 0 4px">🎮 '+L2("Bonus games","ألعاب إضافية")+'</h2><p style="margin:0 0 6px;color:var(--mut);font-size:13px">'+L2("Replay anytime to earn more points","العب في أي وقت لتربح نقاطًا أكثر")+'</p>'+
 Object.keys(BONUS).map(k=>'<button class="bbtn" data-k="'+k+'"><b>'+BONUS[k].bonus[ar?1:0]+'</b><small>'+BDESC[k][ar?1:0]+'</small></button>').join("")+
 '<button class="bbtn" data-k="" style="text-align:center">'+L2("Close","إغلاق")+'</button></div>';
 m.style.display="flex";m.querySelectorAll(".bbtn").forEach(b=>b.onclick=()=>b.dataset.k?startBonus(b.dataset.k):(m.style.display="none"))}


/* ---------- input ---------- */
const ptr=new Map();let pinch0=0,moved=0;
cv.addEventListener("pointerdown",e=>{cv.setPointerCapture(e.pointerId);
 if(mode==="map"){mptr.set(e.pointerId,{x:e.clientX,y:e.clientY});mmoved=0;mpinch=0;return}
 if(cur.game){if(runWon&&!cur.bonus)return;cur.game.tap(e.clientX,e.clientY);return}
 ptr.set(e.pointerId,{x:e.clientX,y:e.clientY});moved=0;pinch0=0});
cv.addEventListener("pointermove",e=>{if(mode==="map"){mapMove(e);return}if(mode==="world"&&cur.game){if(cur.game.move&&e.buttons)cur.game.move(e.clientX,e.clientY);return}if(mode!=="world"||!ptr.has(e.pointerId))return;
 const p=ptr.get(e.pointerId),nx=e.clientX,ny=e.clientY;
 if(ptr.size===1){V.ox+=nx-p.x;V.oy+=ny-p.y;moved+=Math.abs(nx-p.x)+Math.abs(ny-p.y);p.x=nx;p.y=ny;clampV()}
 else{p.x=nx;p.y=ny;const[a,b]=[...ptr.values()],d=Math.hypot(a.x-b.x,a.y-b.y);moved=99;if(pinch0)zoomAt((a.x+b.x)/2,(a.y+b.y)/2,d/pinch0);pinch0=d}});
cv.addEventListener("pointerup",e=>{if(mode==="map"){mapUp(e);return}if(mode!=="world")return;if(ptr.size===1&&moved<8&&ptr.has(e.pointerId))worldTap(e.clientX,e.clientY);ptr.delete(e.pointerId);pinch0=0});
cv.addEventListener("pointercancel",e=>{ptr.delete(e.pointerId);mptr.delete(e.pointerId);pinch0=0;mpinch=0});
cv.addEventListener("wheel",e=>{if(mode==="map"){e.preventDefault();mapZoom(e.clientX,e.clientY,e.deltaY<0?1.12:.9);return}if(mode==="world"){e.preventDefault();zoomAt(e.clientX,e.clientY,e.deltaY<0?1.1:.9)}},{passive:false});

/* ---------- VARIETY: levels, daily challenge, achievements, confetti, golden scarab ---------- */
const lvl={},ach=new Set();let streak=0,lastDay="",dailyClaim="",dailyDay="",dailyId="",lastWin=0,lastFirst=false,lastDaily=0,lastStars=1,lastLvlUnlock=false,lastBoost=false,huntMiss=0,huntHints=0,lastEvent=false,lastTime=0,lastPar=1,lastPerf=1,lastTs=1,lastSite=null;
const today=()=>dstr(0);
let curLevel=1,runWon=false,runStart=0,lastFindT=0;const LV=()=>curLevel-1;
function getDaily(){const d=today();if(dailyDay!==d||!SITES.some((s,i)=>s.id===dailyId&&unlocked(i))){let h=0;for(const c of d)h=(h*31+c.charCodeAt(0))>>>0;const un=SITES.filter((s,i)=>unlocked(i));dailyId=un[h%un.length].id;dailyDay=d}return dailyId}
function claimDaily(id){if(id!==getDaily()||dailyClaim===today())return 0;dailyClaim=today();return 100+10*Math.min(streak,7)}
/* ---------- RETENTION: login rewards, quests, chest, streaks, endless, reminders ---------- */
const dstr=(o=0)=>{const d=new Date(Date.now()+o*864e5);return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const ENDL={};let loginDay=0,loginPending=false,pendingMs=null,freezeUsed=false,chestAt=0,chestEl=null,qDay="",qIds=[],qp={},qcl={};
const eventMult=()=>{const w=new Date().getDay();return w===5||w===6?2:1};
const LOGIN=[{p:30},{p:40,hint:2},{p:60},{p:60,time:2},{p:80,hint:3},{p:100,boost:1},{p:200,hint:5,freeze:1}];
const MS={3:{p:100},7:{p:250,hint:3},14:{p:500,freeze:1},30:{p:1000,hint:10,boost:3},60:{p:2000,hint:15},100:{p:5000,hint:30}};
const QALL={p:100,hint:2};
const QDEFS=[{id:"win",en:"Win 2 levels",ar:"اربح مستويين",goal:2,rw:{p:50}},{id:"star",en:"Earn 4 stars",ar:"اجمع 4 نجوم",goal:4,rw:{p:60}},{id:"bonus",en:"Play 2 bonus games",ar:"العب لعبتين إضافيتين",goal:2,rw:{p:40,time:1}},{id:"scarab",en:"Catch a golden scarab on the map",ar:"اصطد جعرانًا ذهبيًا على الخريطة",goal:1,rw:{p:30,hint:1}},{id:"three",en:"Get a 3-star win",ar:"احصل على فوز بـ3 نجوم",goal:1,rw:{p:80}},{id:"hard",en:"Win a level 3 or higher",ar:"اربح مستوى 3 أو أعلى",goal:1,rw:{p:70,hint:1}}];
function rewardTxt(r){const a=[];if(r.p)a.push("+"+Math.round(r.p*RATE)+" "+L2("pts","نقطة"));if(r.hint)a.push("+"+r.hint+" 💡");if(r.time)a.push("+"+r.time+" ⏱️");if(r.boost)a.push("+"+r.boost+" ⚡");if(r.freeze)a.push("+"+r.freeze+" 🧊");return a.join(" · ")}
function giveReward(r){score+=Math.round((r.p||0)*RATE);inv.hint+=r.hint||0;inv.time+=r.time||0;inv.boost+=r.boost||0;inv.freeze=(inv.freeze||0)+(r.freeze||0);return rewardTxt(r)}
function touchDay(){const t=today();if(lastDay===t)return;freezeUsed=false;curseTax=0;
 if(lastDay===dstr(-1))streak++;else if(lastDay===dstr(-2)&&(inv.freeze||0)>0){inv.freeze--;streak++;freezeUsed=true}else{if(lastDay){const away=Math.round((new Date(t)-new Date(lastDay))/864e5);curseTax=loseBal(Math.min(Math.round(100*RATE),Math.max(Math.round(20*RATE),Math.round(bal()*.05*(away-1)))))}streak=1}
 loginDay=streak>1?(loginDay%7)+1:1;lastDay=t;pendingMs=MS[streak]||null;loginPending=true}
function newQuestDay(){const d=today();if(qDay===d&&qIds.length===3)return;qDay=d;let h=0;for(const c of d)h=(h*31+c.charCodeAt(0))>>>0;const ids=QDEFS.map(q=>q.id),pick=[];while(pick.length<3){h=(h*1103515245+12345)>>>0;const id=ids[h%ids.length];if(!pick.includes(id))pick.push(id)}qIds=pick;qp={};qcl={}}
function qAdd(id,n){newQuestDay();if(qIds.includes(id)&&!qcl[id]){const q=QDEFS.find(x=>x.id===id),was=qp[id]||0;qp[id]=Math.min(q.goal,was+n);if(was<q.goal&&qp[id]>=q.goal){toastTx="📋 "+L2("Quest done: ","أنجزت المهمة: ")+(lang==="ar"?q.ar:q.en)+" — "+L2("claim it!","استلمها!");toastT=performance.now()+3500}}}
const qDone=()=>qIds.filter(id=>(qp[id]||0)>=QDEFS.find(q=>q.id===id).goal).length;
const chestTxt=()=>{const ms=chestAt-Date.now();if(ms<=0)return"🎁 "+L2("Free chest: OPEN!","صندوق مجاني: افتح!");const m=Math.ceil(ms/60000);return"🎁 "+Math.floor(m/60)+"h "+m%60+"m"};
function openChest(){if(Date.now()<chestAt)return;const r={p:30+Math.floor(Math.random()*51)};if(Math.random()<.4)r.hint=1+Math.floor(Math.random()*2);if(Math.random()<.2)r.time=1;if(Math.random()<.1)r.boost=1;
 chestAt=Date.now()+4*3600*1000;toastTx="🎁 "+giveReward(r);toastT=performance.now()+3500;snd("win");confetti();render();scheduleReminders()}
function openLogin(){const m=$("bmenu");
 const cells=LOGIN.map((r,i)=>{const d=i+1,c=d===loginDay,past=d<loginDay;return'<div style="flex:1;min-width:40px;padding:6px 2px;border-radius:8px;border:1px solid '+(c?"#e6b84a":"#3a3f52")+';background:'+(c?"#3a3320":past?"#1d2b1f":"#1a2030")+';font-size:11px"><div>'+(past?"✅":L2("Day ","يوم ")+d)+'</div><div style="font-size:15px">'+(i===6?"🎁":"•")+'</div><div>'+rewardTxt(r).replace(/ · /g,"<br>")+'</div></div>'}).join("");
 const nx=LOGIN[loginDay%7];
 m.innerHTML='<div class="box"><h2 style="color:var(--gold);margin:0 0 4px">🔥 '+L2("Daily reward","المكافأة اليومية")+'</h2><p style="margin:0 0 6px">'+L2("Streak: "+streak+" days","التتابع: "+streak+" يوم")+(freezeUsed?" · 🧊 "+L2("freeze used","تم استخدام الحماية"):"")+'</p><div style="display:flex;gap:4px;margin:8px 0">'+cells+'</div><p style="margin:6px 0"><b>'+rewardTxt(LOGIN[loginDay-1])+'</b>'+(curseTax?"<br>💀 "+L2("The mummy's curse took "+curseTax+" points while you were away. A 🧊 freeze would have saved your streak!","لعنة المومياء أخذت "+curseTax+" نقطة أثناء غيابك. كانت حماية 🧊 ستحفظ تتابعك!"):"")+(pendingMs?"<br>🏆 "+L2("Streak bonus: ","مكافأة التتابع: ")+rewardTxt(pendingMs):"")+(eventMult()>1?"<br>🎉 "+L2("Weekend: wins give ×2 points!","عطلة الأسبوع: الفوز يعطي نقاط ×2!"):"")+'</p><button class="bbtn" id="lgc" style="text-align:center">'+L2("Claim","استلم")+'</button><p style="font-size:12px;color:var(--mut);margin:6px 0 0">'+L2("Come back tomorrow for Day "+(loginDay%7+1)+": ","عد غدًا لليوم "+(loginDay%7+1)+": ")+rewardTxt(nx)+'</p></div>';
 m.style.display="flex";$("lgc").onclick=()=>{if(loginPending){giveReward(LOGIN[loginDay-1]);if(pendingMs)giveReward(pendingMs);pendingMs=null;loginPending=false;snd("win");confetti();render();scheduleReminders()}m.style.display="none"}}
function openQuests(){const ar=lang==="ar",m=$("bmenu");newQuestDay();
 const rows=qIds.map(id=>{const q=QDEFS.find(x=>x.id===id),pr=qp[id]||0,ok=pr>=q.goal,cl=qcl[id];return'<button class="bbtn" data-q="'+id+'"'+(ok&&!cl?"":" disabled")+'><b>'+(cl?"✅ ":ok?"🎁 ":"")+(ar?q.ar:q.en)+'</b> · '+pr+"/"+q.goal+'<small>'+L2("Reward: ","المكافأة: ")+rewardTxt(q.rw)+(ok&&!cl?" — "+L2("tap to claim","اضغط للاستلام"):"")+'</small></button>'}).join("");
 m.innerHTML='<div class="box"><h2 style="color:var(--gold);margin:0 0 4px">📋 '+L2("Daily quests","مهام اليوم")+'</h2><p style="margin:0 0 6px;color:var(--mut);font-size:13px">'+L2("New quests every day. Finish all 3 for a bonus!","مهام جديدة كل يوم. أنجز الثلاث لمكافأة إضافية!")+'</p>'+rows+'<div class="bbtn" style="cursor:default"><b>🎁 '+L2("All 3 bonus","مكافأة الثلاث")+"</b> "+(qcl.all?"✅":"")+'<small>'+rewardTxt(QALL)+'</small></div><button class="bbtn" id="qcl" style="text-align:center">'+L2("Close","إغلاق")+'</button></div>';
 m.style.display="flex";$("qcl").onclick=()=>{m.style.display="none"};
 m.querySelectorAll("[data-q]").forEach(x=>x.onclick=()=>{const id=x.dataset.q,q=QDEFS.find(z=>z.id===id);if((qp[id]||0)<q.goal||qcl[id])return;qcl[id]=1;giveReward(q.rw);snd("ok");
  if(qIds.every(i=>qcl[i])&&!qcl.all){qcl.all=1;giveReward(QALL);toastTx="🎁 "+L2("All quests done! ","أنجزت كل المهام! ")+rewardTxt(QALL);toastT=performance.now()+3500;confetti()}render();openQuests()})}
async function scheduleReminders(){try{const LN=window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.LocalNotifications;if(!LN)return;const p=await LN.requestPermissions();if(p.display!=="granted")return;
 await LN.cancel({notifications:[{id:1},{id:2}]});const title=L2("Egypt Quest","مغامرة مصر"),list=[{id:1,title,body:L2("Your daily challenge and quests are waiting! 🔥","تحدي اليوم والمهام في انتظارك! 🔥"),schedule:{on:{hour:19,minute:0},allowWhileIdle:true}}];
 if(chestAt>Date.now())list.push({id:2,title,body:L2("Your free treasure chest is ready 🎁","صندوق الكنز المجاني جاهز 🎁"),schedule:{at:new Date(chestAt),allowWhileIdle:true}});await LN.schedule({notifications:list})}catch(e){}}

/* ---------- GAMEPLAY V2: intro popup, speed stars, celebration, level scaling ---------- */
const PAR={gem:45,giza:60,alex:45,luxor:50,philae:60,abu:35,siwa:70,edfu:50,sinai:30,redsea:45,abydos:40,whitedesert:35,hitan:35,matruh:30,kharga:80,gouna:45};
const parOf=id=>Math.round((PAR[id]||45)*(1+.35*(Math.min(curLevel,8)-1)));
const STX={giza:["Few wrong taps and no hints","أخطاء قليلة وبدون تلميحات"],alex:["No mistakes in the sequence","بدون أخطاء في التسلسل"],luxor:["Match the pairs with few flips","طابق الأزواج بقلبات قليلة"],philae:["Few moves and few hints","حركات قليلة وتلميحات قليلة"],abu:["Don't miss the alignment","لا تُخطئ في التعامد"],siwa:["Solve it in few moves","حلّها بحركات قليلة"],edfu:["Solve it in few moves","حلّها بحركات قليلة"],sinai:["No wrong taps","بدون ضغطات خاطئة"],redsea:["Count correctly the first time","عدّ بشكل صحيح من أول مرة"],abydos:["Few wrong taps","ضغطات خاطئة قليلة"],whitedesert:["Don't let the rocks crash","لا تدع الصخور تقع"],hitan:["Tap the bones in order, no wrong taps","اضغط العظام بالترتيب بدون أخطاء"],matruh:["Catch every pearl on time","اصطد كل لؤلؤة في وقتها"],kharga:["Fill the grid quickly","املأ الشبكة بسرعة"],gouna:["Few mistakes and fast answers","أخطاء قليلة وإجابات سريعة"]};
function showIntro(go,opt){opt=opt||{};if(!opt.bonus&&!sel&&lastSite)sel=lastSite;if(!opt.bonus&&!sel)return;const ar=lang==="ar",m=$("bmenu"),g=cur&&cur.game;
 const help=g?g.help[ar?"ar":"en"]:(ar?"ابحث عن القطع الأثرية المخفية في المشهد ("+(6+Math.min(LV(),5))+" قطع) واضغط عليها. اسحب للتحرك وقرّب بالأصابع. استخدم 💡 إذا علقت.":"Find the hidden artifacts ("+(6+Math.min(LV(),5))+") in the scene and tap them. Drag to move around and pinch to zoom. Use 💡 if you get stuck.");
 const title=opt.bonus?cur.bonus[ar?1:0]:(ar?sel.ar:sel.en);
 STX.gem=["Find the treasures accurately and quickly","اعثر على الكنوز بدقة وسرعة"];
 const extra=opt.bonus?"":'<p style="margin:6px 0;color:var(--mut);font-size:15px;line-height:1.5">⭐ '+STX[sel.id][ar?1:0]+'<br>⏱ '+L2("Finish within "+parOf(sel.id)+"s for the full speed bonus","أنهِ خلال "+parOf(sel.id)+" ثانية للحصول على مكافأة السرعة كاملة")+'</p>';
 m.innerHTML='<div class="box"><h2 style="color:var(--gold);margin:0 0 4px">'+title+(opt.bonus?"":" · "+L2("Level ","المستوى ")+curLevel)+'</h2><p style="font-size:19px;line-height:1.55;margin:8px 0">'+help+'</p>'+extra+'<button class="bbtn" id="igo" style="text-align:center;font-weight:600">'+(go?"▶ "+L2("Start","ابدأ"):L2("Continue","متابعة"))+'</button>'+(go?'<button class="bbtn" id="ino" style="text-align:center">'+L2("Cancel","إلغاء")+'</button>':"")+'</div>';
 m.style.display="flex";$("igo").onclick=()=>{m.style.display="none";if(go)go()};if(go)$("ino").onclick=()=>{m.style.display="none"}}
const CELEB_TXT=[["PHARAOH-NOMENAL!","فرعوني جدًا!"],["SPHINX-TACULAR!","رائع زي أبو الهول!"],["MUMMY MIA, YOU DID IT!","يا مومياء، نجحت!"],["NILE-LY PERFECT!","ممتاز زي النيل!"],["BOW TO THE PHARAOH!","انحنوا للفرعون!"]];
let celeb=null;
function celebrate(stars){const a=CELEB_TXT[Math.floor(Math.random()*CELEB_TXT.length)];celeb={t0:performance.now(),stars,txt:lang==="ar"?a[1]:a[0]};confetti();setTimeout(confetti,250);setTimeout(confetti,500);snd("fanfare")}
function drawCeleb(t){if(!celeb)return;const k=(t-celeb.t0)/1800;if(k>1){celeb=null;return}
 const a=Math.max(0,Math.min(1,k*8,(1-k)*5));ctx.save();ctx.globalAlpha=a*.5;ctx.fillStyle="#0a0e1e";ctx.fillRect(0,0,W,H);ctx.globalAlpha=a;
 const cx=W/2,cy=H*.38,r=Math.min(W,H)*.13,b=Math.abs(Math.sin(t/150))*r*.5;ctx.translate(cx,cy-b);
 ctx.strokeStyle="#6a4a10";ctx.lineWidth=r*.12;ctx.lineCap="round";const w=Math.sin(t/110)*.5;
 [-1,1].forEach(d=>{ctx.beginPath();ctx.moveTo(d*r*.8,-r*.1);ctx.lineTo(d*r*1.5,-r*(.9+w*d));ctx.stroke()});
 [-1,1].forEach(d=>{ctx.beginPath();ctx.moveTo(d*r*.4,r);ctx.lineTo(d*r*.7,r*1.5);ctx.stroke()});
 ctx.fillStyle="#e6b84a";ctx.beginPath();ctx.ellipse(0,0,r*.95,r*1.15,0,0,7);ctx.fill();ctx.lineWidth=4;ctx.stroke();
 ctx.fillStyle="#2f6fd8";ctx.beginPath();ctx.moveTo(-r*.7,-r*.85);ctx.lineTo(r*.7,-r*.85);ctx.lineTo(0,-r*1.7);ctx.closePath();ctx.fill();
 face(0,-r*.1,r*.85,1);ctx.save();ctx.scale(r/20,r/20);sunFace(0,-3,1);ctx.restore();ctx.restore();
 const sc=1+.08*Math.sin(t/120),fs=Math.round(Math.min(W/10,34)*sc);ctx.save();ctx.globalAlpha=Math.max(0,Math.min(1,a*1.5));ctx.textAlign="center";ctx.font="bold "+fs+"px system-ui";ctx.lineWidth=6;ctx.strokeStyle="#3a2208";ctx.fillStyle="#fff4d0";
 ctx.strokeText(celeb.txt,W/2,cy+r*2.6);ctx.fillText(celeb.txt,W/2,cy+r*2.6);ctx.font=Math.round(fs*1.3)+"px system-ui";const st="★".repeat(celeb.stars)+"☆".repeat(3-celeb.stars);ctx.fillStyle="#ffd54a";ctx.strokeText(st,W/2,cy+r*2.6+fs*1.6);ctx.fillText(st,W/2,cy+r*2.6+fs*1.6);ctx.restore()}

/* ---------- STARS, LEVELS, SHOP ---------- */
const SR={},own=new Set();let spent=0,theme="classic";const inv={hint:5,time:0,boost:0,freeze:0,ward:0};
const RATE=.25;/* global points multiplier: lower = fewer points earned */
const bal=()=>score-spent;
let curseOn=false,curseRun=false,curseLost=0,lastCurse=false,curseTax=0;
function loseBal(n){if((inv.ward||0)>0&&n>0){inv.ward--;toastTx="🛡️ "+L2("Ward blocked the curse!","الدرع صدّ اللعنة!");toastT=performance.now()+1500;return 0}n=Math.min(n,Math.max(0,bal()));if(n>0)spent+=n;return n}
const starSum=id=>(SR[id]||[]).reduce((a,b)=>a+b,0),totalStars=()=>SITES.reduce((a,s)=>a+starSum(s.id),0);
const TH={classic:{s1:"#0f4c75",s2:"#1b6ca8",l1:"#ead08f",l2:"#c99a55"},sunset:{s1:"#3b2a6b",s2:"#d4577a",l1:"#f3b36b",l2:"#b9663f"},night:{s1:"#050d1c",s2:"#12305a",l1:"#7a7a98",l2:"#46486a"}};
const THN={classic:["Classic","كلاسيكي"],sunset:["Sunset","الغروب"],night:["Night","الليل"]};
const LVN=[["Easy","سهل"],["Normal","عادي"],["Hard","صعب"],["Expert","خبير"],["Legend","أسطوري"]];
const starTxt=n=>"★".repeat(n)+"☆".repeat(3-n);
const ITEMS=[
{id:"hint5",icon:"💡",en:"5 Hints",ar:"5 تلميحات",d:["Use them in the artifact hunt and the Philae puzzle","استخدمها في البحث عن القطع ولغز فيلة"],cost:50,buy:()=>{inv.hint+=5},stock:()=>inv.hint},
{id:"time",icon:"⏱️",en:"+10 seconds ×3",ar:"+10 ثوانٍ ×3",d:["Extra time in Scarab Rush and Treasure Catch","وقت إضافي في الجعارين وصيد الكنوز"],cost:60,buy:()=>{inv.time+=3},stock:()=>inv.time},
{id:"boost",icon:"⚡",en:"Points ×1.5 (3 wins)",ar:"نقاط ×1.5 (3 انتصارات)",d:["Boosts the reward of your next 3 site wins","يزيد مكافأة أول 3 انتصارات"],cost:120,buy:()=>{inv.boost+=3},stock:()=>inv.boost},
{id:"freeze",icon:"🧊",en:"Streak freeze",ar:"حماية التتابع",d:["Saves your streak if you miss one day","تحمي تتابعك إذا فاتك يوم واحد"],cost:80,buy:()=>{inv.freeze++},stock:()=>inv.freeze},
{id:"ward",icon:"🛡️",en:"Curse ward ×5",ar:"درع اللعنة ×5",d:["Blocks the next 5 point losses (curse mode, cursed scarabs, missed days)","يصدّ أول 5 خسائر للنقاط (وضع اللعنة، الجعارين الملعونة، الغياب)"],cost:90,buy:()=>{inv.ward+=5},stock:()=>inv.ward},
{id:"sunset",icon:"🌅",en:"Sunset map",ar:"خريطة الغروب",d:["A warm purple-orange map style","شكل خريطة بألوان الغروب"],cost:150,once:true,buy:()=>{own.add("sunset");theme="sunset"}},
{id:"night",icon:"🌙",en:"Night map",ar:"خريطة الليل",d:["A dark, starry-blue map style","شكل خريطة ليلي"],cost:250,once:true,buy:()=>{own.add("night");theme="night"}},
{id:"lucky",icon:"🍀",en:"Lucky scarab",ar:"الجعران المحظوظ",d:["Golden scarabs appear twice as often on the map","الجعارين الذهبية تظهر ضعف المرات على الخريطة"],cost:300,once:true,buy:()=>{own.add("lucky")}}];
function openShop(){const ar=lang==="ar",m=$("bmenu");
 const rows=ITEMS.map(it=>{const ow=it.once&&own.has(it.id),can=!ow&&bal()>=it.cost;return'<button class="bbtn" data-i="'+it.id+'"'+(can?"":" disabled")+'><b>'+it.icon+" "+(ar?it.ar:it.en)+'</b> · '+(ow?"✅ "+L2("Owned","مملوك"):it.cost+" "+L2("pts","نقطة"))+(it.stock?" · "+L2("you have ","لديك ")+it.stock():"")+'<small>'+it.d[ar?1:0]+'</small></button>'}).join("");
 const th=["classic","sunset","night"].filter(k=>k==="classic"||own.has(k)).map(k=>'<button class="bbtn" style="width:auto;display:inline-block;margin:4px;text-align:center;'+(theme===k?"border-color:#fff":"")+'" data-th="'+k+'">'+THN[k][ar?1:0]+'</button>').join("");
 m.innerHTML='<div class="box" style="max-height:88vh;overflow:auto"><h2 style="color:var(--gold);margin:0 0 4px">🛒 '+L2("Shop","المتجر")+'</h2><p style="margin:0 0 6px;color:var(--mut);font-size:13px">'+L2("Balance: ","الرصيد: ")+bal()+" · "+L2("Stars: ","النجوم: ")+totalStars()+'</p>'+rows+'<div style="margin:8px 0 2px;font-size:13px;color:var(--mut)">'+L2("Map style","شكل الخريطة")+'</div><div>'+th+'</div><button class="bbtn" id="shc" style="text-align:center">'+L2("Close","إغلاق")+'</button></div>';
 m.style.display="flex";$("shc").onclick=()=>{m.style.display="none"};
 m.querySelectorAll("[data-i]").forEach(x=>x.onclick=()=>{const it=ITEMS.find(i=>i.id===x.dataset.i);if(!it||bal()<it.cost||(it.once&&own.has(it.id)))return;spent+=it.cost;it.buy();snd("ok");render();openShop()});
 m.querySelectorAll("[data-th]").forEach(x=>x.onclick=()=>{theme=x.dataset.th;render();openShop()})}
function lvInfo(id,lv){const x=lv-1,k=Math.min(x,4),g=n=>n+"×"+n,m=Math.min;const q={giza:()=>L2((6+m(x,5))+" artifacts",(6+m(x,5))+" قطع"),alex:()=>L2((5+m(x,7))+" signals",(5+m(x,7))+" إشارات"),luxor:()=>L2(m(4+x,8)+" pairs",m(4+x,8)+" أزواج"),philae:()=>g([4,5,5,6,6][k]),abu:()=>L2((3+Math.round(m(x,4)*.75))+" alignments",(3+Math.round(m(x,4)*.75))+" تعامدات"),siwa:()=>g([3,3,4,4,5][k]),edfu:()=>g([2,3,3,4,5][k]),sinai:()=>L2(m(3+x,8)+" monuments",m(3+x,8)+" معالم"),redsea:()=>L2((3+Math.floor(m(x,4)/2))+" rounds",(3+Math.floor(m(x,4)/2))+" جولات"),abydos:()=>g(3+m(x,4)),whitedesert:()=>L2((6+m(x,6))+" rocks",(6+m(x,6))+" صخور"),hitan:()=>L2(m(18,8+m(x,5)*2)+" bones",m(18,8+m(x,5)*2)+" عظمة"),matruh:()=>L2((8+m(x,6)*2)+" pearls",(8+m(x,6)*2)+" لؤلؤة"),kharga:()=>g(4+(x>=2?1:0)+(x>=4?1:0)),gouna:()=>L2((5+m(x,5))+" questions",(5+m(x,5))+" أسئلة")};return q[id]?q[id]():""}
function openLevels(){const ar=lang==="ar",m=$("bmenu"),b=SR[sel.id]||(SR[sel.id]=[0,0,0,0,0]);
 m.innerHTML='<div class="box"><h2 style="color:var(--gold);margin:0 0 4px">'+(ar?sel.ar:sel.en)+'</h2><p style="margin:0 0 6px;color:var(--mut);font-size:13px">🎮 '+CH[sel.id][ar?1:0]+" · "+L2("Earn a star to unlock the next level","اربح نجمة لفتح المستوى التالي")+'</p><button class="bbtn" id="cm" style="text-align:center">☠ '+L2("Curse mode: ","وضع اللعنة: ")+(curseOn?L2("ON","مفعّل"):L2("OFF","متوقف"))+'<small>'+L2("Mistakes cost points, but your reward is ×2","كل خطأ يخسّرك نقاطًا، لكن مكافأتك ×2")+'</small></button>'+
 [0,1,2,3,4].map(i=>{const lk=i>0&&!b[i-1];return'<button class="bbtn" data-l="'+(i+1)+'"'+(lk?" disabled":"")+'><b>'+(lk?"🔒 ":"")+L2("Level ","المستوى ")+(i+1)+" · "+LVN[i][ar?1:0]+'</b><small>'+starTxt(b[i])+" · "+lvInfo(sel.id,i+1)+'</small></button>'}).join("")+(b[4]?'<button class="bbtn" data-l="'+((ENDL[sel.id]||5)+1)+'"><b>♾ '+L2("Endless","لا نهائي")+" · "+L2("Level ","المستوى ")+((ENDL[sel.id]||5)+1)+'</b><small>'+L2("Beat it to climb higher. It never ends!","اجتزه لتصعد أعلى. لا ينتهي أبدًا!")+'</small></button>':"")+
 '<button class="bbtn" id="lcl" style="text-align:center">'+L2("Close","إغلاق")+'</button></div>';
 m.style.display="flex";m.querySelectorAll("[data-l]").forEach(x=>x.onclick=()=>startSite(+x.dataset.l));$("lcl").onclick=()=>{m.style.display="none"};$("cm").onclick=()=>{curseOn=!curseOn;render();openLevels()}}
function startSite(lv){if(!sel&&lastSite)sel=lastSite;if(!sel)return;lastSite=sel;runWon=false;curLevel=lv;curseRun=curseOn;curseLost=0;cur=WORLDS[sel.id];showIntro(()=>{$("bmenu").style.display="none";if(sel.id==="giza")cur.arts=gizaArts();found=new Set();hintIdx=-1;fx=[];huntMiss=0;huntHints=0;lastFindT=performance.now();initView();if(cur.game)cur.game.start();runStart=performance.now();mode="world";document.body.classList.add("g");render()})}
function winGameCore(perf){perf=Math.max(1,Math.min(3,perf||1));const el=(performance.now()-runStart)/1000,par=parOf(sel.id),ts=el<=par?3:el<=par*1.6?2:1,stars=Math.max(1,Math.min(3,Math.round((perf+ts)/2)));lastTime=el;lastPar=par;lastPerf=perf;lastTs=ts;const id=sel.id,b=SR[id]||(SR[id]=[0,0,0,0,0]),li=curLevel-1,endless=curLevel>5;lastFirst=!done.has(id);
 const prev=endless?0:b[li],imp=endless?curLevel>(ENDL[id]||5):stars>prev;let p=Math.round((30+15*Math.min(curLevel,10))*stars*(imp?1:.4));if(lastFirst)p+=50;
 if(endless){if(imp)ENDL[id]=curLevel}else if(imp)b[li]=stars;
 lastStars=stars;lastLvlUnlock=!endless&&li<4&&prev===0;done.add(id);lastDaily=claimDaily(id);p+=lastDaily;lastBoost=false;if(inv.boost>0){p=Math.round(p*1.5);inv.boost--;lastBoost=true}
 lastEvent=eventMult()>1;if(lastEvent)p*=2;lastCurse=curseRun;if(curseRun)p*=2;if(stars===3)inv.hint++;qAdd("win",1);qAdd("star",stars);if(stars===3)qAdd("three",1);if(curLevel>=3)qAdd("hard",1);
 p=Math.max(1,Math.round(p*RATE));lastDaily=Math.round(lastDaily*RATE);lastWin=p;score+=p;try{celebrate(stars)}catch(e){showErr("celebration: "+e.message)}render();setTimeout(()=>{try{showDone()}catch(e){showErr("result: "+e.message);fallbackDone()}},1900)}
function winGame(perf){if(runWon)return;if(!sel&&lastSite)sel=lastSite;if(!sel)return;runWon=true;lastSite=sel;try{winGameCore(perf)}catch(e){showErr("win: "+e.message);try{render()}catch(_){}setTimeout(()=>{try{showDone()}catch(_){fallbackDone()}},1200)}}
function fallbackDone(){$("dh").textContent=L2("Level complete!","اكتمل المستوى!");$("dp").textContent="";$("dnext").textContent="▶ "+L2("Next level","المستوى التالي");$("dre").textContent="↻ "+L2("Retry","إعادة");$("dbtn").textContent=L2("Back to map","العودة للخريطة");$("dnext").style.display=$("dre").style.display="block";$("done").style.display="flex"}
const VERSION="3.4";
function showErr(m){let b=document.getElementById("errbar");if(!b){b=document.createElement("div");b.id="errbar";b.style.cssText="position:fixed;left:8px;right:8px;top:calc(8px + env(safe-area-inset-top,0px));z-index:50;background:#7a1f1f;color:#fff;font:12px system-ui;padding:8px 10px;border-radius:8px;word-break:break-word";document.body.appendChild(b);b.onclick=()=>{b.style.display="none"}}b.textContent="⚠ "+m+" (v"+VERSION+", tap to hide)";b.style.display="block"}
addEventListener("error",e=>showErr((e.message||"error")+" @"+(e.lineno||"?")));addEventListener("unhandledrejection",e=>showErr(String(e.reason)));
const ACH=[["first","First discovery","أول اكتشاف",()=>done.size>=1],["three","Explorer: 3 sites","مستكشف: 3 مواقع",()=>done.size>=3],["all","Master of Egypt: all sites","سيد مصر: كل المواقع",()=>done.size>=SITES.length],["p500","500 points","500 نقطة",()=>score>=500],["p1000","1000 points","1000 نقطة",()=>score>=1000],["lv3","Beat level 3 anywhere","اجتز المستوى 3 في أي مكان",()=>Object.values(SR).some(a=>a[2]>0)],["star10","Collect 10 stars","اجمع 10 نجوم",()=>totalStars()>=10],["star30","Collect 30 stars","اجمع 30 نجمة",()=>totalStars()>=30],["perfect","Earn a 3-star win","احصل على 3 نجوم",()=>Object.values(SR).some(a=>a.some(v=>v>=3))],["streak3","3-day streak","3 أيام متتالية",()=>streak>=3],["streak7","7-day streak","7 أيام متتالية",()=>streak>=7],["streak30","30-day streak","30 يومًا متتاليًا",()=>streak>=30]];
let toastT=0,toastTx="";
function checkAch(){ACH.forEach(a=>{if(!ach.has(a[0])&&a[3]()){ach.add(a[0]);toastTx="🏅 "+L2(a[1],a[2]);toastT=performance.now()+3200;snd("win")}})}
const achBox=()=>'<div class="bbtn" style="cursor:default"><b>🏅 '+L2("Achievements","الإنجازات")+" "+ach.size+"/"+ACH.length+'</b><small>'+ACH.map(a=>(ach.has(a[0])?"✅ ":"⬜ ")+L2(a[1],a[2])).join("<br>")+'</small></div>';
let conf=[];
function confetti(){for(let i=0;i<70;i++)conf.push({x:W/2,y:H*.4,vx:(Math.random()-.5)*600,vy:-Math.random()*500-100,c:["#e6b84a","#2fb3a8","#d9534f","#4a8ee0","#f3ead2"][i%5],t0:performance.now(),r:Math.random()*6.28})}
function drawFx(t){if(mode==="map"){ctx.font="10px system-ui";ctx.textAlign="right";ctx.fillStyle="rgba(255,255,255,.5)";ctx.fillText("v"+VERSION,W-8,H-70)}conf=conf.filter(c=>t-c.t0<1800);conf.forEach(c=>{const s=(t-c.t0)/1000;ctx.save();ctx.globalAlpha=Math.max(0,1-s/1.8);ctx.translate(c.x+c.vx*s,c.y+c.vy*s+900*s*s);ctx.rotate(c.r+s*6);ctx.fillStyle=c.c;ctx.fillRect(-4,-2,8,4);ctx.restore()});
 if(t<toastT){ctx.font="bold 15px system-ui";const w=ctx.measureText(toastTx).width+28,x=(W-w)/2;ctx.fillStyle="rgba(20,26,40,.95)";rr(x,100,w,36,18);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=2;ctx.stroke();ctx.fillStyle="#fff4d0";ctx.textAlign="center";ctx.fillText(toastTx,W/2,123)}
 if(t<qT){ctx.font="bold 15px system-ui";const w=ctx.measureText(qTx).width+64,x=(W-w)/2,y=146;ctx.save();ctx.globalAlpha=Math.max(0,Math.min(1,(qT-t)/300));ctx.fillStyle="#fff7dd";rr(x,y,w,40,20);ctx.fill();ctx.strokeStyle="#e6b84a";ctx.lineWidth=2;ctx.stroke();ctx.fillStyle="#e6b84a";ctx.beginPath();ctx.arc(x+22,y+20,14,0,7);ctx.fill();ctx.strokeStyle="#6a4a10";ctx.stroke();face(x+22,y+22,11,1);ctx.fillStyle="#3a2208";ctx.textAlign="left";ctx.fillText(qTx,x+44,y+25);ctx.restore()}}
const GEM_LOGO=new Image();GEM_LOGO.src="Images/GEM.png";
const GIZA_LOGO=new Image();GIZA_LOGO.src="Images/Pyramids.jpg";
const GOUNA_LOGO=new Image();GOUNA_LOGO.src="Images/El-Gouna-Film-Festival.jpg";
const SINAI_LOGO=new Image();SINAI_LOGO.src="Images/Saint Catherine's Monastery, Sinai logo.png";
const ABU_LOGO=new Image();ABU_LOGO.src="Images/Abu Simbel.jpg";
const PHILAE_LOGO=new Image();PHILAE_LOGO.src="Images/Philae Temple, Aswan.jpg";
const REDSEA_LOGO=new Image();REDSEA_LOGO.src="Images/Red Sea Reefs, Hurghada.jpg";
const EDFU_LOGO=new Image();EDFU_LOGO.src="Images/Temple of Horus, Edfu.jpg";
const LUXOR_LOGO=new Image();LUXOR_LOGO.src="Images/Karnak Temple, Luxor.webp";
const ALEX_LOGO=new Image();ALEX_LOGO.src="Images/Qaitbay Citadel, Alexandria.jpg";
const SIWA_LOGO=new Image();SIWA_LOGO.src="Images/Siwa Oasis – Temple of the Oracle.jpg";
const baseDrawFx=drawFx;drawFx=t=>{if(mode==="world"&&cur&&cur.gem){ctx.save();ctx.fillStyle="#172536";ctx.fillRect(0,78,W,48);ctx.restore();drawGemLoseFx(t)}baseDrawFx(t)};
let gs=null,gsNext=performance.now()+12000,gfx=[];
const inEgypt=(lo,la)=>{let c=false;for(let i=0,j=OUT.length-1;i<OUT.length;j=i++){const[a,b]=OUT[i],[p,q]=OUT[j];if((b>la)!==(q>la)&&lo<(p-a)*(la-b)/(q-b)+a)c=!c}return c};
function updGS(t){if(!gs&&t>gsNext){for(let k=0;k<40;k++){const lo=26+Math.random()*8.5,la=22.5+Math.random()*8.8;if(inEgypt(lo,la)){gs={lo,la,until:t+7000,cursed:Math.random()<.3};break}}gsNext=t+(18000+Math.random()*18000)*(own.has("lucky")?.5:1)}if(gs&&t>gs.until)gs=null}
function drawGS(t){if(gs){const[x,y]=mp(gs.lo,gs.la),p=1+.2*Math.sin(t/150);ctx.fillStyle=gs.cursed?"rgba(217,83,79,.45)":"rgba(255,224,138,.35)";ctx.beginPath();ctx.arc(x,y,24*p,0,7);ctx.fill();
  ctx.fillStyle=gs.cursed?"#1a1a1a":"#e6b84a";ctx.beginPath();ctx.ellipse(x,y,9,12,0,0,7);ctx.fill();ctx.strokeStyle=gs.cursed?"#d9534f":"#6a4a10";ctx.lineWidth=2;ctx.stroke();ctx.beginPath();ctx.moveTo(x,y-12);ctx.lineTo(x,y+12);ctx.moveTo(x-9,y-2);ctx.lineTo(x+9,y-2);ctx.stroke()}
 gfx=gfx.filter(f=>t-f.t0<800);gfx.forEach(f=>{const k=(t-f.t0)/800;ctx.globalAlpha=1-k;ctx.font="bold 22px system-ui";ctx.textAlign="center";ctx.lineWidth=4;ctx.strokeStyle="#3a2208";ctx.fillStyle=f.bad?"#ff8a80":"#fff4d0";ctx.strokeText(f.txt||"+"+Math.round(15*RATE),f.x,f.y-k*36);ctx.fillText(f.txt||"+"+Math.round(15*RATE),f.x,f.y-k*36);ctx.globalAlpha=1})}

/* ---------- FUN: faces, mascot quips ---------- */
function face(x,y,r,m){ctx.save();ctx.lineCap="round";const ex=r*.38,ey=y-r*.15,er=r*.2,lw=Math.max(1.5,r*.1);ctx.strokeStyle="#3a2208";ctx.lineWidth=lw;
 if(m===3){[-1,1].forEach(d=>{ctx.beginPath();ctx.moveTo(x+d*ex-er,ey);ctx.lineTo(x+d*ex+er,ey);ctx.stroke()});ctx.fillStyle="#3a2208";ctx.font="bold "+Math.round(r*.7)+"px system-ui";ctx.textAlign="left";ctx.fillText("z",x+r*.55,y-r*.55)}
 else{[-1,1].forEach(d=>{ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(x+d*ex,ey,er*1.35,0,7);ctx.fill();ctx.lineWidth=1;ctx.stroke();ctx.fillStyle="#222";ctx.beginPath();ctx.arc(x+d*ex,ey+(m===-1?er*.35:0),er*.65,0,7);ctx.fill()});
  ctx.lineWidth=lw;if(m===2)[-1,1].forEach(d=>{ctx.beginPath();ctx.moveTo(x+d*(ex+er*1.5),ey-er*2.4);ctx.lineTo(x+d*(ex-er*1.2),ey-er*1.4);ctx.stroke()})}
 ctx.beginPath();if(m===1)ctx.arc(x,y+r*.05,r*.45,.15*Math.PI,.85*Math.PI);else if(m===-1||m===2)ctx.arc(x,y+r*.75,r*.4,1.15*Math.PI,1.85*Math.PI);else{ctx.moveTo(x-r*.3,y+r*.45);ctx.lineTo(x+r*.3,y+r*.45)}ctx.stroke();ctx.restore()}
function sunFace(x,y,m){ctx.save();ctx.fillStyle="#1a1a1a";ctx.strokeStyle="#1a1a1a";ctx.lineWidth=2;[-1,1].forEach(d=>{ctx.beginPath();ctx.ellipse(x+d*9,y-3,8,5.5,0,0,7);ctx.fill()});ctx.beginPath();ctx.moveTo(x-3,y-3);ctx.lineTo(x+3,y-3);ctx.stroke();
 ctx.strokeStyle="#7a4a1a";ctx.lineWidth=2.5;ctx.lineCap="round";ctx.beginPath();if(m>0)ctx.arc(x,y+4,10,.1*Math.PI,.9*Math.PI);else if(m<0)ctx.arc(x,y+17,9,1.15*Math.PI,1.85*Math.PI);else ctx.arc(x,y+6,6,.2*Math.PI,.8*Math.PI);ctx.stroke();ctx.restore()}
function pharaoh(x,y,r){ctx.fillStyle="#e6b84a";ctx.beginPath();ctx.moveTo(x-r*1.2,y+r*1.3);ctx.lineTo(x-r*.95,y-r*.9);ctx.quadraticCurveTo(x,y-r*1.6,x+r*.95,y-r*.9);ctx.lineTo(x+r*1.2,y+r*1.3);ctx.closePath();ctx.fill();
 ctx.fillStyle="#2f6fd8";[-1,1].forEach(d=>ctx.fillRect(x+d*r*1.0-3,y-r*.3,6,r*1.4));ctx.fillStyle="#d9a77a";ctx.beginPath();ctx.ellipse(x,y+r*.1,r*.8,r*.95,0,0,7);ctx.fill();face(x,y+r*.1,r*.75,1);ctx.fillStyle="#2f6fd8";ctx.fillRect(x-3,y+r*.9,6,r*.5)}
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
const SAVE="egyptquest.v1";
function save(){try{const pg={};for(const k in prog)pg[k]=[...prog[k]];localStorage.setItem(SAVE,JSON.stringify({score,done:[...done],seen:[...seen],muted,prog:pg,lvl,ach:[...ach],streak,lastDay,dailyClaim,dailyDay,dailyId,SR,spent,inv,own:[...own],theme,qDay,qIds,qp,qcl,chestAt,loginDay,ENDL,curseOn}))}catch(e){}}
function load(){try{const d=JSON.parse(localStorage.getItem(SAVE)||"null");if(!d)return;score=d.score|0;(d.done||[]).forEach(x=>done.add(x));(d.seen||[]).forEach(x=>seen.add(x));muted=!!d.muted;for(const k in(d.prog||{}))prog[k]=new Set(d.prog[k]);Object.assign(lvl,d.lvl||{});(d.ach||[]).forEach(x=>ach.add(x));streak=d.streak|0;lastDay=d.lastDay||"";dailyClaim=d.dailyClaim||"";dailyDay=d.dailyDay||"";dailyId=d.dailyId||"";Object.assign(SR,d.SR||{});spent=d.spent|0;Object.assign(inv,d.inv||{});(d.own||[]).forEach(x=>own.add(x));theme=d.theme||"classic";qDay=d.qDay||"";qIds=d.qIds||[];qp=d.qp||{};qcl=d.qcl||{};chestAt=d.chestAt||0;loginDay=d.loginDay||0;Object.assign(ENDL,d.ENDL||{});curseOn=!!d.curseOn}catch(e){}updMute()}
const FACTS={giza:["The Great Pyramid was the tallest human-made structure on Earth for about 3,800 years.","ظل الهرم الأكبر أعلى بناء صنعه الإنسان لنحو 3800 عام."],
alex:["Qaitbay Citadel was built in 1477 using stone from the ruins of the ancient Pharos lighthouse.","بُنيت قلعة قايتباي عام 1477م باستخدام أحجار من أنقاض فنار الإسكندرية القديم."],
luxor:["Karnak's Hypostyle Hall holds 134 enormous columns.","تضم قاعة الأعمدة الكبرى في الكرنك 134 عمودًا ضخمًا."],
philae:["Philae Temple was moved to Agilkia Island in a UNESCO rescue campaign after the Aswan High Dam was built.","نُقل معبد فيلة إلى جزيرة أجيليكيا ضمن حملة إنقاذ لليونسكو بعد بناء السد العالي."],
abu:["Abu Simbel was cut into huge blocks and rebuilt on higher ground in the 1960s to save it from Lake Nasser.","قُطع معبدا أبو سمبل إلى كتل ضخمة وأُعيد بناؤهما في موقع أعلى في ستينيات القرن الماضي لإنقاذهما من بحيرة ناصر."],
siwa:["Alexander the Great is said to have visited the Oracle of Amun at Siwa in 331 BC.","يُروى أن الإسكندر الأكبر زار وحي آمون في سيوة عام 331 ق.م."],
edfu:["The Temple of Horus at Edfu took about 180 years to build, from 237 BC to 57 BC.","استغرق بناء معبد حورس في إدفو نحو 180 عامًا، من 237 ق.م إلى 57 ق.م."],
sinai:["Saint Catherine's Monastery dates to the 6th century and is among the oldest continuously inhabited Christian monasteries.","يعود دير سانت كاترين إلى القرن السادس، وهو من أقدم الأديرة المسيحية المأهولة باستمرار."],
redsea:["The Red Sea hosts hundreds of fish species and colorful coral reefs loved by divers worldwide.","يضم البحر الأحمر مئات أنواع الأسماك وشعابًا مرجانية ملونة يحبها الغواصون حول العالم."],
abydos:["The Abydos King List in Seti I's temple names dozens of earlier pharaohs in carved cartouches.","تذكر قائمة ملوك أبيدوس في معبد سيتي الأول أسماء عشرات الفراعنة السابقين في خراطيش منحوتة."],
whitedesert:["The White Desert's mushroom-shaped chalk rocks were carved by wind-blown sand over thousands of years.","نحتت الرياح المحملة بالرمال صخور الصحراء البيضاء الطباشيرية على شكل الفطر عبر آلاف السنين."],
hitan:["Wadi Al-Hitan became a UNESCO World Heritage Site in 2005 for its fossils of early whales.","أصبح وادي الحيتان موقعًا للتراث العالمي لليونسكو عام 2005 بفضل حفريات الحيتان القديمة."],
matruh:["Legend says Cleopatra and Mark Antony swam in the clear waters near Marsa Matruh.","تقول الأسطورة إن كليوباترا ومارك أنطونيو سبحا في المياه الصافية قرب مرسى مطروح."],
kharga:["The Temple of Hibis in Kharga is among the best-preserved temples of the Persian period in Egypt.","يُعد معبد هيبس في الخارجة من أفضل معابد العصر الفارسي المحفوظة في مصر."],
gouna:["El Gouna Film Festival was founded in 2017, and its awards are called the Stars of El Gouna.","تأسس مهرجان الجونة السينمائي عام 2017، وتُسمّى جوائزه «نجمة الجونة»."]};
function exportCode(){const pg={};for(const k in prog)pg[k]=[...prog[k]];return btoa(JSON.stringify({v:1,score,done:[...done],seen:[...seen],prog:pg,lvl,ach:[...ach],streak,lastDay,SR,spent,inv,own:[...own],theme,ENDL,loginDay,chestAt}))}
function openBackup(){const m=$("bmenu");
 m.innerHTML='<div class="box"><h2 style="color:var(--gold);margin:0 0 4px">💾 '+L2("Backup progress","نسخ احتياطي للتقدم")+'</h2><p style="margin:0 0 8px;color:var(--mut);font-size:13px">'+L2("Copy this code to move your progress to another device. To restore, paste a code below and tap Restore.","انسخ هذا الرمز لنقل تقدمك إلى جهاز آخر. للاستعادة الصق الرمز هنا واضغط استعادة.")+'</p>'+
 '<textarea id="bcode" rows="5" style="width:100%;box-sizing:border-box;background:#0e1420;color:var(--txt);border:1px solid #3a3f52;border-radius:8px;padding:8px;font-size:12px"></textarea><div id="bmsg" style="min-height:20px;color:var(--gold);font-size:13px"></div>'+
 '<button class="bbtn" id="bcopy" style="text-align:center">'+L2("Copy code","نسخ الرمز")+'</button><button class="bbtn" id="brest" style="text-align:center">'+L2("Restore from code","استعادة من الرمز")+'</button><button class="bbtn" id="bcl" style="text-align:center">'+L2("Close","إغلاق")+'</button></div>';
 m.style.display="flex";const ta=$("bcode"),msg=t=>{$("bmsg").textContent=t};ta.value=exportCode();
 $("bcopy").onclick=async()=>{ta.value=exportCode();ta.focus();ta.select();try{await navigator.clipboard.writeText(ta.value);msg(L2("Copied!","تم النسخ!"))}catch(e){msg(L2("Code selected — copy it manually","تم تحديد الرمز — انسخه يدويًا"))}};
 $("brest").onclick=()=>{try{const d=JSON.parse(atob(ta.value.trim()));if(d.v!==1)throw 0;const ids=SITES.map(s=>s.id);
  score=Math.max(0,d.score|0);done.clear();seen.clear();(d.done||[]).filter(x=>ids.includes(x)).forEach(x=>done.add(x));(d.seen||[]).filter(x=>ids.includes(x)).forEach(x=>seen.add(x));
  for(const k in prog)delete prog[k];for(const k in(d.prog||{}))if(ids.includes(k))prog[k]=new Set((d.prog[k]||[]).filter(n=>Number.isInteger(n)));
  Object.keys(lvl).forEach(k=>delete lvl[k]);Object.assign(lvl,d.lvl||{});ach.clear();(d.ach||[]).forEach(x=>ach.add(x));streak=d.streak|0;lastDay=d.lastDay||"";for(const k in SR)delete SR[k];Object.assign(SR,d.SR||{});spent=d.spent|0;Object.assign(inv,{hint:5,time:0,boost:0,freeze:0,ward:0},d.inv||{});own.clear();(d.own||[]).forEach(x=>own.add(x));theme=d.theme||"classic";for(const k in ENDL)delete ENDL[k];Object.assign(ENDL,d.ENDL||{});loginDay=d.loginDay||0;chestAt=d.chestAt||0;render();msg(L2("Progress restored!","تمت استعادة التقدم!"))}catch(e){msg(L2("Invalid code","رمز غير صالح"))}};
 $("bcl").onclick=()=>{m.style.display="none"}}
function openCollection(){FACTS.gem=FACTS.gem||["The Grand Egyptian Museum is one of the world's largest museums dedicated to a single civilization.","المتحف المصري الكبير من أكبر المتاحف في العالم المخصصة لحضارة واحدة."];const ar=lang==="ar",m=$("bmenu");let n=0;
 const rows=SITES.map(s=>{const ok=done.has(s.id);if(ok)n++;return'<div class="bbtn" style="cursor:default"><b>'+(ok?"✅ ":"🔒 ")+(ar?s.ar:s.en)+' · ★ '+starSum(s.id)+'/15</b><small>'+(ok?FACTS[s.id][ar?1:0]:L2("Finish this site's challenge to reveal a fact","أكمل تحدي هذا الموقع لتكشف معلومة"))+'</small></div>'}).join("")+achBox();
 m.innerHTML='<div class="box" style="max-height:88vh;overflow:auto"><h2 style="color:var(--gold);margin:0 0 4px">📜 '+L2("Collection","المجموعة")+'</h2><p style="margin:0 0 6px;color:var(--mut);font-size:13px">'+L2("Sites completed ","المواقع المكتملة ")+n+'/'+SITES.length+' · '+L2("Balance ","الرصيد ")+bal()+" · "+L2("Earned ","المكتسب ")+score+'</p><p style="margin:0 0 8px;font-size:12px;color:var(--mut)">'+L2("✓ Progress saves automatically on this device","✓ يُحفظ تقدمك تلقائيًا على هذا الجهاز")+'</p>'+rows+
 '<button class="bbtn" id="bk" style="text-align:center">💾 '+L2("Backup / restore progress","نسخ احتياطي / استعادة التقدم")+'</button><button class="bbtn" id="rst" style="text-align:center">'+L2("Reset progress","إعادة ضبط التقدم")+'</button><button class="bbtn" id="cl" style="text-align:center">'+L2("Close","إغلاق")+'</button></div>';
 m.style.display="flex";$("cl").onclick=()=>{m.style.display="none"};$("bk").onclick=openBackup;let armed=false;
 $("rst").onclick=()=>{if(!armed){armed=true;$("rst").textContent=L2("Tap again to confirm","اضغط مرة أخرى للتأكيد");return}score=0;done.clear();seen.clear();for(const k in prog)delete prog[k];Object.keys(lvl).forEach(k=>delete lvl[k]);ach.clear();streak=0;lastDay="";dailyClaim="";for(const k in SR)delete SR[k];spent=0;inv.hint=5;inv.time=0;inv.boost=0;inv.freeze=0;inv.ward=0;curseOn=false;own.clear();theme="classic";qDay="";qIds=[];qp={};qcl={};chestAt=0;loginDay=0;for(const k in ENDL)delete ENDL[k];sel=null;m.style.display="none";render()}}

/* ---------- UI ---------- */
function select(id){snd("tap");quipFor("select");sel=SITES.find(s=>s.id===id);if(!seen.has(id)){seen.add(id);score+=Math.round(10*RATE)}render()}
$("x").onclick=()=>{sel=null;render()};
$("lang").onclick=()=>{lang=lang==="en"?"ar":"en";render()};
function exitWorld(){mode="map";bonusMode=false;ptr.clear();document.body.classList.remove("g");render()}
$("enter").onclick=()=>{if(!sel)return;if(!unlocked(SITES.indexOf(sel)))return;openLevels()};
$("gback").onclick=exitWorld;$("ginfo").onclick=()=>showIntro(null);
$("hintbtn").onclick=()=>{if(inv.hint<1)return;const rem=cur.arts.map((a,i)=>i).filter(i=>!found.has(i));if(!rem.length)return;
 hintIdx=rem[Math.floor(Math.random()*rem.length)];hintUntil=performance.now()+2500;inv.hint--;huntHints++;
 const a=cur.arts[hintIdx];V.ox=W/2-a[0]*V.z;V.oy=H/2-a[1]*V.z;clampV();render()};
function showDone(){if(!sel&&lastSite)sel=lastSite;const t=T[lang],i=SITES.indexOf(lastSite||sel);$("dh").textContent=t.doneH+"  "+starTxt(lastStars);$("dp").textContent=L2("+"+lastWin+" points","+"+lastWin+" نقطة")+"\n⏱ "+Math.round(lastTime)+L2("s (par ","ث (الهدف ")+lastPar+L2("s) · speed ","ث) · السرعة ")+starTxt(lastTs)+" · "+L2("skill ","المهارة ")+starTxt(lastPerf)+(lastBoost?" ⚡×1.5":"")+(lastEvent?" 🎉×2":"")+(lastCurse?" ☠×2":"")+(lastDaily?"\n"+L2("⭐ Daily bonus +"+lastDaily+" · 🔥 streak "+streak,"⭐ مكافأة يومية +"+lastDaily+" · 🔥 تتابع "+streak):"")+(lastStars===3?"\n"+L2("Perfect! +1 free hint","ممتاز! +1 تلميح مجاني"):"")+(lastLvlUnlock&&curLevel<5?"\n"+L2("Level "+(curLevel+1)+" unlocked!","فُتح المستوى "+(curLevel+1)+"!"):"")+(lastCurse?"\n💀 "+L2("Curse mode: lost "+curseLost+" points","وضع اللعنة: خسرت "+curseLost+" نقطة"):"");$("dnext").textContent="▶ "+L2("Next level ("+(curLevel+1)+")","المستوى التالي ("+(curLevel+1)+")");$("dre").textContent="↻ "+L2("Retry this level","أعد هذا المستوى");$("dnext").style.display=$("dre").style.display="block";$("dbtn").textContent=lastFirst&&i<SITES.length-1&&unlocked(i+1)?L2("Next place ▶","المكان التالي ▶"):L2("Back to map","العودة للخريطة");$("done").style.display="flex"}
$("dnext").onclick=()=>{$("done").style.display="none";startSite(curLevel+1)};$("dre").onclick=()=>{$("done").style.display="none";startSite(curLevel)};$("dbtn").onclick=()=>{$("done").style.display="none";if(bonusMode){exitWorld();return}const i=SITES.indexOf(lastSite||sel);exitWorld();if(lastFirst&&i>=0&&i<SITES.length-1&&unlocked(i+1))select(SITES[i+1].id)};
const unSet=new Set();let unInit=false;
function checkUnlocks(){SITES.forEach((st,i)=>{if(unlocked(i)&&!unSet.has(st.id)){unSet.add(st.id);if(unInit){toastTx="🗺️ "+L2("New place unlocked: ","مكان جديد: ")+(lang==="ar"?st.ar:st.en);toastT=performance.now()+3500;snd("win")}}});unInit=true}
const chestShort=()=>{const ms=chestAt-Date.now();if(ms<=0)return L2("OPEN","افتح");const m=Math.ceil(ms/60000);return Math.floor(m/60)+"h"+m%60+"m"};
function render(){checkUnlocks();newQuestDay();checkAch();save();const t=T[lang],ar=lang==="ar";
 document.documentElement.lang=lang;document.documentElement.dir=ar?"rtl":"ltr";
 $("title").textContent=t.title;$("score").textContent=t.score+": "+bal()+(streak>0?"  🔥"+streak:"");{let nx=-1;SITES.forEach((s,i)=>{if(!unlocked(i)&&(nx<0||need(i)<need(nx)))nx=i});$("hint").textContent=t.hintMap+(nx>=0?"\n🔒 "+L2("Next place at "+need(nx)+" points (you have "+score+")","المكان التالي عند "+need(nx)+" نقطة (لديك "+score+")"):"")}$("lang").textContent=ar?"English":"العربية";
 const idx=sel?SITES.indexOf(sel):0,lk=!!sel&&!unlocked(idx);
 $("enter").textContent=lk?t.locked.replace("#",need(idx)).replace("%",score):t.enter;$("enter").disabled=lk;
 const cs=mode==="world"&&cur&&cur.bonus?cur.bonus[ar?1:0]:mode==="world"&&sel?(ar?sel.ar:sel.en):"";$("gtitle").textContent=cs+(cur&&cur.bonus?"":" · "+L2("Lv ","م ")+curLevel+(curseRun?" ☠":""))+" · "+t.score+": "+bal();$("gback").textContent=t.back;
 $("gline").textContent="";$("ginfo").style.display=cur&&cur.bonus?"none":"";$("hintbtn").innerHTML='<span class="e">💡</span><span class="l">'+inv.hint+'</span>';$("hintbtn").style.display=cur&&cur.game?"none":"";
 if(cur&&mode==="world"&&!cur.game){const n=found.size,tot=cur.arts.length;$("tray").textContent="🔎 "+n+"/"+tot}
 if(cur&&cur.gem){$("gline").innerHTML='<a href="https://tickets.gem.eg/?hl=en-US" target="_blank" rel="noopener noreferrer">'+L2("Book GEM tickets","احجز تذاكر المتحف")+'</a>';$("gline").style.pointerEvents="auto"}else{$("gline").innerHTML="";$("gline").style.pointerEvents="none"}
 const sb=(side,emoji,label,onclick,cls)=>{const b=document.createElement("button");b.className="sbtn"+(cls?" "+cls:"");const e=document.createElement("span");e.className="e";e.textContent=emoji;const l=document.createElement("span");l.className="l";l.textContent=label;b.appendChild(e);b.appendChild(l);if(onclick)b.onclick=onclick;$(side).appendChild(b);return l};
$("lside").innerHTML="";$("rside").innerHTML="";
{const dI=getDaily(),dn=dailyClaim===today(),dl=sb("lside","⭐",dn?"✓"+(streak>1?"🔥"+streak:""):L2("Daily","يومي"),()=>{select(dI);if(unlocked(SITES.findIndex(x=>x.id===dI)))openLevels()},dn?"done":"");
 chestEl=sb("lside","🎁",chestShort(),openChest);
 sb("lside","📋",qDone()+"/3",openQuests,qDone()>=3?"done":"");
 if(eventMult()>1)sb("lside","🎉","×2",null,"done")}
sb("rside","🎮",L2("Bonus","إضافي"),openBonus);sb("rside","📜",L2("Book","السجل"),openCollection);sb("rside","🛒",L2("Shop","المتجر"),openShop);

 const inf=$("info");if(sel&&mode==="map"){inf.style.display="block";$("iname").textContent=ar?sel.ar:sel.en;$("iera").textContent=ar?sel.eraAr:sel.eraEn;$("idesc").textContent=(ar?sel.dAr:sel.dEn)+"\n🎮 "+CH[sel.id][ar?1:0]+"\n★ "+starSum(sel.id)+"/15"+(lk?"\n🔒 "+L2("Locked: earn "+(need(idx)-score)+" more total points","مقفل: اربح "+(need(idx)-score)+" نقطة إجمالية إضافية"):"")}else inf.style.display="none"}
load();touchDay();newQuestDay();render();if(loginPending)openLogin();scheduleReminders();
document.addEventListener&&document.addEventListener("visibilitychange",()=>{if(!document.hidden){touchDay();newQuestDay();render();if(loginPending)openLogin()}});
function drawGemLoseFx(t){if(!cur||!cur.gem||!cur.game)return;const s=cur.game.status();if(!s.includes("Computer wins")&&!s.includes("الكمبيوتر يفوز"))return;const a=.18+.12*Math.sin(t/70);ctx.save();ctx.fillStyle="rgba(190,30,30,"+a+")";ctx.fillRect(0,0,W,H);ctx.strokeStyle="rgba(255,220,180,.8)";ctx.lineWidth=8;ctx.strokeRect(10,10,W-20,H-20);ctx.fillStyle="#fff4d0";ctx.font="bold 28px system-ui";ctx.textAlign="center";ctx.fillText(L2("Computer wins — try again!","الكمبيوتر يفوز — حاول مرة أخرى!"),W/2,H-72);ctx.restore()}
(function loop(){const t=performance.now();requestAnimationFrame(loop);
 if(mode==="map"){updGS(t);drawMap(t);drawGS(t)}else if(cur.game){cur.game.draw(t);const st=cur.game.status()+(cur.bonus||runWon?"":" · ⏱"+Math.floor((performance.now()-runStart)/1000)+"s");if(st!==lastS){$("tray").textContent=st;lastS=st}}else{drawWorld(t);const st="🔎 "+found.size+"/"+cur.arts.length+(cur.arts.length-found.size===1?" · "+L2("1 left!","واحدة متبقية!"):"")+(runWon?"":" · ⏱"+Math.floor((performance.now()-runStart)/1000)+"s");if(st!==lastS){$("tray").textContent=st;lastS=st}}drawFx(t);drawCeleb(t);if(chestEl&&mode==="map"){const x=chestShort();if(chestEl.textContent!==x)chestEl.textContent=x;chestEl.parentNode.classList.toggle("ready",chestAt<=Date.now())}})(0);
