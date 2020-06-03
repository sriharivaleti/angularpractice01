import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { WarningAlertComponent } from './warningalert/warningalert.component';

import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { WeekdaysComponent } from './weekdays/weekdays.component';
import { IndiaModuleModule } from './india-module/india-module.module';
import { IndiaComponent } from './india/india.component';
import { USAComponent } from './usa/usa.component';
import { UsaModuleModule } from './usa-module/usa-module.module';


@NgModule({
  declarations: [
    AppComponent,
    SuccessalertComponent,
    WarningAlertComponent,
    UsersComponent,
    WeekdaysComponent,
    IndiaComponent,
    USAComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IndiaModuleModule,
    UsaModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
