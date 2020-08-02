import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VuelosComponent } from './vuelos.component';

const routes: Routes = [{ path: '', component: VuelosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VuelosRoutingModule { }
