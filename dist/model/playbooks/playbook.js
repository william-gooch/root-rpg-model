"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arbiter_1 = __importDefault(require("./arbiter"));
const ranger_1 = __importDefault(require("./ranger"));
const scoundrel_1 = __importDefault(require("./scoundrel"));
const thief_1 = __importDefault(require("./thief"));
const playbooks = {
    arbiter: arbiter_1.default,
    ranger: ranger_1.default,
    scoundrel: scoundrel_1.default,
    thief: thief_1.default,
};
exports.default = playbooks;
