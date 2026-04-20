import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddOwnerComponent } from "./add-owner/add-owner.component";
import { OwnerListComponent } from "./owner-list/owner-list.component";
import { Component } from "@angular/core";

export const DASHBOARD_ROUTES: Routes =[
    {
        path:'',
        component:DashboardComponent,
        children:[
            {
                path:'add-owner', component:AddOwnerComponent
            },
            {
                path:'owner-list', component:OwnerListComponent
            }
        ]
    }

];