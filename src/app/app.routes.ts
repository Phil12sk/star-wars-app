import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';

export const ROUTES: Routes = [
    {path: '', component: HelloComponent},
    {path: 'home', component: HomeComponent}
]