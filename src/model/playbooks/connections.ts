export interface Connection {
  name: string;
  description: string;
}

const connections = {
  "protector": {
    name: "Protector",
    description: "When they are in reach, mark exhaustion to take a blow meant for them. If you do, take +1 ongoing to weapon moves for the rest of the scene.",
  },
  "partner": {
    name: "Partner",
    description: "When you fill in this connection, you each mark 2-prestige with the faction you helped, and mark 2-notoriety with the faction you harmed. During play, if you are spotted together, then any prestige or notoriety gains with those factions are doubled for the two of you.",
  },
  "watcher": {
    name: "Watcher",
    description: "When you **figure them out**, you always hold 1, even on a miss. When you **plead with them to go along with you**, you can let them clear 2-exhaustion instead of 1."
  },
  "friend": {
    name: "Friend",
    description: "When you **help** them, you can mark 2-exhaustion to give a +2, instead of 1-exhaustion for a +1.",
  },
} as const;

export default connections;