import { Playbook } from "./playbook";

const thiefData: Playbook = {
  id: "thief",
  name: "Thief",
  blurb: "You are a cunning, criminal vagabond, capable of stealing even the most well-guarded treasures, perhaps committed to crime and theft for its own sake.",
  demeanors: ["Fast-Talking", "Quiet", "Angry", "Friendly"],
  drives: {
    "freedom": true,
    "greed": true,
    "ambition": true,
    "thrills": true,
  },
  natures: [
    {
      name: "Kleptomaniac",
      description: "Clear your exhaustion track when you try to selfishly steal something valuable or important.",
    },
    {
      name: "Rebellious",
      description: "Clear your exhaustion track when you grievously insult, defy, or anger figures of authority.",
    },
  ],
  connections: { 
    "peer": "I stole something important, something needed or craved, for ###. I proved my worth to them.",
    "partner": "### sprang to get me out of holding, whether they bailed me out or rescued me. I owe them.",
  },
  initialStats: {
    "Charm": 0,
    "Cunning": 0,
    "Finesse": +2,
    "Luck": +1,
    "Might": -1,
  },
  initialRoguishFeats: {
    choose: 4,
    startWith: {},
  },
  weaponSkills: {
    choose: 1,
    bolded: {
      "Confuse Senses": true,
      "Improvise": true,
      "Parry": true,
      "Trick Shot": true,
    }
  },
  moves: {
    starting: {
      choose: 3,
      startWith: {},
    },
    options: {
      "breaking-and-entering": true,
      "disappear-into-the-dark": true,
      "rope-a-dope": true,
      "small-hands": true,
      "master-thief": true,
      "nose-for-gold": true,
    }
  },
  startingEquipmentValue: 6,
};

export default thiefData;