/******
RACES
*******/

// ELF
var elf = {
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.dex += 2;
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
    character.charAbilityScores.str += 1;
    character.charAbilityScores.dex += 1;
    character.charAbilityScores.con += 1;
    character.charAbilityScores.int += 1;
    character.charAbilityScores.wis += 1;
    character.charAbilityScores.cha += 1;
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
    character.charAbilityScores.con += 2;
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
    character.charAbilityScores.dex += 2;
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
    character.charAbilityScores.str += 2;
    character.charAbilityScores.con += 1;
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
    character.charAbilityScores.int += 2;
  }
}

//HALF-ELF
var halfElf = {
  name: "Half-Elf",
  size: "medium",
  speed: 30,
  languages: ["Common", "Elvish"],
  raceTraits: ["Darkvision", "Fey Ancestry", "Skill Versatility", "Extra Ability Point"],
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.cha += 2;
  }
}

//DRAGONBORN
var dragonborn = {
  name: "Dragonborn",
  size: "medium",
  speed: 30,
  languages: ["Common", "Draconic"],
  raceTraits: ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"],
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.str += 2;
    character.charAbilityScores.cha += 1;
  }
}

//TIEFLING
var tiefling = {
  name: "Tiefling",
  size: "medium",
  speed: 30,
  languages: ["Common", "Infernal"],
  raceTraits: ["Darkvision", "Hellish Resistance", "Infernal Legacy"],
  abilityScoreIncrease: function(character) {
    character.charAbilityScores.cha += 2;
    character.charAbilityScores.int += 1;
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
  weapons: [],
  armor: [],
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
  weapons: [],
  armor: [],
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
  weapons: [],
  armor: [],
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
  weapons: [],
  armor: [],
  savingThrowsBonus: function(character) {
    character.charSavingThrows.wisSave += character.charProfBonus;
    character.charSavingThrows.chaSave += character.charProfBonus;
  }
}
