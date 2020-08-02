import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes =
  [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'vuelos',
      loadChildren: () => import('./components/vuelos/vuelos.module').then(m => m.VuelosModule)
    },
    {
      path: 'listaVuelos',
      loadChildren: () => import('./components/lista-vuelos/lista-vuelos.module').then(m => m.ListaVuelosModule)
    },
    {
      path: 'details/:vuelo',
      component: DetailsComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
