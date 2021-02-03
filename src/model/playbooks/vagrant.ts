import { Playbook } from "./playbook";

const vagrantData: Playbook = {
  id: "vagrant",
  name: "Vagrant",
  blurb: "You are a charming, survivor vagabond, using words to get out of dangerous situations, perhaps even setting possible predators upon each other to keep them away from yourself.",
  demeanors: ["Excited", "Low Key", "Thoughtful", "Angry"],
  drives: {
    "chaos": true,
    "thrills": true,
    "clean-paws": true,
    "wanderlust": true,
  },
  natures: [
    {
      name: "Glutton",
      description: "Clear your exhaustion track when you overindulge on vices like drink, food, and gambling.",
    },
    {
      name: "Hustler",
      description: "Clear your exhaustion track when you try to spring a con on a powerful or dangerous mark.",
    },
  ],
  connections: { 
    "family": "After ### and I pulled off an impressive heist and stole something very valuable from a powerful faction, my bad choices landed me in dire straits. But they bailed me out, and we’ve been close ever since.",
    "watcher": "### saw through one of my cons, and turned it back on me. How? Why did we forgive each other?",
  },
  initialStats: {
    "Charm": +2,
    "Cunning": 1,
    "Finesse": -1,
    "Luck": 0,
    "Might": 0,
  },
  initialRoguishFeats: {
    choose: 0,
    startWith: {
        "Pick Lock": true,
        "Sleight of Hand": true,
    },
  },
  weaponSkills: {
    choose: 1,
    bolded: {
      "Harry": true,
      "Improvise": true,
      "Quick Shot": true,
      "Vicious Strike": true,
    }
  },
  moves: {
    starting: {
      choose: 3,
      startWith: {},
    },
    options: {
      "instigator": true,
      "pleasant-facade": true,
      "desperate-smile": true,
      "charm-offensive": true,
      "lets-play": true,
      "pocket-sand": true,
    }
  },
  startingEquipmentValue: 9,
};

export default vagrantData;