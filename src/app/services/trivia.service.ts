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

  private triviaToBeViewed: Trivia = {};

  private triviaToBeEdited: Trivia = {};

  constructor(private http: HttpClient) { }

  createTrivia(trivia: Trivia): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/add_trivia`, trivia, {responseType: 'text'});
  }

  getTrivias(): Observable<Trivia[]> {
    return this.http.get<Trivia[]>(`${this.apiBaseUrl}/TRIVIA`);
  }

  updateTrivia(trivia: Trivia): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/edit_trivia`, trivia, {responseType: 'text'});
  }

  deleteTrivia(trivia: Trivia): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/delete_trivia`, {body: trivia, responseType: 'text'});
  }

  setTriviaToBeEdited(triviaToBeEdited: Trivia): void {
    this.triviaToBeEdited = triviaToBeEdited;
  }

  getTriviaToBeEdited(): Trivia {
    return this.triviaToBeEdited;
  }

  setTriviaToBeViewed(triviaToBeViewed: Trivia): void {
    this.triviaToBeViewed = triviaToBeViewed;
  }

  getTriviaToBeViewed(): Trivia {
    return this.triviaToBeViewed;
  }

}
