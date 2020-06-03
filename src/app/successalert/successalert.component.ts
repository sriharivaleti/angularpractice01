import { Component } from '@angular/core';

@Component({
  selector: 'app-successalert',
 // templateUrl: './successalert.component.html',
 template:`
 <h1 class='success'>
  successalert works!
</h1>
 `,
 // styleUrls: ['./successalert.component.css']
  styles : [
   `
    .success {
        border: 1px solid green;
      }
   `,
   '.success{color:green; font-weight : 10px}'

  ]
})
export class SuccessalertComponent  {

  constructor() { }



}
