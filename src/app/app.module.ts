import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ItemDirective } from './item.directive';
import { DayComponent } from './day/day.component';
import { AddlolPipe } from './addlol.pipe';
import { UglyDayComponent } from './ugly-day/ugly-day.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ItemDirective,
    DayComponent,
    AddlolPipe,
    UglyDayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
