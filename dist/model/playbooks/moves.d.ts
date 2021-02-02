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
};
export default moves;
