import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SaraComponent } from './sara/sara.component';

@NgModule({
  declarations: [AppComponent, ConfirmComponent, SaraComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
