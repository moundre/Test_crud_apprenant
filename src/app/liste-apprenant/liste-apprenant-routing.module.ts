import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeApprenantPage } from './liste-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: ListeApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeApprenantPageRoutingModule {}
