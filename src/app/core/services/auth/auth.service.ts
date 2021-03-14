import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Login } from '../../models/login/login';
import { Empleado } from "../../models/empleado";
import { User }from '../../models/User';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { first, catchError, tap, map,  } from "rxjs/operators";
import { ErrorHandlerService } from "../error-handler.service";
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl;
  //private url = "http://localhost:3000/auth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  //userId: Pick<Empleado, "idempleado">;
  userToken: string;
  //empleadoId: Pick<Empleado, "idempleado">


  
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private httpClient: HttpClient,private errorHandlerService: ErrorHandlerService) { }


  /*
  login(login:Empleado){
    const auth ={email: login.email, password: login.password};

    return this.httpClient.post(`${ this.url }/login`, auth).pipe(
      map( resp => {
        localStorage
        //this.saveToken(resp['token']);
        return resp;
      })
    ); 
  }*/

  removeToken() {
    sessionStorage.removeItem('token');
  }

  private saveToken(token: string) {
    this.userToken = token;
    sessionStorage.setItem('token', token);
  }

  getToken() {
    if (sessionStorage.getItem('token')) {
      this.userToken = sessionStorage.getItem('token');

    } else {
      this.userToken = '';
    }

    return this.userToken;
  }
  
  /*
  login(
    email: Pick<Empleado, "email">,
    password: Pick<Empleado, "password">
  ): Observable<{
    token: string;
    userId: Pick<Empleado, "idempleado">;
  }> {
    return this.httpClient
      .post(`${this.url}/auth/login`, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<Empleado, "idempleado"> }) => {
          this.userId = tokenObject.userId;
          localStorage.setItem("token", tokenObject.token);
          this.isUserLoggedIn$.next(true);
          this.router.navigate(["posts"]);
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            userId: Pick<Empleado, "idempleado">;
          }>("login")
        )
      );
  }*/

  
  login(authData: User): Observable<any>{
    //console.log(authData);
    return this.httpClient
    .post<User>(`${this.url}/login`, authData)
    .pipe(
    map( (res: User) =>  {
      console.log('Res: ', res); 
      this.saveToken(res['token']);
      this.isUserLoggedIn$.next(true);
      return res;
    }),
    catchError((err) => this.handlerError(err))
    );
  }

  loginPrueba(){
    return this.httpClient.get(`${ this.url }/empleados`).pipe(
      map( resp => {
        localStorage
        //this.saveToken(resp['token']);
        return resp;
      })
    ); 
  }

  /*
  getEmpleado(id: string): Observable<Empleado | any> {
    return this.httpClient
    .get<Empleado>(`${this.url}/empleado/:id`, id)
    .pipe(
    map( (res: Empleado) =>  {
      //console.log('Res: ', res); 
      return res;
    }),
    catchError(
      this.errorHandlerService.handleError<{
        token: string;
      }>("login")
    )
    );

  }*/

  getEmpleado(id:string) {
    return this.httpClient.get(`${ this.url }/empleados/${id}`).pipe(
      map( resp => {
        //this.saveToken(resp['token']);
        return resp;
      })
    ); 
  }

  private handlerError(err): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
