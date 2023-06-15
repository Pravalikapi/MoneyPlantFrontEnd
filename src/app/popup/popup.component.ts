import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserDTO } from '../user-dto';
import { UseroperationService } from '../useroperation.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent  {
  today: string = new Date().toISOString().slice(0, 10);
  model:  User = new  User(0,'','','',0);
  submitted = false;
  success = false;
  error = false;
  

  status = false;
  message = '';
  router:Router;
  allUsers: UserDTO[]=[];
   allreviews: UserDTO[]=[];
  constructor(private userService:UseroperationService,router:Router,private activatedRouter:ActivatedRoute) {
    this.router=router;
  }
 


  onSubmit() {
    this.userService.addUser(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="User submitted";

      },
      error=>{

      }
      
      

    );
   

 
  }
}
  
     
    
    
  