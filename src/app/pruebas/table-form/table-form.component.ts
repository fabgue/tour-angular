import { Component, OnInit } from '@angular/core';

class Dato {
  id: number;
  valor: number;
  monto: number;

  constructor(id: number, valor: number, monto: number) {    
    this.id = id;
    this.valor = valor;
    this.monto = monto;
  }
  
}

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  //items: Dato[];

  porcentajeTotal: number;
  itemsForm: Dato[];

  constructor() { }

  ngOnInit() {
    /*this.items = [];
    this.items.push(new Dato(1, 10, 100.5));
    this.items.push(new Dato(2, 20, 200.5));
    this.items.push(new Dato(3, 30, 300.5));*/

    this.itemsForm = [];
    this.itemsForm.push(new Dato(10, 100, 1000.5));
    this.itemsForm.push(new Dato(20, 200, 2000.5));
    this.itemsForm.push(new Dato(30, 300, 3000.5));
  }

  agregarItem() {
    //this.items.push(new Dato(this.items.length + 1, null, null));
  }

  eliminarItem(index: number) {
    //this.items.splice(index, 1);
  }

  agregarItemForm() {
    this.itemsForm.push(new Dato(this.itemsForm.length + 1, null, null));
  }

  eliminarItemForm(index: number) {
    this.itemsForm.splice(index, 1);
  }

  // (keyup)="numbersOnly(i, $event)"
  numbersOnly(index: number, event: any) {
    console.log('numbersOnly'+event);
    const numero = 
    this.itemsForm[index].valor = +this.itemsForm[index].valor.toString().replace(/[^0-9.-]/g, '');
  }

  // (keypress)="keyPressEvent($event)"
  keyPressEvent(event: any) {
    return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0)
  }
  
}
