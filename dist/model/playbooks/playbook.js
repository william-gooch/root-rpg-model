"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arbiter_1 = __importDefault(require("./arbiter"));
const ranger_1 = __importDefault(require("./ranger"));
const playbooks = {
    arbiter: arbiter_1.default,
    ranger: ranger_1.default,
};
exports.default = playbooks;
