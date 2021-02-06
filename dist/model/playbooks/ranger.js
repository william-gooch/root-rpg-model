"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playbook_1 = require("./playbook");
const rangerData = {
    id: "ranger",
    name: "Ranger",
    blurb: "You are a capable, stealthy vagabond, centered on the forests that fill the Woodland between the clearings, more interested in the wilds than in the company of other Woodland denizens or their society.",
    demeanors: ["Terse", "Mistrusting", "Polite", "Kind"],
    background: {
        ...playbook_1.defaultBackground,
        "why-vagabond": {
            question: "Why are you a vagabond?",
            options: [
                "I dislike the hypocrisy of society",
                "I am mistrusted by other denizens",
                "I want to wander the Woodland",
                "I need to find and save a loved one",
                "I seek escape from the wars",
            ]
        },
        "whom-left-behind": {
            question: "Whom have you left behind?",
            options: [
                "my commander",
                "my family",
                "my best friend",
                "my student",
                "no one—I lost those who mattered to me. (mark notoriety with the faction responsible)",
            ]
        },
    },
    drives: {
        "discovery": true,
        "freedom": true,
        "revenge": true,
        "protection": true,
    },
    natures: [
        {
            name: "Loner",
            description: "Clear your exhaustion track when you enter a dangerous situation alone, without backup or assistance.",
        },
        {
            name: "Cynic",
            description: "Clear your exhaustion track when you openly and directly ask dangerous questions about an accepted “truth”.",
        },
    ],
    connections: {
        "watcher": "I was tricked, conned, or deceived by ### once. Why do I choose to continue working with them?",
        "protector": "I did something that would have gotten me the enmity of a Woodland faction— if ### hadn’t covered for me. What did I do? Why and how did they protect me? Regardless, I feel indebted to them.",
    },
    initialStats: {
        "Charm": -1,
        "Cunning": 1,
        "Finesse": 1,
        "Luck": 0,
        "Might": 1,
    },
    initialRoguishFeats: {
        choose: 0,
        startWith: {
            "Hide": true,
            "Sneak": true,
        },
    },
    weaponSkills: {
        choose: 1,
        bolded: {
            "Cleave": true,
            "Disarm": true,
            "Harry": true,
            "Vicious Strike": true,
        }
    },
    moves: {
        starting: {
            choose: 3,
            startWith: {},
        },
        options: {
            "silent-paws": true,
            "slip-away": true,
            "poisons-and-antidotes": true,
            "forager": true,
            "threatening-visage": true,
            "dirty-fighter": true,
        }
    },
    startingEquipmentValue: 9,
};
exports.default = rangerData;
