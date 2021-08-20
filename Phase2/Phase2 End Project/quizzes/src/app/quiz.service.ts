import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
 quizzes:Quiz [] = [
   {
     question:'what is the capital of the USA?',
     answer:[
      { option:'New Delhi', correct:false},
      { option:'Washignton D.C', correct:true},
      { option:'Nairobi', correct:false},
         ]
   },
   {
    question:'who is the president of the USA?',
    answer:[
     { option:'Obama', correct:false},
     { option:'Biden', correct:true},
     { option:'Trump', correct:false},
        ]
  },
  {
    question:'what is the capital of the India?',
    answer:[
     { option:'Mumbai', correct:false},
     { option:'New Delhi', correct:true},
     { option:'Nairobi', correct:false},
        ]
  },
  {
    question:'what is the capital of the Nepal?',
    answer:[
     { option:'New Delhi', correct:false},
     { option:'Kathmandu', correct:true},
     { option:'Nairobi', correct:false},
        ]
  },
  {
    question:'who is the prime minister of U.K?',
    answer:[
     { option:'Trump', correct:false},
     { option:'Borris Johnson', correct:true},
     { option:'Sammy', correct:false},
        ]
  },
  {
    question:'who is the CEO of Amazon?',
    answer:[
     { option:'Elon Musk', correct:false},
     { option:'Jeff Bezos', correct:true},
     { option:'Nairobi', correct:false},
        ]
  },
  {
    question:'who is the CEO of Tesla?',
    answer:[
     { option:'Jeff Bezos', correct:false},
     { option:'Elon Musk', correct:true},
     { option:'Zuckerberg', correct:false},
        ]
  },
  {
    question:'who is the founder of Facebook?',
    answer:[
     { option:'Elon Musk', correct:false},
     { option:'Zuckerberg', correct:true},
     { option:'Nairobi', correct:false},
        ]
  },
  {
    question:'what is the hardware of Computer?',
    answer:[
     { option:'Paint', correct:false},
     { option:'Keyboard', correct:true},
     { option:'Microsoft ', correct:false},
        ]
  },
  {
    question:'who is the owner of Microsoft?',
    answer:[
     { option:'Jack', correct:false},
     { option:'Bill Gates', correct:true},
     { option:'Nairobi', correct:false},
        ]
  }
 ]
  constructor() { }

  getQuizzes(){
  return this.quizzes;
  }
}
