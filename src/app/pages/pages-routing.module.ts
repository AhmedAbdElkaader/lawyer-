import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LawySticComponent } from './lawy-stic/lawy-stic.component';
import { LawyerInfoComponent } from './lawyer-info/lawyer-info.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'stic/:id',
      component: LawySticComponent,
    },
    {
      path: 'lawyInfo/:id',
      component: LawyerInfoComponent,
    },
    {
      path: 'report',
      component: ReportComponent,
    },
     
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
