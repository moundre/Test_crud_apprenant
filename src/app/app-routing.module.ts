import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'liste-apprenant',
    pathMatch: 'full'
  },
  {
    path: 'ajout-apprenant',
    loadChildren: () => import('./ajout-apprenant/ajout-apprenant.module').then( m => m.AjoutApprenantPageModule)
  },
  {
    path: 'liste-apprenant',
    loadChildren: () => import('./liste-apprenant/liste-apprenant.module').then( m => m.ListeApprenantPageModule)
  },
  {
    path: 'detail-apprenant',
    loadChildren: () => import('./detail-apprenant/detail-apprenant.module').then( m => m.DetailApprenantPageModule)
  },
  {
    path: 'modify-apprenant',
    loadChildren: () => import('./modify-apprenant/modify-apprenant.module').then( m => m.ModifyApprenantPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
