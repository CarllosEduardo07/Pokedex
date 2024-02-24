import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'details', component: DetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //quando o local host tiver sem nada, ele sempre vai redirecionar para home
    // { path: '**', component: HomeComponent }, // rota nao identificada
];

