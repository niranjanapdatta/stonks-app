import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Insight } from '../models/insight';

@Injectable({
  providedIn: 'root'
})
export class InsightService {

  private apiBaseUrl: String = environment.apiBaseUrl;

  private insightToBeViewed: Insight = {};

  private insightToBeEdited: Insight = {};

  constructor(private http: HttpClient) { }

  createInsight(insight: Insight): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/publish_article`, insight, {responseType: 'text'});
  }

  getInsights(): Observable<Insight[]> {
    return this.http.get<Insight[]>(`${this.apiBaseUrl}/ARTICLES`);
  }

  updateInsight(insight: Insight): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/edit_article`, insight, {responseType: 'text'});
  }

  deleteInsight(insight: Insight): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/delete_article`, {body: insight, responseType: 'text'});
  }

  setInsightToBeEdited(insightToBeEdited: Insight): void {
    this.insightToBeEdited = insightToBeEdited;
  }

  getInsightToBeEdited(): Insight {
    return this.insightToBeEdited;
  }

  setInsightToBeViewed(insightToBeViewed: Insight): void {
    this.insightToBeViewed = insightToBeViewed;
  }

  getInsightToBeViewed(): Insight {
    return this.insightToBeViewed;
  }

  getInsightsForStock(stockSymbol: String): Observable<Insight[]> {
    return this.http.get<Insight[]>(`${this.apiBaseUrl}/articles_for/` + stockSymbol);
  }

}
