"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moves = {
    // Arbiter Moves
    "brute": {
        name: "Brute",
        description: "Take +1 Might (max +3).",
        source: "arbiter",
        effects: {
            stats: { "Might": 1 }
        }
    },
    "carry-a-big-stick": {
        name: "Carry a Big Stick",
        description: "When you **use words to pause an argument or violent conflict between others**, roll with Charm. On a hit, they choose: mark 2 exhaustion and keep going, or stop for now. On a 10+, take +1 ongoing to dealing with them peacefully. On a miss, NPCs turn their anger to you, and PCs take +1 ongoing against you for the scene.",
        source: "arbiter",
    },
    "crash-and-smash": {
        name: "Crash and Smash",
        description: `When you **smash your way through scenery to reach someone or something**, roll with Might. On a hit, you reach your target. On a 10+, choose 1. On a 7–9, choose 2.
- You hurt yourself: mark 1 injury
- You break an important part of your surroundings
- You damage or leave behind a piece of gear (GM’s choice)
On a miss, you smash through, but you leave yourself totally vulnerable on the other side.`,
        source: "arbiter",
    },
    "hardy": {
        name: "Hardy",
        description: "Take 1 additional injury boxes. Whenever time passes or you journey to a new clearing, you can clear 2 injury boxes automatically.",
        source: "arbiter",
        effects: {
            harm: { injury: 1 }
        }
    },
    "strong-draw": {
        name: "Strong Draw",
        description: "When you **target someone** with a bow, mark wear on the bow to roll with Might. On a hit, mark exhaustion to inflict 1 additional injury. Mark exhaustion again to make your shot ignore the enemy’s armor—they cannot mark wear to absorb the injury.",
        source: "arbiter",
    },
    "guardian": {
        name: "Guardian",
        description: `When you defend someone or something from an immediate NPC or environmental threat, roll with Might. On a hit, you keep them safe and choose one. On a 7–9, it costs: expose yourself to danger or escalate the situation.
- Draw the attention of the threat; they focus on you now.
- Put the threat in a vulnerable spot; take +1 forward to counterstrike.
- Push the threat back; you and your protectee have a chance to maneuver or flee.
On a miss, you take the full brunt of the blow intended for your protectee, and the threat has you where it wants you.`,
        source: "arbiter",
    },
    // Ranger Moves
    "silent-paws": {
        name: "Silent Paws",
        source: "ranger",
        description: "You are adept at slipping into and out of dangerous situations without anyone noticing. When you **attempt a roguish feat** to sneak or hide, you can mark 2 exhaustion to shift a miss to a 7-9."
    },
    "slip-away": {
        name: "Slip Away",
        source: "ranger",
        description: `When you **take advantage of an opening to escape from a dangerous situation**, roll with Finesse. On a hit, you get away. On a 10+, choose 1. On a 7-9, choose 2:
- You suffer injury or exhaustion (GM’s choice) during your escape
- You end up in another dangerous situation
- You leave something important behind
On a miss, you escape, but it costs you—mark injury or exhaustion, GM’s choice—and you leave ample evidence behind for your foes to track and follow you.`
    },
    "poisons-and-antidotes": {
        name: "Poisons and Antidotes",
        source: "ranger",
        description: `You have expertise in the poisons and antidotes of the Woodland. When you **brew a poison**, mark depletion and say what effect you want it to have: sleep, weakness, inebriation, or death. Any poison you make requires ingestion or injection; you can use the poison on your weapon or put it in your target’s food or drink. When you **study a poison or its effects to make an antidote**, the GM will tell you what special ingredient you’ll need. Get the ingredient and mark 1 depletion to brew the antidote.`
    },
    "forager": {
        name: "Forager",
        source: "ranger",
        description: `When you travel or pass into a forest, before making any travel move, you can clear your choice of:
- Up to 3-depletion
- Up to 2-exhaustion
- Up to 2-injury`,
    },
    "threatening-visage": {
        name: "Threatening Visage",
        source: "ranger",
        description: "When you persuade an NPC with open threats or naked steel, roll with Might instead of Charm.",
    },
    "dirty-fighter": {
        name: "Dirty Fighter",
        source: "ranger",
        description: "Take two of the following weapon skills: *Trick Shot*, *Confuse Senses*, *Improvise Weapon*, *Disarm*, *Vicious Strike*. None of the skills you take with this move count against your maximum for advancement."
    },
    // Scoundrel Moves
    "arsonist": {
        name: "Arsonist",
        description: "When you **wreck something** with flagrantly dangerous means (explosives, uncontrolled flame, etc.), roll with Luck instead of Might.",
    },
    "create-to-destroy": {
        name: "Create to Destroy",
        description: `When you use **available materials to rig up a dangerous device**, roll with Finesse. On a hit, you cobble together something that will do what you want, one time. On a 10+, choose one. On a 7-9, choose two. The device is:
- more dangerous than intended
- larger or more unwieldy than intended
- more temperamental and fragile than intended
On a miss, you need some vital component to finish it; the GM will tell you what.`,
    },
    "its-a-distraction": {
        name: "It's a Distraction!",
        description: "You gain the roguish feat *Blindside* (it does not count against your maximum for advancement). When you **attempt a roguish feat** to blindside someone while they are distracted by environmental dangers (a raging fire, an oncoming flood, etc.), roll with Luck instead of Cunning.",
    },
    "daredevil": {
        name: "Daredevil",
        description: "You’re at your luckiest when you go into danger without hesitation. When you **dive into a dangerous situation without forethought or planning**, treat yourself as having “Luck Armor,” with 1 box of wear (remember, armor is only “destroyed” when you would mark another box of wear, and all its boxes are full). The “Luck armor” automatically goes away once the danger has passed, and the next time you would have “Luck armor,” you gain it as if it was brand new with clear boxes.",
    },
    "danger-mask": {
        name: "Danger Mask",
        description: "You have a mask or outfit you wear when you go about your most destructive work—more of a calling card, an identifier of “the real you,” than a disguise. Treat it as a piece of equipment with two boxes of wear. While you have your mask on, any notoriety you gain is doubled, any prestige you gain is halved, and take +1 to **trust fate** and all Scoundrel playbook moves. If your mask is ever taken from you, mark exhaustion. If your mask is ever destroyed, mark 4-exhaustion. If your mask is destroyed, you can make a new mask when time passes."
    },
    "better-lucky-than-good": {
        name: "Better Lucky than Good",
        description: "When you **use a weapon move (basic or skilled)**, mark exhaustion to roll with Luck instead of the listed stat.",
    },
    // Thief Moves
    "breaking-and-entering": {
        name: "Breaking and Entering",
        description: "When you **attempt roguish feats** to get into or out of a place you’ve previously been, you can mark exhaustion to make the move as if you had rolled a 10+, instead of rolling.",
    },
    "disappear-into-the-dark": {
        name: "Disappear Into the Dark",
        description: "When you **slip into shadows while unnoticed**, mark exhaustion and hold 1. As long as you remain quiet, move slowly, and hold 1 for this move, you will remain hidden. If you inadvertently reveal yourself, lose your hold. Spend your hold to reveal yourself from a darkened place, suddenly and without warning. If you attack someone immediately after spending the hold, take +3 on the roll.",
    },
    "rope-a-dope": {
        name: "Rope-a-dope",
        description: "When you **evade and dodge your enemy so as to tire them out**, roll with Finesse. On a hit, you can mark exhaustion to make them mark 2-exhaustion. On a 10+, you can mark exhaustion to make them mark 3-exhaustion. On a miss, they catch you in the middle of a dodge—you’re at their mercy.",
    },
    "small-hands": {
        name: "Small Hands",
        description: "When you **grapple** with an enemy larger than you, roll with Finesse instead of Might. On a miss, they overpower you—you’re at their mercy.",
    },
    "master-thief": {
        name: "Master Thief",
        description: "Take +1 Finesse (max +3).",
    },
    "nose-for-gold": {
        name: "Nose for Gold",
        description: `When you **figure someone out**, you can always ask (even on a miss):
- what is the most valuable thing they are carrying?
When you **read a tense situation**, you can always ask (even on a miss):
- what is the most valuable thing here?`
    },
    // Tinker Moves
    "toolbox": {
        name: "Toolbox",
        description: `You have a kit of tools and supplies with which you work on long-term projects. Choose two features:
*assorted scrap wood, assorted gears and springs, esoteric hand tools, manuals, assorted medicines, portable alchemy kit, sewing kit, cookware, minor explosives*
Choose one drawback:
*heavy (counts as 2 Load instead of 1), bulky & obvious, stolen, fragile*
When you **open up your toolkit and dedicate yourself to making a thing or to getting to the bottom of something**, decide what and tell the GM. The GM will give you between 1 to 4 conditions you must fulfill to accomplish your goal, including time taken, materials needed, help needed, facilities/tools needed, or the limits on the project. When you **accomplish the conditions**, you accomplish the goal.`,
    },
    "repair": {
        name: "Repair",
        description: "When you **repair destroyed personal equipment with your toolbox**, the GM will set one condition as per the toolbox move. Fulfill it, and clear all wear for that equipment. When you **repair damaged personal equipment with your toolkit**, you do it as long as you spend depletion or value, 1 for 1, for each box of wear you clear.",
    },
    "big-pockets": {
        name: "Big Pockets",
        description: "Take two extra boxes of depletion."
    },
    "jury-rig": {
        name: "Jury Rig",
        description: `When you **create a makeshift device on the fly**, roll with Cunning. On a hit, you create a device that works once, then breaks. On a 10+, choose one:
- It works exceptionally well
- You get an additional use out of it
On a miss, the device works, but it has an unintended side effect that the GM will reveal when you use it.`
    },
    "nimble-mind": {
        name: "Nimble Mind",
        description: "When you **attempt roguish feats** involving mechanisms or locks, mark depletion to roll with Cunning instead of Finesse."
    },
    "dismantle": {
        name: "Dismantle",
        description: "When you **dismantle a broken or disabled piece of equipment or machinery**, clear 2 depletion boxes.",
    },
    // Vagrant Moves
    "instigator": {
        name: "Instigator",
        description: "When you **trick an NPC** into fighting another NPC, you can remove one option from the 7-9 list—they cannot choose that option instead of doing what you want.",
    },
    "pleasant-facade": {
        name: "Pleasant Facade",
        description: "When you **suck up to or otherwise butter up an unsuspecting NPC**, roll with Charm. On a 10+, hold 3. On a 7-9, hold 2. Spend your hold 1 for 1 to deflect their suspicion or aggression away from you onto someone or something else. On a miss, your attempts at flattery are suspicious—they’re going to keep their eye on you.",
    },
    "desperate-smile": {
        name: "Desperate Smile",
        description: "When you **trust fate** to see you through by begging, pleading, or abasing yourself, roll with Charm instead of Luck.",
    },
    "charm-offensive": {
        name: "Charm Offensive",
        description: "When you **play upon an enemy’s insecurities, concerns, or fears to distract them with words during a fight**, roll with Cunning. On a hit, you create an opening for yourself—make any available weapon move against them at +1, or strike quickly and deal injury to them. On a 7-9, you also tick them off; they aren’t listening to you anymore, no matter what you do, until the situation drastically changes. On a miss, you infuriate them—they come at you, hard, and you’re not prepared.",
    },
    "lets-play": {
        name: "Let's Play",
        description: "When you **play a game of skill and wit to loosen another’s tongue**, roll with Charm. On a hit, they let slip something useful or valuable. On a 7-9, you have to lose the game to get them there; mark one depletion. On a miss, they’re better than you ever thought; either mark one depletion and cut your losses, or mark three depletion and they’ll start talking.",
    },
    "pocket-sand": {
        name: "Pocket Sand",
        description: "Take the weapon skill Confuse Senses. This does not count against the maximum number of weapon skills you can take. When you **throw something to confuse an opponent’s senses at close or intimate range**, roll with Cunning instead of Finesse."
    },
};
exports.default = moves;
