import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public rest : RestService ,private router: Router) { }
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      number: new FormControl("", Validators.required),
      passwrod: new FormControl("", Validators.required),
    })
  }
  onEnter(){
    let id = this.form.value.number
    this.rest.getLawyerInfo(id).subscribe((resp:any)=>{
      console.log(resp)
      if(resp){
        this.router.navigate(['/pages/stic', id]);
      }
    })

  }
}
