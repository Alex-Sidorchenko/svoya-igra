import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

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
              private router: Router,
              private ngxSmartModalService: NgxSmartModalService) {}

  public ngOnInit(): void {
    if (!this.appService.questions) {
      this.router.navigate(['']);
      return;
    }
    this.selectRandomQuestion();
  }

  public submitAnswer() {
    if (this.answerField.nativeElement.value.toLowerCase() === this.answer.toLowerCase()) {
      this.ngxSmartModalService.getModal('correct').open();
      setTimeout(() => {
        this.ngxSmartModalService.getModal('correct').close();
      }, 1000);
      this.selectRandomQuestion();
    } else {
      this.ngxSmartModalService.getModal('wrong').open();
      setTimeout(() => {
        this.ngxSmartModalService.getModal('wrong').close();
      }, 1000);
    }
    this.answerField.nativeElement.value = '';
  }

  private selectRandomQuestion(): void {
    const randomNumber = Math.floor(this.appService.questions.length * Math.random());
    this.question = this.appService.questions[randomNumber];
    this.answer = this.appService.answers[randomNumber];
  }
}
