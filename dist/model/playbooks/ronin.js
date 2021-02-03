"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roninData = {
    id: "ronin",
    name: "Ronin",
    blurb: "You are a skilled, willful vagabond, formerly a servant of a lord in a different land, now masterless. You came to the Woodland to live as a free vagabond.",
    demeanors: ["Gruff", "Polite", "Direct", "Dangerous"],
    drives: {
        "principles": true,
        "revenge": true,
        "thrills": true,
        "wanderlust": true,
    },
    natures: [
        {
            name: "Survivor",
            description: "Clear your exhaustion track when you try to flee or cover allies’ flight from a dangerous or overwhelming situation.",
        },
        {
            name: "Pilgrim",
            description: "Clear your exhaustion track when you find an expert in a skill you don’t possess.",
        },
    ],
    connections: {
        "partner": "### and I worked together on my first real task of significance in the Woodland, deposing a dangerous authority figure of a faction. Who did we depose? Why?",
        "watcher": "I see in ### many reminders of my old master. I am drawn to them, even as I watch them carefully. What is it that reminds me of my old master? How do they feel about my watchful eyes?",
    },
    initialStats: {
        "Charm": 0,
        "Cunning": 1,
        "Finesse": 0,
        "Luck": -1,
        "Might": 2,
    },
    initialRoguishFeats: {
        choose: 0,
        startWith: {
            "Blindside": true,
        },
    },
    weaponSkills: {
        choose: 1,
        bolded: {
            "Cleave": true,
            "Harry": true,
            "Storm a Group": true,
            "Vicious Strike": true,
        }
    },
    moves: {
        starting: {
            choose: 3,
            startWith: {},
        },
        options: {
            "always-armed": true,
            "knowing-a-lords-will": true,
            "well-mannered": true,
            "fealty": true,
            "the-rules-of-war": true,
            "always-watching": true,
        }
    },
    startingEquipmentValue: 11,
};
exports.default = roninData;
