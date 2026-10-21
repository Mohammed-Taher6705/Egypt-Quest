/* ============================================================
   Automatic map style from the real sun (v4.4)
   - Sun height is computed on the device from the clock + location
     (no network needed once the location is known).
   - Location: precise device location only if the player allowed it
     (asked from the Shop, never at start-up) → otherwise an approximate
     location from a free IP-geolocation API (no key) → otherwise Cairo.
     Only a rounded position (~10 km) is stored on the device.
   - Style: sun above +8° = Classic (sunny) · −6°…+8° (sunrise/sunset glow) = Sunset · below −6° = Night.
   ============================================================ */
const Daylight=(()=>{
 const R=Math.PI/180,KEY="egyptquest.loc",CAIRO={lat:30.04,lon:31.24,src:"default"};
 const IP_APIS=[["https://get.geojs.io/v1/ip/geo.json",j=>[j.latitude,j.longitude]],["https://ipapi.co/json/",j=>[j.latitude,j.longitude]]];
 /* Sun elevation in degrees (USNO low-precision formulas, ±~0.5°) */
 function sunAlt(ms,lat,lon){const d=ms/864e5+2440587.5-2451545,g=(357.529+.98560028*d)*R,q=280.459+.98564736*d,L=(q+1.915*Math.sin(g)+.02*Math.sin(2*g))*R,
  e=(23.439-3.6e-7*d)*R,ra=Math.atan2(Math.cos(e)*Math.sin(L),Math.cos(L)),dec=Math.asin(Math.sin(e)*Math.sin(L)),gmst=((18.697374558+24.06570982441908*d)%24+24)%24,ha=(gmst*15+lon)*R-ra;
  return Math.asin(Math.sin(lat*R)*Math.sin(dec)+Math.cos(lat*R)*Math.cos(dec)*Math.cos(ha))/R}
 const phaseFor=alt=>alt>8?"classic":alt>-6?"sunset":"night";
 const round=v=>Math.round(v*10)/10;
 let loc=null;
 const ls={get(){try{return JSON.parse(localStorage.getItem(KEY)||"null")}catch(e){return null}},set(v){try{localStorage.setItem(KEY,JSON.stringify(v))}catch(e){}}};
 const valid=(a,b)=>Number.isFinite(+a)&&Number.isFinite(+b)&&Math.abs(+a)<=90&&Math.abs(+b)<=180;
 function setLoc(lat,lon,src){if(!valid(lat,lon))return false;loc={lat:round(+lat),lon:round(+lon),src,t:Date.now()};ls.set(loc);return true}
 const timeout=(p,ms)=>Promise.race([p,new Promise((_,r)=>setTimeout(()=>r(new Error("timeout")),ms))]);
 async function fromIP(){for(const[u,pick]of IP_APIS){try{const j=await timeout(fetch(u,{cache:"no-store"}).then(r=>{if(!r.ok)throw 0;return r.json()}),6000);const[a,b]=pick(j);if(setLoc(a,b,"ip"))return true}catch(e){}}return false}
 /* Precise location — call from a tap only (shows the permission prompt) */
 function askPrecise(){return new Promise(res=>{if(!navigator.geolocation)return res(false);
  navigator.geolocation.getCurrentPosition(p=>res(setLoc(p.coords.latitude,p.coords.longitude,"gps")),()=>res(false),{enableHighAccuracy:false,timeout:15000,maximumAge:36e5})})}
 /* Silent refresh: precise only if permission was already granted; IP location at most once a day */
 async function refresh(){const c=ls.get();if(c&&valid(c.lat,c.lon))loc=c;
  try{if(navigator.permissions&&navigator.geolocation){const s=await navigator.permissions.query({name:"geolocation"});if(s.state==="granted"&&(!loc||loc.src!=="gps"||Date.now()-loc.t>864e5)){if(await askPrecise())return}}}catch(e){}
  if(!loc||(loc.src!=="gps"&&Date.now()-(loc.t||0)>864e5))await fromIP()}
 const where=()=>loc||CAIRO;
 const phase=(ms=Date.now())=>{const l=where();return phaseFor(sunAlt(ms,l.lat,l.lon))};
 return{sunAlt,phaseFor,phase,where,refresh,askPrecise};
})();
if(typeof module!=="undefined"&&module.exports)module.exports=Daylight;

/* ---------- game wiring (browser only) ---------- */
if(typeof window!=="undefined"){
 /* themeMode: "auto" follows the sun; otherwise the chosen style is kept */
 var themeMode="auto";
 function applyAutoTheme(){if(themeMode!=="auto")return;const p=Daylight.phase();if(p!==theme){theme=p;try{render()}catch(e){}}}
 function startDaylight(){applyAutoTheme();Daylight.refresh().then(applyAutoTheme);setInterval(applyAutoTheme,60000);
  document.addEventListener("visibilitychange",()=>{if(!document.hidden)applyAutoTheme()})}
}
