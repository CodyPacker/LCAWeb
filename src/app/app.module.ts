import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { DonationsComponent } from './donations/donations.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { InterestComponent } from './interest/interest.component';
import { PhilanthropyComponent } from './philanthropy/philanthropy.component';
import { BrothersComponent } from './brothers/brothers.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    GalleryComponent,
    NewsletterComponent,
    DonationsComponent,
    ScholarshipComponent,
    InterestComponent,
    PhilanthropyComponent,
    BrothersComponent
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
	{path: 'gallery', component: GalleryComponent},
	{path: 'newsletter', component: NewsletterComponent},
	{path: 'donations', component: DonationsComponent},
	{path: 'scholarship', component: ScholarshipComponent},
	{path: 'interest', component: InterestComponent},
	{path: 'philanthropy', component: PhilanthropyComponent},
	{path: 'brothers', component: BrothersComponent}
  ]),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
