import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  public getAll () {
    return this.http.get('/assets/data/transactions.json');
  }

  public getInfo (id:string) {
    return this.http.get('/assets/data/'+id+'.json');
  }
}
