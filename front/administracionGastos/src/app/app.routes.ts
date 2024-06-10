import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./contenedor/contenedor.component').then(module => module.ContenedorComponent),
    children: [
      {
        path: 'gastos',
        title: 'Gastos',
        loadComponent: () => import('./gastos-home/gastos-home.component').then(module => module.GastosHomeComponent),
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
