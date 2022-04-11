import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailApprenantPage } from './detail-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailApprenantPageRoutingModule {}
