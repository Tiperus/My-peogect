import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { CensorComponent } from './works/censor/censor.component';
import { MyLearnPlanComponent } from './works/my-learn-plan/my-learn-plan.component';
import { UserLoginDataComponent } from './works/user-login-data/user-login-data.component';


const routes: Routes = [
  {path:'',  pathMatch: 'full', redirectTo: 'home'},
  {path:'home',  component: HomeComponent},
  {path: 'works', component:WorksComponent, children: [
    
    {path:'censor',  component: CensorComponent },
    {path:'users',  component: UserLoginDataComponent },
    {path:'planing',  component: MyLearnPlanComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
