import { Harm } from "../character";
import { RoguishFeat, WeaponSkill } from "../model";
import playbooks, { Stat } from "./playbook";
export interface Move {
    name: string;
    description: string;
    source: keyof typeof playbooks;
    effects?: {
        stats?: {
            [stat in Stat]?: number;
        };
        harm?: {
            [harm in keyof Harm]?: number;
        };
        weaponSkills?: {
            [skill in WeaponSkill]?: boolean;
        };
        roguishFeats?: {
            [feat in RoguishFeat]?: boolean;
        };
    };
}
declare const moves: {
    readonly brute: {
        readonly name: "Brute";
        readonly description: "Take +1 Might (max +3).";
        readonly source: "arbiter";
        readonly effects: {
            readonly stats: {
                readonly Might: 1;
            };
        };
    };
    readonly "carry-a-big-stick": {
        readonly name: "Carry a Big Stick";
        readonly description: "When you **use words to pause an argument or violent conflict between others**, roll with Charm. On a hit, they choose: mark 2 exhaustion and keep going, or stop for now. On a 10+, take +1 ongoing to dealing with them peacefully. On a miss, NPCs turn their anger to you, and PCs take +1 ongoing against you for the scene.";
        readonly source: "arbiter";
    };
    readonly "crash-and-smash": {
        readonly name: "Crash and Smash";
        readonly description: "When you **smash your way through scenery to reach someone or something**, roll with Might. On a hit, you reach your target. On a 10+, choose 1. On a 7–9, choose 2.\n- You hurt yourself: mark 1 injury\n- You break an important part of your surroundings\n- You damage or leave behind a piece of gear (GM’s choice)\nOn a miss, you smash through, but you leave yourself totally vulnerable on the other side.";
        readonly source: "arbiter";
    };
    readonly hardy: {
        readonly name: "Hardy";
        readonly description: "Take 1 additional injury boxes. Whenever time passes or you journey to a new clearing, you can clear 2 injury boxes automatically.";
        readonly source: "arbiter";
        readonly effects: {
            readonly harm: {
                readonly injury: 1;
            };
        };
    };
    readonly "strong-draw": {
        readonly name: "Strong Draw";
        readonly description: "When you **target someone** with a bow, mark wear on the bow to roll with Might. On a hit, mark exhaustion to inflict 1 additional injury. Mark exhaustion again to make your shot ignore the enemy’s armor—they cannot mark wear to absorb the injury.";
        readonly source: "arbiter";
    };
    readonly guardian: {
        readonly name: "Guardian";
        readonly description: "When you defend someone or something from an immediate NPC or environmental threat, roll with Might. On a hit, you keep them safe and choose one. On a 7–9, it costs: expose yourself to danger or escalate the situation.\n- Draw the attention of the threat; they focus on you now.\n- Put the threat in a vulnerable spot; take +1 forward to counterstrike.\n- Push the threat back; you and your protectee have a chance to maneuver or flee.\nOn a miss, you take the full brunt of the blow intended for your protectee, and the threat has you where it wants you.";
        readonly source: "arbiter";
    };
    readonly "silent-paws": {
        readonly name: "Silent Paws";
        readonly source: "ranger";
        readonly description: "You are adept at slipping into and out of dangerous situations without anyone noticing. When you **attempt a roguish feat** to sneak or hide, you can mark 2 exhaustion to shift a miss to a 7-9.";
    };
    readonly "slip-away": {
        readonly name: "Slip Away";
        readonly source: "ranger";
        readonly description: "When you **take advantage of an opening to escape from a dangerous situation**, roll with Finesse. On a hit, you get away. On a 10+, choose 1. On a 7-9, choose 2:\n- You suffer injury or exhaustion (GM’s choice) during your escape\n- You end up in another dangerous situation\n- You leave something important behind\nOn a miss, you escape, but it costs you—mark injury or exhaustion, GM’s choice—and you leave ample evidence behind for your foes to track and follow you.";
    };
    readonly "poisons-and-antidotes": {
        readonly name: "Poisons and Antidotes";
        readonly source: "ranger";
        readonly description: "You have expertise in the poisons and antidotes of the Woodland. When you **brew a poison**, mark depletion and say what effect you want it to have: sleep, weakness, inebriation, or death. Any poison you make requires ingestion or injection; you can use the poison on your weapon or put it in your target’s food or drink. When you **study a poison or its effects to make an antidote**, the GM will tell you what special ingredient you’ll need. Get the ingredient and mark 1 depletion to brew the antidote.";
    };
    readonly forager: {
        readonly name: "Forager";
        readonly source: "ranger";
        readonly description: "When you travel or pass into a forest, before making any travel move, you can clear your choice of:\n- Up to 3-depletion\n- Up to 2-exhaustion\n- Up to 2-injury";
    };
    readonly "threatening-visage": {
        readonly name: "Threatening Visage";
        readonly source: "ranger";
        readonly description: "When you persuade an NPC with open threats or naked steel, roll with Might instead of Charm.";
    };
    readonly "dirty-fighter": {
        readonly name: "Dirty Fighter";
        readonly source: "ranger";
        readonly description: "Take two of the following weapon skills: *Trick Shot*, *Confuse Senses*, *Improvise Weapon*, *Disarm*, *Vicious Strike*. None of the skills you take with this move count against your maximum for advancement.";
    };
    readonly arsonist: {
        readonly name: "Arsonist";
        readonly source: "scoundrel";
        readonly description: "When you **wreck something** with flagrantly dangerous means (explosives, uncontrolled flame, etc.), roll with Luck instead of Might.";
    };
    readonly "create-to-destroy": {
        readonly name: "Create to Destroy";
        readonly source: "scoundrel";
        readonly description: "When you use **available materials to rig up a dangerous device**, roll with Finesse. On a hit, you cobble together something that will do what you want, one time. On a 10+, choose one. On a 7-9, choose two. The device is:\n- more dangerous than intended\n- larger or more unwieldy than intended\n- more temperamental and fragile than intended\nOn a miss, you need some vital component to finish it; the GM will tell you what.";
    };
    readonly "its-a-distraction": {
        readonly name: "It's a Distraction!";
        readonly source: "scoundrel";
        readonly description: "You gain the roguish feat *Blindside* (it does not count against your maximum for advancement). When you **attempt a roguish feat** to blindside someone while they are distracted by environmental dangers (a raging fire, an oncoming flood, etc.), roll with Luck instead of Cunning.";
    };
    readonly daredevil: {
        readonly name: "Daredevil";
        readonly source: "scoundrel";
        readonly description: "You’re at your luckiest when you go into danger without hesitation. When you **dive into a dangerous situation without forethought or planning**, treat yourself as having “Luck Armor,” with 1 box of wear (remember, armor is only “destroyed” when you would mark another box of wear, and all its boxes are full). The “Luck armor” automatically goes away once the danger has passed, and the next time you would have “Luck armor,” you gain it as if it was brand new with clear boxes.";
    };
    readonly "danger-mask": {
        readonly name: "Danger Mask";
        readonly source: "scoundrel";
        readonly description: "You have a mask or outfit you wear when you go about your most destructive work—more of a calling card, an identifier of “the real you,” than a disguise. Treat it as a piece of equipment with two boxes of wear. While you have your mask on, any notoriety you gain is doubled, any prestige you gain is halved, and take +1 to **trust fate** and all Scoundrel playbook moves. If your mask is ever taken from you, mark exhaustion. If your mask is ever destroyed, mark 4-exhaustion. If your mask is destroyed, you can make a new mask when time passes.";
    };
    readonly "better-lucky-than-good": {
        readonly name: "Better Lucky than Good";
        readonly source: "scoundrel";
        readonly description: "When you **use a weapon move (basic or skilled)**, mark exhaustion to roll with Luck instead of the listed stat.";
    };
    readonly "breaking-and-entering": {
        readonly name: "Breaking and Entering";
        readonly source: "thief";
        readonly description: "When you **attempt roguish feats** to get into or out of a place you’ve previously been, you can mark exhaustion to make the move as if you had rolled a 10+, instead of rolling.";
    };
    readonly "disappear-into-the-dark": {
        readonly name: "Disappear Into the Dark";
        readonly source: "thief";
        readonly description: "When you **slip into shadows while unnoticed**, mark exhaustion and hold 1. As long as you remain quiet, move slowly, and hold 1 for this move, you will remain hidden. If you inadvertently reveal yourself, lose your hold. Spend your hold to reveal yourself from a darkened place, suddenly and without warning. If you attack someone immediately after spending the hold, take +3 on the roll.";
    };
    readonly "rope-a-dope": {
        readonly name: "Rope-a-dope";
        readonly source: "thief";
        readonly description: "When you **evade and dodge your enemy so as to tire them out**, roll with Finesse. On a hit, you can mark exhaustion to make them mark 2-exhaustion. On a 10+, you can mark exhaustion to make them mark 3-exhaustion. On a miss, they catch you in the middle of a dodge—you’re at their mercy.";
    };
    readonly "small-hands": {
        readonly name: "Small Hands";
        readonly source: "thief";
        readonly description: "When you **grapple** with an enemy larger than you, roll with Finesse instead of Might. On a miss, they overpower you—you’re at their mercy.";
    };
    readonly "master-thief": {
        readonly name: "Master Thief";
        readonly source: "thief";
        readonly description: "Take +1 Finesse (max +3).";
    };
    readonly "nose-for-gold": {
        readonly name: "Nose for Gold";
        readonly source: "thief";
        readonly description: "When you **figure someone out**, you can always ask (even on a miss):\n- what is the most valuable thing they are carrying?\nWhen you **read a tense situation**, you can always ask (even on a miss):\n- what is the most valuable thing here?";
    };
    readonly toolbox: {
        readonly name: "Toolbox";
        readonly source: "tinker";
        readonly description: "You have a kit of tools and supplies with which you work on long-term projects. Choose two features:\n*assorted scrap wood, assorted gears and springs, esoteric hand tools, manuals, assorted medicines, portable alchemy kit, sewing kit, cookware, minor explosives*\nChoose one drawback:\n*heavy (counts as 2 Load instead of 1), bulky & obvious, stolen, fragile*\nWhen you **open up your toolkit and dedicate yourself to making a thing or to getting to the bottom of something**, decide what and tell the GM. The GM will give you between 1 to 4 conditions you must fulfill to accomplish your goal, including time taken, materials needed, help needed, facilities/tools needed, or the limits on the project. When you **accomplish the conditions**, you accomplish the goal.";
    };
    readonly repair: {
        readonly name: "Repair";
        readonly source: "tinker";
        readonly description: "When you **repair destroyed personal equipment with your toolbox**, the GM will set one condition as per the toolbox move. Fulfill it, and clear all wear for that equipment. When you **repair damaged personal equipment with your toolkit**, you do it as long as you spend depletion or value, 1 for 1, for each box of wear you clear.";
    };
    readonly "big-pockets": {
        readonly name: "Big Pockets";
        readonly source: "tinker";
        readonly description: "Take two extra boxes of depletion.";
    };
    readonly "jury-rig": {
        readonly name: "Jury Rig";
        readonly source: "tinker";
        readonly description: "When you **create a makeshift device on the fly**, roll with Cunning. On a hit, you create a device that works once, then breaks. On a 10+, choose one:\n- It works exceptionally well\n- You get an additional use out of it\nOn a miss, the device works, but it has an unintended side effect that the GM will reveal when you use it.";
    };
    readonly "nimble-mind": {
        readonly name: "Nimble Mind";
        readonly source: "tinker";
        readonly description: "When you **attempt roguish feats** involving mechanisms or locks, mark depletion to roll with Cunning instead of Finesse.";
    };
    readonly dismantle: {
        readonly name: "Dismantle";
        readonly source: "tinker";
        readonly description: "When you **dismantle a broken or disabled piece of equipment or machinery**, clear 2 depletion boxes.";
    };
    readonly instigator: {
        readonly name: "Instigator";
        readonly source: "vagrant";
        readonly description: "When you **trick an NPC** into fighting another NPC, you can remove one option from the 7-9 list—they cannot choose that option instead of doing what you want.";
    };
    readonly "pleasant-facade": {
        readonly name: "Pleasant Facade";
        readonly source: "vagrant";
        readonly description: "When you **suck up to or otherwise butter up an unsuspecting NPC**, roll with Charm. On a 10+, hold 3. On a 7-9, hold 2. Spend your hold 1 for 1 to deflect their suspicion or aggression away from you onto someone or something else. On a miss, your attempts at flattery are suspicious—they’re going to keep their eye on you.";
    };
    readonly "desperate-smile": {
        readonly name: "Desperate Smile";
        readonly source: "vagrant";
        readonly description: "When you **trust fate** to see you through by begging, pleading, or abasing yourself, roll with Charm instead of Luck.";
    };
    readonly "charm-offensive": {
        readonly name: "Charm Offensive";
        readonly source: "vagrant";
        readonly description: "When you **play upon an enemy’s insecurities, concerns, or fears to distract them with words during a fight**, roll with Cunning. On a hit, you create an opening for yourself—make any available weapon move against them at +1, or strike quickly and deal injury to them. On a 7-9, you also tick them off; they aren’t listening to you anymore, no matter what you do, until the situation drastically changes. On a miss, you infuriate them—they come at you, hard, and you’re not prepared.";
    };
    readonly "lets-play": {
        readonly name: "Let's Play";
        readonly source: "vagrant";
        readonly description: "When you **play a game of skill and wit to loosen another’s tongue**, roll with Charm. On a hit, they let slip something useful or valuable. On a 7-9, you have to lose the game to get them there; mark one depletion. On a miss, they’re better than you ever thought; either mark one depletion and cut your losses, or mark three depletion and they’ll start talking.";
    };
    readonly "pocket-sand": {
        readonly name: "Pocket Sand";
        readonly source: "vagrant";
        readonly description: "Take the weapon skill Confuse Senses. This does not count against the maximum number of weapon skills you can take. When you **throw something to confuse an opponent’s senses at close or intimate range**, roll with Cunning instead of Finesse.";
    };
    readonly "sterling-reputation": {
        readonly name: "Sterling Reputation";
        readonly source: "adventurer";
        readonly description: "Whenever you **mark any amount of prestige with a faction**, mark one additional prestige. When you **mark any amount of notoriety with a faction**, you can instead clear an equivalent amount of marked prestige.";
    };
    readonly "subduing-strikes": {
        readonly name: "Subduing Strikes";
        readonly source: "adventurer";
        readonly description: "When you **aim to subdue an enemy quickly and nonlethally**, you can **engage sword to sword** with Cunning instead of Might. You cannot choose to inflict serious harm if you do.";
    };
    readonly "talon-on-the-pulse": {
        readonly name: "Talon on the Pulse";
        readonly source: "adventurer";
        readonly description: "When you gather information about the goings-on in a clearing, roll with Cunning. On a 10+, ask 3. On a 7-9, ask 2.\n- Who holds power in this clearing?\n- Who is the local dissident?\n- What are the denizens afraid of?\n- What do the denizens hope for?\n- What opportunities exist for enterprising vagabonds?\nOn a miss, your questions tip off someone dangerous.";
    };
    readonly orator: {
        readonly name: "Orator";
        readonly source: "adventurer";
        readonly description: "When you **give a speech to interested denizens of a clearing**, say what you are motivating them to do and roll with Charm. On a hit, they will move to do it as they see fit. On a 10+, choose 2. On a 7-9, choose 1.\n- They don’t try to take your intent too far\n- They don’t disband at the first sign of real resistance\n- They don’t demand you stand at their head and lead\nOn a miss, they twist your message in unpredictable ways.";
    };
    readonly "well-read": {
        readonly name: "Well-Read";
        readonly source: "adventurer";
        readonly description: "Take +1 Cunning (max +3).";
    };
    readonly "fast-friends": {
        readonly name: "Fast Friends";
        readonly source: "adventurer";
        readonly description: "When you try to **befriend an NPC you’ve just met by matching their personality**, body language, and desires, mark exhaustion and roll with Cunning. On a hit, they’ll look upon you favorably—ask them any one non-compromising question and they’ll answer truthfully, or request a simple favor and they’ll do it for you. On a 10+, they really like you—they’ll share a valuable secret or grant you a serious favor instead. On a miss, you read them totally wrong, and their displeasure costs you.";
    };
    readonly "cross-country": {
        readonly name: "Cross Country";
        readonly source: "harrier";
        readonly description: "Take one extra box of exhaustion. When **your exhaustion track is full and you must mark exhaustion**, you may choose to mark an equivalent amount of injury instead of being removed from the situation or going unconscious.";
    };
    readonly "fleet-of-foot-and-hand": {
        readonly name: "Fleet of Foot and Hand";
        readonly source: "harrier";
        readonly description: "Take +1 Finesse (max +3).";
    };
    readonly "dont-shoot-the-messenger": {
        readonly name: "Don't Shoot the Messenger";
        readonly source: "harrier";
        readonly description: "Take the Counterfeit roguish feat. (It does not count against your maximum.) When you pretend to be an innocuous messenger carrying a missive of import to **trick** someone, roll with Luck instead of Cunning.";
    };
    readonly parkour: {
        readonly name: "Parkour";
        readonly source: "harrier";
        readonly description: "When you **dash your way through a chaotic scene or fight**, roll with Finesse. On a 10+, hold 3. On a 7-9, hold 2. Spend your hold 1-for-1 to dash to something within sight and reach without being stopped, or to dash away from something nearby without being stopped. You can dash away from an enemy even at the moment they attack. On a miss, your surroundings trip you up, and you’re caught in place while danger closes in.";
    };
    readonly "traveller-extraordinaire": {
        readonly name: "Traveller Extraordinaire";
        readonly source: "harrier";
        readonly description: "When you **travel along the paths to another clearing**, you can always give +1 to the roll or clear 2-exhaustion, your choice. When you **travel through the forest to another clearing**, you can always give +1 to the roll or clear 2-depletion, your choice. In both cases, before you arrive at the next clearing, you can ask the GM any two questions about the next clearing, based on what you remember from your last time through.";
    };
    readonly "smugglers-path": {
        readonly name: "Smuggler's Path";
        readonly source: "harrier";
        readonly description: "You’ve got a good sense for finding secret paths and doors. When you **spend time looking for a secret way in or out of a place that might have one**, mark exhaustion and roll with Luck. On a hit, you find a hidden path—the GM will detail it and to where it leads. On a 10+, there’s something along or inside the path of value to you—the GM will tell you what. On a miss, you find a secret path...and someone else is using it right this second. They probably won’t be happy you found their secret.";
    };
    readonly "always-armed": {
        readonly name: "Always Armed";
        readonly source: "ronin";
        readonly description: "Take the weapon skill Improvise a Weapon (it does not count against your limit). When you deal harm with an improvised weapon, deal +1 harm.";
    };
    readonly "knowing-a-lords-will": {
        readonly name: "Knowing a Lord's Will";
        readonly source: "ronin";
        readonly description: "When you **figure out** a denizen of status, authority, or power, roll with Might instead of Charm. When you **trick** a denizen of status, authority, or power by playing subordinate, roll with Might instead of Cunning.";
    };
    readonly "well-mannered": {
        readonly name: "Well-Mannered";
        readonly source: "ronin";
        readonly description: "When you **enter a social environment dependent on manners and etiquette**, roll with Cunning. On a 10+, hold 3. On a 7-9, hold 2. Lose all hold when you leave or when social rules fall apart. Spend hold 1-for-1 to:\n- Cover up a social faux pas on behalf of you or an ally; clear 1 exhaustion.\n- Call out someone else’s social faux pas; inflict 1-morale harm on them.\n- Charm someone; take +1 ongoing to speak to them while you have hold.\n- Demonstrate your value; mark prestige with a powerful denizen’s faction.\nOn a miss, the rules of etiquette here are far different from what you expected; mark exhaustion as you commit a gravely impolite error.";
    };
    readonly fealty: {
        readonly name: "Fealty";
        readonly source: "ronin";
        readonly description: "When you **commit yourself to the cause of someone you deem worthy**, swear an oath to them stating what task you will complete on their behalf. Mark exhaustion to reroll a move made in pursuit of that task. You cannot commit yourself to another cause until you accomplish the first, or break your oath. If you break your oath, fill your exhaustion track and mark 4 notoriety with the faction whose trust you betrayed. If you fulfill your oath, mark 4 prestige with the faction whose trust you kept.";
    };
    readonly "the-rules-of-war": {
        readonly name: "The Rules of War";
        readonly source: "ronin";
        readonly description: "When you call upon a reasonable foe to uphold a rule of war, roll with Might. On a hit, they feel obliged; choose one below they must follow. On a 7-9, they choose one that you must follow; disobey, and the obligation ends.\n- Show mercy to surrendering foes and prisoners\n- Refrain from underhanded tactics in a fight\n- Face each other without aid, back-up, or assistance\n- Keep the violence away from the unarmed or innocent\n- Fight to surrender or subdual, without retreat\nOn a miss, they feel no obligation to your ideas of war; prepare for a brutal lesson in the rules they adhere to.";
    };
    readonly "always-watching": {
        readonly name: "Always Watching";
        readonly source: "ronin";
        readonly description: "Take +1 Cunning (max +3).";
    };
    readonly "the-worth-of-a-book": {
        readonly name: "The Worth of a Book";
        readonly description: "When you **study your tomes and scrolls to discover old techniques or methods** to solve an intractable problem—curing a deadly disease, ending a drought, legally unseating a leader, etc—decide what you want to change and tell the GM. The GM will give you between 1 to 4 conditions you must fulfill to discover a path forward, including time taken, additional information needed, mentors or translators needed, facilities/tools needed, or the limits of your solution. When you fulfill the conditions, you gain whatever knowledge you were seeking—it’s up to you to put to use.";
        readonly source: "chronicler";
    };
    readonly "an-eye-for-the-real-story": {
        readonly name: "An Eye for the Real Story";
        readonly description: "When you **read a tense situation**, mark an exhaustion—even on a miss—to spot a fellow observer who knows more than you might expect. Take a +1 ongoing to convince them to share their secrets with you when you get them in private.";
        readonly source: "chronicler";
    };
    readonly "search-the-records": {
        readonly name: "Search the Records";
        readonly description: "When you **examine the documents, records, or assorted notes of an important NPC** (your call), roll with Cunning. On a hit, you discover evidence of their secrets; the GM will tell you who would pay for the information you’ve uncovered. On a 10+, you also take a 12+ instead of rolling the next time you try to **figure them out**. On a miss, your search yields terrible news—someone is acting against you or your interests in an unexpected arena.";
        readonly source: "chronicler";
    };
    readonly loremaster: {
        readonly name: "Loremaster";
        readonly description: "When you **consult your knowledge in order to understand a political conflict**, roll with Cunning. On a hit, the GM tells you what information you remember that completes your understanding of the messy situation. On a 10+, you can ask a followup question; the GM will answer honestly. On a miss, something about the situation doesn’t fit the history—the GM will tell you what has radically shifted.";
        readonly source: "chronicler";
    };
    readonly "good-advice": {
        readonly name: "Good Advice";
        readonly description: "When you offer an NPC advice about a sticky situation, offer them the best advice you’ve got and roll with cunning. On a hit, they see the wisdom of your suggestion; they have to mark exhaustion or incorporate your advice into their plans. On a 7-9, you let something about your own plans or allegiances slip as you try to help them out. On a miss, the advice angers or offends them; the GM will tell you what local custom you’ve overstepped with your meddling.";
        readonly source: "chronicler";
    };
    readonly "dedicated-scholar": {
        readonly name: "Dedicated Scholar";
        readonly description: "Take an extra box of exhaustion. When you **acquire a new tome or scroll documenting the history of the Woodland**, clear your exhaustion track.";
        readonly source: "chronicler";
    };
    readonly "known-by-all": {
        readonly name: "Known by All";
        readonly description: "When you **first encounter an important NPC from the faction that exiled you**, you may declare them an old ally—choosing one from the list below instead of meeting someone important—and roll.\n- If they merely know you by your former reputation, take a +1.\n- If you have worked closely with them before, take a +2.\n- If they were a close friend or loyal servitor, take a +3.\nOn a hit, your exile has done little to diminish their respect for you; they offer you whatever comfort and aid they can, even to the point of risking their own reputation and safety. On a 7-9, they can only assist you if they can cover their tracks when you leave; mark as much notoriety with their faction as you added to your roll as they spread a story of the terrible treatment they endured when they met you. On a miss, your attempts to contact your old network only reveal your position and desperation; mark as much notoriety as you added to your roll and those who hunt you will surely be here soon.";
        readonly source: "exile";
    };
    readonly "above-it-all": {
        readonly name: "Above It All";
        readonly description: "When you **trick an NPC** into granting you access or information by pretending to be a high-ranking member of their faction, roll with Charm instead of Cunning.";
        readonly source: "exile";
    };
    readonly "i-bring-you": {
        readonly name: "I Bring You...";
        readonly description: "When you **spend time talking to the denizens of a new clearing**, mark exhaustion to learn what vital resource or fugitive the powers-that-be currently seek. When you deliver a vital resource or prisoner to a faction, you may **ask for a favor** from the faction as if you rolled a 12+. If your reputation with that faction is already +2 or greater, you may instead **sway the NPC** whose cause you most directly benefited with your contribution as if you rolled a 12+.";
        readonly source: "exile";
    };
    readonly "greatest-of-the-age": {
        readonly name: "Greatest of the Age";
        readonly description: "When you engage an enemy in melee, you take all four options and one for double effect when you roll a 12+.";
        readonly source: "exile";
    };
    readonly "born-to-be-a-king": {
        readonly name: "Born to Be a King";
        readonly description: "Take +1 Charm (max +3).";
        readonly source: "exile";
    };
    readonly "fancy-paper": {
        readonly name: "Fancy Paper";
        readonly description: "You gain the roguish feat Counterfeit (it does not count against your maximum for advancement). When you **attempt a roguish feat** to produce counterfeit documents using your intimate knowledge of your home faction’s politics and procedures, mark notoriety with that faction to make the move as if you had rolled a 12+.";
        readonly source: "exile";
    };
    readonly "word-on-the-street": {
        readonly name: "Word on the Street";
        readonly description: "When you **spend time in a clearing talking with locals**, roll with Finesse. On a hit, you catch wind of a nearby unexplored wonder or ruin; someone promises to take you to it for a fair fee (1-value). On a 7-9, the dangers make their price steeper—an additional 1-value of coin or gear. On a miss, the location is under threat—soon it will be plundered, destroyed, or claimed by another power.";
        readonly source: "seeker";
    };
    readonly "never-lost": {
        readonly name: "Never Lost";
        readonly description: "Take two additional boxes of injury and depletion you can mark when you confront dangers within a ruin and a +1 ongoing to **trusting fate** and **performing roguish feats** while exploring such ancient locales.";
        readonly source: "seeker";
    };
    readonly "treasurer-hunter": {
        readonly name: "Treasurer Hunter";
        readonly description: "When you **sell the treasures you found in a ruin at market**, roll with Cunning. On a hit, you find some buyers. On a 7-9, take 1. On a 10+, both:\n- you get a good price; you get double what such findings are usually worth\n- you are popular; mark two prestige with the controlling faction\nOn a miss, someone powerful takes offense at your plunder of local sites.";
        readonly source: "seeker";
    };
    readonly "adventurer-contract": {
        readonly name: "Adventurer Contract";
        readonly description: "When you **try to convince a powerful NPC to supply an exploratory adventure**, roll with Cunning. On a hit, they give you 8-value in resources and depletion—but you must fulfill a request. On a 10+, they ask for something general—more riches, information, a prize or trophy. On a 7-9, they want something specific—a singular treasure, secret knowledge, a lost ritual. On a miss, they mount a competing expedition based on what you have told them.";
        readonly source: "seeker";
    };
    readonly "watch-the-signs": {
        readonly name: "Watch the Signs";
        readonly description: "When you first **attune yourself to a ruin or mysterious site by taking in its signs**, symbols, particular traits, and layout, roll with Cunning. On a 10+, hold 3. On a 7-9, hold 2. On a miss, you may mark an exhaustion to hold 1. While within that ruin or mysterious site, you can spend your hold 1 for 1 to:Identify the quickest path to the closest valuable treasure or knowledge.\n- Disarm a trap or overcome a natural hazard without cost.\n- Name a character within reach about to suffer harm; you suffer it instead.\n- Name a character in the ruin; you cross the distance to them instantly.\n- Take cover in the ruin; ignore all harm from a single attack or catastrophe";
        readonly source: "seeker";
    };
    readonly "unstable-ground": {
        readonly name: "Unstable Ground";
        readonly description: "When you use a rough or chaotic environment—slippery rocks, a crowded market, etc—to gain an advantage over your opponents in a fight, you can mark exhaustion to **grapple** with them using Finesse instead of Might.";
        readonly source: "seeker";
    };
};
export default moves;
