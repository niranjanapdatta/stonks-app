import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CompareStocksComponent } from './compare-stocks/compare-stocks.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { EditInsightsFormComponent } from './edit-insights-form/edit-insights-form.component';
import { EditStockFormComponent } from './edit-stock-form/edit-stock-form.component';
import { EditTriviaFormComponent } from './edit-trivia-form/edit-trivia-form.component';
import { InsightsFormComponent } from './insights-form/insights-form.component';
import { InsightsListComponent } from './insights-list/insights-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { TriviaFormComponent } from './trivia-form/trivia-form.component';
import { TriviaListComponent } from './trivia-list/trivia-list.component';

const routes: Routes = [
  { path: "", component: LoginFormComponent },
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
  { path: "signup", component: SignUpFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
