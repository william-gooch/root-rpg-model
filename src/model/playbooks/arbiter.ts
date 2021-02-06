import { defaultBackground, Playbook } from "./playbook";

const arbiterData: Playbook = {
  id: "arbiter",
  name: "Arbiter",
  blurb: "You are a powerful, obstinate vagabond, serving as somewhere between a mercenary and a protector, perhaps taking sides too easily in the greater conflict between the factions.",
  demeanors: ["Intimidating", "Honest", "Brusque", "Open"],
  background: {
    ...defaultBackground,
    "why-vagabond": {
      question: "Why are you a vagabond?",
      options: [
        "I’m being hunted by a powerful official",
        "I wish to make up for a past transgression",
        "I want to fight injustice",
        "I must clear my tarnished name",
        "I have been exiled from most clearings",
      ]
    },
    "whom-left-behind": {
      question: "Whom have you left behind?",
      options: [
        "my peer and friend",
        "my family",
        "my loved one",
        "my ward",
        "my commander",
      ]
    },
  },
  drives: {
    "justice": true,
    "principles": true,
    "loyalty": true,
    "protection": true,
  },
  natures: [
    {
      name: "Defender",
      description: "Clear your exhaustion track when you put yourself in harm’s way to defend someone against injustice or dire threat.",
    },
    {
      name: "Punisher",
      description: "Clear your exhaustion track when you tell a powerful or dangerous villain to their face that you will punish them.",
    },
  ],
  connections: { 
    "protector": "I once protected ### from a mortal blow during a fight, and I would do it again. Why?",
    "partner": "### and I together helped a faction take control of a clearing, and share responsibility for it.",
  },
  initialStats: {
    "Charm": 1,
    "Cunning": 0,
    "Finesse": 0,
    "Luck": -1,
    "Might": 2,
  },
  initialRoguishFeats: {
    choose: 1,
    startWith: {},
  },
  weaponSkills: {
    choose: 1,
    bolded: {
      "Cleave": true,
      "Disarm": true,
      "Parry": true,
      "Storm a Group": true,
    }
  },
  moves: {
    starting: {
      choose: 3,
      startWith: {},
    },
    options: {
      "brute": true,
      "carry-a-big-stick": true,
      "crash-and-smash": true,
      "hardy": true,
      "strong-draw": true,
      "guardian": true,
    }
  },
  startingEquipmentValue: 10,
};

export default arbiterData;