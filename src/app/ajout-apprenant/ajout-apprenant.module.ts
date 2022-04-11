import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutApprenantPageRoutingModule } from './ajout-apprenant-routing.module';

import { AjoutApprenantPage } from './ajout-apprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutApprenantPageRoutingModule
  ],
  declarations: [AjoutApprenantPage]
})
export class AjoutApprenantPageModule {}
