import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutApprenantPage } from './ajout-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutApprenantPageRoutingModule {}
