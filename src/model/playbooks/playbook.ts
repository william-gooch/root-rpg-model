import { RoguishFeat, WeaponSkill } from "../model";
import moves from "./moves";
import drives from "./drives";
import connections from "./connections";

export interface Nature {
  name: string;
  description: string;
}


export interface Stats {
  "Charm": number;
  "Cunning": number;
  "Finesse": number;
  "Luck": number;
  "Might": number;
}
export type Stat = keyof Stats;

export interface Playbook {
  id: keyof typeof playbooks;
  name: string;
  blurb: string;
  demeanors: string[];
  background: {
    [key: string]: {
      question: string;
      options?: string[];
      faction?: boolean;
    };
  }
  drives: { [key in keyof typeof drives]?: boolean };
  natures: Nature[];
  connections: { [key in keyof typeof connections]?: string };
  initialStats: Stats;
  initialRoguishFeats: {
    choose: number;
    startWith: {
      [k in RoguishFeat]?: boolean;
    };
  };
  weaponSkills: {
    choose: number;
    bolded: {
      [k in WeaponSkill]?: boolean;
    };
  };
  moves: {
    starting: {
      choose: number;
      startWith: {
        [key in keyof typeof moves]?: boolean;
      };
    };
    options: { [key in keyof typeof moves]?: boolean; };
  };
  startingEquipmentValue: number;
}

export const defaultBackground: Playbook["background"] = {
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
  },
  "whom-left-behind": {
    question: "Whom have you left behind?",
  },
  "faction-served": {
    question: "Which faction have you served the most? (mark two prestige for appropriate group)",
    faction: true,
  },
  "faction-enmity": {
    question: "With which faction have you earned a special enmity? (mark one notoriety for appropriate group)",
    faction: true,
  },
}

// Base Game
import arbiter from "./arbiter";
import ranger from "./ranger";
import scoundrel from "./scoundrel";
import thief from "./thief";
import tinker from "./tinker";
import vagrant from "./vagrant";
import adventurer from "./adventurer";
import harrier from "./harrier";
import ronin from "./ronin";

// Travelers and Outsiders
import chronicler from "./chronicler";
import exile from "./exile";
import seeker from "./seeker";
import envoy from "./envoy";
import pirate from "./pirate";
import raider from "./raider";

const playbooks = {
  arbiter,
  ranger,
  scoundrel,
  thief,
  tinker,
  vagrant,
  adventurer,
  harrier,
  ronin,
  chronicler,
  exile,
  seeker,
  envoy,
  pirate,
  raider,
} as const;

export default playbooks;