export class ExpertDTO {


   // expertId:number;
   expertName:string;
   specialization:string;
   experience: number;
   fees:number;
   emailId:string;
   phoneNumber:string;
   imageName:string;

   constructor(
       // expertId:number,
   expertName:string,
   specialization:string,
   experience: number,
   fees:number,
   emailId:string,
   phoneNumber:string,
   imageName:string
   ){
       // this.expertId=expertId;
   this.expertName=expertName;
   this.specialization=specialization;
   this.experience=experience;
   this.emailId=emailId;
   this.phoneNumber=phoneNumber;
   this.fees=fees;
   this.imageName=imageName;
   
   }
   
}



  



