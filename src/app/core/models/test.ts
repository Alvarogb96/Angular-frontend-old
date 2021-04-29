export class Test {
    idtest: string;
    fecha: string;
    tipo: string;
    resultado: string;

    constructor(datos: any){
      this.idtest =datos && datos.idtest ? datos.idtest : '';
      this.fecha =datos && datos.fecha ? datos.fecha : '';
      this.tipo = datos && datos.tipo ? datos.tipo : '';
      this.resultado = datos && datos.resultado ? datos.resultado : '';
    }
  }