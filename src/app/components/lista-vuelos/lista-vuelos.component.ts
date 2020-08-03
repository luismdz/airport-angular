import { Component, OnInit } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';
import { Vuelo } from 'src/app/models/vuelo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-vuelos',
  templateUrl: './lista-vuelos.component.html',
  styleUrls: ['./lista-vuelos.component.scss']
})
export class ListaVuelosComponent implements OnInit {
  vuelos: object[] = [];

  constructor(
    public vuelosService: VuelosService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.cargarInformacion();
  }

  cargarInformacion(): void {

    this.vuelosService.getVuelos().sort(this.ordenar).filter(v => v.pasajeros !== null).forEach(v => {
      this.vuelos.push(
        {
          ...v,
          qty: v.pasajeros.length
        }
      );
    });

    console.log(this.vuelos);
  }

  verDetalle(vuelo: Vuelo): void {
    console.log(vuelo);
    this.router.navigate(['details', 'vuelo'], { queryParams: vuelo });
  }

  ordenar(a: Vuelo, b: Vuelo): number {
    if (a.id > b.id) {
      return 1;
    } else if (a.id < b.id) {
      return -1;
    }
  }

}
