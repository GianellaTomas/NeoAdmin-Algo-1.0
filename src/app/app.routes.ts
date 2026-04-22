import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
    {path: '', component: LoginComponent},
     { path: 'registro', component: Registro },
    {path: 'home', component: Home},
    {path: '**', redirectTo: ''}
];
