import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component'
import { LoginComponent } from '../app/components/login/login.component'
import { EmpleadoPageComponent } from '../app/components/empleado-page/empleado-page.component'
import { DirectivoPageComponent } from '../app/components/directivo/directivo-page/directivo-page.component'
import {AuthGuard} from './core/guards/auth.guard'
import {EmpleadoGuard }from './core/guards/empleado.guard'
import {DirectivoGuard }from './core/guards/directivo.guard'

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'empleado', component: EmpleadoPageComponent, canActivate: [AuthGuard, EmpleadoGuard]},
  { path: 'directivo', component: DirectivoPageComponent, canActivate: [AuthGuard, DirectivoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
