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
export declare type Stat = keyof Stats;
export interface Playbook {
    id: keyof typeof playbooks;
    name: string;
    blurb: string;
    demeanors: string[];
    drives: {
        [key in keyof typeof drives]?: boolean;
    };
    natures: Nature[];
    connections: {
        [key in keyof typeof connections]?: string;
    };
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
        options: {
            [key in keyof typeof moves]?: boolean;
        };
    };
    startingEquipmentValue: number;
}
declare const playbooks: {
    readonly arbiter: Playbook;
    readonly ranger: Playbook;
    readonly scoundrel: Playbook;
    readonly thief: Playbook;
    readonly tinker: Playbook;
    readonly vagrant: Playbook;
    readonly adventurer: Playbook;
    readonly harrier: Playbook;
    readonly ronin: Playbook;
    readonly chronicler: Playbook;
};
export default playbooks;
