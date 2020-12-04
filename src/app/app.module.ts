import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { StepperComponent } from './stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideDrawerComponent } from './shared/side-drawer/side-drawer.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { SidenavMenuComponent } from './shared/sidenav-menu/sidenav-menu.component';
import { SidenavService } from './services/sidenav.service';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [AppComponent, StepperComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent],
})
export class AppModule {}
