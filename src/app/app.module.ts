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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SliderComponent,
    SideNewsComponent,
    BodyArticlesComponent,
    FooterArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
