import { NgModule } from '@angular/core';
import { NbCardModule,NbInputModule,NbButtonModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {NgxPrintModule} from 'ngx-print';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    NgxPrintModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
