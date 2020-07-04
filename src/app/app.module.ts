import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizService } from './services/quiz.service';
import { TimerService } from './services/timer.service';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerListComponent } from './pages/answer-list/answer-list.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerListComponent,
    QuizComponent,
    QuizListComponent,
    QuizResultComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuizService,
    TimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
