import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignaturePadComponent } from './_componets/signature-pad/signature-pad.component';


import { AppService } from 'src/shared';


@NgModule({
  declarations: [
    AppComponent,
    SignaturePadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ 
    { provide: 'windowObject', useValue: window},
    AppService
  ]
  bootstrap: [AppComponent]
})
export class AppModule { }
