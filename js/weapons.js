
//Weapons
function Weapon (name, type, damage, range, properties) {
  this.name = name;
  this.type = type;
  this.damage = damage;
  this.range = range;
  this.properties = properties;
}

var club = new Weapon("Club", "simple melee", "1d4 bludgeoning", "5", ["light"]);

var dagger = new Weapon("Dagger", "simple melee", "1d4 piercing", "20/60" ["finesse", "light", "thrown"]);

var greatclub = new Weapon("Greatclub", "simple melee", "1d8 bludgeoning", "5", ["two-handed"]);

var handaxe = new Weapon("Handaxe", "simple melee", "1d6 slashing", "20/60", ["light", "thrown"]);

var javelin = new Weapon("Javelin", "simple melee", "1d6 piercing", "30/120", ["thrown"]);

var lightHammer = new Weapon("Light hammer", "simple melee", "1d4 bludgeoning", "5", ["light", "thrown"]);

var mace = new Weapon("Mace", "simple melee", "1d6 bludgeoning", "5", []);

var quarterstaff = new Weapon("Quarterstaff", "simple melee", "1d6 bludgeoning", "5", ["versatile (1d8)"]);

var sickle = new Weapon("Sickle", "simple melee", "1d4 slashing", "5", ["light"]);

var spear = new Weapon("Spear", "simple melee", "1d6 piercing", "20/60", ["thrown", "versatile (1d8)"]);

var lightCrossbow = {
  name: "Light crossbow",
  type: "simple ranged",
  damage: "1d8 piercing",
  range: "80/320",
  properties: ["loading", "ammunition", "two-handed"],
}

var dart = {
  name: "Dart",
  type: "simple ranged",
  damage: "1d4 piercing",
  range: "20/60",
  properties: ["finesse", "thrown"],
}

var shortbow = {
  name: "Shortbow",
  type: "simple ranged",
  damage: "1d6 piercing",
  range: "80/320",
  properties: ["ammunition", "two-handed"],
}

var sling = {
  name: "Sling",
  type: "simple ranged",
  damage: "1d4 bludgeoning",
  range: "30/120",
  properties: ["ammunition"],
}

var battleaxe = {
  name: "Battleaxe",
  type: "martial melee",
  damage: "1d8 slashing",
  range: "5",
  properties: ["versatile (1d10)"],
}

var flail = {
  name: "Flail",
  type: "martial melee",
  damage: "1d8 bludgeoning",
  range: "5",
  properties: [],
}

var glaive = {
  name: "Glaive",
  type: "martial melee",
  damage: "1d10 slashing",
  range: "10",
  properties: ["heavy", "reach", "two-handed"],
}

var greataxe = {
  name: "Greataxe",
  type: "martial melee",
  damage: "1d12 slashing",
  range: "5",
  properties: ["heavy", "two-handed"],
}

var greatsword = {
  name: "Greatsword",
  type: "martial melee",
  damage: "2d6 slashing",
  range: "5",
  properties: ["heavy", "two-handed"],
}

var halberd = {
  name: "Halberd",
  type: "martial melee",
  damage: "1d10 slashing",
  range: "10",
  properties: ["heavy", "reach", "two-handed"],
}

var lance = {
  name: "Lance",
  type: "martial melee",
  damage: "1d12 piercing",
  range: "10",
  properties: ["reach", "special"],
}

var longsword = {
  name: "Longsword",
  type: "martial melee",
  damage: "1d8 slashing",
  range: "5",
  properties: ["versatile (1d10)"],
}

var maul = {
  name: "Maul",
  type: "martial melee",
  damage: "2d6 bludgeoning",
  range: "5",
  properties: ["heavy", "two-handed"],
}

var morningstar = {
  name: "Morningstar",
  type: "martial melee",
  damage: "1d8 piercing",
  range: "5",
  properties: [],
}

var pike = {
  name: "Pike",
  type: "martial melee",
  damage: "1d10 piercing",
  range: "10",
  properties: ["heavy", "reach", "two-handed"],
}

var rapier = {
  name: "Rapier",
  type: "martial melee",
  damage: "1d8 piercing",
  range: "5",
  properties: ["finesse"],
}

var scimitar = {
  name: "Scimitar",
  type: "martial melee",
  damage: "1d6 slashing",
  range: "5",
  properties: ["finesse", "light"],
}

var shortsword = {
  name: "Shortsword",
  type: "martial melee",
  damage: "1d6 piercing",
  range: "5",
  properties: ["finesse", "light"],
}

var trident = {
  name: "Trident",
  type: "martial melee",
  damage: "1d6 piercing",
  range: "20/60",
  properties: ["thrown", "versatile (1d8)"],
}

var warPick = {
  name: "War pick",
  type: "martial melee",
  damage: "1d8 piercing",
  range: "5",
  properties: [],
}

var warhammer = {
  name: "Warhammer",
  type: "martial melee",
  damage: "1d8 bludgeoning",
  range: "5",
  properties: ["versatile (1d10)"],
}

var whip = {
  name: "Whip",
  type: "martial melee",
  damage: "1d4 slashing",
  range: "10",
  properties: ["finesse", "reach"],
}

var blowgun = {
  name: "Blowgun",
  type: "martial ranged",
  damage: "1 piercing",
  range: "25/100",
  properties: ["ammunition", "loading"],
}

var handCrossbow = {
  name: "Blowgun",
  type: "martial ranged",
  damage: "1d6 piercing",
  range: "30/120",
  properties: ["ammunition", "light", "loading"],
}

var heavyCrossbow = {
  name: "Heavy crossbow",
  type: "martial ranged",
  damage: "1d10 piercing",
  range: "100/400",
  properties: ["ammunition", "loading", "heavy", "two-handed"],
}

var longbow = {
  name: "Longbow",
  type: "martial ranged",
  damage: "1d8 piercing",
  range: "150/600",
  properties: ["ammunition", "heavy", "two-handed"],
}

var net = {
  name: "Net",
  type: "martial ranged",
  damage: "",
  range: "5/15",
  properties: ["special", "thrown"],
}

//Armor

var cloth = {
  name: "Cloth armor",
  armorType: "cloth",
  ac: 0
}

var leather = {
  name: "Leather armor",
  type: "light",
  ac: 1,
}

var padded = {
  name: "Padded armor",
  type: "light",
  ac: 1,
}

var studdedLeather = {
  name: "Leather armor",
  type: "light",
  ac: 2,
}

var hide = {
  name: "Hide armor",
  type: "medium",
  ac: 2,
}

var chainShirt = {
  name: "Chain shirt armor",
  type: "medium",
  ac: 3,
}

var scaleMail = {
  name: "Scale mail armor",
  type: "medium",
  ac: 4,
}

var breastplate = {
  name: "Breastplate armor",
  type: "medium",
  ac: 4,
}

var halfPlate = {
  name: "Half plate armor",
  type: "medium",
  ac: 5,
}

var ringMail = {
  name: "Ring mail armor",
  type: "heavy",
  ac: 4,
}

var chainMail = {
  name: "Chain mail armor",
  type: "heavy",
  ac: 6,
}

var splint = {
  name: "Splint armor",
  type: "heavy",
  ac: 7,
}

var plate = {
  name: "Plate armor",
  type: "heavy",
  ac: 8,
}

var shield = {
  name: "Shield",
  type: "shield",
  ac: 2,
}
