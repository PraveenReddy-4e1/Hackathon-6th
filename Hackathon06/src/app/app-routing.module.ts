import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { LandingComponent } from './components/landing/landing.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ReviewComponent } from './components/review/review.component';
import { ThingsComponent } from './components/things/things.component';

const routes: Routes = [
  { path: '', component:  LandingComponent,
  children: [
    { path: '', redirectTo: 'things', pathMatch: 'full' },
    { path: 'things', component: ThingsComponent },
    { path: 'personal', component: PersonalComponent },
    { path: 'account', component: AccountComponent },
    { path: 'review', component: ReviewComponent }
     
]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
