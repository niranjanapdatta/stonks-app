import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { InsightsFormComponent } from './insights-form/insights-form.component';
import { InsightsListComponent } from './insights-list/insights-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { TriviaFormComponent } from './trivia-form/trivia-form.component';
import { TriviaListComponent } from './trivia-list/trivia-list.component';

const routes: Routes = [
  { path: "", component: StocksListComponent},
  { path: "home", component: StocksListComponent },
  { path: "insights", component: InsightsListComponent },
  { path: "trivia", component: TriviaListComponent },
  { path: "about", component: AboutComponent },
  { path: "addItems", component: AddItemsComponent },
  { path: "addStock", component: StockFormComponent },
  { path: "addInsight", component: InsightsFormComponent },
  { path: "addTrivia", component: TriviaFormComponent },
  { path: "loginPage", component: LoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
