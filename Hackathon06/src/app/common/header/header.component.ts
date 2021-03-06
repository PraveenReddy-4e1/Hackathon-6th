import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang:any;
  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en' ;
  }
  changeLang(val){
     localStorage.setItem('lang',val);
     window.location.reload();
  }

}
