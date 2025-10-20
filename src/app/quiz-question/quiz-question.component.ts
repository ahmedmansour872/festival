import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss'],
})
export class QuizQuestionComponent {
  timer: number = 60;
  success = new Audio('./assets/images/success.mp3');
  fail = new Audio('assets/images/fail.mp3');
  score: number = 0;
  questionView: any;
  isClicked: boolean = false
  correctAnswer: any

  data: any[] = [
    {
      id: 10,
      question: "What does Festival's EVP pillar 'Grow with us' focus on?",
      answers: [
        { id: 1, text: 'Building new skills', isCorrect: true },
        { id: 2, text: 'Maintaining the status quo', isCorrect: false },
        { id: 3, text: 'Individual success only', isCorrect: false },
      ],
    },
    {
      id: 11,
      question:
        'Which EVP pillar emphasizes working in an inclusive environment?',
      answers: [
        { id: 1, text: 'Make an Impact', isCorrect: false },
        { id: 2, text: 'Transform', isCorrect: false },
        { id: 3, text: 'Belong', isCorrect: true },
      ],
    },
    {
      id: 12,
      question: "What is the focus of Festival's EVP pillar 'Make an Impact'?",
      answers: [
        { id: 1, text: 'Building trust', isCorrect: true },
        { id: 2, text: 'Creating the future', isCorrect: false },
        { id: 3, text: 'Experimenting to solve problems', isCorrect: false },
      ],
    },
    {
      id: 13,
      question:
        'Which EVP pillar encourages experimentation to solve complex problems?',
      answers: [
        { id: 1, text: 'Grow with us', isCorrect: false },
        { id: 2, text: 'Belong', isCorrect: false },
        { id: 3, text: 'Transform', isCorrect: true },
      ],
    },
    {
      id: 14,
      question: "What does Festival's EVP promise to its employees?",
      answers: [
        { id: 1, text: 'A static career path', isCorrect: false },
        { id: 2, text: 'Opportunities to build new skills', isCorrect: true },
        { id: 3, text: 'Limited career progression', isCorrect: false },
      ],
    },
    {
      id: 15,
      question: 'What is the age range for the Code Like a Girl program?',
      answers: [
        { id: 1, text: '18-25 years old', isCorrect: false },
        { id: 2, text: '14-18 years old', isCorrect: true },
        { id: 3, text: '25-30 years old', isCorrect: false },
      ],
    },
    {
      id: 16,
      question: "What is the duration of Festival's Summer Internship?",
      answers: [
        { id: 1, text: '3 months', isCorrect: false },
        { id: 2, text: '1 month', isCorrect: true },
        { id: 3, text: '6 months', isCorrect: false },
      ],
    },
    {
      id: 17,
      question:
        'Which program provides a 2-week internship for first and second-year university students?',
      answers: [
        { id: 1, text: 'Discover Program', isCorrect: false },
        { id: 2, text: 'Summer Internship', isCorrect: false },
        { id: 3, text: 'Work Experience', isCorrect: true },
      ],
    },
  ];

  failQuestion: any

  constructor(private router: Router) { }

  ngOnInit() {
    let clear = setInterval(() => {
      if (this.timer == 0) {
        localStorage.setItem('score', this.score.toString())
        clearInterval(clear)
        this.router.navigateByUrl('/result')
      }
      --this.timer
    }, 1000);
    this.calcRandomNumber();
  }

  showAnswer(item: any) {
    this.isClicked = true
    this.failQuestion = item
    if (item?.isCorrect == this.correctAnswer.isCorrect) {
      this.success.play()
      ++this.score
    }
    else
      this.fail.play()

    let clear = setTimeout(() => {
      clearTimeout(clear)
      this.isClicked = false
      if (this.data.length == 0) {
        localStorage.setItem('score', this.score.toString())
        this.router.navigateByUrl('/result')
      } else
        this.calcRandomNumber()
    }, 1000);
  }

  calcRandomNumber() {
    const randomNumber = Math.floor(Math.random() * this.data.length);

    this.questionView = this.data[randomNumber];
    this.correctAnswer = this.questionView?.answers?.find((ele: any) => ele?.isCorrect)
    this.data.splice(randomNumber, 1);
  }
}
