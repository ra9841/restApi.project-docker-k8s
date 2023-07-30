import { Component } from '@angular/core';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-body-ii',
  templateUrl: './body-ii.component.html',
  styleUrls: ['./body-ii.component.css']
})
export class BodyIIComponent {
  userVo:any;


//  constructor(private userService:UserService){}

//  public get(){
// this.userService.getData().subscribe(data=>{
// this.userVo=data;
// console.log(this.userVo);
// console.log("hello man");
// });
//  }

//  ngOnInit(): void {
// }
}
