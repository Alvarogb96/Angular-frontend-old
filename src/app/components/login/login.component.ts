import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/core/models/empleado';
import {CONSTANTES}from '../../core/constantes' 




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  empleado: Empleado;
  textError: string;
  showError = false;

  constructor(private router: Router, private auth: AuthService) { 
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
      ])
    });
  }

  
  /*
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:'', 
    });
  }*/
  ngOnInit(): void {
    //this.loginForm = this.createFormGroup();
    
    
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
      ]),
    });
  }

  login(){
    const authData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
  
  if(this.loginForm.value.email !== '' && this.loginForm.value.password !== ''){
    this.auth.login(authData).subscribe((res) => {
      //console.log(res);
      //console.log('Tipo: ', res.tipo);
      if(res.tipo == 'empleado'){
        //this.auth.getEmpleado(res.userId).subscribe((res2) => {
          //this.empleado = new Empleado(res2);
          //console.log(this.empleado);
          this.router.navigateByUrl('empleado');
        //});
      } else if(res.tipo == 'directivo'){
        this.router.navigateByUrl('directivo');
      } else if(res.tipo =='empresa'){
        //this.router.navigateByUrl('empresa');
      }
    
    
    }, (err) =>{
      if (err.status === 401) {
        this.showError = true;
        console.log("ENTRAAA?");
      }
    });

    }
  }

  getEmailErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      return CONSTANTES.EMAIL_VACIO;
    } else if(this.loginForm.get('email').hasError('email')){
      return CONSTANTES.EMAIL_ERROR
    } 
  }
  getPasswordErrorMessage(){
    if(this.loginForm.get('password').hasError('required')){
      return CONSTANTES.PASSWORD_VACIA
    }
  }

}
