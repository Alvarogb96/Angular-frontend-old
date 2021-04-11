import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/core/models/empleado';




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

  constructor(private router: Router, private auth: AuthService) { }

  
  /*
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:'', 
    });
  }*/
  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
    
    
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
      ]),
    });
  }

  login(){
    const authData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
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
      }
    
    
    }, (err) =>{
      if (err.status === 401) {
        this.showError = true;
        console.log("ENTRAAA?");
      }
    });

    }
  }

}
