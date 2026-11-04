import {Precedence} from "@/components/Precedence";
type PrecedenceType = typeof Precedence[keyof typeof Precedence];


export type NineLine = {
    id?: number;
    location: string;
    callSign: string;
    precedence: PrecedenceType

};