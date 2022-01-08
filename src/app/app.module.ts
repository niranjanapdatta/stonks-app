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
import { TriviaFormComponent } from './trivia-form/trivia-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { AddItemsComponent } from './add-items/add-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StocksListComponent,
    InsightsListComponent,
    TriviaListComponent,
    AboutComponent,
    InsightsFormComponent,
    TriviaFormComponent,
    LoginFormComponent,
    SignUpFormComponent,
    StockFormComponent,
    AddItemsComponent
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
