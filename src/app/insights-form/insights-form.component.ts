import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private insightService: InsightService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitAction(): void {
    this.insightService.createInsight(this.insight).subscribe(res => {
      switch(res) {
      case "success": alert("Article has been successfully published!");
                    this.router.navigate(['/insights']);
                    break;
      case "symbol": alert("Symbol provided for the field For Symbol does not exist!");
                    break;
      default: alert("Oops! There was a problem while publishing the article. Please try again later.");
                    break;
    }
    });
  }

}
