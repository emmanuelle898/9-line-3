


export type PrecedenceType = {
    PRIORITY?: string;
    URGENT?: string;
    URGENT_SURGICAL?: string;
    ROUTINE?: string;
    CONVENIENCE?: string;
};

export type NineLine = {
    id?: number;
    location: string;
    callSign: string;
    precedenceCounters: PrecedenceType; // Matches your "precedenceCounters" key
    specialEquipment: string[];
    litterPatient: string;
    ambulatoryPatient: string;
    security: string;
    markings: string[];
    patientStatus: string;
    contamination: string;
};