import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiBaseUrl: String = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    let niftyData = this.http.get<Stock[]>(`${this.apiBaseUrl}/niftyData`);
    let bankNiftyData = this.http.get<Stock[]>(`${this.apiBaseUrl}/bankNiftyData`);
    return forkJoin([niftyData, bankNiftyData]);
  }

  addSymbol(stock: Stock): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/add_symbol`, stock, { responseType: 'text'});
  }

}
