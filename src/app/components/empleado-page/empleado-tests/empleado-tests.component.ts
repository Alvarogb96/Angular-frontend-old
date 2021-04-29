import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Test } from '../../../core/models/test';
import {UtilsService} from '../../../core/services/utils.service'

@Component({
  selector: 'app-empleado-tests',
  templateUrl: './empleado-tests.component.html',
  styleUrls: ['./empleado-tests.component.css']
})
export class EmpleadoTestsComponent implements OnInit, OnChanges{

  @Input() public datosTest: any;

  listTest = [];
  cols: any[];

  first = 0;
  rows = 5;
  totalRecords: any;


  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'fecha', header: 'Fecha' },
      { field: 'tipo', header: 'Tipo' },
      { field: 'resultado', header: 'Resultado' }
  ];

  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.datosTest && changes.datosTest.currentValue != undefined){
      this.modificar(changes.datosTest.currentValue);
      this.paginacion(changes.datosTest.currentValue);
    }
  }

  modificar(data){
    for(let index = 0; index < data.length; index++){
      data[index].fecha = this.utilsService.getDateStringSinHora(data[index].fecha);
      this.listTest.push(new Test(data[index]));
    }
    
  }

  //Paginación
  paginacion(list){
    this.totalRecords = list.length;
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.listTest ? this.first === (this.listTest.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.listTest ? this.first === 0 : true;
  }

}
