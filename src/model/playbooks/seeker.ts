import { defaultBackground, Playbook } from "./playbook";

const seekerData: Playbook = {
  id: "seeker",
  name: "Seeker",
  blurb: "You are an explorer by nature, interested in free-ranging discovery, delving into ruins, and uncovering whatever secret wonders and ancient truths lie hidden amid the Woodland.",
  demeanors: ["Absentminded", "Driven", "Jovial", "Quiet"],
  background: {
    ...defaultBackground,
    "why-vagabond": {
      question: "Why are you a vagabond?",
      options: [
        "I want to wander the Woodland",
        "I'm seeking answers to a mystery",
        "I need to find and reconnect with a loved one",
        "I am pursuing a treasure",
        "I stole and sold something precious from someone dangerous",
      ]
    },
    "whom-left-behind": {
      question: "Whom have you left behind?",
      options: [
        "my family",
        "my spouse or loved one",
        "my best friend",
        "my fellow explorer",
        "my idol",
      ]
    },
  },
  drives: {
    "justice": true,
    "discovery": true,
    "greed": true,
    "wanderlust": true,
  },
  natures: [
    {
      name: "Explorer",
      description: "Clear your exhaustion track when you enter a ruin or other dangerous area of the forest.",
    },
    {
      name: "Historian",
      description: "Clear your exhaustion track when you refuse to allow someone to cover up or obscure the truth.",
    },
  ],
  connections: { 
    "partner": "I and ### have seen the wonders of the Woodland together. What makes them a stalwart companion on my travels?",
    "peer": "### is famous for a discovery of their own. I greatly respect them! What did they discover? How?",
  },
  initialStats: {
    "Charm": -1,
    "Cunning": 1,
    "Finesse": 1,
    "Luck": 0,
    "Might": 1,
  },
  initialRoguishFeats: {
    choose: 0,
    startWith: {
        "Acrobatics": true,
        "Disable Device": true,
        "Pick Lock": true,
    },
  },
  weaponSkills: {
    choose: 1,
    bolded: {
      "Confuse Senses": true,
      "Disarm": true,
      "Parry": true,
      "Trick Shot": true,
    }
  },
  moves: {
    starting: {
      choose: 2,
      startWith: {
        "word-on-the-street": true,
      },
    },
    options: {
      "word-on-the-street": true,
      "never-lost": true,
      "treasurer-hunter": true,
      "adventurer-contract": true,
      "watch-the-signs": true,
      "unstable-ground": true,
    }
  },
  startingEquipmentValue: 10,
};

export default seekerData;