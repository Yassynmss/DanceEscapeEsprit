import { User } from "./user";

export class DancersGroup {
    groupID: number;
    groupName: string;
    groupDescription: string;
    members: string; 
    users: User[]; 

    constructor() {
        this.groupID = 0; 
        this.groupName = ''; 
        this.groupDescription = ''; 
        this.members = '';
        this.users = []; 
    }
}
