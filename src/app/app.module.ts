import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { HomeComponent } from './home/home.component';
import { BarraLateralComponent } from './home/barra-lateral/barra-lateral.component';
import { ReservaComponent } from './home/reserva/reserva.component';
import { NovaSenhaComponent } from './nova-senha/nova-senha.component';
import { ConfirmarCodigoComponent } from './confirmar-codigo/confirmar-codigo.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    HomeComponent,
    BarraLateralComponent,
    ReservaComponent,
    NovaSenhaComponent,
    ConfirmarCodigoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
