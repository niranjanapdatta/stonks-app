import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InsightsListComponent } from './insights-list/insights-list.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { TriviaListComponent } from './trivia-list/trivia-list.component';

const routes: Routes = [
  { path: "", component: StocksListComponent},
  { path: "home", component: StocksListComponent },
  { path: "insights", component: InsightsListComponent },
  { path: "trivia", component: TriviaListComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
