import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaVuelosRoutingModule } from './lista-vuelos-routing.module';
import { ListaVuelosComponent } from './lista-vuelos.component';


@NgModule({
  declarations: [ListaVuelosComponent],
  imports: [
    CommonModule,
    ListaVuelosRoutingModule
  ]
})
export class ListaVuelosModule { }
