"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arbiter_1 = __importDefault(require("./arbiter"));
const ranger_1 = __importDefault(require("./ranger"));
const scoundrel_1 = __importDefault(require("./scoundrel"));
const thief_1 = __importDefault(require("./thief"));
const tinker_1 = __importDefault(require("./tinker"));
const vagrant_1 = __importDefault(require("./vagrant"));
const adventurer_1 = __importDefault(require("./adventurer"));
const harrier_1 = __importDefault(require("./harrier"));
const ronin_1 = __importDefault(require("./ronin"));
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
};
exports.default = playbooks;
