"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromPlaybook = void 0;
const faction_1 = require("./faction");
exports.fromPlaybook = (playbook) => {
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
        reputation: faction_1.factions.map(faction => ({ faction: faction.name, modifier: 0, notoriety: 0, prestige: 0 })),
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
};
