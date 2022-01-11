import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { PotentialReturns } from '../models/potentialReturns';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-compare-stocks',
  templateUrl: './compare-stocks.component.html',
  styleUrls: ['./compare-stocks.component.css']
})
export class CompareStocksComponent implements OnInit {

  stocks: Stock[] = [];

  sm_returns$: PotentialReturns[] = [];

  oy_returns$: PotentialReturns[] = [];

  ty_returns$: PotentialReturns[] = [];

  fy_returns$: PotentialReturns[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Close (₹)',
      display: true,
      fontSize: 30
    }
  };
  public barChartLabels: Label[] = ['Five Years', 'Three Years', 'One Year', 'Six Months'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'stock name' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    this.stocks = this.stockService.getStocksToCompare();

    for(let i=0; i < this.stocks.length; i++) {
      this.sm_returns$[i] = this.calculateReturns(this.stocks[i].analysis?.[0]?.close, 
        this.stocks[i].analysis?.[0]?.sm_close, 
        this.stocks[i].dividend, 
        this.stocks[i].expense_ratio,
        0
      );
    this.oy_returns$[i] = this.calculateReturns(this.stocks[i].analysis?.[0]?.close, 
      this.stocks[i].analysis?.[0]?.oy_close, 
      this.stocks[i].dividend, 
      this.stocks[i].expense_ratio,
      1
    );
    this.ty_returns$[i] = this.calculateReturns(this.stocks[i].analysis?.[0]?.close, 
      this.stocks[i].analysis?.[0]?.ty_close, 
      this.stocks[i].dividend, 
      this.stocks[i].expense_ratio,
      3
    );
    this.fy_returns$[i] = this.calculateReturns(this.stocks[i].analysis?.[0]?.close, 
      this.stocks[i].analysis?.[0]?.fy_close, 
      this.stocks[i].dividend, 
      this.stocks[i].expense_ratio,
      5
    );
    }

    // if(this.stock.analysis?.[0]?.sm_close != undefined
    //   && this.stock.analysis?.[0]?.oy_close != undefined
    //   && this.stock.analysis?.[0]?.ty_close != undefined
    //   && this.stock.analysis?.[0]?.fy_close != undefined
    //   && this.stock.name) {
    //   this.barChartData = [
    //     { data: [this.stock.analysis?.[0]?.fy_close, 
    //       this.stock.analysis?.[0]?.ty_close, 
    //       this.stock.analysis?.[0]?.oy_close, 
    //       this.stock.analysis?.[0]?.sm_close], label: this.stock.name.toString()}
    //   ];
    // }
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
