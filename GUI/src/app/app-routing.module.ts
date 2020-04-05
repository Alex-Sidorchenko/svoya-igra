import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleGameComponent } from './components/single-game/single-game.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'single-game',
    component: SingleGameComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
