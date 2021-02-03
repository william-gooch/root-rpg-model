"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adventurerData = {
    id: "adventurer",
    name: "Adventurer",
    blurb: "You are a peaceful, diplomatic vagabond, making allies from those you aid, perhaps toppling greater powers by forging strong bonds with others.from yourself.",
    demeanors: ["Charming", "Diplomatic", "Agreeable", "Stern"],
    drives: {
        "ambition": true,
        "clean-paws": true,
        "principles": true,
        "justice": true,
    },
    natures: [
        {
            name: "Extrovert",
            description: "Clear your exhaustion track when you share a moment of real warmth, friendship, or enjoyment with someone.",
        },
        {
            name: "Peacemaker",
            description: "Clear your exhaustion track when you resolve a dangerous conflict nonviolently.",
        },
    ],
    connections: {
        "partner": "### and I fought alongside each other to defend a clearing from a faction’s advances...but we failed. Why did we defend the clearing? Why did we fail? Who defeated us?",
        "friend": "I traveled with ### for the time right after I became a vagabond. They helped keep me safe and showed me the Woodland. What keepsake did I gift them?",
    },
    initialStats: {
        "Charm": +2,
        "Cunning": +1,
        "Finesse": 0,
        "Luck": 0,
        "Might": -1,
    },
    initialRoguishFeats: {
        choose: 0,
        startWith: {
            "Counterfeit": true,
            "Sleight of Hand": true,
        },
    },
    weaponSkills: {
        choose: 1,
        bolded: {
            "Disarm": true,
            "Harry": true,
            "Improvise": true,
            "Parry": true,
        }
    },
    moves: {
        starting: {
            choose: 3,
            startWith: {},
        },
        options: {
            "sterling-reputation": true,
            "subduing-strikes": true,
            "talon-on-the-pulse": true,
            "orator": true,
            "well-read": true,
            "fast-friends": true,
        }
    },
    startingEquipmentValue: 9,
};
exports.default = adventurerData;
