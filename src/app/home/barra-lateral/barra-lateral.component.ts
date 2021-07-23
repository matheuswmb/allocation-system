import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  listarReservas(){
    this.router.navigate(['/reserva'])
  }

  deslogar(){
    this.router.navigate(['/login'])
  }
}
