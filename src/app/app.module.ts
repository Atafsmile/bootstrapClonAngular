import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderofBoostComponent } from './headerof-boost/headerof-boost.component';
import { CardbootsComponent } from './cardboots/cardboots.component';
import { Cardboots2Component } from './cardboots2/cardboots2.component';
import { ArticalsComponent } from './articals/articals.component';
import { FooterofbootsComponent } from './footerofboots/footerofboots.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderofBoostComponent,
    CardbootsComponent,
    Cardboots2Component,
    ArticalsComponent,
    FooterofbootsComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
