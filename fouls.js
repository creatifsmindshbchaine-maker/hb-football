// Système de fautes et cartons pour HB Football
// À charger dans index.html avec : <script src="fouls.js"></script>
window.HBFouls = (() => {
  const state = { fouls: 0, yellow: 0, red: 0, last: 0, cooldown: 0 };
  function reset(){ state.fouls=0; state.yellow=0; state.red=0; state.last=0; state.cooldown=0; }
  function tackle(distance, sprinting){
    if(state.cooldown>0 || distance>2.2) return null;
    const chance = sprinting ? 0.045 : 0.018;
    if(Math.random() > chance) return null;
    state.fouls++; state.last=performance.now(); state.cooldown=1.2;
    let card=null;
    if(Math.random()<0.08){ state.red++; card='red'; }
    else if(Math.random()<0.28){ state.yellow++; card='yellow'; }
    return {card, fouls:state.fouls};
  }
  function tick(dt){ state.cooldown=Math.max(0,state.cooldown-dt); }
  function get(){ return {...state}; }
  return {reset,tackle,tick,get};
})();
