import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConversorMoedasService {

  private apiUrl = "https://api.exchangeratesapi.io/latest?base="

  constructor(private http: HttpClientModule) { }

  getCurrency(base) {
    let baseModify = this.apiUrl+base
  }
  
}
