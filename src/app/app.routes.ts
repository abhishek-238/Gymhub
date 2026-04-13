import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddOwnerComponent } from './dashboard/add-owner/add-owner.component';
import { OwnerListComponent } from './dashboard/owner-list/owner-list.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login', 
        pathMatch:'full'
    },
    {
        path:'login', 
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
        { path: 'add-owner', component: AddOwnerComponent },
        { path: 'owner-list', component: OwnerListComponent }
        ]
  }
];
