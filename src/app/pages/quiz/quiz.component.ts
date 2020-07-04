import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../models/quiz';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'qz-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizId: number;
  quiz: Quiz;
  questionPage: number = 0;
  questionsFiltered: Question[] = [];
  time: string;
  timerHandler: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _quizService: QuizService,
    private _timerService: TimerService
  ) { }

  ngOnInit(): void {
    this.getQuiz();

  }

  getQuiz(){
    this._route.params.subscribe(p => {
      this.quizId = +p['id'];
      this.getQuizById(this.quizId);
      this.getTime();
    });
  }

  getQuizById(id: number) {
    this.quiz = this._quizService.getQuizById(id);
    this.questionsFiltered = this.getQuestionsFiltered(0);
  }

  goTo(position: number) {
    if (position > 0) {
      this.questionPage++;
      if (this.questionPage === this.quiz.questions.length) {
        this.stopTime();
        this._router.navigate(['quiz', this.quizId, 'results']);
        return;
      }
    }
    else {
      this.questionPage--;
    }

    this.questionsFiltered = this.getQuestionsFiltered(this.questionPage);
  }

  getTime() {
    let start = Date.now();
    this.timerHandler = setInterval(() => {
      this._timerService.setTime(start);
      this.time = this._timerService.getTime();
    }, 1000);
  }

  stopTime() {
    clearInterval(this.timerHandler);
  }

  getQuestionsFiltered(position: number) {
    let question = this.quiz.questions[position];
    return this.quiz.questions.filter(q => q.id === question.id);
  }

  selectAnswer(question: Question, answer: Answer) {
    question.answers.forEach(a => { if (a.id !== answer.id){ a.selected = false }});
  }
}
