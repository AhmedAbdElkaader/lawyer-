import { NgModule } from '@angular/core';
import { NbCardModule,NbInputModule,NbSelectModule,NbRadioModule,
  NbButtonModule,NbDatepickerModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report.component';
import { NbMomentDateModule} from '@nebular/moment'
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbDatepickerModule,
    NbSelectModule,
    NbMomentDateModule,
    NbRadioModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ReportComponent
  ],
  exports : [ReportComponent]
})
export class ReportModule { }
