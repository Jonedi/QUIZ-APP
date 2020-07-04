import { Injectable } from '@angular/core';
import { QUIZ } from '../data/mock-data';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuiz(): Quiz[] {
    return QUIZ;
  }

  getQuizById(id: number): Quiz {
    return this.getQuiz().filter(q => q.id === id)[0] || null;
  }

  getScore(questions: Question[]) {
    let cont = 0;

    questions.forEach(q => {
      q.answers.forEach(a => {
        if (a.selected && a.isAnswer) {
          cont++;
          localStorage.setItem('score', cont.toString());
        }
      });
    });

    return cont;
  }
}
