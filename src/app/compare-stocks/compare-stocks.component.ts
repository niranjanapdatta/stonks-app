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

  public ChartLabels: Label[] = ['Five Years', 'Three Years', 'One Year', 'Six Months'];
  public priceUpDownChartLabels: Label[] = ['Five Years (Price Up)', 'Five Years (Price Down)', 'Three Years (Price Up)', 'Three Years (Price Down)', 
  'One Year (Price Up)', 'One Year (Price Down)', 'Six Months (Price Up)', 'Six Months (Price Down)'
];
  public avgPriceUpDownChartLabels: Label[] = ['Five Years (Avg. Price Up)', 'Five Years (Avg. Price Down)', 'Three Years (Avg. Price Up)', 'Three Years (Avg. Price Down)', 
  'One Year (Avg. Price Up)', 'One Year (Avg. Price Down)', 'Six Months (Avg. Price Up)', 'Six Months (Avg. Price Down)'
];
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
  public volatilityChartType: ChartType = 'line';

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
      text: 'Potential Returns (₹)',
      display: true,
      fontSize: 30
    }
  };
  public returnsChartType: ChartType = 'line';

  public returnsChartData: ChartDataSets[] = [];

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

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    this.stocks = this.stockService.getStocksToCompare();

    for(let i=0; i < this.stocks.length; i++) {
      this.sm_returns$[i] = this.stockService.calculateReturns(this.stocks[i].analysis?.[0]?.close, 
        this.stocks[i].analysis?.[0]?.sm_close, 
        this.stocks[i].dividend, 
        this.stocks[i].expense_ratio,
        0
      );
    this.oy_returns$[i] = this.stockService.calculateReturns(this.stocks[i].analysis?.[0]?.close, 
      this.stocks[i].analysis?.[0]?.oy_close, 
      this.stocks[i].dividend, 
      this.stocks[i].expense_ratio,
      1
    );
    this.ty_returns$[i] = this.stockService.calculateReturns(this.stocks[i].analysis?.[0]?.close, 
      this.stocks[i].analysis?.[0]?.ty_close, 
      this.stocks[i].dividend, 
      this.stocks[i].expense_ratio,
      3
    );
    this.fy_returns$[i] = this.stockService.calculateReturns(this.stocks[i].analysis?.[0]?.close, 
      this.stocks[i].analysis?.[0]?.fy_close, 
      this.stocks[i].dividend, 
      this.stocks[i].expense_ratio,
      5
    );

    this.closeChartData.push({ data: [this.stocks[i].analysis?.[0]?.fy_close, 
      this.stocks[i].analysis?.[0]?.ty_close, 
      this.stocks[i].analysis?.[0]?.oy_close, 
      this.stocks[i].analysis?.[0]?.sm_close], label: this.stocks[i].name?.toString()});

    this.volatilityChartData.push({ data: [this.stocks[i].analysis?.[0]?.fy_volatility, 
      this.stocks[i].analysis?.[0]?.ty_volatility, 
      this.stocks[i].analysis?.[0]?.oy_volatility, 
      this.stocks[i].analysis?.[0]?.sm_volatility], label: this.stocks[i].name?.toString()});

    this.betaChartData.push({ data: [this.stocks[i].analysis?.[0]?.fy_beta, 
      this.stocks[i].analysis?.[0]?.ty_beta, 
      this.stocks[i].analysis?.[0]?.oy_beta, 
      this.stocks[i].analysis?.[0]?.sm_beta], label: this.stocks[i].name?.toString()});

    this.priceUpDownChartData.push(
      { data: [this.stocks[i].analysis?.[0]?.fy_price_up, 
        this.stocks[i].analysis?.[0]?.fy_price_down, 
        this.stocks[i].analysis?.[0]?.ty_price_up, 
        this.stocks[i].analysis?.[0]?.ty_price_down, 
        this.stocks[i].analysis?.[0]?.oy_price_up, 
        this.stocks[i].analysis?.[0]?.oy_price_down, 
        this.stocks[i].analysis?.[0]?.sm_price_up,
        this.stocks[i].analysis?.[0]?.sm_price_down], label: this.stocks[i].name?.toString()}
    );

    this.avgPriceUpDownChartData.push(
      { data: [this.stocks[i].analysis?.[0]?.fy_avg_price_up, 
        this.stocks[i].analysis?.[0]?.fy_avg_price_down, 
        this.stocks[i].analysis?.[0]?.ty_avg_price_up, 
        this.stocks[i].analysis?.[0]?.ty_avg_price_down, 
        this.stocks[i].analysis?.[0]?.oy_avg_price_up, 
        this.stocks[i].analysis?.[0]?.oy_avg_price_down, 
        this.stocks[i].analysis?.[0]?.sm_avg_price_up,
        this.stocks[i].analysis?.[0]?.sm_avg_price_down], label: this.stocks[i].name?.toString()}
    );

    this.returnsChartData.push({ data: [this.fy_returns$[i].returns, 
      this.ty_returns$[i].returns, 
      this.oy_returns$[i].returns, 
      this.sm_returns$[i].returns], label: this.stocks[i].name?.toString()});
    }
  }


}
