import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  declarations: [HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent, HeroSearchComponent],
  exports: [HeroesComponent, MessagesComponent]
})
export class HeroesModule { }
