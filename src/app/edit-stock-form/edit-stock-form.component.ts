import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-edit-stock-form',
  templateUrl: './edit-stock-form.component.html',
  styleUrls: ['./edit-stock-form.component.css']
})
export class EditStockFormComponent implements OnInit {

  stock: Stock = {};

  constructor(
    private stockService: StockService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stock = this.stockService.getStockToBeEdited();
  }

  submitAction(): void {
    this.stockService.updateStock(this.stock).subscribe(res => {
      switch(res) {
      case "success": alert("Stock details have been successfully updated!");
                    this.router.navigate(['/home']);
                    break;
      default: alert("Oops! There was a problem while updating the Stock details. Please try again later.");
                    break;
    }
    });
  }
}
