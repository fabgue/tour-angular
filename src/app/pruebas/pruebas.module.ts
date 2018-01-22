import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { TableFormComponent } from './table-form/table-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  declarations: [TableFormComponent],
  //exports: [TableFormComponent]
})
export class PruebasModule { }
