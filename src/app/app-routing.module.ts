import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component'
import { LoginComponent } from '../app/components/login/login.component'
import { EmpleadoPageComponent } from '../app/components/empleado-page/empleado-page.component'
import { DirectivoPageComponent } from '../app/components/directivo-page/directivo-page.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'empleado', component: EmpleadoPageComponent},
  { path: 'directivo', component: DirectivoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
