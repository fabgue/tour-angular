import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [HeroesComponent],
  exports: [HeroesComponent]
})
export class HeroesModule { }
