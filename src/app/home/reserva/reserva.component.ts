import { Component, OnInit } from '@angular/core';
import { Reserva } from "../shared/interfaces/reserva.interface";
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reservas:Reserva[] = [];

  formReserva!: FormGroup;
  excluirReservaForm!: FormGroup;
  editFormReserva!: FormGroup;
  reservaAtual!: Reserva;
  datepipe!: DatePipe;

  constructor(private router: Router, private http: HttpClient) { 
    this.datepipe=new DatePipe('en_US')
    this.http.get<any>(`${environment.server}reserva`).subscribe(data => {
      this.reservas = data;
    })
    
  }

  ngOnInit(): void {
    this.createForm(new Reserva());
    this.editForm(new Reserva());
    this.excluirForm(new Reserva());
  }

  createForm(reserva: Reserva){
    this.formReserva = new FormGroup({
      tipo: new FormControl(reserva.tipo),
      quantidade: new FormControl(reserva.quantidade),
      motivo: new FormControl(reserva.motivo),
      dataInicio: new FormControl(reserva.dataInicio),
      dataFim: new FormControl(reserva.dataFim)
    })
  }

  editForm(reserva: Reserva){
    this.editFormReserva = new FormGroup({
      id: new FormControl(reserva.id),
      tipo: new FormControl(reserva.tipo),
      quantidade: new FormControl(reserva.quantidade),
      motivo: new FormControl(reserva.motivo),
      dataInicio: new FormControl(reserva.dataInicio),
      dataFim: new FormControl(reserva.dataFim)
    })
  }

  excluirForm(reserva: Reserva){
    this.excluirReservaForm = new FormGroup({
      id: new FormControl(reserva.id)
    })
  }

  reservar(){
    //this.formReserva.value.dataInicio = this.datepipe.transform(this.formReserva.value.dataInicio,'dd/MM/yyyy HH:mm')
    //this.formReserva.value.dataFim = this.datepipe.transform(this.formReserva.value.dataInicio,'dd/MM/yyyy HH:mm')
    this.http.post<any>(`${environment.server}reserva`, this.formReserva.value).subscribe(data => {
      window.location.reload();
    })
  }

  editar(){
    
    this.http.patch<any>(`${environment.server}reserva/${this.editFormReserva.value.id}`, this.editFormReserva.value).subscribe(data => {
      window.location.reload();
    })
    
  }

  excluirReserva(){
    console.log(this.excluirReservaForm.value)
    this.http.delete<any>(`${environment.server}reserva/${this.excluirReservaForm.value.id}`).subscribe(data => {
      window.location.reload();
    })
  }

  modalEditar(reserva: Reserva){
    this.editFormReserva.patchValue({
      id: reserva.id,
      tipo: reserva.tipo,
      quantidade: reserva.quantidade,
      motivo: reserva.motivo,
      dataInicio: reserva.dataInicio,
      dataFim: reserva.dataFim
    })
  }

  modalExcluir(reserva: Reserva){
    this.excluirReservaForm.patchValue({
      id: reserva.id
    })
  }
}
