import { Quiz } from '../models/quiz';
import { QuestionType } from '../models/question-type';

const QUESTIONTYPE: QuestionType[] = [
    {
        id: 1,
        name: 'unique answer'
    }
];

export const QUIZ: Quiz[] = [
  {
    id: 1,
    name: 'Reta tus conocimientos',
    description: 'Presentarás 10 preguntas de falso y verdadero',
    challenge: '¿Lograrás puntuación del 100%?',
    questions: [
      {
        id: 1,
        category: 'Conocimiento General',
        question: 'En el año 1969 se realizó el alunizaje por parte de Estados Unidos',
        quizId: 1,
        questionTypeId: 1,
        answers: [
          {
            id: 1,
            name: 'Verdadero',
            questionId: 1,
            isAnswer: true,
            selected: false
          },
          {
            id: 2,
            name: 'falso',
            questionId: 1,
            isAnswer: false,
            selected: false
          },
        ]
      },
      {
        id: 2,
        category: 'Entretenimiento: Video juegos',
        question: 'TF2: la caída del daño del cohete centinela se calcula en función de la distancia entre el centinela y el enemigo, no el ingeniero y el enemigo.',
        quizId: 1,
        questionTypeId: 1,
        answers: [
          {
            id: 3,
            name: 'Verdadero',
            questionId: 2,
            isAnswer: false,
            selected: false
          },
          {
            id: 4,
            name: 'falso',
            questionId: 2,
            isAnswer: true,
            selected: false
          },
        ]
      },
      {
        id: 3,
        category: 'Política',
        question: 'Joko Widodo apareció en la portada de una revista TIME.',
        quizId: 1,
        questionTypeId: 1,
        answers: [
          {
            id: 5,
            name: 'Verdadero',
            questionId: 3,
            isAnswer: true,
            selected: false
          },
          {
            id: 6,
            name: 'falso',
            questionId: 3,
            isAnswer: false,
            selected: false
          },
        ]
      },
      {
        id: 4,
        category: 'Entretenimiento: Musica',
        question: 'La banda STRFKR también se conoció brevemente como Pyramiddd.',
        quizId: 1,
        questionTypeId: 1,
        answers: [
          {
            id: 7,
            name: 'Verdadero',
            questionId: 4,
            isAnswer: false,
            selected: false
          },
          {
            id: 8,
            name: 'falso',
            questionId: 4,
            isAnswer: true,
            selected: false
          },
        ]
      },
      {
        id: 5,
        category: 'Entretenimiento: Anime & Manga Japonés',
        question: 'Druid es un estilo de arte Manga japonés.',
        quizId: 1,
        questionTypeId: 1,
        answers: [
          {
            id: 9,
            name: 'Verdadero',
            questionId: 5,
            isAnswer: false,
            selected: false
          },
          {
            id: 10,
            name: 'falso',
            questionId: 5,
            isAnswer: true,
            selected: false
          },
        ]
      },
      {
        id: 6,
        category: 'Entretenimiento: Television',
        question: 'Klingon es el planeta hogar de los Qon´oS.',
        quizId: 1,
        questionTypeId: 1,
        answers: [
          {
            id: 11,
            name: 'Verdadero',
            questionId: 6,
            isAnswer: false,
            selected: false
          },
          {
            id: 12,
            name: 'falso',
            questionId: 6,
            isAnswer: true,
            selected: false
          },
        ]
      },
      {
        id: 7,
        category: 'Ciencia y Naturaleza',
        question: 'El valor de una caloría es diferente del valor de una caloría.',
        quizId: 1,
        questionTypeId: 1,
        answers: [
          {
            id: 13,
            name: 'Verdadero',
            questionId: 7,
            isAnswer: true,
            selected: false
          },
          {
            id: 14,
            name: 'falso',
            questionId: 7,
            isAnswer: false,
            selected: false
          },
        ]
      },
      {
        id: 8,
        category: 'Historia',
        question: 'Durante la Guerra de Invierno, la cantidad de soldados de la Unión Soviética que murieron o desaparecieron fue cinco veces más que Finlandia.',
        quizId: 1,
        questionTypeId: 1,
        answers: [
          {
            id: 15,
            name: 'Verdadero',
            questionId: 8,
            isAnswer: true,
            selected: false
          },
          {
            id: 16,
            name: 'falso',
            questionId: 8,
            isAnswer: false,
            selected: false
          },
        ]
      },
      {
        id: 9,
        category: 'Entretenimiento: Películas',
        question: 'El arma que usaba Clint Eastwood era una magnum 44 automática',
        quizId: 1,
        questionTypeId: 1,
        answers: [
          {
            id: 17,
            name: 'Verdadero',
            questionId: 9,
            isAnswer: false,
            selected: false
          },
          {
            id: 18,
            name: 'falso',
            questionId: 9,
            isAnswer: true,
            selected: false
          },
        ]
      },
      {
        id: 10,
        category: 'Mitología',
        question: 'Janus era el dios romano de las puertas y pasillos.',
        quizId: 1,
        questionTypeId: 1,
        answers: [
          {
            id: 19,
            name: 'Verdadero',
            questionId: 10,
            isAnswer: true,
            selected: false
          },
          {
            id: 20,
            name: 'falso',
            questionId: 10,
            isAnswer: false,
            selected: false
          },
        ]
      },
    ]
  },
];
