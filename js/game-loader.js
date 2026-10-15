// Wire separated game modules into the shared engine
WORLDS.alex.game=GAMES.alex;
WORLDS.siwa={w:1400,h:1000,items:[],arts:[],game:GAMES.siwa};
WORLDS.edfu={w:1400,h:1000,items:[],arts:[],game:GAMES.edfu};
WORLDS.sinai={w:1400,h:1000,items:[],arts:[],game:GAMES.sinai};
WORLDS.redsea={w:1400,h:1000,items:[],arts:[],game:GAMES.redsea};
for(const k of ["abydos","whitedesert","hitan","matruh","kharga","gouna"])WORLDS[k]={w:1400,h:1000,items:[],arts:[],game:GAMES[k]};
WORLDS.luxor.game=GAMES.luxor;WORLDS.philae.game=GAMES.philae;WORLDS.abu.game=GAMES.abu;
WORLDS.gem={w:1400,h:1000,items:[],arts:[],game:GAMES.gem,gem:true};
const launchGame=new URLSearchParams(location.search).get("game");if(launchGame){const launchSite=SITES.find(s=>s.id===launchGame);if(launchSite){select(launchSite.id);startSite(1)}}
const launchBonus=new URLSearchParams(location.search).get("bonus");if(launchBonus&&BONUS[launchBonus])startBonus(launchBonus);
