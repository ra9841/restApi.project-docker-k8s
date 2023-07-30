import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent implements OnInit {


  constructor(){

  }
ngOnInit(): void {
    
}
 
num1:number=0;
num2:number=0;
sum:number=0;
msg:any;

 sumFunction(){
   this.sum=(this.num1) + (this.num2);
   this.msg=this.sum;
   return this.msg;
 }

}
