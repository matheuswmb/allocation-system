import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cadastro } from "../home/shared/interfaces/cadastro.interface";
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro!: FormGroup;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.createForm(new Cadastro());
  }

  cadastrar() {
    this.http.post<any>(`${environment.server}usuario`, this.formCadastro.value).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/login'])
  }

  createForm(cadastro: Cadastro){
    this.formCadastro = new FormGroup({
      nome: new FormControl(cadastro.nome),
      email: new FormControl(cadastro.email),
      matricula: new FormControl(cadastro.matricula),
      senha: new FormControl(cadastro.senha)
    })
  }
}
