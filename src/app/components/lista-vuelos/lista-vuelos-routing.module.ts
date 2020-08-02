import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaVuelosComponent } from './lista-vuelos.component';

const routes: Routes = [{ path: '', component: ListaVuelosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaVuelosRoutingModule { }
