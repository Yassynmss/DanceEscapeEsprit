import { Logistic } from "../logistic/logistic";

export class Equipment {
    id_equipment !: number;
    name_equipment!: string;
    quantity!: number;
    etat!: string;
    logistic!: Logistic;
}
