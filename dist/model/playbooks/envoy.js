"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playbook_1 = require("./playbook");
const envoyData = {
    id: "envoy",
    name: "Envoy",
    blurb: "You are a professional representative, capable of speaking for other powers while maintaining plausible deniability, fashioned as the ultimate neutral agent and diplomatic mercenary.",
    demeanors: ["Commanding", "Kind", "Professional", "Sleazy"],
    background: {
        ...playbook_1.defaultBackground,
        "why-vagabond": {
            question: "Why are you a vagabond?",
            options: [
                "I am called to serve a noble cause",
                "I want to make a name for myself with every faction",
                "I hold no loyalty save to the highest bidder",
                "I have many conflicting loyalties",
                "I seek the truth behind an ally's disappearance",
            ]
        },
        "whom-left-behind": {
            question: "Whom have you left behind?",
            options: [
                "my commander",
                "my family",
                "my loved one",
                "my master",
                "my mentor",
            ]
        },
    },
    drives: {
        "loyalty": true,
        "greed": true,
        "ambition": true,
        "clean-paws": true,
    },
    natures: [
        {
            name: "Agent",
            description: "Clear your exhaustion track when you convince someone influential to allow you to represent their interests.",
        },
        {
            name: "Sworn",
            description: "Clear your exhaustion track when you openly commit to resolve a dangerous conflict on behalf of someone vulnerable.",
        },
    ],
    connections: {
        "watcher": "### reminds me of a powerful political figure of the Woodland. Who do they resemble? Why is the resemblance so striking to me?",
        "peer": "### and I negotiated a truce between two warring parties within a clearing. Why were they so important to closing the deal?",
    },
    initialStats: {
        "Charm": 0,
        "Cunning": +1,
        "Finesse": 0,
        "Luck": +1,
        "Might": 0,
    },
    initialRoguishFeats: {
        choose: 0,
        startWith: {
            "Hide": true,
            "Sneak": true,
            "Pick Lock": true,
        },
    },
    weaponSkills: {
        choose: 1,
        bolded: {
            "Confuse Senses": true,
            "Improvise": true,
            "Parry": true,
            "Quick Shot": true,
        }
    },
    moves: {
        starting: {
            choose: 2,
            startWith: {
                "diplomat": true,
            },
        },
        options: {
            "diplomat": true,
            "fancy-meeting-you-here": true,
            "turncoat": true,
            "a-silvered-tongue": true,
            "trust-in-me": true,
            "kiss-the-ring": true,
        }
    },
    startingEquipmentValue: 10,
};
exports.default = envoyData;
