import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock = {};

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    this.stock.is_index = false;
  }

  submitAction(): void {
    this.fillEmptyFieldsWithDefaultValues();
    this.stockService.addSymbol(this.stock).subscribe(res => {
      switch(res) {
      case "exists": alert("The stock you are trying to add already exists!");
                    break;
      case "standard": alert("The market standard you have entered does not exist!");
                    break;
      case "success": alert("Stock has been successfully added!");
                    break;
      case "failed": alert("Analysis for the given stock could not be performed. The stock either doesn't exist in NSE or the historical data that is available for the stock was insufficient.");
                    break;
      default: alert("Oops! There was a problem while creating the trivia. Please try again later.");
                    break;
    }
    this.stock = {}; // Clear the form
    this.stock.is_index = false;
    });
  } // regex ^(?:0*(?:\.\d+)?|1(\.0*)?)$

  fillEmptyFieldsWithDefaultValues(): void {
    if(this.stock.name == undefined)
      this.stock.name = this.stock._id;
    if(this.stock.market_standard == undefined)
      this.stock.market_standard = "NIFTY";
    if(this.stock.expense_ratio == undefined)
      this.stock.expense_ratio = 0;
    if(this.stock.dividend == undefined)
      this.stock.dividend = 0;
    if(this.stock.series == undefined)
      this.stock.series = "EQ";
    if(this.stock.about == undefined)
      this.stock.about == "--";
  }

}
