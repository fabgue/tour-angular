import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { HeroesModule } from './heroes/heroes.module';
import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './heroes/in-memory-data.service';
import { PruebasModule } from './pruebas/pruebas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,     
    AppRoutingModule,
    HttpClientModule,
    HeroesModule, 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.    
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false } ), PruebasModule
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
