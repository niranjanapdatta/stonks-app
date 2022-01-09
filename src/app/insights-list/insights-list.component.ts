import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Insight } from '../models/insight';
import { InsightService } from '../services/insight.service';

@Component({
  selector: 'app-insights-list',
  templateUrl: './insights-list.component.html',
  styleUrls: ['./insights-list.component.css']
})
export class InsightsListComponent implements OnInit {

  insights: Insight[] | undefined;

  constructor(
    private insightService: InsightService
    ) { }

  ngOnInit(): void {
    this.insightService.getInsights().subscribe((res) => {
      this.insights = res;
      if(this.insights != undefined)
        for(let trivia of this.insights)
          if(trivia.summary != undefined && trivia.summary.length > 30)
            trivia.summaryForDisplay = trivia.summary.slice(0, 300) + ".........";
    });
  }

}
