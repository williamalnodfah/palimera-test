import { ActionsComponent } from './components/actions/actions.component';
import { LinkedObjectsComponent } from './components/linked-objects/linked-objects.component';
import { LinkedKpiComponent } from './components/linked-kpi/linked-kpi.component';
import { UserDefinedComponent } from './components/user-defined/user-defined.component';
import { ObjectInfoComponent } from './components/object-info/object-info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BaseComponent } from './components/base/base.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/base/dashboard/info', pathMatch: 'full' },
  {
    path: 'base', component: BaseComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent, children: [
          { path: 'info', component: ObjectInfoComponent },
          { path: 'user-defined', component: UserDefinedComponent },
          { path: 'kpi', component: LinkedKpiComponent },
          { path: 'linked-objects', component: LinkedObjectsComponent },
          { path: 'actions', component: ActionsComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
