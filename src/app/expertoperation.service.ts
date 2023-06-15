import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expert } from './expert';
import { ExpertDTO } from './expert-dto';

@Injectable({
  providedIn: 'root'
})
export class ExpertoperationService {

  baseURL:string = 'http://localhost:2004';
  addExpert=this.baseURL+'/expert/add';
  expertByspecialization:string=this.baseURL+'/expert/specialization';
  allExpert:string = this.baseURL+'/expert/experts';
  

  constructor(private http:HttpClient) { 
    //console.log("Inside Constructor "+this.hotelByCityEndPoint);
  }
  
  
  endpoint=this.baseURL+'/expert/add'

  createExpert(expert:Expert):Observable<ExpertDTO>
  {
    
    console.log('Expert Service - Create Expert called '+Expert);
    return this.http.post<ExpertDTO>(`${this.endpoint}`,expert);
  }

  getExpertByspecialization(specialization:string):Observable<ExpertDTO[]>{
    console.log("Inside Method 1 "+this.expertByspecialization);
    this.expertByspecialization=this.expertByspecialization+'/'+specialization;
    console.log("After adding city  "+this.expertByspecialization);
    

    return this.http.get<ExpertDTO[]>(`${this.expertByspecialization}`);
  }

  getAllExpertsFromSpring():Observable<ExpertDTO[]>
  {
    console.log("inside service : "+this.allExpert);
      return this.http.get<ExpertDTO[]>(`${this.allExpert}`);
  }
  

}//end class




// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Expert } from './expert';
// import { ExpertDTO } from './expert-dto';

// @Injectable({
//   providedIn: 'root'
// })
// export class ExpertoperationService {

//   baseURL:string = 'http://localhost:2004';
//   addExpert=this.baseURL+'/expert/add';
//   expertByspecialization:string=this.baseURL+'/expert/specialization';
//   allExpert:string = this.baseURL+'/expert/experts';
  

//   constructor(private http:HttpClient) { 
//     //console.log("Inside Constructor "+this.hotelByCityEndPoint);
//   }
  
  
//   endpoint=this.baseURL+'/expert/add'

//   createExpert(expert:Expert):Observable<ExpertDTO>
//   {
    
//     console.log('Expert Service - Create Expert called '+Expert);
//     return this.http.post<ExpertDTO>(`${this.endpoint}`,expert);
//   }

//   // getExpertByspecialization(specialization:string):Observable<ExpertDTO[]>{
//   //   console.log("Inside Method 1 "+this.expertByspecialization);
//   //   this.expertByspecialization=this.expertByspecialization+'/'+specialization;
//   //   console.log("After adding specialization  "+this.expertByspecialization);
    

//   //   return this.http.get<ExpertDTO[]>(`${this.expertByspecialization}`);
//   // }



//   getExpertByspecialization(specialization: string): Observable<ExpertDTO[]> {
//     console.log("Inside Method 1 " + this.expertByspecialization);
  
//     const endpoint = `${this.expertByspecialization}/${specialization}`; // Create a new endpoint for each call
//     console.log("Endpoint: " + endpoint);
  
//     return this.http.get<ExpertDTO[]>(endpoint);
//   }
  

//   getAllExpertsFromSpring():Observable<ExpertDTO[]>
//   {
//     console.log("inside service : "+this.allExpert);
//       return this.http.get<ExpertDTO[]>(`${this.allExpert}`);
//   }
  

// }//end class

