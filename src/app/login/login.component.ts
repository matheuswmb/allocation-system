import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Login } from "../home/shared/interfaces/login.interface";
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm(new Login());
  }

  logar(){
    this.router.navigate(['/reserva'])
    /*this.http.post<any>(`${environment.server}autenticar`, this.formLogin.value).subscribe(data => {
      console.log(data)
    })*/
  }

  esqueceuSenha(){
    this.router.navigate(['/recuperar-senha'])
  }

  loginForm(login: Login){
    this.formLogin = new FormGroup({
      matricula: new FormControl(login.matricula),
      senha: new FormControl(login.senha)
    })
  }
}
