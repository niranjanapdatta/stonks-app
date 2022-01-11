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
import { CompareStocksComponent } from './compare-stocks/compare-stocks.component';
import { AccountComponent } from './account/account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { EditStockFormComponent } from './edit-stock-form/edit-stock-form.component';
import { EditInsightsFormComponent } from './edit-insights-form/edit-insights-form.component';
import { EditTriviaFormComponent } from './edit-trivia-form/edit-trivia-form.component';
import { InsightPageComponent } from './insight-page/insight-page.component';
import { TriviaPageComponent } from './trivia-page/trivia-page.component';
import { StockPageComponent } from './stock-page/stock-page.component';
import { ChartsModule } from 'ng2-charts';

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
    AddItemsComponent,
    CompareStocksComponent,
    AccountComponent,
    ChangePasswordComponent,
    DeleteAccountComponent,
    EditStockFormComponent,
    EditInsightsFormComponent,
    EditTriviaFormComponent,
    InsightPageComponent,
    TriviaPageComponent,
    StockPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
