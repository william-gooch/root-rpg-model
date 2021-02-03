"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scoundrelData = {
    id: "scoundrel",
    name: "Scoundrel",
    blurb: "You are a lucky, dangerous vagabond, acting more as destroyer and troublemaker than anything else, perhaps creating chaos and destruction for its own sake.",
    demeanors: ["Shifty", "Slimy", "Straightforward", "Naive"],
    drives: {
        "chaos": true,
        "thrills": true,
        "crime": true,
        "infamy": true,
    },
    natures: [
        {
            name: "Arsonist",
            description: "Clear your exhaustion track when you use needlessly destructive or damaging methods to solve a problem.",
        },
        {
            name: "Combative",
            description: "Clear your exhaustion track when you try to start a fight against overwhelming opposition.",
        },
    ],
    connections: {
        "friend": "### and I once met and pulled off a mad, impossible stunt together. What did we do? Why?",
        "partner": "### and I destroyed a faction’s resource, on behalf of an opposing faction. Why?",
    },
    initialStats: {
        "Charm": 1,
        "Cunning": -1,
        "Finesse": 0,
        "Luck": +2,
        "Might": 0,
    },
    initialRoguishFeats: {
        choose: 0,
        startWith: {
            "Acrobatics": true,
            "Hide": true,
            "Sneak": true,
        },
    },
    weaponSkills: {
        choose: 1,
        bolded: {
            "Confuse Senses": true,
            "Quick Shot": true,
            "Improvise": true,
            "Vicious Strike": true,
        }
    },
    moves: {
        starting: {
            choose: 3,
            startWith: {},
        },
        options: {
            "arsonist": true,
            "create-to-destroy": true,
            "its-a-distraction": true,
            "daredevil": true,
            "danger-mask": true,
            "better-lucky-than-good": true,
        }
    },
    startingEquipmentValue: 8,
};
exports.default = scoundrelData;
