import { Routes } from '@angular/router';
import { SignupComponent } from './form/signup/signup.component';
import { LoginComponent } from './form/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: 'list', component: ListComponent },
];
