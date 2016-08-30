var abilityScoreArray = [];


var CharAbilityScores = {
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0
}


function Character(playerName, charName) {
  this.playerName = playerName;
  this.charName = charName;
  this.charRace ;
  this.charClass ;
  this.charLevel = 1;
  this.charSpeed = 0;
  this.charHp = 0;
  this.charAc = 0;
  this.charAbilityScores = CharAbilityScores;
  this.charInit = 0;
  this.charProfBonus = 0;
  this.charSpells = [];
  this.charWeapons = [];
}



// ELF OBJECT
var elf = {
  abilityScoreIncrease: function() {
    return newCharacter.charAbilityScores.dex += 2
  },
  size: "medium",
  speed: 30,
  languages: ["Common", "Elvish"],
  raceTraits: ["Darkvision", "Keen Senses", "Fey Ancestry", "Trance"]
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

//UI Logic
$(document).ready(function() {

            });
