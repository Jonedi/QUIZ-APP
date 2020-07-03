export class Quiz {
  id: number;
  name: string;
  email: string;
  question: Question[];
  answer: Answer[];
}

import { Question } from './question';
import { Answer } from './answer';

