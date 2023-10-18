import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  govList;
  cityList;
  posList
  selectedItem = "0"
  selectedItemCity = "0"
  cityId = 0;
  govId = 0;
  POSid = 0;
  totalCash;
  form: FormGroup;
  summery:boolean = false
  detels:boolean = false
  arrOfData

  settings = {
    columns: {
      lawyer_id: {
        title: 'ID',
        filter: false
      },
      source: {
        title: 'POS',
        filter: false
      },
      date: {
        title: 'التاريخ',
        filter: false
      },
      amount: {
        title: 'المبلغ',
        filter: false
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      
    },
  };

  constructor(private rest: RestService, private rout: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      currentStartDate : new FormControl(new Date()),
      currentEndDate : new FormControl(new Date()),
      report : new FormControl("", Validators.required)
    })
    this.rest.govLocations().subscribe((res: any) => {
      console.log(res)
      this.govList = res.data
    })
  }

  getAllCitys(GovId) {
    this.govId = GovId
    this.selectedItemCity = "1000"
    this.rest.cityLocations(GovId).subscribe((res: any) => {
      this.cityList = res.data
      console.log(res)
    })
  }
  getAllPos(CityId) {
    this.cityId = CityId
    this.selectedItemCity = "1000"
    this.rest.posLocations(CityId).subscribe((res : any ) => {
      console.log(res)
      this.posList = res.data
    })
  }
  getItemOfPOS(POSId){
    this.POSid = POSId
  }

  getReportAsAll() {
    this.totalCash = 0
   let object = this.form.value
   object.id = 0
    object.currentEndDate = moment(object.currentEndDate).format();
    object.currentStartDate = moment(object.currentStartDate).format();
    if(object.report == "total"){
      this.summery = true
      this.detels = false
      if(this.govId != 0 && this.cityId == 0){
        object.id = this.govId
        this.rest.getReportFromGovSum(object).subscribe((res:any) => {
          console.log(res)
          this.totalCash =  res.summary 
        })
      }else if(this.cityId != 0 && this.POSid == 0){
        object.id = this.cityId
        this.rest.getReportfFromCitySum(object).subscribe((res:any) => {
          this.totalCash =  res.summary 
        })
      }else if (this.POSid != 0){
        object.id = this.POSid
        this.rest.getReportfFromPosSum(object).subscribe((res : any) => {
          this.totalCash =  res.summary 
        })
      }else if(this.POSid == 0 && this.govId == 0 && this.cityId == 0){
        delete object.id
        this.rest.getReportAsAllSum(object).subscribe((res : any) => {
          this.totalCash =  res.summary 
        })
      }
    }else{
      this.summery = false
      this.detels = true
      if(this.govId != 0 && this.cityId == 0){
        object.id = this.govId
        this.rest.getReportFromGovdET(object).subscribe((res : any) => {
          this.arrOfData = res.data
          console.log(res)
        })
      }else if(this.cityId != 0 && this.POSid == 0){
        object.id = this.cityId
        this.rest.getReportfFromCityDet(object).subscribe((res : any) => {
          this.arrOfData = res.data
          console.log(res)
        })
      }else if (this.POSid != 0){
        object.id = this.POSid
        this.rest.getReportfFromPosDet(object).subscribe((res : any) => {
          console.log(res)
          this.arrOfData = res.data
        })
      }else if(this.POSid == 0 && this.govId == 0 && this.cityId == 0){
        delete object.id
        this.rest.getReportAsAllDet(object).subscribe((res : any) => {
          console.log(res)
          this.arrOfData = res.data
          console.log(this.arrOfData)
        })
      }
    }
    console.log(object)    
  }

}
