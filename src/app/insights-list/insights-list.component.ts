import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InsightService } from '../insight.service';
import { Insight } from '../models/insight';

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
