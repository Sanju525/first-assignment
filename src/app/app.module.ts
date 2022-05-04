import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WarningalertComponent} from "./warningalert/warningalert.component";
import { SuccessalertComponent } from './successalert/successalert.component';

@NgModule({
  declarations: [
    WarningalertComponent,
    AppComponent,
    SuccessalertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
