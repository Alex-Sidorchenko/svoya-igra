import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public username = 'Alik Mkrtchyan';

  constructor(private router: Router) {}

  public navigateToMainPage(): void {
    this.router.navigate(['']);
  }
}
