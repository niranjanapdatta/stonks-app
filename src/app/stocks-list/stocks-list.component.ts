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

  stocks: Stock[] = [];

  searchMatches: Stock[] = [];

  searchText: string = "";

  stockToBeViewed: Stock = {};

  stocksToCompare: Stock[] = [];

  stocksForDisplay: Stock[] = [];

  areNoMatchesFound: boolean = false;

  user: User = {};

  constructor(
    private stockService: StockService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getStocksData();
    this.user = this.userService.getUserData();
  }

  viewStockAction(stockToBeViewed: Stock): void {
    this.stockService.setStockToBeViewed(stockToBeViewed);
    this.router.navigate(['/stock']);
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
    if(this.stocksToCompare.length > 1 && this.stocksToCompare.length < 5) {
      this.stockService.setStocksToCompare(this.stocksToCompare);
      this.router.navigate(['/compare']);
    }
    else {
      alert("Select 2 - 4 stocks in order to compare!");
    }
  }

  editStockAction(stockToBeEdited: Stock): void {
    this.stockService.setStockToBeEdited(stockToBeEdited);
    this.router.navigate(['/editStock']);
  }

  deleteStockAction(stockToBeDeleted: Stock): void {
    this.stockService.deleteStock(stockToBeDeleted).subscribe(res => {
      switch(res) {
        case "success": alert("Stock has been deleted successfully!");
                        break;
        default: alert("Oops! There was a problem while deleting the Stock. Please try again later.");
                break;
      }
      this.getStocksData();
    });
  }

  getStocksData(): void {
    this.stockService.getData().subscribe((res) => {
      const niftyData: Stock[] = res[0];
      const bankNiftyData: Stock[] = res[1];
      this.stocks = niftyData.concat(bankNiftyData);
      this.stocksForDisplay = this.stocks;
    });
  }

  searchAction(): void {
    this.areNoMatchesFound = false;
    this.searchMatches = [];
    for(let stock of this.stocks)
      if(stock._id?.toLowerCase().includes(this.searchText.toLowerCase()) || stock.name?.toLowerCase().includes(this.searchText.toLowerCase())
        || stock.market_standard?.toLowerCase().includes(this.searchText.toLowerCase()))
        this.searchMatches.push(stock);
    this.stocksForDisplay = this.searchMatches;
    if(this.stocksForDisplay.length == 0)
      this.areNoMatchesFound = true;
  }

  refreshStocks(): void {
    this.getStocksData();
  }

}
