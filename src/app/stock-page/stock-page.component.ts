import { Component, OnInit } from '@angular/core';
import { PotentialReturns } from '../models/potentialReturns';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})
export class StockPageComponent implements OnInit {

  stock: Stock = {};

  sm_returns: PotentialReturns = {};

  oy_returns: PotentialReturns = {};

  ty_returns: PotentialReturns = {};

  fy_returns: PotentialReturns = {};

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    this.stock = this.stockService.getStockToBeViewed();
    this.sm_returns = this.calculateReturns(this.stock.analysis?.[0]?.close, 
      this.stock.analysis?.[0]?.sm_close, 
      this.stock.dividend, 
      this.stock.expense_ratio,
      0
    );
    this.oy_returns = this.calculateReturns(this.stock.analysis?.[0]?.close, 
      this.stock.analysis?.[0]?.oy_close, 
      this.stock.dividend, 
      this.stock.expense_ratio,
      1
    );
    this.ty_returns = this.calculateReturns(this.stock.analysis?.[0]?.close, 
      this.stock.analysis?.[0]?.ty_close, 
      this.stock.dividend, 
      this.stock.expense_ratio,
      3
    );
    this.fy_returns = this.calculateReturns(this.stock.analysis?.[0]?.close, 
      this.stock.analysis?.[0]?.fy_close, 
      this.stock.dividend, 
      this.stock.expense_ratio,
      5
    );
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
