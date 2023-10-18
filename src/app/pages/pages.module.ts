import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { loginModule } from './login/login.module';
import { lawySticModule } from './lawy-stic/lawy-stic.module';
import { lawyInfoModule } from './lawyer-info/lawyer-Info.module';
import { ReportModule } from './report/report.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    loginModule,
    lawySticModule,
    lawyInfoModule,
    ReportModule,
    
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
