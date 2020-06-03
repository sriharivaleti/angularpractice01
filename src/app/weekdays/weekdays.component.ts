import { Component } from '@angular/core';

@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.css']
})
export class WeekdaysComponent  {

  weekdays = [1,2,3,4,5,6,7];


  constructor() { }


}
