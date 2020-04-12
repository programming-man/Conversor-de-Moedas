// Browser //
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modulos //
import { NgModule } from '@angular/core';
// Rotas //
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
// Material //
import {MatInputModule} from '@angular/material/input';
// Componentes //
import { AppComponent } from './app.component';
import { ConversorMoedasComponent } from './conversor-moedas/conversor-moedas.component';
// Serviços //
import { ConversorMoedasService } from "./conversor-api.service";

@NgModule({
  declarations: [
    AppComponent,
    ConversorMoedasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [ConversorMoedasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
