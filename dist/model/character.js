"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromPlaybook = void 0;
const faction_1 = require("./faction");
const moves_1 = __importDefault(require("./playbooks/moves"));
exports.fromPlaybook = (playbook) => {
    return {
        playbook: playbook.id,
        name: "",
        species: "",
        details: "",
        demeanor: "",
        background: Object.fromEntries(Object.entries(playbook.background).map(([name, question]) => [name, ""])),
        drives: {},
        nature: "",
        connections: Object.fromEntries(Object.entries(playbook.connections).map(([name, blurb]) => [name, { name: "", description: "" }])),
        reputation: faction_1.factions.map(faction => ({ faction: faction.name, modifier: 0, notoriety: 0, prestige: 0 })),
        stats: playbook.initialStats,
        harm: {
            injury: { max: 4, current: 0 },
            exhaustion: { max: 4, current: 0 },
            depletion: { max: 4, current: 0 },
        },
        roguishFeats: playbook.initialRoguishFeats.startWith,
        weaponSkills: {},
        moves: Object.fromEntries(Object.entries(playbook.moves.starting.startWith).map(([name, value]) => [name, moves_1.default[name].extraDefault ? moves_1.default[name].extraDefault : value])),
        equipment: [],
    };
};
