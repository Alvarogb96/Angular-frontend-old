import {DatePipe}from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class UtilsService {

    constructor(
        private datePipe: DatePipe
    ){}

    getDateStringSinHora(fecha){
        return this.datePipe.transform(fecha, 'dd/MM/y');
    }
}