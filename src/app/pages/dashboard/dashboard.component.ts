import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../../rest.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  cash;
  total
  name;
  regId;
  mobile;
  subscription: Subscription;

  constructor(private dialogService: NbDialogService, public rest: RestService, private router: Router) { }
  ngOnInit() { 
    this.form = new FormGroup({
      number: new FormControl("", Validators.required),
    })
  }
  goToInfo(){
    let id = this.form.value.number
    this.rest.getLawyerInfo(id).subscribe((resp:any)=>{
      console.log(resp)
      if(resp){
        this.router.navigate(['/pages/lawyInfo', id]);
      }
    })

  }
}


 // open() {
  //   this.dialogService.open(
	// 		AddMoneyComponent,
	// 		{	
	// 			closeOnEsc: false,
	// 			closeOnBackdropClick: true,	
	// 		},
	// 	).onClose.subscribe(resp => {
  //     this.fees = resp
  //     console.log(resp)
  //   })
  // }