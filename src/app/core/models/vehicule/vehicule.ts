import { Transport } from "../transport/transport";




  export enum type_vehicule {
    BUS,TRACK,CAR,MOTORBIKE
    }
export class Vehicule {
    id_vehicule !: number;
    name_vehicule!: string;
    matricule!: string;
    type!: type_vehicule;  
    etat!: string;
  
    id_transport !:number;
}