import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../service/auth.login';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private authGuard:AuthGuard,private router:Router ){

  }
ngOnInit(): void {
    
} 
logout(){
this.authGuard.isNotAuthenticated();
this.router.navigate(['/body']);
}

}
