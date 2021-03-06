import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { RestService } from '../../service/rest.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personalFormGroup: FormGroup;
  types = ['Mr/M', 'Ms/Mme', 'Mrs' , 'Miss' , 'Dr' ,'None'];
  citizen = ['Yes', 'No'];
  startDate = new Date(1990, 0, 1);
  maxDate = new Date();
  activeType = this.types[0];
  selectedCitizen:any;
  appId:any;
  inValidSin:boolean = false;
  

  constructor(private router: Router , private restService : RestService) { }

  ngOnInit(): void {
    this.personalFormGroup = new FormGroup({
      firstName : new FormControl ('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      initial:  new FormControl ('',[Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      lastName: new FormControl ('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      dob: new FormControl(''),
      insuranceNo: new FormControl('')
    });
    this.getApplicationCode();
    this.getPersonalData();
  }


  getApplicationCode(){
    this.restService.getApplicationId().subscribe((res:any)=>{
      this.appId = res.uuid;
    })
  }

  getPersonalData(){
    this.restService.getPersonalData().subscribe((res:any)=>{
      if(res && Object.keys(res).length != 0){
          this.personalFormGroup.get('firstName').setValue(res.firstName);
          this.personalFormGroup.get('initial').setValue(res.initial);
          this.personalFormGroup.get('lastName').setValue(res.lastName);
          this.personalFormGroup.get('dob').setValue(res.dob);
          this.personalFormGroup.get('insuranceNo').setValue(res.insuranceNo);
          this.activeType = res.prefix;
          this.selectedCitizen = res.citizen;
        
      }
  })
  }

 checkSsn(){
  var RE_SSN = /^[0-9]{3}[\- ]?[0-9]{2}[\- ]?[0-9]{4}$/;
   if (RE_SSN.test(this.personalFormGroup.value.insuranceNo)) {
    this.inValidSin = false;
    
   } else {
    this.inValidSin = true;
    // alert("INVALID SIN");
   }
  }
  
  onSubmitPersonalDetails(){
    if(!this.selectedCitizen){
        alert("Please Select Citizen")
       return true
    }
     let personalObj={
        prefix : this.activeType,
        firstName :this.personalFormGroup.value.firstName,
        initial :this.personalFormGroup.value.initial,
        lastName :this.personalFormGroup.value.lastName,
        dob : this.personalFormGroup.value.dob,
        insuranceNo :this.personalFormGroup.value.insuranceNo,
        citizen   : this.selectedCitizen,
        uuid  : this.appId
     }

     this.restService.addPersonalData(personalObj).subscribe((res:any)=>{
      this.router.navigate(['/review']);
      this.restService.setPersonalFlag(true);
     })
    
     
  }

}
