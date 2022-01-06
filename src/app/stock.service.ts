import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from './models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiBaseUrl: String = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getSymbols(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.apiBaseUrl}/SYMBOLS`);
  }

}
