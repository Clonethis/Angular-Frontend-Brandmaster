import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminUiComponent } from './components/admin-ui/admin-ui.component';

import { DisplayComponent } from './components/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminUiComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
