"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exileData = {
    id: "exile",
    name: "Exile",
    blurb: "You were once a prominent member of a powerful faction, but now you are exiled from it, and defined by what you do in relation to the group you once called your own.",
    demeanors: ["Bitter", "Cautious", "Clever", "Vain"],
    background: {
        "where-home": {
            question: "Where do you call home?",
            options: [
                "### clearing",
                "the forest",
                "a place far from here",
            ],
        },
        "what-caused-fall": {
            question: "What caused your fall?",
            options: [
                "I led a failed coup or rebellion",
                "I committed a terrible crime",
                "I was betrayed by my closest allies",
                "I fell prey to my rival's schemes",
            ],
        },
        "why-exiled": {
            question: "Why were you exiled (not killed)?",
            options: [
                "A complex legal system protected my life",
                "The last of my allies saved my life",
                "My enemies granted me mercy",
                "I fled before facing judgment",
            ],
        },
        "why-vagabond": {
            question: "Why were you exiled (not killed)?",
            options: [
                "I seek a new home in the Woodland",
                "I want to reclaim my prestige",
                "I wish to make amends for my sins",
                "I seek revenge against my enemies",
            ],
        },
        "faction-exiled": {
            question: "Which faction exiled you? (set your reputation with them to -2)",
            faction: true,
        },
        "faction-loyalty": {
            question: "Which faction now seeks your loyalty or allegiance?  (set your reputation with them to +1)",
            faction: true,
        }
    },
    drives: {
        "loyalty": true,
        "revenge": true,
        "chaos": true,
        "infamy": true,
    },
    natures: [
        {
            name: "Schemer",
            description: "Clear your exhaustion track when you offer valuable resources to a dangerous Woodland figure to secure their aid.",
        },
        {
            name: "Avenger",
            description: "Clear your exhaustion track when you openly attack those who have wronged you or your sworn vassals and wards.",
        },
    ],
    connections: {
        "partner": "I see greatness in ### that I wish to nurture...and perhaps turn to my own purposes. What is it about them that inspires me so?",
        "friend": "### sheltered me in the earliest days of my exile when I was at my most vulnerable. Why did they offer me such kindness in my moment of need?",
    },
    initialStats: {
        "Charm": +1,
        "Cunning": -1,
        "Finesse": 0,
        "Luck": +1,
        "Might": +1,
    },
    initialRoguishFeats: {
        choose: 0,
        startWith: {
            "Sneak": true,
        },
    },
    weaponSkills: {
        choose: 1,
        bolded: {
            "Cleave": true,
            "Quick Shot": true,
            "Storm a Group": true,
            "Vicious Strike": true,
        }
    },
    moves: {
        starting: {
            choose: 2,
            startWith: {
                "known-by-all": true,
            },
        },
        options: {
            "known-by-all": true,
            "above-it-all": true,
            "i-bring-you": true,
            "greatest-of-the-age": true,
            "born-to-be-a-king": true,
            "fancy-paper": true,
        }
    },
    startingEquipmentValue: 10,
};
exports.default = exileData;
