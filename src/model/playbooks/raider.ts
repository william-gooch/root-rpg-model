import { defaultBackground, Playbook } from "./playbook";

const raiderData: Playbook = {
  id: "raider",
  name: "Raider",
  blurb: "You are a bandit, a thief-by-force, dangerous and threatening but without loyalty to any commander or master.",
  demeanors: ["Intimidating", "Jovial", "Curt", "Curious"],
  background: {
    ...defaultBackground,
    "why-vagabond": {
      question: "Why are you a vagabond?",
      options: [
        "I am feared by most denizens",
        "I wish to see all the Woodlands have to offer",
        "I refuse to serve someone unworthy",
        "I seek to overthrow all oppressors",
        "I am running from powerful enemies",
      ]
    },
    "whom-left-behind": {
      question: "Whom have you left behind?",
      options: [
        "my mentor",
        "my ward",
        "my loved one",
        "my sibling",
        "my best friend",
      ]
    },
  },
  drives: {
    "loyalty": true,
    "chaos": true,
    "crime": true,
    "greed": true,
  },
  natures: [
    {
      name: "Bandit",
      description: "Clear your exhaustion track when you try to use the threat of force to secure valuables from formidable opposition.",
    },
    {
      name: "Hero",
      description: "Clear your exhaustion track when you outright attack a dangerous, oppressive, or villainous NPC.",
    },
  ],
  connections: { 
    "protector": "The first time I saw ### hey piqued my curiosity; I went out of my way to protect them from the ire of my own band. What about them sparked my loyalty?",
    "watcher": "### bested me in combat when I got out of hand. How? Why did I thank them for it?",
  },
  initialStats: {
    "Charm": 0,
    "Cunning": -1,
    "Finesse": +1,
    "Luck": 0,
    "Might": +2,
  },
  initialRoguishFeats: {
    choose: 0,
    startWith: {
        "Acrobatics": true,
        "Blindside": true,
    },
  },
  weaponSkills: {
    choose: 1,
    bolded: {
      "Cleave": true,
      "Confuse Senses": true,
      "Storm a Group": true,
      "Vicious Strike": true,
    }
  },
  moves: {
    starting: {
      choose: 3,
      startWith: {},
    },
    options: {
      "eye-for-battle": true,
      "ironhide": true,
      "loot-and-plunder": true,
      "merciful-might": true,
      "plan-of-attack": true,
      "fearsome-visage": true,
    },
  },
  startingEquipmentValue: 10,
};

export default raiderData;