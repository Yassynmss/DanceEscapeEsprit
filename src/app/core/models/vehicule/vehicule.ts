import { Transport } from "../transport/transport";




  export enum type_vehicule {
    BUS,TRACK,CAR,MOTORBIKE
    }
export class Vehicule {
    id_vehicule !: number;
    name_vehicule!: string;
    matricule!: string;
    type!: type_vehicule;  // Vous pouvez changer le type en fonction de vos besoins
    etat!: string;
  image!: string;
    transport!: Transport;
}
