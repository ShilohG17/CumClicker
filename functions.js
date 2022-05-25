
function Click(clicks, clickboost){
  newClicks = applyUpgrades(clicks, clickboost);
  return newClicks;
}

function applyUpgrades(clicks, clickboost){
  clicks = clicks + clickboost;
  return clicks;
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
