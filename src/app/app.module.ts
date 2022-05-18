import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MostSharingComponent } from './components/most-sharing/most-sharing.component';
import { NewestEventsComponent } from './components/newest-events/newest-events.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    MostSharingComponent,
    NewestEventsComponent,
    DashboardComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
