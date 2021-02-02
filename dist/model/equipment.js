"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemValue = exports.defaultEquipment = exports.equipmentTags = void 0;
exports.equipmentTags = [
    { name: "Arrow-Proof", description: "Ignore the first hit dealing injury from arrows that you suffer in a scene." },
    { name: "Blunted", description: "This weapon inflicts exhaustion, not injury." },
    { name: "Ceremonial", description: "Choose an attached faction. While this item is displayed, treat yourself as having +1 Reputation with that faction, and -1 Reputation with other factions." },
    { name: "Comfortable", description: "This item counts as 1 fewer Load." },
    { name: "Cumbersome", description: "Mark one exhaustion while you wear your armor— clear one exhaustion when you take it off.", negative: true },
    { name: "Eaglecraft", description: "Mark wear when **engaging in melee** to both make and suffer another exchange of harm." },
    { name: "Fast", description: "Mark wear when **engaging in melee** to suffer 1 fewer harm, even on a miss." },
    { name: "Friendly", description: "When you **meet someone important**, mark exhaustion to roll with your Reputation +1." },
    { name: "Flexible", description: "When you **grapple** with someone, mark exhaustion to ignore the first choice they make." },
    { name: "Foxfolk Steel", description: "Ignore the first box of wear you mark on this item each session." },
    { name: "Hair Trigger", description: "Mark wear to **target a vulnerable foe** at close range instead of far." },
    { name: "Healer’s Kit", description: "Mark wear to clear exhaustion. Mark 2 wear to clear injury." },
    { name: "Heavy Bludgeon", description: "Mark exhaustion to to ignore the enemy’s armor when you inflict harm." },
    { name: "Heavy Draw Weight", description: "When you **target a vulnerable foe** with this bow, mark exhaustion to inflict 1 additional injury." },
    { name: "Iron bolts", description: "This weapon inflicts 1 additional wear when its harm is absorbed by armor." },
    { name: "Large", description: "Mark exhaustion when inflicting harm with this weapon to inflict 1 additional harm." },
    { name: "Luxury", description: "After creation, this item is worth +3 Value." },
    { name: "Mousefolk Steel", description: "Mark wear to **engage in melee** using Cunning instead of Might." },
    { name: "Oiled string", description: "Mark wear to use the weapon skill **quick shot** even if you don’t have it." },
    { name: "Quick", description: "Mark exhaustion to **engage in melee** with Finesse instead of Might." },
    { name: "Rabbitfolk Steel", description: "Mark wear to **engage in melee** with Finesse instead of Might." },
    { name: "Reach", description: "When you **engage in melee**, mark wear on this weapon to inflict harm instead of trading harm; you cannot use this tag if your enemy’s weapon also has *reach*." },
    { name: "Sharp", description: "Mark wear when inflicting harm with this weapon to inflict 1 additional harm." },
    { name: "Short Limbs", description: "Mark wear to fire a **quick shot** at far range." },
    { name: "Slow", description: "When you **engage in melee** with this weapon, choose one fewer option. Mark wear to ignore this effect.", negative: true },
    { name: "Thick", description: "When you mark wear on this shield to block a hit, you only ever mark 1-wear, even if you are blocking more harm from a single hit." },
    { name: "Throwable", description: "Mark exhaustion to **target a vulnerable** foe with this weapon at far range." },
    { name: "Tightly Woven", description: "When you take a few seconds to repair this armor after a fight, clear 1-wear you marked during the fight." },
    { name: "Tricky", description: "When you use this item to **trick an NPC** by distracting them at a distance, on a 7-9 mark wear to eliminate one option from the **trick an NPC** move before the NPC picks." },
    { name: "Unassuming", description: "Until you harm an enemy, they will never deem you more of a threat than other vagabonds with arms and armor." },
    { name: "Versatile", description: "When you move to or from a range this weapon can reach, mark wear to make a quick strike and inflict 1-injury on any opponent in this weapon’s range." },
    { name: "Weighty", description: "This item counts as 1 additional Load.", negative: true },
];
exports.defaultEquipment = [
    {
        name: "Dagger",
        wear: { max: 1, current: 0 },
        load: 0,
        range: ["Intimate", "Close"],
        skillTags: ["Parry", "Vicious Strike"],
        tags: ["Quick"],
    },
    {
        name: "Mousefolk Short Sword",
        wear: { max: 2, current: 0 },
        load: 1,
        range: ["Close"],
        skillTags: ["Parry", "Disarm"],
        tags: ["Mousefolk Steel"],
    },
    {
        name: "Shortbow",
        wear: { max: 4, current: 0 },
        load: 1,
        range: ["Close"],
        skillTags: ["Quick Shot"],
        tags: ["Short Limbs"],
    },
    {
        name: "Chainmail",
        wear: { max: 3, current: 0 },
        load: 2,
        range: [],
        skillTags: [],
        tags: ["Tightly Woven", "Weighty"],
    },
    {
        name: "Leather Armor",
        wear: { max: 2, current: 0 },
        load: 1,
        range: [],
        skillTags: [],
        tags: ["Flexible"],
    },
    {
        name: "Plate Armor",
        wear: { max: 4, current: 0 },
        load: 2,
        range: [],
        skillTags: [],
        tags: ["Arrow-proof", "Cumbersome", "Weighty"],
    },
];
exports.getItemValue = (item) => {
    const tagCost = item.tags
        .map(tag => exports.equipmentTags.find(t => t.name === tag))
        .reduce((prev, curr) => {
        let neg = false;
        if (curr) {
            neg = curr.negative ? curr.negative : false;
        }
        return prev + (neg ? -1 : 1);
    }, 0);
    return item.wear.max + Math.max(item.range.length - 1, 0) + item.skillTags.length + tagCost;
};
