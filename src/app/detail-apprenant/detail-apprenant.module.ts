import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailApprenantPageRoutingModule } from './detail-apprenant-routing.module';

import { DetailApprenantPage } from './detail-apprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailApprenantPageRoutingModule
  ],
  declarations: [DetailApprenantPage]
})
export class DetailApprenantPageModule {}
