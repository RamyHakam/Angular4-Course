import { FirstComponent } from './first/first.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginService } from 'app/Services/login.service';

@NgModule({
  declarations: [
    AppComponent,FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
