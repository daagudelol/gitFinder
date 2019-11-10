import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routing
import { AppRoutingModule } from './app-routing.module';
//Servicios
import { RepositoryService } from './services/repository.service';

import { AppComponent } from './app.component';
import { ScrollingModule } from "@angular/cdk/scrolling";


import { IndexComponent } from './pages/index/index.component';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
