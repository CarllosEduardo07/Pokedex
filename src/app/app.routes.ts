import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //quando o local host tiver sem nada, ele sempre vai redirecionar para home
    // { path: '**', component: HomeComponent }, // rota nao identificada
];

