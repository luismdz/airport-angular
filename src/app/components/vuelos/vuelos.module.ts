import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VuelosRoutingModule } from './vuelos-routing.module';
import { VuelosComponent } from './vuelos.component';


@NgModule({
  declarations: [VuelosComponent],
  imports: [
    CommonModule,
    VuelosRoutingModule,
    FormsModule
  ]
})
export class VuelosModule { }
