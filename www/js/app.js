/* ============================================================
   Platform glue: Android (Capacitor) + web (PWA).
   Everything here is optional — each plugin is used only if present.
   ============================================================ */
const App=(()=>{
 const C=window.Capacitor,native=!!(C&&C.isNativePlatform&&C.isNativePlatform()),Pl=n=>C&&C.Plugins&&C.Plugins[n];
 const shown=id=>{const e=$(id);return e&&getComputedStyle(e).display!=="none"};
 /* Android hardware back: close the top-most thing, never kill the app by accident */
 function back(){
  if(shown("adov"))return;
  if(shown("bmenu")){$("bmenu").style.display="none";return}
  if(shown("done")){$("dbtn").click();return}
  if(mode==="world"){exitWorld();return}
  if(sel){sel=null;render();return}
  const A=Pl("App");A&&(A.minimizeApp?A.minimizeApp():A.exitApp())}
 return{native,
  init(){
   if(native){const A=Pl("App");
    if(A){A.addListener("backButton",back);A.addListener("appStateChange",s=>{if(!s.isActive){save();try{AC&&AC.suspend()}catch(e){}}})}
    const SB=Pl("StatusBar");if(SB){SB.setStyle&&SB.setStyle({style:"DARK"}).catch(()=>{});SB.setBackgroundColor&&SB.setBackgroundColor({color:"#0e1420"}).catch(()=>{})}
    const SS=Pl("SplashScreen");SS&&SS.hide&&SS.hide().catch(()=>{});
   }else if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost")){
    navigator.serviceWorker.register("sw.js").catch(()=>{});
   }
   addEventListener("keydown",e=>{if(e.key==="Escape")back()});
  }}})();
/* Open a link outside the game (system browser on Android, new tab on web) */
function openExternal(url){const B=window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.Browser;
 if(B&&App.native){B.open({url}).catch(()=>window.open(url,"_blank"))}else window.open(url,"_blank","noopener")}
