
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserVo } from '../pojo/user-vo';
import { Observable } from 'rxjs';
import { CustomerVo } from '../dto/customer-vo';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private httpClient : HttpClient) {}


public login(username:string,password:string){
  let url="http://localhost:8080/login";
  const requestBody = { username, password };
return this.httpClient.post(url,requestBody,{responseType:'text'});
}

  
  public create(customerVo:CustomerVo) {
    let url="http://localhost:8080/register";
    return this.httpClient.post(url,customerVo);
  }


  
  public findAll(){
    let url="http://localhost:8080/show";
    return this.httpClient.get<CustomerVo[]>(url);
  }


public deleteRcrd(username:string){
let url="http://localhost:8080/delete/";
  return this.httpClient.delete(url+username);
}


public updateRcd(id:number){
 let url="http://localhost:8080/update/";
return this.httpClient.get(url+id);
}

public saveRcd(customerVo:CustomerVo){
  let url="http://localhost:8080/save";
  return this.httpClient.put(url,customerVo)
}





  // private url='https://jsonplaceholder.typicode.com/posts';
  // public getData(){
  //   return this.httpClient.get(this.url);

  // }

  // public getData():Observable<UserVo>{
  //   return this.httpClient.get<UserVo>("https://jsonplaceholder.typicode.com/posts");

  // }

 

}
