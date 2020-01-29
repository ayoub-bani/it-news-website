import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { SliderComponent } from './component/slider/slider.component';
import { SideNewsComponent } from './component/layout/side-news/side-news.component';
import { BodyArticlesComponent } from './component/body-articles/body-articles.component';
import { FooterArticlesComponent } from './component/footer-articles/footer-articles.component';
import { PagesComponent } from './pages/pages.component';
import { NationalComponent } from './national/national.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WorldComponent } from './world/world.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { WeatherComponent } from './weather/weather.component';
import { OpinionComponent } from './opinion/opinion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftsidebarComponent } from './dashboard/leftsidebar/leftsidebar.component';
import { MainpageComponent } from './dashboard/mainpage/mainpage.component';
import { RightsidebarComponent } from './dashboard/rightsidebar/rightsidebar.component';
import { TopcardsComponent } from './dashboard/topcards/topcards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SliderComponent,
    SideNewsComponent,
    BodyArticlesComponent,
    FooterArticlesComponent,
    PagesComponent,
    NationalComponent,
    HomePageComponent,
    WorldComponent,
    SportsComponent,
    BusinessComponent,
    WeatherComponent,
    OpinionComponent,
    DashboardComponent,
    LeftsidebarComponent,
    MainpageComponent,
    RightsidebarComponent,
    TopcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
