//Business logic
//Global variable and Objects
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
//Objects and Prototypes
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
  this.charRace.abilityScoreIncrease(character);
  this.abilityScoreModifier(character.charAbilityScores);
  this.baseSavingThrow(charSavingThrows);
  this.charClass.savingThrowsBonus(character);
  if (this.charClass.armor.type === "heavy") {
    this.charAc = 10 + this.charClass.armor.ac;
  } else {
    this.charAc = 10 + this.charAbilityScoreModifiers.dexMod + this.charClass.armor.ac;
  }
  this.charInit = this.charAbilityScoreModifiers.dexMod;
  this.charHp = this.charClass.classHp + this.charAbilityScoreModifiers.conMod;
  this.charSpeed = character.charRace.speed;
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
/******
RACES
*******/

// ELF
var elf = {
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.dex += 2
  },
  name: "Elf",
  size: "medium",
  speed: 30,
  languages: ["Common", "Elvish"],
  raceTraits: ["Darkvision", "Keen Senses", "Fey Ancestry", "Trance"]
}

//HUMAN
var human = {
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.str += 1
    character.charAbilityScores.dex += 1
    character.charAbilityScores.con += 1
    character.charAbilityScores.int += 1
    character.charAbilityScores.wis += 1
    character.charAbilityScores.cha += 1
  },
  name: "Human",
  size: "medium",
  speed: 30,
  languages: ["Common"],
  raceTraits: ["Extra Language"]
}

// DWARF
var dwarf = {
  name: "Dwarf",
  size: "medium",
  speed: 25,
  languages: ["Common", "Dwarvish"],
  raceTraits: ["Darkvision", "Dwarven Resilience", "Dwarven Combat Training", "Tool Proficiency", "Stonecunning"],
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.con += 2
  }
}

// HALFLING
var halfling = {
  name: "Halfling",
  size: "small",
  speed: 25,
  languages: ["Common", "Halfling"],
  raceTraits: ["Lucky", "Brave", "Halfling Nimbleness"],
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.dex += 2
  }
}

//HALF-ORC
var halfOrc = {
  name: "Half-Orc",
  size: "medium",
  speed: 30,
  languages: ["Common", "Orc"],
  raceTraits: ["Darkvision", "Menacing", "Relentless Endurance", "Savage Attacks"],
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.str += 2
    character.charAbilityScores.con += 1
  }
}

//GNOME
var gnome = {
  name: "Gnome",
  size: "small",
  speed: 25,
  languages: ["Common", "Gnomish"],
  raceTraits: ["Darkvision", "Gnome Cunning"],
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.int += 2
  }
}

/******
CLASSES
*******/

