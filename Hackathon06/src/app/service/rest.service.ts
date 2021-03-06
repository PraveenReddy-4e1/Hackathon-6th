import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  completedPersonalDetails = new Subject();
  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:3000/";
  
  

  getApplicationId(){
    return this.http.get(this.apiUrl + 'Uuid')
  }

  addPersonalData(data){
    return this.http.post(this.apiUrl + 'personalInfo',data)
  }

  getPersonalData(){
    return this.http.get(this.apiUrl + 'personalInfo')
  }

  setPersonalFlag(data){
    this.completedPersonalDetails.next(data);
  }


}
