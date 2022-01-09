import { Component, OnInit } from '@angular/core';
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
    private insightService: InsightService
  ) { }

  ngOnInit(): void {
    this.insight = this.insightService.getInsightToBeEdited();
  }

  submitAction(): void {
    this.insightService.updateInsight(this.insight).subscribe(res => {
      switch(res) {
      case "success": alert("Article has been successfully updated!");
                    break;
      default: alert("Oops! There was a problem while updating the article. Please try again later.");
                    break;
    }
    });
  }

}
