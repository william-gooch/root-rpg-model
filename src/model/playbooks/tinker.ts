import { Playbook } from "./playbook";

const tinkerData: Playbook = {
  id: "tinker",
  name: "tinker",
  blurb: "You are an adept, clever vagabond, interested in mechanisms and craftsmanship, perhaps possessed of ideas that separate you from those around you.",
  demeanors: ["Hopeful", "Cheerful", "Inquisitive", "Cynical"],
  drives: {
    "greed": true,
    "ambition": true,
    "revenge": true,
    "protection": true,
  },
  natures: [
    {
      name: "Perfectionist",
      description: "Clear your exhaustion track when you replace someone else’s existing tool or resource with something truly great",
    },
    {
      name: "Radical",
      description: "Clear your exhaustion track when you espouse dangerous ideas to the wrong audience.",
    },
  ],
  connections: { 
    "peer": "### and I have been working together well for a while. We read each other’s moves easily.",
    "family": "_____________ and I had each other’s back when we were run out of a clearing because our natures got out of hand.",
  },
  initialStats: {
    "Charm": -1,
    "Cunning": +2,
    "Finesse": +1,
    "Luck": 0,
    "Might": 0,
  },
  initialRoguishFeats: {
    choose: 0,
    startWith: {
        "Counterfeit": true,
        "Disable Device": true,
        "Pick Lock": true,
    },
  },
  weaponSkills: {
    choose: 1,
    bolded: {
      "Cleave": true,
      "Harry": true,
      "Improvise": true,
      "Trick Shot": true,
    }
  },
  moves: {
    starting: {
      choose: 1,
      startWith: {
        "toolbox": true,
        "repair": true,
      },
    },
    options: {
      "toolbox": true,
      "repair": true,
      "big-pockets": true,
      "jury-rig": true,
      "nimble-mind": true,
      "dismantle": true,
    }
  },
  startingEquipmentValue: 6,
};

export default tinkerData;