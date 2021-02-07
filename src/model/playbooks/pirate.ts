import { defaultBackground, Playbook } from "./playbook";

const pirateData: Playbook = {
  id: "pirate",
  name: "Pirate",
  blurb: "You are a rogue boat captain, at home on the waters of the Woodland’s rivers, lakes, or bays, free from the sway of land-bound life and more than willing to do whatever it takes to maintain that freedom.",
  demeanors: ["Honest", "Flamboyant", "Stoic", "Strange"],
  background: {
    "where-home": {
        question: "Where do you call home?",
        options: [
        "__________ clearing",
        "the forest",
        "a place far from here",
        ],
    },
    "why-vagabond": {
      question: "Why are you a vagabond?",
      options: [
        "I believe I'm haunted by a powerful curse",
        "I hear the call of gold and silver",
        "I am despised by other denizens",
        "I am fleeing the consequences of my piracy",
        "I wish to build a network of fellow pirates and freebooters",
      ]
    },
    "what-happened-captain": {
      question: "What happened to your captain?",
      options: [
        "disappearance",
        "died in a blaze of glory",
        "mutiny",
        "imprisonment",
        "retirement",
      ]
    },
    "faction-served": {
        question: "Which faction have you served the most? (mark two prestige for appropriate group)",
        faction: true,
    },
    "faction-enmity": {
        question: "With which faction have you earned a special enmity? (mark one notoriety for appropriate group)",
        faction: true,
    },
  },
  drives: {
    "freedom": true,
    "revenge": true,
    "crime": true,
    "infamy": true,
  },
  natures: [
    {
      name: "Rogue",
      description: "Clear your exhaustion track when you doublecross, triplecross, or otherwise betray a powerful or dangerous NPC.",
    },
    {
      name: "Merchant",
      description: "Clear your exhaustion track when you carry something valuable past danger, difficulty, or blockade.",
    },
  ],
  connections: { 
    "partner": "### and I seized valuable cargo from a faction together. Who did we rob? Why?",
    "family": "____________ had a good relationship with my former captain. How have they supported me in taking on the role as my own?",
  },
  initialStats: {
    "Charm": +1,
    "Cunning": 0,
    "Finesse": 0,
    "Luck": +1,
    "Might": 0,
  },
  initialRoguishFeats: {
    choose: 0,
    startWith: {
        "Acrobatics": true,
        "Blindside": true,
        "Pick Lock": true,
    },
  },
  weaponSkills: {
    choose: 1,
    bolded: {
      "Parry": true,
      "Storm a Group": true,
      "Trick Shot": true,
      "Vicious Strike": true,
    }
  },
  moves: {
    starting: {
      choose: 2,
      startWith: {
        "small-ship": true,
        "sail-on": true,
      },
    },
    options: {
      "small-ship": true,
      "sail-on": true,
      "swashbuckler": true,
      "x-marks-the-spot": true,
      "plenty-of-rum": true,
      "sea-legs": true,
    }
  },
  startingEquipmentValue: 10,
};

export default pirateData;