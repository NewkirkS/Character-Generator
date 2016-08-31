var abilityScoreArray = [];
var sumOfRolls = 0;

var charAbilityScores = {
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0
}

var charAbilityScoreModifiers = {
  strMod: 0,
  dexMod: 0,
  conMod: 0,
  intMod: 0,
  wisMod: 0,
  chaMod: 0
}

var charSavingThrows = {
  strSave: 0,
  dexSave: 0,
  conSave: 0,
  intSave: 0,
  wisSave: 0,
  chaSave: 0
}

function Character(playerName, charName) {
  this.playerName = playerName;
  this.charName = charName;
  this.charAlignment;
  this.charRace;
  this.charClass;
  this.charLevel = 1;
  this.charSpeed = 0;
  this.charHp = 0;
  this.charAc = 0;
  this.charAbilityScores = charAbilityScores;
  this.charAbilityScoreModifiers = charAbilityScoreModifiers;
  this.charSavingThrows = charSavingThrows;
  this.charInit = 0;
  this.charProfBonus = 2;
  this.charSpells = [];
  this.charAttacks = [];
  this.charArmor;
  this.charWeapons = [];
};

Character.prototype.calculateStats = function(character) {
  this.charAc = 10 + this.charAbilityScoreModifiers.dexMod + this.charClass.armor.ac;
  this.charInit = this.charAbilityScoreModifiers.dexMod;
  this.charHp = this.charClass.classHp + this.charAbilityScoreModifiers.conMod;
  this.charRace.abilityScoreIncrease(character);
  this.charClass.savingThrowsBonus(character);
};

Character.prototype.baseSavingThrow = function(obj) {
  for (var score in obj) {
    obj[score] += this.charAbilityScoreModifiers[score.replace("Save", "Mod")];
  }
};

Character.prototype.abilityScoreModifier = function(obj) {
  for (var score in obj) {
    if (obj[score] === 1) {
      this.charAbilityScoreModifiers[score + "Mod"] += -5;
    } else if (obj[score] <= 3) {
      this.charAbilityScoreModifiers[score + "Mod"] += -4;
    } else if (obj[score] <= 5) {
      this.charAbilityScoreModifiers[score + "Mod"] += -3;
    } else if (obj[score] <= 7) {
      this.charAbilityScoreModifiers[score + "Mod"] += -2;
    } else if (obj[score] <= 9) {
      this.charAbilityScoreModifiers[score + "Mod"] += -1;
    } else if (obj[score] <= 11) {
      this.charAbilityScoreModifiers[score + "Mod"] += 0;
    } else if (obj[score] <= 13) {
      this.charAbilityScoreModifiers[score + "Mod"] += 1;
    } else if (obj[score] <= 15) {
      this.charAbilityScoreModifiers[score + "Mod"] += 2;
    } else if (obj[score] <= 17) {
      this.charAbilityScoreModifiers[score + "Mod"] += 3;
    } else if (obj[score] <= 19) {
      this.charAbilityScoreModifiers[score + "Mod"] += 4;
    } else if (obj[score] <= 21) {
      this.charAbilityScoreModifiers[score + "Mod"] += 5;
    } else if (obj[score] <= 23) {
      this.charAbilityScoreModifiers[score + "Mod"] += 6;
    } else if (obj[score] <= 25) {
      this.charAbilityScoreModifiers[score + "Mod"] += 7;
    } else if (obj[score] <= 27) {
      this.charAbilityScoreModifiers[score + "Mod"] += 8;
    } else if (obj[score] <= 29) {
      this.charAbilityScoreModifiers[score + "Mod"] += 9;
    } else if (obj[score] === 30) {
      this.charAbilityScoreModifiers[score + "Mod"] += 10;
    }
  }
}

// Weapons
var longbow = {
  name: "Longbow",
  type: "ranged",
  range: "150/600",
  damage: "1d8 Piercing"
}

