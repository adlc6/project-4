import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  public id:any;
  public datosT:any;

  constructor (private route:ActivatedRoute,private TransactionsService:TransactionsService) {

  }
   ngOnInit(): void {
     this.route.paramMap.subscribe ( (paramMap:any) =>{
      const {params} = paramMap;

      this.id = params.variable;
      console.log(this.id);
      this.loadInfo();
     })
   }

   loadInfo() {
    this.TransactionsService.getInfo(this.id).subscribe(datosT =>{
      this.datosT = datosT
      console.log(this.datosT);
    });
   }

}
