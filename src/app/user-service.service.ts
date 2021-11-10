import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:8080/boot/user/getall');

  }

  saveUser(user:any){
    this.http.post('http://localhost:8080/boot/user/add',user).subscribe((data:any)=>{
        console.log(data)
      
     });
    }

     updateUser(user:any){
      this.http.post(`http://localhost:8080/boot/user/update/${user.userId}`,user).subscribe((data:any)=>{
        console.log(data)
        
       });
      }

     deleteUser(user:any){
      this.http.delete(`http://localhost:8080/boot/user/delete/${user.userId}`).subscribe((data:any)=>{
        console.log(data)
       });
     }

     

}
