import { NgModule } from '@angular/core';
import { NbCardModule,NbInputModule,NbButtonModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import {NgxPrintModule} from 'ngx-print';
import { LawyerInfoComponent } from './lawyer-info.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    NgxPrintModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    LawyerInfoComponent
    ,
  ],
  exports : [LawyerInfoComponent]
})
export class lawyInfoModule { }
