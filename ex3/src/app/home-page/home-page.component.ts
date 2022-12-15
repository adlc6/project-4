import { Component, OnInit, Input } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  implements OnInit{
  @Input() numId:any;
  Sortby : any;

  public listTransactions:any = []

  constructor (private TransactionsService:TransactionsService) {

  }

  ngOnInit(): void {
    this.loadT();
  }

  loadT() {
    this.TransactionsService.getAll().subscribe(trans => {
      this.listTransactions = trans;
    });
  }

}
