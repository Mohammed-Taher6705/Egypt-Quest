let lang="en",score=0,sel=null,mode="map",cur=null;const seen=new Set(),done=new Set();const need=i=>SITES[i]&&SITES[i].req!=null?SITES[i].req:50*i*(i+2);const has3=id=>(SR[id]||[]).some(v=>v>=3);
/* A place opens when the PREVIOUS place has a ★★★ result on any level.
   (Places you already played stay open.) Points are for the shop, not for unlocking. */
const unlocked=i=>i===0||(i>0&&!!SITES[i]&&(has3(SITES[i-1].id)||done.has(SITES[i].id)));
const nextLocked=()=>SITES.findIndex((s,i)=>!unlocked(i));
const lockText=i=>i>0&&SITES[i-1]?L2("Get ★★★ in "+SITES[i-1].en+" to unlock","احصل على ★★★ في "+SITES[i-1].ar+" لفتحه"):"";
const $=id=>document.getElementById(id);
const lvl={},ach=new Set();let streak=0,lastDay="",dailyClaim="",dailyDay="",dailyId="",lastWin=0,lastFirst=false,lastDaily=0,lastStars=1,lastLvlUnlock=false,lastBoost=false,huntMiss=0,huntHints=0,lastEvent=false,lastTime=0,lastPar=1,lastPerf=1,lastTs=1,lastSite=null;
const today=()=>dstr(0);
let curLevel=1,runWon=false,runStart=0,lastFindT=0;const LV=()=>curLevel-1;
function getDaily(){const d=today();if(dailyDay!==d||!SITES.some((s,i)=>s.id===dailyId&&unlocked(i))){let h=0;for(const c of d)h=(h*31+c.charCodeAt(0))>>>0;const un=SITES.filter((s,i)=>unlocked(i));dailyId=un[h%un.length].id;dailyDay=d}return dailyId}
function claimDaily(id){if(id!==getDaily()||dailyClaim===today())return 0;dailyClaim=today();return 100+10*Math.min(streak,7)}
const dstr=(o=0)=>{const d=new Date(Date.now()+o*864e5);return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const ENDL={};let loginDay=0,loginPending=false,pendingMs=null,freezeUsed=false,chestAt=0,chestEl=null,qDay="",qIds=[],qp={},qcl={};
const eventMult=()=>{const w=new Date().getDay();return w===5||w===6?2:1};
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
/* Run-scoped timers: games use later() instead of setTimeout so a delayed callback
   from a finished/abandoned run can never fire into the map or into another game. */
let runSeq=0;
const later=(fn,ms)=>{const s=runSeq;return setTimeout(()=>{if(s===runSeq&&mode==="world")fn()},ms)};
/* Lives: every place run starts with ❤❤❤ (one less on level 5+). A mistake costs a heart; 0 = level lost. */
let lives=3,maxLives=3,runLost=false,hurtT=0,contUsed=false,loseT=0,pendingWin=0,doneMode="win",bonusKey="";
const hearts=()=>"♥".repeat(Math.max(0,lives))+"♡".repeat(Math.max(0,maxLives-lives)); // text hearts (not emoji)
let lastLostHeart=false,lastNewUnlock=false;
