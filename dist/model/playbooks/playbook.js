"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultBackground = void 0;
exports.defaultBackground = {
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
        question: "With which faction have you earned a special enmity?(mark one notoriety forappropriate group)",
        faction: true,
    },
};
// Base Game
const arbiter_1 = __importDefault(require("./arbiter"));
const ranger_1 = __importDefault(require("./ranger"));
const scoundrel_1 = __importDefault(require("./scoundrel"));
const thief_1 = __importDefault(require("./thief"));
const tinker_1 = __importDefault(require("./tinker"));
const vagrant_1 = __importDefault(require("./vagrant"));
const adventurer_1 = __importDefault(require("./adventurer"));
const harrier_1 = __importDefault(require("./harrier"));
const ronin_1 = __importDefault(require("./ronin"));
// Travelers and Outsiders
const chronicler_1 = __importDefault(require("./chronicler"));
const exile_1 = __importDefault(require("./exile"));
const seeker_1 = __importDefault(require("./seeker"));
const playbooks = {
    arbiter: arbiter_1.default,
    ranger: ranger_1.default,
    scoundrel: scoundrel_1.default,
    thief: thief_1.default,
    tinker: tinker_1.default,
    vagrant: vagrant_1.default,
    adventurer: adventurer_1.default,
    harrier: harrier_1.default,
    ronin: ronin_1.default,
    chronicler: chronicler_1.default,
    exile: exile_1.default,
    seeker: seeker_1.default,
};
exports.default = playbooks;
