import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  imports: [],
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart: Chart | undefined; // Declare the Chart instance

  ngOnInit() {
    // Define your chart data and options
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [{
        label: 'Ventas',
        data: [100, 150, 200, 250, 300, 350],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };
    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    // Create a new Chart instance
    this.chart = new Chart('myChart', { // Replace 'myChart' with your canvas element id
      type: 'line', // Chart type
      data,
      // options
    });
  }
}
