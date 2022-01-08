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

  constructor(private http: HttpClient) { }

  createInsight(insight: Insight): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/publish_article`, insight, { responseType: 'text'});
  }

  getInsights(): Observable<Insight[]> {
    return this.http.get<Insight[]>(`${this.apiBaseUrl}/ARTICLES`);
  }
}
