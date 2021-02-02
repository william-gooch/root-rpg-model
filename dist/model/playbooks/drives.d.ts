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
};
export default drives;
