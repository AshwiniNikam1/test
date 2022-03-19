import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product/product.module';
import { SubjectComponent } from './home/subject/subject.component';
import { NotificationComponent } from './home/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
   //ProductModule,;lazy loading
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
