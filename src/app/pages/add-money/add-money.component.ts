import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {

  constructor(protected ref:NbDialogRef<AddMoneyComponent>) { }

  ngOnInit() {
  }

  onEnter(value){
    let fees ; 
    fees = value
    this.ref.close(fees)
  }


}
