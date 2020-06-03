import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName ="";
  lastName  ="";
  isActive =false;
  userName ="Jyostna";
  passWord = "Password";
  displayDetails =false;

  evenlist = false;
  oddlist = false;

  evenlist2 = false;
  oddlist2 = false;


  color = 'pink';
  size = 16;
  displayText = 'show-class';
  visible = true;

  constructor(){
    this.firstName ="Jyostna";
    this.lastName  ='Jijjarapu';
  }

  changeDisplyDetails(){
    this.displayDetails = !this.displayDetails;
  }

  displayEvenList(){
    this.evenlist = true;
   if( this.evenlist)
   this.oddlist = false;


  }

  displayOddList(){
    this.oddlist = true;
    if( this.oddlist)
    this.evenlist = false;

  }


  displayEvenList2(){
    this.evenlist2 = true;
   if( this.evenlist2)
   this.oddlist2 = false;


  }

  displayOddList2(){
    this.oddlist2 = true;
    if( this.oddlist2)
    this.evenlist2 = false;

  }

  toggle() {
    this.visible = !this.visible;
    //this.displayText = this.visible ? 'show-class' : 'hide-class';
  }

}
