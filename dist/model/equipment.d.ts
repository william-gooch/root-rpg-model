import { WeaponSkill } from "./model";
export interface EquipmentTag {
    name: string;
    description: string;
    negative?: boolean;
}
export declare const equipmentTags: EquipmentTag[];
export declare type TagName = typeof equipmentTags[number]["name"];
export declare type WeaponRange = "Intimate" | "Close" | "Far";
export interface EquipmentItem {
    name: string;
    wear: {
        max: number;
        current: number;
    };
    load: number;
    range: WeaponRange[];
    skillTags: WeaponSkill[];
    tags: TagName[];
}
export declare const defaultEquipment: EquipmentItem[];
export declare const getItemValue: (item: EquipmentItem) => number;
