import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EmpleadoPageComponent } from './components/empleado-page/empleado-page.component';
import { DirectivoPageComponent } from './components/directivo-page/directivo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpleadoPageComponent,
    DirectivoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
