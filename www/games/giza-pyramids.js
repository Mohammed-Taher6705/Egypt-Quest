/* Giza Pyramids — Hidden artifacts */
// Artifact spawn pool [x, y, nearEdge]. Each run picks 6 + level random spots.
const GPOOL=[[166,862,1],[1236,316,1],[350,430,0],[905,520,0],[1136,696,1],[655,760,0],[300,150,0],[650,320,0],[1000,400,0],[900,800,0],[230,600,0],[1200,500,0],[560,610,0],[1262,894,1],[740,260,0]];
function gizaArts(){return shf([...GPOOL]).slice(0,6+Math.min(LV(),5)).map(p=>[p[0],p[1],["ankh","scarab","eye","coin"][Math.floor(Math.random()*4)],p[2]])}
definePlace({
  id:"giza",
  // map pin
  lon:31.13, lat:29.98, mapDx:18, mapDy:12,
  en:"Giza Pyramids",
  ar:"أهرامات الجيزة",
  eraEn:"Old Kingdom · c. 2600 BC",
  eraAr:"الدولة القديمة · نحو 2600 ق.م",
  dEn:"Home of the Great Pyramid of Khufu, the Sphinx and the pyramids of Khafre and Menkaure.",
  dAr:"موطن هرم خوفو الأكبر وأبو الهول وهرمي خفرع ومنكاورع.",
  logo:"assets/images/giza.jpg",
  // challenge meta
  challenge:["Hidden artifacts","القطع المخفية"],
  par:60,                // seconds for full speed bonus at level 1
  starTip:["Few wrong taps and no hints","أخطاء قليلة وبدون تلميحات"],
  levels:(x,k)=>L2((6+Math.min(x,5))+" artifacts",(6+Math.min(x,5))+" قطع"),
  fact:["The Great Pyramid was the tallest human-made structure on Earth for about 3,800 years.","ظل الهرم الأكبر أعلى بناء صنعه الإنسان لنحو 3800 عام."],
  icon(ctx){ctx.beginPath();ctx.moveTo(-10,6);ctx.lineTo(-3,-8);ctx.lineTo(4,6);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(0,6);ctx.lineTo(5,-2);ctx.lineTo(10,6);ctx.closePath();ctx.fill();},
  world:mk({w:1400,h:1000,ground:"#d9b46c",bg:"#b08850",start:[700,900],items:[...sandDeco(7,1400,1000),
 PY(420,300,220),PY(780,480,200),PY(1080,640,100),
 Blk(495,742,95,36,"#d9b87a"),Blk(575,738,32,44,"#e3c48a"),Blk(607,750,35,9,"#c9a366",false),Blk(607,769,35,9,"#c9a366",false),
 PA(150,850),PA(1250,300),PA(1280,880),
 LB(420,170,"Pyramid of Khufu","هرم خوفو"),LB(780,362,"Pyramid of Khafre","هرم خفرع"),LB(1080,572,"Pyramid of Menkaure","هرم منكاورع"),LB(560,722,"The Great Sphinx","أبو الهول")]}),
  makeArts:()=>gizaArts(),
  game:null
});
