import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CardsComponent } from './cards/cards.component';
import { VAdvExpansionComponent } from './v-adv-expansion/v-adv-expansion.component';
import { MatAnimatedIconComponent } from './mat-animated-icon/mat-animated-icon.component';

import { MtInputComponent } from './mt-input/mt-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardsComponent,
    VAdvExpansionComponent,
    MatAnimatedIconComponent,
    MtInputComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [CardsComponent, VAdvExpansionComponent,MtInputComponent],
})
export class SharedModule {}
