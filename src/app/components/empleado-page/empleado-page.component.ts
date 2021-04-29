import { Component, OnInit,ViewChild } from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';
import {Empleado} from '../../core/models/empleado';
import {EmpleadoTestsComponent} from './empleado-tests/empleado-tests.component';
import {ConnectionService} from '../../core/services/connection/connection.service';

@Component({
  selector: 'app-empleado-page',
  templateUrl: './empleado-page.component.html',
  styleUrls: ['./empleado-page.component.css']
})
export class EmpleadoPageComponent implements OnInit{
  @ViewChild('empleadoTest') empleadoTest: EmpleadoTestsComponent;


  testsEmpleado;

  //emp: any;
  empleadoId:string;
  empleado: Empleado;
  nombreEmpleado: string;

  constructor(private auth: AuthService, private connectionService: ConnectionService) { }

  ngOnInit(): void {
    //this.empleadoId = this.auth.userId;
    //this.empleado = this.getEmpleado(this.empleadoId);
    //console.log(this.empleado);
    //console.log("token: " + this.auth.userTipo);
    //this.getEmpleado(this.empleadoId);
    this.getEmpleado3();

    
    this.connectionService.getTestEmpleado(sessionStorage.getItem('token')).subscribe(res =>{
      this.testsEmpleado = res;
    });
    
  }

  logout(){
    this.auth.logout();
  }

  /*
  getEmpleado(id:string){
    this.auth.getEmpleado(id).subscribe((res2) => {
          this.empleado = new Empleado(res2);
          console.log(this.empleado);
    });
  }*/
  getEmpleado3(){
    this.auth.getEmpleado3().subscribe((res2) => {
      this.empleado = new Empleado(res2);
      this.nombreEmpleado = this.empleado.nombre + " " + this.empleado.apellidos;
      this.empleadoId = this.empleado.idempleado;

  });
  }

}