// RANGER
var ranger = {
  name: "Ranger",
  classHp: 10,
  hitDie: "d10",
  proficiencies: ["Simple weapons", "Martial weapons", "Light armor", "Medium armor", "Shields"],
  skills: ["Animal handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
  features: ["Favored Enemy", "Natural Explorer"],
  armor: leather,
  weapons: [longbow, shortsword],
  savingThrowsBonus: function(character) {
    character.charSavingThrows.strSave += character.charProfBonus;
    character.charSavingThrows.dexSave += character.charProfBonus;
  }
}

// FIGHTER
var fighter = {
  name: "Fighter",
  classHp: 10,
  hitDie: "d10",
  proficiencies: ["Simple weapons", "Martial weapons", "Light armor", "Medium armor", "Heavy Armor", "Shields"],
  skills: ["Animal handling", "Athletics", "Acrobatics", "History", "Insight", "Intimidation", "Perception", "Survival"],
  features: ["Fighting Style", "Second Wind"],
  armor: chainMail,
  weapons: [longsword, lightCrossbow],
  savingThrowsBonus: function(character) {
    character.charSavingThrows.strSave += character.charProfBonus;
    character.charSavingThrows.conSave += character.charProfBonus;
  }
}

//Wizard
var wizard = {
  name: "Wizard",
  classHp: 6,
  hitDie: "d6",
  proficiencies: ["Daggers", "Darts", "Slings", "Quarter staffs", "Light crossbows"],
  skills: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
  features: ["Spellcasting", "Arcane Recovery"],
  armor: cloth,
  weapons: [quarterstaff],
  savingThrowsBonus: function(character) {
    character.charSavingThrows.intSave += character.charProfBonus;
    character.charSavingThrows.wisSave += character.charProfBonus;
  }
}

//Cleric
var cleric = {
  name: "Cleric",
  classHp: 8,
  hitDie: "d8",
  proficiencies: ["Simple Weapons", "Light Armor", "Medium Armor", "Shields"],
  skills: ["Religion", "History", "Insight", "Persuasion", "Medicine",],
  features: ["Spellcasting", "Divine Domain"],
  armor: scaleMail,
  weapons: [mace, lightCrossbow],
  savingThrowsBonus: function(character) {
    character.charSavingThrows.wisSave += character.charProfBonus;
    character.charSavingThrows.chaSave += character.charProfBonus;
  }
}

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

//User Interface Logic
//Spell Toggle Hover Buttons
$(document).ready(function() {

  $(this).scrollTop(0);

  $("#begin").click(function() {
    var target = $(this).attr('href');
          $('html, body')
              .animate({
                  scrollTop: $(target).offset().top}, 'slow', 'swing', function() {});
  });

  // $("#character-form-submit").prop("disabled", true);

  $("#weapons, #armor, #wiz-cantrips, #wiz-1st-level, #cleric-cantrips, #cleric-1st-level, #down-arrow").hide();

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
  $("#weapons-show").click(function(){
    $("#weapons").toggle();
  });
  $("#armor-show").click(function(){
    $("#armor").toggle();
  });

//Random Ability Score Button
  $("#ability-roll").click(function(){
    abilityScoreArray = [];
    rollCharAbilityScores(abilityScoreArray);
    for (i=1; i < 7; i++) {
      $("#ability-roll-" + i).text(abilityScoreArray[(i - 1)]);
        sumOfRolls += abilityScoreArray[(i - 1)];
    }
    // $("#ability-roll").prop("disabled", true);
    // $("#character-form-submit").prop("disabled", false);
  });

//Skill Hide/Show Event on Class Dropdown Change
  $("#class-input").change(function(){
    var characterClass = $("#class-input").val();
    $(".class-skills, #wizard-spells, #cleric-spells, #weapons, #armor, #simple-melee, #simple-ranged, #martial-melee, #martial-ranged, #cloth-armor, #light-armor, #medium-armor, #shield-armor, #heavy-armor").hide();
    $("#weapons-show, #armor-show").show();
    if (characterClass === "ranger") {
      $("#animal-handling, #athletics, #insight, #investigation, #nature, #perception, #stealth, #survival, #simple-melee, #simple-ranged, #martial-melee, #martial-ranged, #light-armor, #medium-armor, #shield-armor").show();
    } else if (characterClass === "fighter") {
      $("#acrobatics, #animal-handling, #athletics, #history, #insight, #intimidation, #perception, #survival, #simple-melee, #simple-ranged, #martial-melee, #martial-ranged, #light-armor, #medium-armor, #heavy-armor, #shield-armor").show();
    } else if (characterClass === "wizard") {
      $("#arcana, #history, #insight, #investigation, #medicine, #religion, #wizard-spells, #simple-melee, #simple-ranged, #cloth-armor").show();
      $("#club, #greatclub, #handaxe, #javelin, #lightHammer, #mace, #sickle, #spear, #shortbow").hide();
    } else if (characterClass === "cleric") {
      $("#history, #insight, #medicine, #persuasion, #religion, #cleric-spells, #simple-melee, #simple-ranged, #light-armor, #medium-armor, #shield-armor").show();
    }
  });
//User Form Submit and Results Output

  $("#character-form").submit(function(){
    event.preventDefault();
    $("#proficiency-bonus-sheet, #strength-sheet, #dexterity-sheet, #constitution-sheet, #intelligence-sheet, #wisdom-sheet, #charisma-sheet, #perception-sheet, #languages-sheet, #ac-sheet, #initiative-sheet, #speed-sheet, #hp-sheet, #hd-sheet, #race-traits-sheet, #class-features-sheet, #spells-sheet, #attacks-sheet, #equipment-sheet").empty();
    $("#output-sheet, #down-arrow").show();
    // $("#character-form-submit").prop("disabled", true);
    // $("#ability-roll").prop("disabled", false);
    var playName = $("#player-name-input").val();
    var characterName = $("#character-name-input").val();

    rollCharAbilityScores(abilityScoreArray);

    var newCharacter = new Character(playName, characterName);

    newCharacter.charRace = window[$("#race-input").val()];
    newCharacter.charClass = window[$("#class-input").val()];
    newCharacter.charAbilityScores.str = parseInt($("#strength").val());
    newCharacter.charAbilityScores.dex = parseInt($("#dexterity").val());
    newCharacter.charAbilityScores.con = parseInt($("#constitution").val());
    newCharacter.charAbilityScores.int = parseInt($("#intelligence").val());
    newCharacter.charAbilityScores.wis = parseInt($("#wisdom").val());
    newCharacter.charAbilityScores.cha = parseInt($("#charisma").val());
    newCharacter.charLevel = parseInt($("#level-input").val());

    newCharacter.calculateStats(newCharacter);

//Character Sheet Output
    $("#character-name-sheet").text(newCharacter.charName);
    $("#race-class-sheet").text(newCharacter.charRace.name + " " + newCharacter.charClass.name);
    $("#proficiency-bonus-sheet").text(newCharacter.charProfBonus);
    $("#proficiency-bonus-sheet").text(newCharacter.charProfBonus);
    //Inspiriation needed
    var skillArray = []
    $("input:checkbox[name=skills]:checked").each (function() {
      skillArray.push($(this).val());
    });
    skillArray.forEach(function(skill) {
      $("#skills").append("<li>" + skill + "</li>")
    });
    $("#skills").show();

    $("#strength-sheet").text(newCharacter.charAbilityScores.str + " (+" + newCharacter.charAbilityScoreModifiers.strMod + ")");
    $("#dexterity-sheet").text(newCharacter.charAbilityScores.dex + " (+" + newCharacter.charAbilityScoreModifiers.dexMod + ")");
    $("#constitution-sheet").text(newCharacter.charAbilityScores.con + " (+" + newCharacter.charAbilityScoreModifiers.conMod + ")");
    $("#intelligence-sheet").text(newCharacter.charAbilityScores.int + " (+" + newCharacter.charAbilityScoreModifiers.intMod + ")");
    $("#wisdom-sheet").text(newCharacter.charAbilityScores.wis + " (+" + newCharacter.charAbilityScoreModifiers.wisMod + ")");
    $("#charisma-sheet").text(newCharacter.charAbilityScores.cha + " (+" + newCharacter.charAbilityScoreModifiers.chaMod + ")");
    $("#perception-sheet").text(newCharacter.charAbilityScoreModifiers.wis); //plus perception
    $("#ac-sheet").text(newCharacter.charAc);
    $("#initiative-sheet").text(newCharacter.charAbilityScoreModifiers.dex);
    $("#speed-sheet").text(newCharacter.charRace.speed);
    $("#hp-sheet").text(newCharacter.charHp);
    $("#hd-sheet").text(newCharacter.charLevel + newCharacter.charClass.hitDie);
    newCharacter.charRace.raceTraits.forEach(function(index){
      $("#race-traits-sheet").append("<li>" + index + "</li>");
    });
    newCharacter.charClass.features.forEach(function(index){
      $("#class-features-sheet").append("<li>" + index + "</li>");
    });
    newCharacter.charRace.languages.forEach(function(index){
      $("#languages-sheet").append("<li>" + index + "</li>");
    });
//Display Chosen Spells in Character Sheet
    var chosenSpells = [];
    $("input:checkbox[name=spells]:checked").each(function(){
      chosenSpells.push($(this).val());
    });
    chosenSpells.forEach(function(index){
      $("#spells-sheet").append("<li>" + index + "</li>");
    });
//Display Melee and Ranged Weapon Attacks in Character Sheet
    newCharacter.charClass.weapons.forEach(function(index){
      if (index.type === "simple melee" || index.type === "martial melee") {
        $("#attacks-sheet").append("<li>" + index.name + " -- <br> Attack bonus: +" + (newCharacter.charAbilityScoreModifiers.strMod + newCharacter.charProfBonus) + "<br> Damage: " + index.damage + " + " + newCharacter.charAbilityScoreModifiers.strMod + "</li>");
      } else {
        $("#attacks-sheet").append("<li>" + index.name + " -- <br> Attack bonus: +" + (newCharacter.charAbilityScoreModifiers.dexMod + newCharacter.charProfBonus) + "<br> Damage: " + index.damage + " + " + newCharacter.charAbilityScoreModifiers.dexMod + "<br> Range: " + index.range + " ft.</li>");
      }
    });

//Display Equipment in Character Sheet
    newCharacter.charClass.weapons.forEach(function(index){
      $("#equipment-sheet").append("<li>" + index.name + "</li>");
    });
    $("#equipment-sheet").append("<li>" + newCharacter.charClass.armor.name + "</li>");
  });
});
