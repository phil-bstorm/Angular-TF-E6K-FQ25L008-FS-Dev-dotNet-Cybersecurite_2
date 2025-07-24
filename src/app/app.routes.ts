import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    // "path" = URL apres le nom de domaine (domaine "http://localhost:4200")
    path: '',
    // "component" = composant qui sera affiché
    component: HomeComponent,
  },
  {
    // "path" = URL apres le nom de domaine (domaine "http://localhost:4200" + le path "/demo")
    // "loadComponent" = chargement du composant de manière paresseuse (lazy loading)
    // pour optimiser le chargement de l'application (Component vs loadComponent : loadComponent n'est chargé que lorsque la page est demandée)
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
  {
    path: 'demo/3',
    loadComponent: () =>
      import('./features/demos/pages/demo3-pipes/demo3-pipes.component').then(
        (c) => c.Demo3PipesComponent
      ),
  },

  // Path EXOS:
  {
    path: 'exo/1',
    loadComponent: () =>
      import('./features/exercises/pages/exo-chrono/exo-chrono.component').then(
        (c) => c.ExoChronoComponent
      ),
  },
];
