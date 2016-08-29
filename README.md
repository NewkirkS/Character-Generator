# _D&D 5e Character Generator_

#### _JavaScript character generator for Dungeons and Dragons 5th edition 08.29.2016_

#### By _**Kyle Lange, Caleb Stevenson, Ethan Law and Stephen Newkirk**_

## Description

_This webpage generates a usable character sheet for Dungeons and Dragons 5th edition rules from the selections chosen by the user._

##Specifications

###### Behavior: Store all fields for gameplay in character object (player name(string), character name(string), race(Object), level(number), class(Object), speed(number), hp(number), ac(number), languages[string], ability scores(Object), initiative(number), proficiency bonus(number), spells[strings], attacks[Object], size (string).)

* Example Input: "Ethan", "Elf", "Ranger"
* Example Output: Character sheet with empty values

###### Behavior: Add a random roller to output all six ability scores in a prototype.

* Example Input:roll1, roll2
* Example Output: 16, 12

###### Behavior: Store properties for character race (1 only) in a character object (speed, languages, vision, size, special traits)

* Example Input: Elf
* Example Output: +2 to Dexterity

###### Behavior: Store properties for class (1 only) in a character object (HP, prof. bonus)

* Example Input: Ranger
* Example Output: 10 HP at 1st level


###### Behavior: Create the skill list for that one class

* Example Input: Ranger
* Example Output: Animal Handling, Insight, Investigation, Nature, Perception, Stealth, Survival

###### Behavior: Generate and store character object with modifiers based on race and class.

* Example Input: "Ethan", "Elf", "Ranger"
* Example Output: Dex +2, 10hp, Skill: Animal Handling.

###### Behavior: Store properties for class and race above for FOUR races and classes

* Example Input: Elf or Dwarf or Human// Ranger, or Fighter, or Wizard.
* Example Output: Dwarf: Dex +2, // Wizard: 6hp, Skill: Arcana.

## Known Bugs

_N/A_

## Technologies Used

_HTML_
_CSS_
_Bootstrap_
_JavaScript_
_jQuery_

### License

_This software is licensed under the MIT license._

Copyright (c) 2016 Kyle Lange, Caleb Stevenson, Ethan Law and Stephen Newkirk. All Rights Reserved.
