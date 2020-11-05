import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { ChinaComponent } from './china/china.component';
import { ChristComponent } from './christ/christ.component';
import { MachuComponent } from './machu/machu.component';
import { CichenComponent } from './cichen/cichen.component';
import { RomanComponent } from './roman/roman.component';
import { PetraComponent } from './petra/petra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TajmahalComponent,
    ChinaComponent,
    ChristComponent,
    MachuComponent,
    CichenComponent,
    RomanComponent,
    PetraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaterialModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
