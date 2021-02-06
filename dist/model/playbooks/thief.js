"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playbook_1 = require("./playbook");
const thiefData = {
    id: "thief",
    name: "Thief",
    blurb: "You are a cunning, criminal vagabond, capable of stealing even the most well-guarded treasures, perhaps committed to crime and theft for its own sake.",
    demeanors: ["Fast-Talking", "Quiet", "Angry", "Friendly"],
    background: {
        ...playbook_1.defaultBackground,
        "why-vagabond": {
            question: "Why are you a vagabond?",
            options: [
                "I have no better way to get food, water, shelter and money",
                "I am on the run from \"associates\"",
                "I am mistrusted by other denizens",
                "I am pursuing a treasure",
                "I am being hunted by a powerful official",
            ]
        },
        "whom-left-behind": {
            question: "Whom have you left behind?",
            options: [
                "my partner-in-crime",
                "my family",
                "my loved one",
                "my protector",
                "my benefactor",
            ]
        },
    },
    drives: {
        "freedom": true,
        "greed": true,
        "ambition": true,
        "thrills": true,
    },
    natures: [
        {
            name: "Kleptomaniac",
            description: "Clear your exhaustion track when you try to selfishly steal something valuable or important.",
        },
        {
            name: "Rebellious",
            description: "Clear your exhaustion track when you grievously insult, defy, or anger figures of authority.",
        },
    ],
    connections: {
        "peer": "I stole something important, something needed or craved, for ###. I proved my worth to them.",
        "partner": "### sprang to get me out of holding, whether they bailed me out or rescued me. I owe them.",
    },
    initialStats: {
        "Charm": 0,
        "Cunning": 0,
        "Finesse": +2,
        "Luck": +1,
        "Might": -1,
    },
    initialRoguishFeats: {
        choose: 4,
        startWith: {},
    },
    weaponSkills: {
        choose: 1,
        bolded: {
            "Confuse Senses": true,
            "Improvise": true,
            "Parry": true,
            "Trick Shot": true,
        }
    },
    moves: {
        starting: {
            choose: 3,
            startWith: {},
        },
        options: {
            "breaking-and-entering": true,
            "disappear-into-the-dark": true,
            "rope-a-dope": true,
            "small-hands": true,
            "master-thief": true,
            "nose-for-gold": true,
        }
    },
    startingEquipmentValue: 6,
};
exports.default = thiefData;
