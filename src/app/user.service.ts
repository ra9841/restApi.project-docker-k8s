import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { CustomerVo } from './dto/customer-vo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  create(customerVo: CustomerVo) {
    throw new Error('Method not implemented.');
  }
  record(customerVo: CustomerVo) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient : HttpClient) { }
  private url='https://jsonplaceholder.typicode.com/posts';
  public getData(){
    return this.httpClient.get(this.url);

  }
}
