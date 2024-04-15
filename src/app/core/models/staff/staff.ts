export enum Job {
    TECHNICAL_SONG, 
    ENGINEER_SONG, 
    SECURITY, 
    NURSE, 
    DOCTOR, 
    CLEANER,MAKEUP_ARTIST,TECHNICAL,COACH,DANCE_COACH,ENGINEER,RH,DJ,ORGANIZER,DRIVER,CHIEF
  }
  
  export interface Staff {
    id_staff: number;
    name: string;
    job: Job;
    DateOfBirth: Date;
    number:number;
    email:string;
    
  }
  