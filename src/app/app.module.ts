import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
  ]),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
