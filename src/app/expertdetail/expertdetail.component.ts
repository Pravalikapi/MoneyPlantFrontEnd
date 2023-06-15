import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpertDTO } from '../expert-dto';
import { ExpertoperationService } from '../expertoperation.service';

@Component({
  selector: 'app-expertdetail',
  templateUrl: './expertdetail.component.html',
  styleUrls: ['./expertdetail.component.css']
})
export class ExpertdetailComponent  {

  
  hotel:ExpertDTO=new ExpertDTO('','',0,0,'','','');
  allExpert:ExpertDTO[]=[];
  router:Router;
  constructor(private expertServive:ExpertoperationService,router:Router,private activatedRouter:ActivatedRoute ){
    this.router=router;
  }

  ngOnInit(): void {
  }

  getAllExperts(){
  this.expertServive.getAllExpertsFromSpring().subscribe(
    data=>{
      console.log("data :- "+data);
      
      this.allExpert = data;
    },err=>{
      console.log("error from spring ",err);

    } 
  );

  }

  
  
}



