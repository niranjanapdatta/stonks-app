import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PotentialReturns } from '../models/potentialReturns';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiBaseUrl: String = environment.apiBaseUrl;

  private stocks: Stock[] = [];

  private stockToBeEdited: Stock = {};

  private stockToBeViewed: Stock = {};

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    let niftyData = this.http.get<Stock[]>(`${this.apiBaseUrl}/niftyData`);
    let bankNiftyData = this.http.get<Stock[]>(`${this.apiBaseUrl}/bankNiftyData`);
    return forkJoin([niftyData, bankNiftyData]);
  }

  addSymbol(stock: Stock): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/add_symbol`, stock, {responseType: 'text'});
  }

  setStocksToCompare(stocks: Stock[]): void {
    this.stocks = stocks;
  }

  getStocksToCompare(): Stock[] {
    return this.stocks;
  }

  updateStock(stock: Stock): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/edit_symbol`, stock, {responseType: 'text'});
  }

  deleteStock(stock: Stock): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/delete_symbol`, {body: stock, responseType: 'text'});
  }

  setStockToBeEdited(stockToBeEdited: Stock): void {
    this.stockToBeEdited = stockToBeEdited;
  }

  getStockToBeEdited(): Stock {
    return this.stockToBeEdited;
  }

  setStockToBeViewed(stockToBeViewed: Stock): void {
    this.stockToBeViewed = stockToBeViewed;
  }

  getStockToBeViewed(): Stock {
    return this.stockToBeViewed;
  }

  calculateReturns(closeCurrent: number | undefined, close: number | undefined, dividend: number | undefined, expense_ratio: number | undefined, years: number): PotentialReturns {
    var returns: PotentialReturns = {};
    if(closeCurrent != undefined && close != undefined && dividend != undefined && expense_ratio != undefined) {
      returns.profit = Math.round(closeCurrent - close);
      var avg: number = (close + closeCurrent) / 2;
      returns.dividend = Math.round(avg * dividend * years);
      returns.expenses = Math.round(avg * expense_ratio * years);
      returns.returns = Math.round((returns.profit + returns.dividend) - returns.expenses);
    }
    return returns;
  }

}
