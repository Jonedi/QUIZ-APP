import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'qz-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  quizes: Quiz[];

  constructor(
    private _quizService: QuizService
  ) { }

  ngOnInit(): void {
    this.quizes = this._quizService.getQuiz();
  }

}
