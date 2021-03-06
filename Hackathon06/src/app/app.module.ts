import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { ThingsComponent } from './components/things/things.component';
import { AccountComponent } from './components/account/account.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ReviewComponent } from './components/review/review.component';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    ThingsComponent,
    AccountComponent,
    PersonalComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
