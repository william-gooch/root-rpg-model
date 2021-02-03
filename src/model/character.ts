import { defaultEquipment } from "..";
import { EquipmentItem } from "./equipment";
import { factions } from "./faction";
import { RoguishFeat, WeaponSkill } from "./model";
import connections from "./playbooks/connections";
import drives from "./playbooks/drives";
import moves from "./playbooks/moves";
import playbooks, { Playbook, Stats } from "./playbooks/playbook";

export interface Harm {
    injury: { max: number, current: number };
    exhaustion: { max: number, current: number };
    depletion: { max: number, current: number };
}

export interface Reputation {
    faction: string;
    modifier: number;
    notoriety: number;
    prestige: number;
}

export interface Character {
    playbook: keyof typeof playbooks;

    // Details
    name: string;
    species: string;
    details: string;
    demeanor: string;

    // Background
    backgroundWhere: string;
    backgroundWhy: string;
    backgroundWho: string;
    backgroundFactionServed: string;
    backgroundFactionEnmity: string;

    drives: {
        -readonly [name in keyof typeof drives]?: boolean;
    };
    nature: string;
    connections: {
        -readonly [name in keyof typeof connections]?: string;
    };

    // Reputation
    reputation: Reputation[];

    stats: Stats;
    harm: Harm;

    roguishFeats: { [k in RoguishFeat]?: boolean };
    weaponSkills: { [k in WeaponSkill]?: boolean };
    moves: { -readonly [k in keyof typeof moves]?: boolean };

    equipment: EquipmentItem[];
}

export const fromPlaybook = (playbook: Playbook): Character => {
    return {
        playbook: playbook.id,
        
        name: "",
        species: "",
        details: "",
        demeanor: "",

        backgroundWhere: "",
        backgroundWhy: "",
        backgroundWho: "",
        backgroundFactionServed: "",
        backgroundFactionEnmity: "",

        drives: {},
        nature: "",
        connections: Object.fromEntries(Object.entries(playbook.connections).map(([name, blurb]) => [name, ""])),

        reputation: factions.map(faction => ({ faction: faction.name, modifier: 0, notoriety: 0, prestige: 0 })),

        stats: playbook.initialStats,
        harm: {
            injury: { max: 4, current: 0 },
            exhaustion: { max: 4, current: 0 },
            depletion: { max: 4, current: 0 },
        },

        roguishFeats: playbook.initialRoguishFeats.startWith,
        weaponSkills: {},
        moves: playbook.moves.starting.startWith,

        equipment: [],
    };
}