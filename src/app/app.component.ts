import { Component } from '@angular/core';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrademark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'qz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QUIZ-APP';
  logo = faFeatherAlt;
  copyright = faTrademark;
}
