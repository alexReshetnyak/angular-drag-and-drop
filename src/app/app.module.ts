import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DndModule } from 'ngx-drag-drop';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
