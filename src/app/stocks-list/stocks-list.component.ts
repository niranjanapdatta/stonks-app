import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  stocks: Stock[] | undefined;

  constructor(
    private stockService: StockService
    ) { }

  ngOnInit(): void {
    this.stockService.getData().subscribe((res) => {
      const niftyData: Stock[] = res[0];
      const bankNiftyData: Stock[] = res[1];
      this.stocks = niftyData.concat(bankNiftyData);
    });
  }

}
