import { Answer } from './answer';

export class Question {
    id: number;
    quizId: number;
    category: string;
    question: string;
    questionTypeId: number;
    answers: Answer[];
}
