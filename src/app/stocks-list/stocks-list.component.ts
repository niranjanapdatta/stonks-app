import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { User } from '../models/user';
import { StockService } from '../services/stock.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  stocks: Stock[] | undefined;

  stockData: Stock | undefined;

  stocksToCompare: Stock[] = [];

  user: User = {};

  constructor(
    private stockService: StockService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.stockService.getData().subscribe((res) => {
      const niftyData: Stock[] = res[0];
      const bankNiftyData: Stock[] = res[1];
      this.stocks = niftyData.concat(bankNiftyData);
    });
    this.user = this.userService.getUserData();
  }

  stockDisplay(stockData: Stock): void {
    this.stockData = stockData;
  }

  checkboxAction(stock: Stock, event: any): void {
    if(event.target.checked)
      this.stocksToCompare.push(stock);
    else
      for(var i = 0; i < this.stocksToCompare.length; i++)
        if (this.stocksToCompare[i] === stock)
          this.stocksToCompare.splice(i, 1);
  }

  compareStocks(): void {
    this.stockService.setStocksToCompare(this.stocksToCompare);
    this.router.navigate(['/compare']);
  }

}
