import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EmpleadoPageComponent } from './components/empleado-page/empleado-page.component';
import { DirectivoPageComponent } from './components/directivo/directivo-page/directivo-page.component';
import { EmpleadoTestsComponent } from './components/empleado-page/empleado-tests/empleado-tests.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpleadoPageComponent,
    DirectivoPageComponent,
    EmpleadoTestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    TabViewModule,
    ButtonModule,
    TableModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
