import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
import { LayoutComponent } from './Layout/layout/layout.component';
import { SearchComponent } from './components/search/search.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';


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
    CounterComponent,
    LayoutComponent,
    SearchComponent,
    AllEventsComponent,
    AboutUsComponent,
    ContactUsComponent,
    MaxLengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
