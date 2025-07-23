import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('./features/demos/pages/demo-home/demo-home.component').then(
        (c) => c.DemoHomeComponent
      ),
  },
  {
    path: 'demo/2',
    loadComponent: () =>
      import(
        './features/demos/pages/demo2-binding/demo2-binding.component'
      ).then((c) => c.Demo2BindingComponent),
  },
];
