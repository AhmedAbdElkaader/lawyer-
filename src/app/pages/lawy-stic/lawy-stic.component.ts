import { Component, OnInit,TemplateRef ,ViewChildren} from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { cashing } from '../lawy-stic/fees';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'lawy-stic',
  templateUrl: './lawy-stic.component.html',
  styleUrls: ['./lawy-stic.component.scss']
})


export class LawySticComponent implements OnInit {
  id;
  name;
  regId;
  cash;
  mobile;
  counter100 = 0
  counter50 = 0
  counter20 = 0
  counter10 = 0 
  counter5 = 0
  feessArr = []
  arr = []
  itemId100 :number
  itemId50 :number
  itemId20 :number
  itemId10 :number
  itemId5 :number
  showTotal;
  total;
  @ViewChildren('cashingOut') cashingOut
  
  constructor(public rest: RestService,private route : Router,
     private router: ActivatedRoute,private dialogService: NbDialogService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.rest.getLawyerInfo(this.id).subscribe((resp :any) => {
        console.log(resp)
          this.name = resp.name
          this.cash = resp.balance
          this.regId = resp.reg_id
          this.mobile = resp.mobile
      })
    })
    this.rest.getDmghat().subscribe((res :any) => {
      console.log(res)
      this.arr =  res.data
      for(let i = 0 ; i < this.arr.length; i++){
        if(this.arr[i].price == 100){
          this.itemId100 = res.data[i].id
        }else if (this.arr[i].price == 50){
          this.itemId50 = this.arr[i].id
          console.log(this.itemId50)
        }else if (this.arr[i].price == 20){
          this.itemId20 = this.arr[i].id
        }else if (this.arr[i].price == 10){
          this.itemId10 = this.arr[i].id
        }else if (this.arr[i].price == 5){
          this.itemId5 = this.arr[i].id
        }
      }
    
    })
  }
  countPlus(id){
    if(id == 100){
      this.counter100++
    }else if(id == 50){
      this.counter50++
    }else if(id == 20){
      this.counter20++
    }else if(id == 10){
      this.counter10++
    }else if(id == 5){
      this.counter5++
    }
    
  }
  countMin(id){
    if(id == 100 && this.counter100 > 0){
      this.counter100--
    }else if (id == 50 && this.counter50 > 0){
      this.counter50--
    }else if (id == 20 && this.counter20 > 0){
      this.counter20--
    }else if (id == 10 && this.counter10 > 0){
      this.counter10--
    }else if (id == 5 && this.counter5 > 0){
      this.counter5--
    }
  }

  sendfees(){
    if(this.counter100 != 0 ){
      let val100 = new cashing
      val100.item_id = this.itemId100
      val100.price = 100
      val100.qty = this.counter100
      this.feessArr.push(val100)
    }
    if (this.counter50 != 0 ){
      let val50 = new cashing
      val50.item_id = this.itemId50
      val50.price = 50
      val50.qty = this.counter50
      this.feessArr.push(val50)
    }
    if (this.counter20 != 0 ){
      let val20 = new cashing
      val20.item_id = this.itemId20
      val20.price = 20
      val20.qty = this.counter20
      this.feessArr.push(val20)
    }
    if (this.counter10 != 0 ){
      let val10 = new cashing
      val10.item_id = this.itemId10
      val10.price = 10
      val10.qty = this.counter10
      this.feessArr.push(val10)
    }
    if (this.counter5 != 0 ){
      let val5 = new cashing
      val5.item_id = this.itemId5
      val5.price = 5
      val5.qty = this.counter5
      this.feessArr.push(val5)
    }
    let obj = {
      source : "pos",
      source_id : "1",
      payment_type : "0",
      reg_id : +this.regId,
      items:this.feessArr
    }
    console.log(this.total)
      this.rest.postSellsTamp(obj)
      this.rest.getObsData().subscribe(res  =>{   
        if(res == true){} // order to print
      })
    }

  print(dialog: TemplateRef<any>) {
    this.total = this.counter100*100 + this.counter50*50 + this.counter20*20 + this.counter10*10 + this.counter5*5
    console.log(this.total)
    if(this.total <= this.cash){
      this.showTotal = true
      this.dialogService.open(dialog)
    }else{
      let result = this.cashingOut._results[0]
      this.cashNotAvilable(result)
    } 
  }

  cashNotAvilable(cashingOut: TemplateRef<any>){
    this.dialogService.open(cashingOut)
  }

}
