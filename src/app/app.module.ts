import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShipComponent } from './ship.component';
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  imports:      [ BrowserModule, FormsModule,DragDropModule ],
  declarations: [ AppComponent, ShipComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
