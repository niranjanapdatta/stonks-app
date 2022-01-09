import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-compare-stocks',
  templateUrl: './compare-stocks.component.html',
  styleUrls: ['./compare-stocks.component.css']
})
export class CompareStocksComponent implements OnInit {

  stocksToCompare: Stock[] = [];

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    this.stocksToCompare = this.stockService.getStocksToCompare();
  }

}
