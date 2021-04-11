import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}


  canActivate(){
    console.log(this.auth.isAuth());
    if(this.auth.isAuth() != true){
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
  
  
}
