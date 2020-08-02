import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vuelo } from 'src/app/models/vuelo.model';
import { VuelosService } from 'src/app/services/vuelos.service';
import { Pasajero } from 'src/app/models/pasajero.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  vuelo: Vuelo;
  mostrar = false;
  limite: number;

  constructor(
    public activatedRouter: ActivatedRoute,
    public vueloService: VuelosService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe(params => {

      const pasajeros = this.vueloService.getPasajeros(params.id);

      this.vuelo = new Vuelo(
        params.id,
        params.paisDestino,
        params.horaSalida,
        params.tiempo,
        pasajeros
      );
    });
    console.log(this.vuelo);
    this.limite = this.vuelo.pasajeros.length;
  }

  obtener(pasajero: Pasajero): void {
    this.vuelo.pasajeros.push(pasajero[0]);
    this.limite = this.vuelo.pasajeros.length;
  }

  borrar(idx): void {

    this.vuelo.pasajeros.splice(idx, 1);
    this.actualizar();
  }

  actualizar(): void {
    console.log(this.vuelo);
    this.vueloService.save(this.vuelo);
    this.limite = this.vuelo.pasajeros.length;
  }

}
