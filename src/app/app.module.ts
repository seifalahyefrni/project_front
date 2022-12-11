import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavdashComponent } from './navdash/navdash.component';
import { NavtopComponent } from './navtop/navtop.component';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { AddEquipeComponent } from './equie/add-equipe/add-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavdashComponent,
    NavtopComponent,
    DetailEquipeComponent,
    AddEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
