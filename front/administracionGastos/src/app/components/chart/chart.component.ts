import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  imports: [],
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('myChart') myChart: ElementRef | undefined;

  constructor() { }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = this.myChart?.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar', // Tipo de gráfico, puede ser 'line', 'bar', 'pie', etc.
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error("No se pudo obtener el contexto del canvas");
    }
  }
}