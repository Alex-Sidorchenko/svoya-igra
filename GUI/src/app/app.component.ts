import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public topics;
  public questions;
  public answers;
  public username = 'Alik Mkrtchyan';

  constructor(public appService: AppService) {}

  public ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.appService.getScrappedData().subscribe(data => {
      this.topics = data.topics;
      this.questions = data.questions;
      this.answers = data.answers;
    });
  }
}
