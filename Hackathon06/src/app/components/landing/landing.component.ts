import { Component, OnInit } from '@angular/core';

import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  personalDetials=false;
  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getPersonalData();
    this.restService.completedPersonalDetails.subscribe(()=>{
      this.personalDetials = true;
    })
  }
  getPersonalData(){
    this.restService.getPersonalData().subscribe((res:any)=>{
      if(res && Object.keys(res).length != 0){
        this.personalDetials = true;
      }
  })
  }
}
