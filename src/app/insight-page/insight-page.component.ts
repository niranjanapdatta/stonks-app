import { Component, OnInit } from '@angular/core';
import { Insight } from '../models/insight';
import { InsightService } from '../services/insight.service';

@Component({
  selector: 'app-insight-page',
  templateUrl: './insight-page.component.html',
  styleUrls: ['./insight-page.component.css']
})
export class InsightPageComponent implements OnInit {

  insight: Insight = {};

  constructor(
    private insightService: InsightService
  ) { }

  ngOnInit(): void {
    this.insight = this.insightService.getInsightToBeViewed();
  }

}
