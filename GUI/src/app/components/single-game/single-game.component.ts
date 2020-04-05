import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.less']
})
export class SingleGameComponent implements OnInit {
  public question: string;
  @ViewChild('answerField', { static: false }) public answerField: ElementRef;
  private answer: string;

  constructor(private appService: AppService,
              private router: Router) {}

  public ngOnInit(): void {
    if (!this.appService.questions) {
      this.router.navigate(['']);
      return;
    }
    this.selectRandomQuestion();
  }

  public submitAnswer() {
    if (this.answerField.nativeElement.value === this.answer) {
      alert('Правильно!');
    }
  }

  private selectRandomQuestion(): void {
    const randomNumber = Math.floor(this.appService.questions.length * Math.random());
    this.question = this.appService.questions[randomNumber];
    this.answer = this.appService.answers[randomNumber];
  }
}
