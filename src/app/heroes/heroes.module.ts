import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [HeroesComponent, HeroDetailComponent, MessagesComponent],
  exports: [HeroesComponent, MessagesComponent]
})
export class HeroesModule { }
