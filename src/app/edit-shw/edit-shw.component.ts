import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { CustomerVo } from '../dto/customer-vo';

@Component({
  selector: 'app-edit-shw',
  templateUrl: './edit-shw.component.html',
  styleUrls: ['./edit-shw.component.css']
})
export class EditShwComponent implements OnInit{
 
  id:any; 
  customer:any={};
  constructor(private activeRoute:ActivatedRoute,private userService:UserService, private router:Router ){}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(para=>{
      this.id=para.get('id');

      this.userService.updateRcd(this.id).subscribe((data:any)=>{
        console.log(data)
      this.customer=data;
      });
    })
  
   
  }

  public save(){
    this.userService.saveRcd(this.customer).subscribe((data)=>{
      this.redirectTo('recordtbl');
     console.log(data);
   });
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([uri]));
 }


}
