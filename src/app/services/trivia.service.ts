import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trivia } from '../models/trivia';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  private apiBaseUrl: String = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  createTrivia(trivia: Trivia): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/add_trivia`, trivia, { responseType: 'text'});
  }

  getTrivias(): Observable<Trivia[]> {
    return this.http.get<Trivia[]>(`${this.apiBaseUrl}/TRIVIA`);
  }
}
