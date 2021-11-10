import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from './user-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  users: User[];
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean;
  editedUser: any = {};

  constructor(private http:HttpClient,private service:UserServiceService) { }



  getUsers(): any {
    return this.service.getUsers();
   }
 
   showEditUserForm(user: User) {
     if (!user) {
       this.userForm = false;
       return;
     }
     this.editUserForm = true;
     this.editedUser = user;
   }
 
   showAddUserForm() {
     if (this.users.length) {
       this.newUser = {};
     }
     this.userForm = true;
     this.isNewUser = true;
 
   }
 
   saveUser(user: User) {
     
      console.log(user)
      this.service.saveUser(user);
     
     this.userForm = false;
   }
 
   updateUser(user: any) {
     console.log(user)
     this.service.updateUser(user);
      
     this.editedUser = {};
   }
 
   removeUser(user: any) {
     console.log(user)
      this.service.deleteUser(user);
      
   }
 
   cancelEdits() {
     this.editedUser = {};
     this.editUserForm = false;
   }
 
   cancelNewUser() {
     this.newUser = {};
     this.userForm = false;
   }

    onSearchUser(event: any) {
      const name = event.target.value;
      if(name.length>2){
        this.users = [];
        this.http.get(`http://localhost:8080/boot/user/getbyname/${event.target.value}`).subscribe((data:any)=>{
         this.users.push(...data)
        });
        this.http.get(`http://localhost:8080/boot/user/getbylastname/${event.target.value}`).subscribe((data:any)=>{
         this.users.push(...data)
        });
      }else if(name.length==0){
        this.http.get('http://localhost:8080/boot/user/getall').subscribe((data:any)=>{
          this.users = data;
        })
      }
      
        
   }
  
   sortAsc(){
    
    this.http.get(`http://localhost:8080/boot/user/sortbyjoiningdate`).subscribe((data:any)=>{
      this.users = data
    })
   }

   SortByBirthDate(){
    
    this.http.get(`http://localhost:8080/boot/user/sortbydate`).subscribe((data:any)=>{
      this.users = data
    })
   }
  
  ngOnInit() {
    this.getUsers().subscribe((data:any)=>{
     this.users=data
     console.log(data)
     
    });
    console.log(this.users)
  }

  

}
