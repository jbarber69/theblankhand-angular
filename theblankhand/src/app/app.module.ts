import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageMobComponent } from './homepage-mob/homepage-mob.component';
import { HomepageDeskComponent } from './homepage-desk/homepage-desk.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomepageMobComponent,
    HomepageDeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
