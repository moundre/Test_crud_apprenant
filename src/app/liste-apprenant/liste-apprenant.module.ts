import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeApprenantPageRoutingModule } from './liste-apprenant-routing.module';

import { ListeApprenantPage } from './liste-apprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeApprenantPageRoutingModule
  ],
  declarations: [ListeApprenantPage]
})
export class ListeApprenantPageModule {}
