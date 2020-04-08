import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './components/home/home.component';
import { SingleGameComponent } from './components/single-game/single-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
