import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrls: ['./conversor-moedas.component.scss']
})
export class ConversorMoedasComponent implements OnInit {

  ngOnInit(): void {
  }
  
  // Variáveis do Input Value //
  interCoin
  brCoin

  // Variáveis do Span //
  coin1 = "Dólar Americano"
  coin2 = "Dólar Australiano"
  
  constructor() { }

}
