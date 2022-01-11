import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
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

  graphSelected: number = 0;

  showCloseChart(): void {
    this.graphSelected = 0;
  }

  showVolatilityChart(): void {
    this.graphSelected = 1;
  }

  showBetaChart(): void {
    this.graphSelected = 2;
  }

  showPriceUpDownChart(): void {
    this.graphSelected = 3;
  }

  showAvgPriceUpDownChart(): void {
    this.graphSelected = 4;
  }

  showReturnsChart(): void {
    this.graphSelected = 5;
  }

  public ChartLabels: Label[] = ['Five Years', 'Three Years', 'One Year', 'Six Months'];
  public ChartLegend = true;
  public ChartPlugins = [];
  
  public closeChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Close (₹)',
      display: true,
      fontSize: 30
    }
  };
  public closeChartType: ChartType = 'line';

  public closeChartData: ChartDataSets[] = [];

  public volatilityChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Volatility',
      display: true,
      fontSize: 30
    }
  };
  public volatilityChartType: ChartType = 'polarArea';

  public volatilityChartData: ChartDataSets[] = [];

  public betaChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Beta',
      display: true,
      fontSize: 30
    }
  };
  public betaChartType: ChartType = 'radar';

  public betaChartData: ChartDataSets[] = [];

  public priceUpDownChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Price Up & Down (Days)',
      display: true,
      fontSize: 30
    }
  };
  public priceUpDownChartType: ChartType = 'bar';

  public priceUpDownChartData: ChartDataSets[] = [];

  public avgPriceUpDownChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Average Price Up & Down (₹)',
      display: true,
      fontSize: 30
    }
  };
  public avgPriceUpDownChartType: ChartType = 'line';

  public avgPriceUpDownChartData: ChartDataSets[] = [];

  public returnsChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: 'Potential Returns',
      display: true,
      fontSize: 30
    }
  };
  public returnsChartType: ChartType = 'line';

  public returnsChartData: ChartDataSets[] = [];

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

    this.closeChartData = [
      { data: [this.stock.analysis?.[0]?.fy_close, 
        this.stock.analysis?.[0]?.ty_close, 
        this.stock.analysis?.[0]?.oy_close, 
        this.stock.analysis?.[0]?.sm_close], label: this.stock.name?.toString()}
    ];
    this.volatilityChartData = [
      { data: [this.stock.analysis?.[0]?.fy_volatility, 
        this.stock.analysis?.[0]?.ty_volatility, 
        this.stock.analysis?.[0]?.oy_volatility, 
        this.stock.analysis?.[0]?.sm_volatility], label: this.stock.name?.toString()}
    ];
    this.betaChartData = [
      { data: [this.stock.analysis?.[0]?.fy_beta, 
        this.stock.analysis?.[0]?.ty_beta, 
        this.stock.analysis?.[0]?.oy_beta, 
        this.stock.analysis?.[0]?.sm_beta], label: this.stock.name?.toString()}
    ];
    this.priceUpDownChartData = [
      { data: [this.stock.analysis?.[0]?.fy_price_up, 
        this.stock.analysis?.[0]?.ty_price_up, 
        this.stock.analysis?.[0]?.oy_price_up, 
        this.stock.analysis?.[0]?.sm_price_up], label: "Price Up (Days)"},
      { data: [this.stock.analysis?.[0]?.fy_price_down, 
          this.stock.analysis?.[0]?.ty_price_down, 
          this.stock.analysis?.[0]?.oy_price_down, 
          this.stock.analysis?.[0]?.sm_price_down], label: "Price Down (Days)"}
    ];
    this.avgPriceUpDownChartData = [
      { data: [this.stock.analysis?.[0]?.fy_avg_price_up, 
        this.stock.analysis?.[0]?.ty_avg_price_up, 
        this.stock.analysis?.[0]?.oy_avg_price_up, 
        this.stock.analysis?.[0]?.sm_avg_price_up], label: "Avg. Price Up (₹)"},
      { data: [this.stock.analysis?.[0]?.fy_avg_price_down, 
          this.stock.analysis?.[0]?.ty_avg_price_down, 
          this.stock.analysis?.[0]?.oy_avg_price_down, 
          this.stock.analysis?.[0]?.sm_avg_price_down], label: "Avg. Price Down (₹)"}
    ];
    this.returnsChartData = [
      { data: [this.fy_returns.profit, 
        this.ty_returns.profit, 
        this.oy_returns.profit, 
        this.sm_returns.profit], label: "Profit (₹)"},
      { data: [this.fy_returns.dividend, 
        this.ty_returns.dividend, 
          this.oy_returns.dividend, 
          this.sm_returns.dividend], label: "Dividend (₹)"},
      { data: [this.fy_returns.expenses, 
        this.ty_returns.expenses, 
        this.oy_returns.expenses, 
        this.sm_returns.expenses], label: "Expenses (₹)"},
      { data: [this.fy_returns.returns, 
              this.ty_returns.returns, 
              this.oy_returns.returns, 
              this.sm_returns.returns], label: "Returns (₹)"}
    ];
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
