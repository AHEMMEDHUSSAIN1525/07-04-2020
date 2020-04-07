import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap';
import { ClassComponent } from './class/class.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
