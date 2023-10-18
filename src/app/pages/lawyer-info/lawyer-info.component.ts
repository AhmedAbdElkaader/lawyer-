import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../../rest.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lawyer-info',
  templateUrl: './lawyer-info.component.html',
  styleUrls: ['./lawyer-info.component.scss']
})
export class LawyerInfoComponent implements OnInit {
  id;
  cash;
  payment;
  name;
  regId;
  mobile;
  showInfo = false
  Print: boolean = false
  form: FormGroup;

  constructor(public rest: RestService, private router: Router ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      fees: new FormControl("", Validators.required),
    })
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.rest.getLawyerInfo(this.id).subscribe((resp:any)=>{
        console.log(resp)
        this.showInfo = true
            console.log(resp)
            this.name = resp.name
            this.cash = +resp.balance
            this.regId = resp.reg_id
            this.mobile = resp.mobile
      })
    })
  }

  addCash() {
    this.payment = this.form.value.fees
    let lawyerObj = {
      reg_id: this.regId,
      balance: this.payment,
      source: "pos",
      source_id: "1",
      payment_type: "0"
    }
    this.rest.postLawyerCash(lawyerObj)
    this.rest.getObsData().subscribe(res => {
      if (res == true) {
        this.cash = this.cash + this.payment
        this.Print = res
      }
    })
  }

}
