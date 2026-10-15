// Giza hidden-artifact game module
const GPOOL=[[166,862,1],[1236,316,1],[350,430,0],[905,520,0],[1136,696,1],[655,760,0],[300,150,0],[650,320,0],[1000,400,0],[900,800,0],[230,600,0],[1200,500,0],[560,610,0],[1262,894,1],[740,260,0]];
function gizaArts(){return shf([...GPOOL]).slice(0,6+Math.min(LV(),5)).map(p=>[p[0],p[1],["ankh","scarab","eye","coin"][Math.floor(Math.random()*4)],p[2]])}
WORLDS.giza.arts=[[166,862,"ankh",1],[1236,316,"eye",1],[350,430,"scarab",0],[905,520,"coin",0],[1136,696,"scarab",1],[655,760,"eye",0]];
