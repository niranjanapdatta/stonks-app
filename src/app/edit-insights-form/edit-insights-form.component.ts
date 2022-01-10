import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insight } from '../models/insight';
import { InsightService } from '../services/insight.service';

@Component({
  selector: 'app-edit-insights-form',
  templateUrl: './edit-insights-form.component.html',
  styleUrls: ['./edit-insights-form.component.css']
})
export class EditInsightsFormComponent implements OnInit {

  insight: Insight = {};

  constructor(
    private insightService: InsightService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.insight = this.insightService.getInsightToBeEdited();
  }

  submitAction(): void {
    this.insightService.updateInsight(this.insight).subscribe(res => {
      switch(res) {
      case "success": alert("Article has been successfully updated!");
                    this.router.navigate(['/insights']);
                    break;
      case "symbol": alert("Symbol provided for the field For Symbol does not exist!");
                    break;
      default: alert("Oops! There was a problem while updating the article. Please try again later.");
                    break;
    }
    });
  }

}
