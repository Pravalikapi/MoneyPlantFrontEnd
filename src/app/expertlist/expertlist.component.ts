import { Component, OnInit } from '@angular/core';
import { Expert } from '../expert';

@Component({
  selector: 'app-expertlist',
  templateUrl: './expertlist.component.html',
  styleUrls: ['./expertlist.component.css']
})
export class ExpertlistComponent  {

  
  e:Expert=new Expert("Pravalika","Stock Market",5,1200,"hotel@gmail.com","876545679","expert1.jpg");
  allExpert:Expert[]=[];
  constructor(){


}
}
