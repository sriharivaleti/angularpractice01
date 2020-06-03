import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewYorkComponent } from '../new-york/new-york.component';
import { WashingtonComponent } from '../washington/washington.component';



@NgModule({
  declarations: [NewYorkComponent,WashingtonComponent],
  imports: [
    CommonModule
  ],
  exports:  [NewYorkComponent,WashingtonComponent]
})
export class UsaModuleModule { }
