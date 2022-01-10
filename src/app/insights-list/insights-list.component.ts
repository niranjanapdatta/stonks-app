import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Insight } from '../models/insight';
import { User } from '../models/user';
import { InsightService } from '../services/insight.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-insights-list',
  templateUrl: './insights-list.component.html',
  styleUrls: ['./insights-list.component.css']
})
export class InsightsListComponent implements OnInit {

  insights: Insight[] | undefined;

  user: User = {};

  constructor(
    private insightService: InsightService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getInsightsData();
    this.user = this.userService.getUserData();
  }

  editInsightAction(insightToBeEdited: Insight): void {
    this.insightService.setInsightToBeEdited(insightToBeEdited);
    this.router.navigate(['/editInsight']);
  }

  deleteInsightAction(insightToBeDeleted: Insight): void {
    this.insightService.deleteInsight(insightToBeDeleted).subscribe(res => {
      switch(res) {
        case "success": alert("Insight has been deleted successfully!");
                        break;
        default: alert("Oops! There was a problem while deleting the insight. Please try again later.");
                break;
      }
      this.getInsightsData();
    });
  }

  getInsightsData(): void {
    this.insightService.getInsights().subscribe((res) => {
      this.insights = res;
      if(this.insights != undefined)
        for(let trivia of this.insights)
          if(trivia.summary != undefined && trivia.summary.length > 30)
            trivia.summaryForDisplay = trivia.summary.slice(0, 300) + ".........";
    });
  }

}
