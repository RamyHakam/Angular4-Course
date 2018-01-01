import { routes } from './app.routes';
import { FirstComponent } from './first/first.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginService } from 'app/Services/login.service';
import { OtherComponent } from './other/other.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,FirstComponent, OtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
