import { User } from "./user";

export class DancersGroup {
    groupID: number;
    groupName: string;
    groupDescription: string;
    members: string; 
    creationDate: Date; 
    users: User[]; 
  
    constructor() {
      this.groupID = 0; 
      this.groupName = ''; 
      this.groupDescription = ''; 
      this.members = '';
      this.creationDate = new Date(); 
      this.users = []; 
    }
  }
  