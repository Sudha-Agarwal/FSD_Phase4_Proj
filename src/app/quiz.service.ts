import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(`${this.apiUrl}/questions`);
  }

  submitAnswers(answers: any) {
    return this.http.post(`${this.apiUrl}/submit`, answers);
  }
}