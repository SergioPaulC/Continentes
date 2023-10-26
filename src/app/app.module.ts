import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinentsComponent } from './views/continents/continents.component';
import { CitiesComponent } from './views/cities/cities.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './views/navbar/navbar.component';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { FooterComponent } from './views/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent,
    CitiesComponent,
    NavbarComponent,
    LandingpageComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule, // Importa AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
