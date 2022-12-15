import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  fecha :any ;
  constructor () {
    
    
  }

  
  ngOnInit ():void {
    setInterval(()=>{
      this.actualzia();
    },1000);
  }

  actualzia() {
     this.fecha = Date.now();
     
  }

}


