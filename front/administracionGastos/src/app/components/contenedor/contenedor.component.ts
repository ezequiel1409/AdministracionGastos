import { Component } from '@angular/core';
import { CabeceraComponenteComponent } from '../cabecera-componente/cabecera-componente.component';
import { GastosHomeComponent } from '../gastos-home/gastos-home.component';
import { ChartComponent } from '../chart/chart.component';

@Component({
    selector: 'app-contenedor',
    standalone: true,
    templateUrl: './contenedor.component.html',
    styleUrl: './contenedor.component.scss',
    imports: [CabeceraComponenteComponent, GastosHomeComponent, ChartComponent]
})
export class ContenedorComponent {

}
