// Write your JS here
const myHero = {

};
var hero = {
  name:"Nick", 
  heroic: {},
  inventory: [ ],
  health: 10,
  // weapon: (weaponType),
  
};
// console.log(hero.name)

const teastCreature2 = { health: 2}
const teastCreature4 = { health:4 }

function rest(person) {
  window.alert("Your health is already at 10, FIGHT ON!.")
};

function pickUpItem(params) {
  
};
function equipWeapon(params) {
  
};

// function nameFunction (){
//   document.getElementById(heroName).value = "your Hero's name is:" + hero.name;
// }

document.getElementById("clickMe").onclick = doFunction;
document.getElementById("clickMe").onclick = function () { alert('hello!'); };
var el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);
