import { NgModule } from '@angular/core';
import { NbCardModule,NbInputModule,NbButtonModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LawySticComponent } from './lawy-stic.component';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    NgxPrintModule,
  ],
  declarations: [
    LawySticComponent
    ,
  ],
  exports : [LawySticComponent]
})
export class lawySticModule { }
