import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock = {};

  loadingText: String | undefined;

  constructor(
    private stockService: StockService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitAction(): void {
    this.loadingText = "Communicating with the server, please wait.....";
    if(this.stock.name == undefined)
      this.stock.name = this.stock._id;
    this.stockService.addSymbol(this.stock).subscribe(res => {
      switch(res) {
      case "exists": alert("The stock you are trying to add already exists!");
                    break;
      case "standard": alert("The market standard you have entered does not exist! Currently available market standards: NIFTY, BANKNIFTY");
                    break;
      case "success": alert("Stock has been successfully added!");
                    this.router.navigate(['/home']);
                    break;
      case "failed": alert("Analysis for the given stock could not be performed. The stock either doesn't exist in NSE or the historical data that is available for the stock was insufficient.");
                    break;
      default: alert("Oops! There was a problem while creating the trivia. Please try again later.");
                    break;
    }
    this.loadingText = undefined;
    this.stock.name = undefined;
    });
  }

}
