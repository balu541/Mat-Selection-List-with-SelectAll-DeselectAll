import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions={
    headers: new  HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpclient:HttpClient) { }
  getCustomers(){
    return this.httpclient.get("http://localhost:9008/app/All_customers");
  }
}
