import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CONSTANTES} from '../../constantes';
import { environment } from '../../../../environments/environment';
import  jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private httpClient: HttpClient) { }


  getTestEmpleado(token): any{
    const decoded = jwt_decode(token);
    return this.httpClient.get(environment.apiUrl + CONSTANTES.SERVICE_GET_TEST_EMPLEADO + decoded['userId']);
  }
}
