/* ============================================================
   Egypt Quest — global configuration
   Edit this file to tune the game, the place order and ads.
   ============================================================ */
const VERSION="4.1";

/* Order of places on the map. Unlock cost grows with position
   (see need() in core/state.js) unless a place sets `req`.
   Each id must match a file in /games that calls definePlace({id:...}). */
const SITE_ORDER=["gem","giza","alex","luxor","philae","abu","siwa","edfu","sinai","redsea","abydos","whitedesert","hitan","matruh","kharga","gouna"];

/* ---------- Ads ----------
   enabled   : master switch (set false to ship an ad-free build)
   test      : true = use Google test ad units / H5 test mode. MUST be false for release.
   native    : AdMob ids used inside the Android app (Capacitor)
   web       : Google H5 Games Ads (AdSense for games) used in the browser
   Frequency caps keep ads friendly: no ads during play, only between levels. */
const ADS={
 enabled:true,
 test:true,
 childDirected:false,          // set true if you target children (Google Families policy)
 interstitialEvery:3,          // show an interstitial after every N finished levels/bonus games
 interstitialMinGapSec:120,    // …and never more often than this
 firstInterstitialAfterSec:180,// grace period after app start
 rewardedHints:3,              // hints granted by a rewarded video
 native:{
  appId:"ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy",          // also goes in AndroidManifest.xml
  banner:"ca-app-pub-xxxxxxxxxxxxxxxx/1111111111",
  interstitial:"ca-app-pub-xxxxxxxxxxxxxxxx/2222222222",
  rewarded:"ca-app-pub-xxxxxxxxxxxxxxxx/3333333333"
 },
 web:{
  client:"",                   // "ca-pub-xxxxxxxxxxxxxxxx" — leave empty to disable web ads
  bannerSlot:""                // AdSense display slot id for the map banner (optional)
 }
};
