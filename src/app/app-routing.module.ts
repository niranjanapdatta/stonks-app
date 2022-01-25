import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CompareStocksComponent } from './compare-stocks/compare-stocks.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { EdaComponent } from './eda/eda.component';
import { EditInsightsFormComponent } from './edit-insights-form/edit-insights-form.component';
import { EditStockFormComponent } from './edit-stock-form/edit-stock-form.component';
import { EditTriviaFormComponent } from './edit-trivia-form/edit-trivia-form.component';
import { InsightPageComponent } from './insight-page/insight-page.component';
import { InsightsFormComponent } from './insights-form/insights-form.component';
import { InsightsListComponent } from './insights-list/insights-list.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { ResultComponent } from './result/result.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockPageComponent } from './stock-page/stock-page.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { TriviaFormComponent } from './trivia-form/trivia-form.component';
import { TriviaListComponent } from './trivia-list/trivia-list.component';
import { TriviaPageComponent } from './trivia-page/trivia-page.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "home", component: StocksListComponent },
  { path: "insights", component: InsightsListComponent },
  { path: "trivia", component: TriviaListComponent },
  { path: "about", component: AboutComponent },
  { path: "addItems", component: AddItemsComponent },
  { path: "addStock", component: StockFormComponent },
  { path: "addInsight", component: InsightsFormComponent },
  { path: "addTrivia", component: TriviaFormComponent },
  { path: "login", component: LoginFormComponent },
  { path: "compare", component: CompareStocksComponent },
  { path: "account", component: AccountComponent },
  { path: "changePassword", component: ChangePasswordComponent },
  { path: "deleteAccount", component: DeleteAccountComponent },
  { path: "editStock", component: EditStockFormComponent },
  { path: "editInsight", component: EditInsightsFormComponent },
  { path: "editTrivia", component: EditTriviaFormComponent },
  { path: "signup", component: SignUpFormComponent },
  { path: "insight", component: InsightPageComponent },
  { path: "triviaPage", component: TriviaPageComponent },
  { path: "stock", component: StockPageComponent },
  { path: "users", component: UsersListComponent },
  { path: "introduction", component: IntroductionComponent },
  { path: "methodology", component: MethodologyComponent },
  { path: "eda", component: EdaComponent },
  { path: "result", component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
