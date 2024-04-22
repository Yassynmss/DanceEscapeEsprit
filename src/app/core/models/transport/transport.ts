import { Logistic } from "../logistic/logistic";
import { Vehicule } from "../vehicule/vehicule";

export class Transport {
    id_transport !: number;
    route!: string;
    description!: string;
    startLocation!: string;
    endLocation!: string;
    logistic!: Logistic;
    vehiculeList!: Vehicule[];
}
