import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './start/start.component';
import { ResultComponent } from './result/result.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ResultComponent,
    QuizQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
