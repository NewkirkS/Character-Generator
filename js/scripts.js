var abilityScoreArray = [];

function Character(playerName, charName) {
  this.playerName = playerName;
  this.charName = charName;
  this.charRace ;
  this.charClass ;
  this.charLevel = 1;
  this.charSpeed = 0;
  this.charSize = "";
  this.charHp = 0;
  this.charAc = 0;
  this.charLanguages = [];
  this.charAbilityScores ;
  this.charInit = 0;
  this.charProfBonus = 0;
  this.charSpells = [];
  this.charWeapons = [];
}

var rollCharAbilityScores = function(array) {
  for (var i = 0; i <= 5; i++) {
    var rolls = [];
    for (var j = 0; j <= 3; j++) {
      var roll = 1 + Math.floor(Math.random()*6);
      rolls.push(roll);
    }
    rolls.sort().shift();
    function getSum(total, num) {
      return total + num;
    }
    rolls = rolls.reduce(getSum);
    array.push(rolls);
  }
  array.sort(function(a, b) {return b-a});
}
