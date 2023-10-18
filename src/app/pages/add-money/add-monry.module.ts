import { NgModule } from '@angular/core';
import { NbCardModule,NbInputModule,NbButtonModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AddMoneyComponent } from './add-money.component';


@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    
  ],
  declarations: [
    AddMoneyComponent
    ,
  ],
  exports : [AddMoneyComponent]
})
export class addMoneyModule { }
