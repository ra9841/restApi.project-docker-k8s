import { Component, OnInit } from '@angular/core';
import { CustomerVo } from '../dto/customer-vo';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent  {
  customerVo:CustomerVo =new CustomerVo();
  msg:string="";
  

  constructor(private userService:UserService,private router:Router){
    
  }
 

  public record(){
    if(this.customerVo.username!=null && this.customerVo.email!=null && this.customerVo.education && this.customerVo.password){    
      this.userService.create(this.customerVo).subscribe(
        data =>{                                    // Handle the response from the API
        if(data!=null){                                            
              this.msg="register successfull";
              console.log(data)

            }else{
              this.router.navigate(['/frame']);
            }

          });
  } else{
    this.msg="must not be null";
  }
  }


}
