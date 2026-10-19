/* ============================================================
   Place & bonus-game registry.
   Every file in /games calls definePlace({...}) and every file in
   /games/bonus calls defineBonus({...}). buildSites() (run once from
   main.js) turns them into the tables the engine uses.
   ============================================================ */
const SITES=[];                 // ordered list of places (SITE_ORDER)
const PLACES={};                // id -> place definition
const GAMES={};                 // id -> mini-game object {help,start,status,draw,tap,move?}
const WORLDS={};                // id -> world object used as `cur` while playing
const BONUS={};                 // id -> bonus game entry
const CH={},PAR={},STX={},FACTS={},LVINFO={};

/* Place definition fields
   id, req?, lon, lat, mapDx?, mapDy?, en, ar, eraEn, eraAr, dEn, dAr, logo?,
   challenge:[en,ar], par:seconds, starTip:[en,ar], levels?(x,k), fact:[en,ar],
   icon(ctx), world?, makeArts?(), ticketUrl?, game */
function definePlace(d){
 if(!d||!d.id)throw new Error("definePlace: missing id");
 if(PLACES[d.id])console.warn("definePlace: duplicate id "+d.id);
 PLACES[d.id]=d;
}
function defineBonus(d){
 BONUS[d.id]={bonus:d.name,desc:d.desc,game:d.game,w:1,h:1};
 GAMES[d.id]=d.game;
}
function buildSites(){
 SITES.length=0;
 for(const id of SITE_ORDER){const d=PLACES[id];
  if(!d){console.warn("SITE_ORDER lists '"+id+"' but no games/*.js defines it");continue}
  SITES.push(d);
  CH[id]=d.challenge;PAR[id]=d.par;STX[id]=d.starTip;FACTS[id]=d.fact;if(d.levels)LVINFO[id]=d.levels;
  if(d.game)GAMES[id]=d.game;
  WORLDS[id]=Object.assign({w:1400,h:1000,items:[],arts:[]},d.world||{},{game:d.game||null,makeArts:d.makeArts||null});
  if(d.logo){const im=new Image();im.decoding="async";im.src=d.logo;d.logoImg=im}
 }
 for(const id in PLACES)if(!SITE_ORDER.includes(id))console.warn("Place '"+id+"' is defined but not in SITE_ORDER");
}
const gridTxt=n=>n+"×"+n;
