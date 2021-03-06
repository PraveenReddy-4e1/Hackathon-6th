import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  personalInfoObj: any;

  constructor(private router: Router , private restService : RestService) { }
  ngOnInit(): void {
    this.getPersonalData()
  }
  getPersonalData(){
    this.restService.getPersonalData().subscribe((res:any)=>{
      if(res && Object.keys(res).length != 0){
      this.personalInfoObj = res;
      }
  })
  }
  finalSubmit(){
    alert("Personal Details Saved Successfully.")
  }

}