var shortsword = {
  name: "Shortsword",
  type: "melee",
  damage: "1d6 Piercing"
}

//Armor
var leatherArmor = {
  name: "Leather Armor",
  ac: 1
}

/******
RACES
*******/

// ELF
var elf = {
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.dex += 2 //check return
  },
  size: "medium",
  speed: 30,
  languages: ["Common", "Elvish"],
  raceTraits: ["Darkvision", "Keen Senses", "Fey Ancestry", "Trance"]
}

var human = {
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.str += 1
    character.charAbilityScores.dex += 1
    character.charAbilityScores.con += 1
    character.charAbilityScores.int += 1
    character.charAbilityScores.wis += 1
    character.charAbilityScores.cha += 1
  },
  size: "medium",
  speed: 30,
  languages: ["Common"],
  raceTraits: ["Extra Language"]
}


/******
CLASSES
*******/

// RANGER
var ranger = {
  classHp: 10,
  hitDie: "1d10",
  proficiencies: ["Simple weapons", "Martial weapons", "Light armor", "Medium armor", "Shields"],
  skills: ["Animal handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
  savingThrowsBonus: function(character) {
    character.charSavingThrows.strSave += character.charProfBonus;
    character.charSavingThrows.dexSave += character.charProfBonus;
  },
  armor: leatherArmor,
  weapons: [longbow, shortsword]
}

var fighter = {
  classHp: 10,
  hitDie: "1d10",
  proficiencies: ["Simple weapons", "Martial weapons", "Light armor", "Medium armor", "Heavy Armor", "Shields"],
  skills: ["Animal handling", "Athletics", "Acrobatics", "History", "Insight", "Intimidation", "Perception", "Survival"],
  savingThrowsBonus: function(character) {
    character.charSavingThrows.strSave += character.charProfBonus;
    character.charSavingThrows.conSave += character.charProfBonus;
  },
  // armor: chainMail
  // weapons: [longsword, lightCrossbow]
  armor: leatherArmor,
  weapons: [longbow, shortsword]
}

//UI Simulation
var submitTest = function(){
  var newCharacter = new Character("Caleb", "Thrond");
  newCharacter.charAbilityScores = {str: 15, dex: 12, con: 19, int: 5, wis: 7, cha: 12}
  newCharacter.charRace = human;
  newCharacter.charClass = fighter;
  // human.abilityScoreIncrease(newCharacter);
  newCharacter.abilityScoreModifier(newCharacter.charAbilityScores);
  newCharacter.baseSavingThrow(charSavingThrows);
  // fighter.savingThrowsBonus(newCharacter);
  newCharacter.calculateStats(newCharacter);
  newCharacter.charSpeed = newCharacter.charRace.speed;
  newCharacter.charAlignment = "Chaotic-Neutral";
  console.log(newCharacter);
}
submitTest();

//Ability Score Roller
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
  $("#click-wiz-cantrips").click(function(){
    $("#wiz-cantrips").toggle();
  });
  $("#click-wiz-1st").click(function(){
    $("#wiz-1st-level").toggle();
  });
  $("#click-cleric-cantrips").click(function(){
    $("#cleric-cantrips").toggle();
  });
  $("#click-cleric-1st").click(function(){
    $("#cleric-1st-level").toggle();
  });

  $("#ability-roll").click(function(){
    rollCharAbilityScores(abilityScoreArray);
    for (i=1; i < 7; i++) {
      $("#ability-roll-" + i).text(abilityScoreArray[(i - 1)]);
        sumOfRolls += abilityScoreArray[(i - 1)];
    }
    console.log(sumOfRolls);
  });

  $("#class-input").change(function(){
    var characterClass = $("#class-input").val();
    $(".class-skills").hide();
    if (characterClass === "ranger") {
      $("#animal-handling, #athletics, #insight, #investigation, #nature, #perception, #stealth, #survival").show();
    } else if (characterClass === "fighter") {
      $("#acrobatics, #animal-handling, #athletics, #history, #insight, #intimidation, #perception, #survival").show();
    } else if (characterClass === "wizard") {
      $("#arcana, #history, #insight, #investigation, #medicine, #religion").show();
    } else if (characterClass === "cleric") {
      $("#history, #insight, #medicine, #persuasion, #religion").show();
    }
  });

  $("#character-form").submit(function(){
    event.preventDefault();
    //debugger;
    var playName = $("#player-name-input").val();
    var characterName = $("#character-name-input").val();
    rollCharAbilityScores(abilityScoreArray);
    var race = $("#race-input").val();
    var characterClass = $("#class-input").val();
    var strength = parseInt($("#strength").val());
    var dexterity = parseInt($("#dexterity").val());
    var constitution = parseInt($("#constitution").val());
    var intelligence = parseInt($("#intelligence").val());
    var wisdom = parseInt($("#wisdom").val());
    var charisma = parseInt($("#charisma").val());
    var level = parseInt($("#level-input").val());
    var newCharacter = new Character(playName, characterName);
    newCharacter.charAbilityScores.str = strength;
    newCharacter.charAbilityScores.dex = dexterity;
    newCharacter.charAbilityScores.con = constitution;
    newCharacter.charAbilityScores.int = intelligence;
    newCharacter.charAbilityScores.wis = wisdom;
    newCharacter.charAbilityScores.cha = charisma;
    newCharacter.charLevel = level;
    // if (sumOfRolls !== (strength + dexterity + constitution + intelligence + wisdom + charisma)) {
    //   alert("HEY!!! Please enter the exact numbers you were given!  What are you, some kind of CHEATER?!")
    // }
    if (race === "elf") {
      newCharacter.charRace = elf;
      elf.abilityScoreIncrease(newCharacter);
    } else if (race === "human") {
      newCharacter.charRace = human;
    } else if (race === "dwarf") {
      newCharacter.charRace = dwarf;
    } else if (race === "halfling") {
      newCharacter.charRace = halfling;
    }
    if (characterClass === "ranger") {
      ranger.savingThrowsBonus(newCharacter);
      newCharacter.charClass = ranger;
    } else if (characterClass === "fighter") {
      newCharacter.charClass = fighter;
    } else if (characterClass === "wizard") {
      newCharacter.charClass = wizard;
    } else if (characterClass === "cleric") {
      newCharacter.charClass = cleric;
    }
    newCharacter.abilityScoreModifier(charAbilityScores);
    newCharacter.baseSavingThrow(charSavingThrows);
    console.log(newCharacter);

    //output values
    $("#proficiency-bonus-sheet").text(newCharacter.charProfBonus);
    //Inspiriation needed
    $("#strength-sheet").text(newCharacter.charAbilityScores.str);
    $("#dexterity-sheet").text(newCharacter.charAbilityScores.dex);
    $("#constitution-sheet").text(newCharacter.charAbilityScores.con);
    $("#intelligence-sheet").text(newCharacter.charAbilityScores.int);
    $("#wisdom-sheet").text(newCharacter.charAbilityScores.wis);
    $("#charisma-sheet").text(newCharacter.charAbilityScores.cha);
    $("#perception-sheet").text(newCharacter.charAbilityScoreModifiers.wis); //plus perception
    $("#languages-sheet").text(newCharacter.charRace.languages[0] + " and " + newCharacter.charRace.languages[1]);
    $("#ac-sheet").text(newCharacter.charAc);
    $("#initiative-sheet").text(newCharacter.charAbilityScoreModifiers.dex);
    $("#speed-sheet").text(newCharacter.charRace.speed);
    $("#hp-sheet").text(newCharacter.charHp);
    $("#hd-sheet").text(newCharacter.charLevel);
    $("#race-traits-sheet").text(newCharacter.charRace.raceTraits);
    // $("#class-features-sheet").text(newCharacter.charClass.classFeatures);
  });
});
