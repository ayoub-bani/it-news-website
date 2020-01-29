import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NationalComponent } from './national/national.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WorldComponent } from './world/world.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { WeatherComponent } from './weather/weather.component';
import { OpinionComponent } from './opinion/opinion.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "national", component: NationalComponent },
  { path: "world", component: WorldComponent },
  { path: "sports", component: SportsComponent },
  { path: "business", component: BusinessComponent },
  { path: "weather", component: WeatherComponent },
  { path: "dashboard", component: DashboardComponent },
  // { path: "calculator", component: CalculatorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
