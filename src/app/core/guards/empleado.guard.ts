import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService){}

  canActivate(){
    console.log('TIPO EMPLEADO: ' + this.auth.isEmpleado());
    if(this.auth.isEmpleado() != true){
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
  
}
