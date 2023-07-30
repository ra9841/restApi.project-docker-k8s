import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { CustomerVo } from '../dto/customer-vo';
import { AuthGuard } from '../service/auth.login';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  title = 'practiseProject';
  username:string="";
  password:string="";
  msg:string="";
  customerVo:CustomerVo []=[];
 
  
  constructor(private router: Router,private userService:UserService,private authGuard:AuthGuard ){

  }
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



public loginUser(username: string, password: string){
  this.userService.login(username,password).subscribe((data:any)=>{

    if (data === "success") {
      this.msg = data;
      console.log("successfull")
      this.authGuard.isAuthenticated();
      this.router.navigate(['recordTbl'])
     
    } else {
      this.msg = "Incorrect username or password";
      console.log("incorrect")
      
    }
  });
}
 



 




// passwordFunction(){
//   if(this.password.length>6){
//     return true;
//   }else{
//     this.msg="Enter number more than 6"
//     return false;
//   }
// }

// authenticate(){
//   if(this.username==='rabin' && this.password==='1234567'){
//   this.msg="correct";
//   this.router.navigate(['bodyii']);
//   }else{
//     this.msg="username & password is incorrect"
//   }
// }


}
