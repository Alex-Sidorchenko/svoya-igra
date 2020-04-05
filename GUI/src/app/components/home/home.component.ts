import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor(public appService: AppService,
              private router: Router) {}

  public ngOnInit(): void {
    this.getData();
  }

  public startSingleGame(): void {
    this.router.navigate(['single-game']);
  }

  private getData(): void {
    this.appService.getScrappedData().subscribe();
  }
}
