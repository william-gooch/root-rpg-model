import { Harm } from "../character";
import { RoguishFeat, WeaponSkill } from "../model";
import playbooks, { Stat } from "./playbook";

export interface Move {
  name: string;
  description: string;
  source: keyof typeof playbooks;
  effects?: {
    stats?: {
      [stat in Stat]?: number
    },
    harm?: {
      [harm in keyof Harm]?: number
    },
    weaponSkills?: {
      [skill in WeaponSkill]?: boolean
    },
    roguishFeats?: {
      [feat in RoguishFeat]?: boolean
    }
  }
}

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
} as const;

export default moves;