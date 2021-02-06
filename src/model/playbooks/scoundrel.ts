import { defaultBackground, Playbook } from "./playbook";

const scoundrelData: Playbook = {
  id: "scoundrel",
  name: "Scoundrel",
  blurb: "You are a lucky, dangerous vagabond, acting more as destroyer and troublemaker than anything else, perhaps creating chaos and destruction for its own sake.",
  demeanors: ["Shifty", "Slimy", "Straightforward", "Naive"],
  background: {
    ...defaultBackground,
    "why-vagabond": {
      question: "Why are you a vagabond?",
      options: [
        "I am on the run for a destructive crime",
        "I seek vengeance for my suffering",
        "I wish to defeat a faction",
        "I am mistrusted by other denizens",
        "I want to be free from society's bonds",
      ]
    },
    "whom-left-behind": {
      question: "Whom have you left behind?",
      options: [
        "my teacher",
        "my family",
        "my loved one",
        "my only defender",
        "my best friend",
      ]
    },
  },
  drives: {
    "chaos": true,
    "thrills": true,
    "crime": true,
    "infamy": true,
  },
  natures: [
    {
      name: "Arsonist",
      description: "Clear your exhaustion track when you use needlessly destructive or damaging methods to solve a problem.",
    },
    {
      name: "Combative",
      description: "Clear your exhaustion track when you try to start a fight against overwhelming opposition.",
    },
  ],
  connections: { 
    "friend": "### and I once met and pulled off a mad, impossible stunt together. What did we do? Why?",
    "partner": "### and I destroyed a faction’s resource, on behalf of an opposing faction. Why?",
  },
  initialStats: {
    "Charm": 1,
    "Cunning": -1,
    "Finesse": 0,
    "Luck": +2,
    "Might": 0,
  },
  initialRoguishFeats: {
    choose: 0,
    startWith: {
        "Acrobatics": true,
        "Hide": true,
        "Sneak": true,
    },
  },
  weaponSkills: {
    choose: 1,
    bolded: {
      "Confuse Senses": true,
      "Quick Shot": true,
      "Improvise": true,
      "Vicious Strike": true,
    }
  },
  moves: {
    starting: {
      choose: 3,
      startWith: {},
    },
    options: {
      "arsonist": true,
      "create-to-destroy": true,
      "its-a-distraction": true,
      "daredevil": true,
      "danger-mask": true,
      "better-lucky-than-good": true,
    }
  },
  startingEquipmentValue: 8,
};

export default scoundrelData;