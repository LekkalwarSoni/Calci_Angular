import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './global_components/body/body.component';
import { HeaderComponent } from './global_components/header/header.component';
import { FooterComponent } from './global_components/footer/footer.component';
import { HtmlcssComponent } from './htmlcssjs/htmlcss/htmlcss.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    HtmlcssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
