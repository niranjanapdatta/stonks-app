import { Component, OnInit } from '@angular/core';
import { Insight } from '../models/insight';
import { InsightService } from '../insight.service';
import { emptyInsight } from '../constants/emptyInsight';

@Component({
  selector: 'app-insights-form',
  templateUrl: './insights-form.component.html',
  styleUrls: ['./insights-form.component.css']
})
export class InsightsFormComponent implements OnInit {

  insight: Insight = emptyInsight;

  constructor(
    private insightService: InsightService
  ) { }

  ngOnInit(): void {
  }

  submitAction() : void {
    console.log(this.insight);
    this.insightService.createInsight(this.insight).subscribe(res => console.log(res));
  }

}
