// import { Component, OnInit } from '@angular/core';
// import { ExpertDTO } from '../expert-dto';
// import { ExpertoperationService } from '../expertoperation.service';

// @Component({
//   selector: 'app-expertspage',
//   templateUrl: './expertspage.component.html',
//   styleUrls: ['./expertspage.component.css']
// })
// export class ExpertspageComponent {

 
 
//  allExpert:ExpertDTO[]=[];

 
 
 
 
//  constructor(private expertServive:ExpertoperationService ){
  
//  }


//  getByspecialization(specialization:string){
//    this.expertServive.getExpertByspecialization(specialization).subscribe(
//      data=>{
//        console.log("data :- "+data);
       
//        this.allExpert = data;
//      },err=>{
//        console.log("error from spring ",err);
 
//      } 
//    );
//    }

 
 
//  }




import { Component, OnInit } from '@angular/core';
import { ExpertDTO } from '../expert-dto';
import { ExpertoperationService } from '../expertoperation.service';

@Component({
  selector: 'app-expertspage',
  templateUrl: './expertspage.component.html',
  styleUrls: ['./expertspage.component.css']
})
export class ExpertspageComponent implements OnInit {
  allExpert: ExpertDTO[] = [];
  filteredExperts: ExpertDTO[] = [];
  specialization: string = '';

 
  

  
  constructor(private expertService: ExpertoperationService) { }

  ngOnInit(): void {
    this.getAllExperts();
  }

 
  
  getAllExperts(): void {
    this.expertService.getAllExpertsFromSpring().subscribe(
      data => {
        console.log("data: ", data);
        this.allExpert = data;
      },
      err => {
        console.log("error from spring: ", err);
      }
    );
  }
  

  


  filterExpertsBySpecialization(): void {
    if (this.specialization.trim() !== '') {
      this.expertService.getExpertByspecialization(this.specialization).subscribe(
        data => {
          console.log("data: ", data);
          this.filteredExperts = data;
        },
        err => {
          console.log("error from spring: ", err);
        }
      );
    } else {
      this.filteredExperts = [];
    }
  }
}




