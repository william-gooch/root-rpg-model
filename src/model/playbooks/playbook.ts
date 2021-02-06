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
} as const;

export default playbooks;