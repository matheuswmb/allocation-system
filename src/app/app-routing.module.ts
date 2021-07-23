import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarCodigoComponent } from './confirmar-codigo/confirmar-codigo.component';
import { HomeComponent } from './home/home.component';
import { ReservaComponent } from './home/reserva/reserva.component';
import { LoginComponent } from './login/login.component';
import { NovaSenhaComponent } from './nova-senha/nova-senha.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  {path:'login', component:LoginComponent}, 
  {path:'recuperar-senha', component:RecuperarSenhaComponent},
  {path:'nova-senha', component:NovaSenhaComponent},
  {path:'confirmar-codigo', component:ConfirmarCodigoComponent},
  {path:'', component:HomeComponent, children:[
    {path:'reserva', component:ReservaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
