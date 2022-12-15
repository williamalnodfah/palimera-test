import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ObjectInfoComponent } from './components/object-info/object-info.component';
import { UserDefinedComponent } from './components/user-defined/user-defined.component';
import { LinkedObjectsComponent } from './components/linked-objects/linked-objects.component';
import { LinkedKpiComponent } from './components/linked-kpi/linked-kpi.component';
import { ActionsComponent } from './components/actions/actions.component';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HeaderComponent,
    DashboardComponent,
    ObjectInfoComponent,
    UserDefinedComponent,
    LinkedObjectsComponent,
    LinkedKpiComponent,
    ActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
