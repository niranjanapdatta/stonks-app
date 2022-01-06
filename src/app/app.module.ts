import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { InsightsListComponent } from './insights-list/insights-list.component';
import { TriviaListComponent } from './trivia-list/trivia-list.component';
import { AboutComponent } from './about/about.component';
import { InsightsFormComponent } from './insights-form/insights-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StocksListComponent,
    InsightsListComponent,
    TriviaListComponent,
    AboutComponent,
    InsightsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
