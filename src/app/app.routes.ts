import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { NuevoTicket } from './pages/nuevo-ticket/nuevo-ticket';
import { ArticuloComponent } from './pages/articulo/articulo';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    { path: 'registro', component: Registro },
    {path: 'home', component: Home},
    {path: 'nuevo-ticket', component: NuevoTicket},
    {path: 'articulo/:id', component: ArticuloComponent},
    {path: '**', redirectTo: ''}
];
