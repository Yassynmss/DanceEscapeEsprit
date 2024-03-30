import { User } from "./user";

export class DancersGroup {
    groupID?: number;
    groupName?: string;
    groupDescription?: string;
    members?: string; 
    users?: User[]; 
}