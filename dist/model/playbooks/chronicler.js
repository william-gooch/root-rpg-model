"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playbook_1 = require("./playbook");
const chroniclerData = {
    id: "chronicler",
    name: "Chronicler",
    blurb: "You are a sage who honors history and the written word, keeper of lost, banned, or forbidden texts of truths the great Woodland powers would rather be forgotten.",
    demeanors: ["Clumsy", "Endearing", "Sly", "Thoughtful"],
    background: {
        ...playbook_1.defaultBackground,
        "why-vagabond": {
            question: "Why are you a vagabond?",
            options: [
                "I seek the Woodland's secrets",
                "I swore an oath to record true, unbiased history",
                "I want to spread knowledge throughout the Woodland",
                "I aim to change the Woodland by sharing its history",
                "I crave adventure",
            ]
        },
        "who-inspired-history": {
            question: "",
            options: [
                "my parents",
                "an older sibling",
                "an old mentor",
                "a lover or friend",
                "a formal school",
            ]
        },
    },
    drives: {
        "justice": true,
        "discovery": true,
        "ambition": true,
        "clean-paws": true,
    },
    natures: [
        {
            name: "Observer",
            description: "Clear your exhaustion track when you enter a dangerous situation to try to witness a significant or secret event.",
        },
        {
            name: "Activist",
            description: "Clear your exhaustion track when you publicly confront the leadership of a clearing about changes you think are vital to the community’s success.",
        },
    ],
    connections: {
        "partner": "### and I exposed a dark secret of a faction, leading to a meaningful political change. What was it? And which member of that faction hates us for it?",
        "peer": "I think ### sees the truth of the world, and I value their perspective deeply. What kinds of information do they see that I often overlook?",
    },
    initialStats: {
        "Charm": -1,
        "Cunning": +2,
        "Finesse": +1,
        "Luck": 0,
        "Might": 0,
    },
    initialRoguishFeats: {
        choose: 0,
        startWith: {
            "Counterfeit": true,
            "Disable Device": true,
            "Pick Pocket": true,
        },
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
            choose: 2,
            startWith: {
                "the-worth-of-a-book": true,
            },
        },
        options: {
            "the-worth-of-a-book": true,
            "an-eye-for-the-real-story": true,
            "search-the-records": true,
            "loremaster": true,
            "good-advice": true,
            "dedicated-scholar": true,
        }
    },
    startingEquipmentValue: 10,
};
exports.default = chroniclerData;
