export interface Drive {
  name: string;
  description: string;
}

const drives = {
  "justice": {
    name: "Justice",
    description: "Advance when you achieve justice for someone wronged by a powerful, wealthy, or high-status individual.",
  },
  "principles": {
    name: "Principles",
    description: "Advance when you express or embody your moral principles at great cost to yourself or your allies.",
  },
  "loyalty": {
    name: "Loyalty",
    description: "You’re loyal to someone; name them. Advance when you obey their order at a great cost to yourself.",
  },
  "protection": {
    name: "Protection",
    description: "Name your ward. Advance when you protect them from significant danger, or when time passes and your ward is safe.",
  },
  "discovery": {
    name: "Discovery",
    description: "Advance when you encounter a new wonder or ruin in the forests.",
  },
  "freedom": {
    name: "Freedom",
    description: "Advance when you free a group of denizens from oppression.",
  },
  "revenge": {
    name: "Revenge",
    description: "Name your foe. Advance when you cause significant harm to them or their interests.",
  },
  "chaos": {
    name: "Chaos",
    description: "Advance when you topple a tyrannical or dangerously overbearing figure or order.",
  },
  "thrills": {
    name: "Thrills",
    description: "Advance when you escape from certain death or incarceration.",
  },
  "crime": {
    name: "Crime",
    description: "Advance when you illicitly score a significant prize or pull off an illegal caper against impressive odds.",
  },
  "infamy": {
    name: "Infamy",
    description: "Advance when you decrease your reputation with any faction.",
  },
  "greed": {
    name: "Greed",
    description: "Advance when you secure a serious payday or treasure.",
  },
  "ambition": {
    name: "Ambition",
    description: "Advance when you increase your reputation with any faction.",
  },
  "clean-paws": {
    name: "Clean Paws",
    description: "Advance when you accomplish an illicit, criminal goal while maintaining a believable veneer of innocence.",
  },
  "wanderlust": {
    name: "Wanderlust",
    description: "Advance when you finish a journey to a clearing.",
  }
} as const;

export default drives;