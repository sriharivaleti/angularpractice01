import { Component} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  users =['Jyostna','Akshu','Sreehari'];
  employees = [{name:'sreehari',desig:'engineer'},{name:'jyostns',desig:'trainee'}]
  constructor() { }



}
