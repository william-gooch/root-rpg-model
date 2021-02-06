import { EquipmentItem } from "./equipment";
import { RoguishFeat, WeaponSkill } from "./model";
import connections from "./playbooks/connections";
import drives from "./playbooks/drives";
import moves from "./playbooks/moves";
import playbooks, { Playbook, Stats } from "./playbooks/playbook";
export interface Harm {
    injury: {
        max: number;
        current: number;
    };
    exhaustion: {
        max: number;
        current: number;
    };
    depletion: {
        max: number;
        current: number;
    };
}
export interface Reputation {
    faction: string;
    modifier: number;
    notoriety: number;
    prestige: number;
}
export interface Character {
    playbook: keyof typeof playbooks;
    name: string;
    species: string;
    details: string;
    demeanor: string;
    background: {
        [key: string]: string;
    };
    drives: {
        -readonly [name in keyof typeof drives]?: boolean;
    };
    nature: string;
    connections: {
        -readonly [name in keyof typeof connections]?: {
            name: string;
            description: string;
        };
    };
    reputation: Reputation[];
    stats: Stats;
    harm: Harm;
    roguishFeats: {
        [k in RoguishFeat]?: boolean;
    };
    weaponSkills: {
        [k in WeaponSkill]?: boolean;
    };
    moves: {
        -readonly [k in keyof typeof moves]?: boolean;
    };
    equipment: EquipmentItem[];
}
export declare const fromPlaybook: (playbook: Playbook) => Character;
