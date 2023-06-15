import { Component, OnInit } from '@angular/core';
import { ExpertDTO } from 'src/app/expert-dto';
import { ExpertoperationService } from 'src/app/expertoperation.service';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent  {

 
 // hotel:HotelDTO=new HotelDTO(0,'','','','',0,'','',0,'','');
 allExpert:ExpertDTO[]=[];

 // allRooms:RoomDto[]=[];
 // allReviews: HotelReviewDto  [] = [];
 a=0;
 // reviewForHotel=0;
 // showReview:boolean=false;
 
 constructor(private expertServive:ExpertoperationService ){
  
 }




 

 getByspecialization(specialization:string){
   this.expertServive.getExpertByspecialization(specialization).subscribe(
     data=>{
       console.log("data :- "+data);
       
       this.allExpert = data;
     },err=>{
       console.log("error from spring ",err);
 
     } 
   );
   }

 
 
 }


