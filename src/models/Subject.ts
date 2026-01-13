
export type Level = "PRIMARY" | "SECONDARY" | "HIGH_SCHOOL" | "VOCATIONAL" | "UNIVERSITY";

export default interface Subject{
    name: string;
    level: Level;
    id: number;

}

