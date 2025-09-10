import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component'; // 👈 add this

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent // 👈 register the navbar
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LandingComponent },
      { path: 'about', component: LandingComponent }, // temporary until AboutComponent exists
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
