export interface Drive {
    name: string;
    description: string;
}
declare const drives: {
    readonly justice: {
        readonly name: "Justice";
        readonly description: "Advance when you achieve justice for someone wronged by a powerful, wealthy, or high-status individual.";
    };
    readonly principles: {
        readonly name: "Principles";
        readonly description: "Advance when you express or embody your moral principles at great cost to yourself or your allies.";
    };
    readonly loyalty: {
        readonly name: "Loyalty";
        readonly description: "You’re loyal to someone; name them. Advance when you obey their order at a great cost to yourself.";
    };
    readonly protection: {
        readonly name: "Protection";
        readonly description: "Name your ward. Advance when you protect them from significant danger, or when time passes and your ward is safe.";
    };
    readonly discovery: {
        readonly name: "Discovery";
        readonly description: "Advance when you encounter a new wonder or ruin in the forests.";
    };
    readonly freedom: {
        readonly name: "Freedom";
        readonly description: "Advance when you free a group of denizens from oppression.";
    };
    readonly revenge: {
        readonly name: "Revenge";
        readonly description: "Name your foe. Advance when you cause significant harm to them or their interests.";
    };
    readonly chaos: {
        readonly name: "Chaos";
        readonly description: "Advance when you topple a tyrannical or dangerously overbearing figure or order.";
    };
    readonly thrills: {
        readonly name: "Thrills";
        readonly description: "Advance when you escape from certain death or incarceration.";
    };
    readonly crime: {
        readonly name: "Crime";
        readonly description: "Advance when you illicitly score a significant prize or pull off an illegal caper against impressive odds.";
    };
    readonly infamy: {
        readonly name: "Infamy";
        readonly description: "Advance when you decrease your reputation with any faction.";
    };
};
export default drives;
