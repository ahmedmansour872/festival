import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  score: number = 0
  numberOfQuestions: number = 0
  constructor(private router: Router) {
    let scoreGame = localStorage.getItem('score')
    let numberOfQuestions = localStorage.getItem('numberOfQuestions')
    if (scoreGame) this.score = +scoreGame
    if (numberOfQuestions) this.numberOfQuestions = +numberOfQuestions
    setTimeout(() => {
      router.navigateByUrl('/home')
      localStorage.removeItem("score")
      localStorage.removeItem("numberOfQuestions")
    }, 5000);
  }
}
