import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    LoginComponent
} from './modules/auth/components/login/login.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth/login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
