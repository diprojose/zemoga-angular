import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // component: HomeComponent,
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'how-it-works',
    pathMatch: 'full',
    // component: HomeComponent,
    loadChildren: () => import('./components/how-it-works/how-it-works.module').then(m => m.HowItWorksModule),
  },
  {
    path: 'past-trials',
    pathMatch: 'full',
    // component: HomeComponent,
    loadChildren: () => import('./components/past-trials/past-trials.module').then(m => m.PastTrialsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
