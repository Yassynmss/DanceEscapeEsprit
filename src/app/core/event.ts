import { Type_event } from "./eventenum";

export class Event{
    id_event! : number;
    date_event!:Date;
    name_event!:string;
    theme_event!:string;
    location_event!:string;
    regulations!:string;
    nb_competitions!:number;
    sales_counters_event!:string;
    public_capacity!:number;
    sound_system_event!:string;
    typeevent!: Type_event
    kids!:boolean;
}