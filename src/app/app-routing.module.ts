import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { ResultComponent } from './result/result.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  { path: 'home', component: StartComponent },
  { path: 'result', component: ResultComponent },
  { path: 'quiz', component: QuizQuestionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
