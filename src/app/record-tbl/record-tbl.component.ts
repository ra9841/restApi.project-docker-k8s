import { Component, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { CustomerVo } from '../dto/customer-vo';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-record-tbl',
  templateUrl: './record-tbl.component.html',
  styleUrls: ['./record-tbl.component.css']
})
export class RecordTblComponent {
 // [x: string]: Object;
  customerVo: CustomerVo[] = [];

  

  constructor(private userService:UserService, private router:Router){}

  ngOnInit(): void {
    this.showAll();
    
  } 

  public showAll(){
    this.userService.findAll().subscribe((data:CustomerVo[]) => {
      this.customerVo = data;
      // for(let x=0; x<data.length; x++){
      //     this.customerVo.push(data[x]);
      // }
     console.log(data);
    
    });   
    
  }
  show(){
    this.router.navigate(['/body'])

  }

  public alter(username:string){
    this.userService.deleteRcrd(username).subscribe(()=>{
      console.log('Record deleted successfully.');
      this.redirectTo('recordTbl');//calling below function to redirect
    });
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([uri]));
 }


}
