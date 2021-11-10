import { DatePipe } from "@angular/common";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    address:string;
    pincode:number;
    joiningDate:Date
    dateOfbirth:Date

}
