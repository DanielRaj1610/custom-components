import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CardsComponent } from './cards/cards.component';
import { VAdvExpansionComponent } from './v-adv-expansion/v-adv-expansion.component';
import { MatAnimatedIconComponent } from './mat-animated-icon/mat-animated-icon.component';

import { MtInputComponent } from './mt-input/mt-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    CardsComponent,
    VAdvExpansionComponent,
    MtInputComponent,
    MatAnimatedIconComponent,
    SideDrawerComponent,
    SideNavComponent,
    SidenavMenuComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    CardsComponent,
    VAdvExpansionComponent,
    MtInputComponent,
    MatAnimatedIconComponent,
    SideDrawerComponent,
    SideNavComponent,
    SidenavMenuComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
