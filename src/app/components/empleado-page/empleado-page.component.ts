import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';
import {Empleado} from '../../core/models/empleado';

@Component({
  selector: 'app-empleado-page',
  templateUrl: './empleado-page.component.html',
  styleUrls: ['./empleado-page.component.css']
})
export class EmpleadoPageComponent implements OnInit {

  //emp: any;
  empleadoId:string;
  empleado: Empleado;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.empleadoId = this.auth.userId;
    //this.empleado = this.getEmpleado(this.empleadoId);
    //console.log(this.empleado);
    //console.log("token: " + this.auth.userTipo);
    //this.getEmpleado(this.empleadoId);
    //this.getEmpleado3();
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
      //console.log(this.empleado);
});
  }

}
