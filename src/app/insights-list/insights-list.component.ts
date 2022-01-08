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

  insights: Observable<Insight[]> | undefined;

  constructor(
    private insightService: InsightService
    ) { }

  ngOnInit(): void {
    this.insights = this.insightService.getInsights();
  }

}
