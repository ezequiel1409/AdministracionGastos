import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./components/contenedor/contenedor.component').then(module => module.ContenedorComponent),
    children: [
      {
        path: 'gastos',
        title: 'Gastos',
        loadComponent: () => import('./components/gastos-home/gastos-home.component').then(module => module.GastosHomeComponent),
      },
    ],
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/gastos',
    pathMatch: 'full'
  }
];
