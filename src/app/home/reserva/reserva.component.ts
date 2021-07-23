import { Component, OnInit } from '@angular/core';
import { Reserva } from "../shared/interfaces/reserva.interface";
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reservas:Reserva[] = [
    {
      "tipo":"Laboratório",
      "quantidade":"50",
      "motivo":"Aulas práticas para Programação I",
      "data":"15/01/21"
    },
    {
      "tipo":"Teórica",
      "quantidade":"60",
      "motivo":"Aulas teóricas sobre Cálculo II",
      "data":"17/01/21"
    },
    {
      "tipo":"Auditório",
      "quantidade":"90",
      "motivo":"Palestra Seccim",
      "data":"18/11/21"
    },
    {
      "tipo":"Laboratório",
      "quantidade":"30",
      "motivo":"Aulas práticas sobre Cálculo Aplicado",
      "data":"17/01/21"
    },
    {
      "tipo":"Teórica",
      "quantidade":"60",
      "motivo":"Aulas teóricas sobre Cálculo II",
      "data":"21/01/21"
    }
  ];

  tipo = new FormControl('');
  quantidade = new FormControl('');
  motivo = new FormControl('');
  data = new FormControl('');

  
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  formReserva: FormGroup;

  createForm(reserva: Reserva){
    this.formReserva = new FormGroup({
      tipo: new FormControl(reserva.tipo),
      quantidade: new FormControl(reserva.quantidade),
      motivo: new FormControl(reserva.motivo),
      data: new FormControl(reserva.data)
    })
  }
  
  incluirReserva(){
    console.log("Alou")
  }

  reservar(){
    this.reservas.push({tipo:this.tipo.value, quantidade:this.quantidade.value, motivo:this.motivo.value, data:this.data.value})
  }
}
