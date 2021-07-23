import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-codigo',
  templateUrl: './confirmar-codigo.component.html',
  styleUrls: ['./confirmar-codigo.component.css']
})
export class ConfirmarCodigoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  alterarSenha(){
    this.router.navigate(['/nova-senha'])
  }
}
