
function Click(clicks, clickboost){
  newClicks = applyUpgrades(clicks);
  return newClicks;
}

function applyUpgrades(clicks, clickboost){
  clicks = clicks + clickboost;
}

// export de variables/functions
export {Click()};
