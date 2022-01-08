import { Component, OnInit } from '@angular/core';
import { Insight } from '../models/insight';
import { InsightService } from '../services/insight.service';

@Component({
  selector: 'app-insights-form',
  templateUrl: './insights-form.component.html',
  styleUrls: ['./insights-form.component.css']
})
export class InsightsFormComponent implements OnInit {

  insight: Insight = {};

  constructor(
    private insightService: InsightService
  ) { }

  ngOnInit(): void {
  }

  submitAction(): void {
    this.insightService.createInsight(this.insight).subscribe(res => {
      switch(res) {
      case "success": alert("Article has been successfully published!");
                    break;
      default: alert("Oops! There was a problem while publishing the article. Please try again later.");
                    break;
    }
    this.insight = {}; // Clear the form
    });
  }

}
