import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logar(){
    this.router.navigate(['/reserva'])
  }

  esqueceuSenha(){
    this.router.navigate(['/recuperar-senha'])
  }
}
