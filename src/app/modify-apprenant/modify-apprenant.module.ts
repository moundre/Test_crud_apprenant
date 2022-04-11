import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyApprenantPageRoutingModule } from './modify-apprenant-routing.module';

import { ModifyApprenantPage } from './modify-apprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyApprenantPageRoutingModule
  ],
  declarations: [ModifyApprenantPage]
})
export class ModifyApprenantPageModule {}
