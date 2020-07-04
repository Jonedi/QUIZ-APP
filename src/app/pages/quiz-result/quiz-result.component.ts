import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'qz-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  quiz: Quiz;
  totalQuestions: number;
  score: any;
  duration: string;

  constructor(
    private _route: ActivatedRoute,
    private _quizService: QuizService,
    private _timerService: TimerService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this.results();
  }

  results() {
    this._route.params.subscribe(p => {
      this.quiz = this._quizService.getQuizById(+p['id']);
      this.totalQuestions = this.quiz.questions.length;
      this.score = this._quizService.getScore(this.quiz.questions);
      this.score = localStorage.getItem('score');
      // this.duration = this._timerService.getTime();
      this.duration = localStorage.getItem('time');
    });
  }

  getResults() {

  }

  deleteResults() {
    localStorage.removeItem('score');
    localStorage.removeItem('time');
    this._Router.navigate(['inicio']);
  }
}
