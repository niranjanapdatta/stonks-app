import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  stocks: Observable<Stock[]> | undefined;

  constructor(
    private stockService: StockService
    ) { }

  ngOnInit(): void {
    this.stocks = this.stockService.getSymbols();
  }

}
