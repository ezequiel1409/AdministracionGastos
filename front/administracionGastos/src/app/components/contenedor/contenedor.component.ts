import { Component } from '@angular/core';
import { CabeceraComponenteComponent } from '../cabecera-componente/cabecera-componente.component';
import { GastosHomeComponent } from '../gastos-home/gastos-home.component';

@Component({
    selector: 'app-contenedor',
    standalone: true,
    templateUrl: './contenedor.component.html',
    styleUrl: './contenedor.component.scss',
    imports: [CabeceraComponenteComponent, GastosHomeComponent]
})
export class ContenedorComponent {

}
