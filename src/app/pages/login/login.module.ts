import { NgModule } from '@angular/core';
import { NbCardModule,NbInputModule,NbButtonModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
    ,
  ],
  exports : [LoginComponent]
})
export class loginModule { }
