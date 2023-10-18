import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Subject } from 'rxjs';
import { Observable} from 'rxjs';
// 5659
@Injectable({
  providedIn: 'root'
})
export class RestService {
  private subject = new Subject<any>();
  constructor(private http: HttpClient) { }

  getLawyerInfo(id){
    return this.http.get(`/api/v1/lawyers/getlawyerbyreg/${id}`)
  }
  postLawyerCash(obj){
    this.http.post(`/api/v1/lawyers/addlawyerbalance/`,obj).subscribe(res => {
      this.sendObsData(res)
      console.log(res)
    })
  }
  getDmghat(){
    return this.http.get(`/api/v1/items/getitems/`)
  }

  postSellsTamp(obj){
  this.http.post(`/api/v1/lawyers/sellstamps/`,obj).subscribe(res => {
    this.sendObsData(res)
    console.log(res)
  })
  }

  govLocations(){
    return this.http.get(`/api/v1/govLocations/govList/`)
  }

  cityLocations(id){
    return this.http.get(`/api/v1/cityLocations/cityList/${id}`)
  }

  posLocations(id){
    return this.http.get(`/api/v1/posLocations/posList/${id}`)
  }

  // allGov
  getReportAsAllSum(obj){
    return this.http.get(`/api/v1/cash/retrieveAllsummaries/?startDate=${obj.currentStartDate}&endDate=${obj.currentEndDate}`)
  }
  getReportAsAllDet(obj){
    return this.http.get(`/api/v1/cash/retrieveAllDetailed/?startDate=${obj.currentStartDate}&endDate=${obj.currentEndDate}`)
  }
  // end allGov


  // Gov
  getReportFromGovSum(obj){
    return this.http.get(`/api/v1/cash/summarygovReport/?startDate=${obj.currentStartDate}&endDate=${obj.currentEndDate}&id=${obj.id}`)
  }
  getReportFromGovdET(obj){
    return this.http.get(`/api/v1/cash/detailedGovReport/?startDate=${obj.currentStartDate}&endDate=${obj.currentEndDate}&id=${obj.id}`)
  }
  // end gOV

  // city
  getReportfFromCitySum(obj){
    return this.http.get(`/api/v1/cash/summaryCityReport/?startDate=${obj.currentStartDate}&endDate=${obj.currentEndDate}&id=${obj.id}`)
  }
  getReportfFromCityDet(obj){
    return this.http.get(`/api/v1/cash/detailedCityReport/?startDate=${obj.currentStartDate}&endDate=${obj.currentEndDate}&id=${obj.id}`)
  }
// end city

//pos
  getReportfFromPosSum(obj){
    return this.http.get(`/api/v1/cash/summaryPosReport/?startDate=${obj.currentStartDate}&endDate=${obj.currentEndDate}&id=${obj.id}`)
  }
  getReportfFromPosDet(obj){
    return this.http.get(`/api/v1/cash/detailedPosReport/?startDate=${obj.currentStartDate}&endDate=${obj.currentEndDate}&id=${obj.id}`)
  }
//end pos




  sendObsData(event) {
    this.subject.next(event);
  }
  getObsData(): Observable<any> {
    return this.subject.asObservable();
  }
}
///api/v1/lawyers/addlawyerbalance/