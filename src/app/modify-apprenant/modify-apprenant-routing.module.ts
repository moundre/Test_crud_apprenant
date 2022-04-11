import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyApprenantPage } from './modify-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyApprenantPageRoutingModule {}
