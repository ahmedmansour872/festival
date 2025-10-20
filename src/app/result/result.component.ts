import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  score: number = 0
  constructor(private router: Router) {
    let scoreGame = localStorage.getItem('score')
    if (scoreGame) this.score = +scoreGame
    setTimeout(() => {
      router.navigateByUrl('/home')
      localStorage.removeItem("score")
    }, 5000);
  }
}
