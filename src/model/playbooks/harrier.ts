import { defaultBackground, Playbook } from "./playbook";

const harrierData: Playbook = {
  id: "harrier",
  name: "Harrier",
  blurb: "You are a quick, enterprising vagabond, racing easily from building to building and clearing to clearing without anything stopping you, perhaps finding yourself in places others would rather keep secret or hidden.",
  demeanors: ["Excited", "Energetic", "Passionate", "Flighty"],
  background: {
    ...defaultBackground,
    "why-vagabond": {
      question: "Why are you a vagabond?",
      options: [
        "I want to fight for Woodland freedom",
        "I am chasing a loved one",
        "I am on the run for my crimes",
        "I feel a deep wanderlust",
        "I am on the run from a commitment at home",
      ]
    },
    "whom-left-behind": {
      question: "Whom have you left behind?",
      options: [
        "my teacher",
        "my family",
        "my loved one",
        "my idol",
        "my best friend",
      ]
    },
  },
  drives: {
    "crime": true,
    "discovery": true,
    "infamy": true,
    "wanderlust": true,
  },
  natures: [
    {
      name: "Dutiful",
      description: "Clear your exhaustion track when you take on a dangerous or difficult task on behalf of another.",
    },
    {
      name: "Competitive",
      description: "Clear your exhaustion track when you take dramatically unnecessary risks to show off.",
    },
  ],
  connections: { 
    "peer": "### and I tried to blaze a new trail between two clearings; without the support of the major factions, it never fully came to fruition.",
    "friend": "### and I forged a bond while investigating a ruin deep in the woods. What strange minor trinkets do each of you carry from that expedition?",
  },
  initialStats: {
    "Charm": 0,
    "Cunning": -1,
    "Finesse": +2,
    "Luck": +1,
    "Might": 0,
  },
  initialRoguishFeats: {
    choose: 0,
    startWith: {
        "Acrobatics": true,
        "Sneak": true,
    },
  },
  weaponSkills: {
    choose: 1,
    bolded: {
      "Disarm": true,
      "Harry": true,
      "Quick Shot": true,
      "Trick Shot": true,
    }
  },
  moves: {
    starting: {
      choose: 3,
      startWith: {},
    },
    options: {
      "cross-country": true,
      "fleet-of-foot-and-hand": true,
      "dont-shoot-the-messenger": true,
      "parkour": true,
      "traveller-extraordinaire": true,
      "smugglers-path": true,
    }
  },
  startingEquipmentValue: 9,
};

export default harrierData;