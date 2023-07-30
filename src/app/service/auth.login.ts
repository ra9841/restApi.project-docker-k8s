import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';




@Injectable({
  providedIn: 'root' 
})
export class AuthGuard  {
  constructor() {}
login:boolean=false;
  canActivate(): boolean {
    if (this.login) {
      return true;
    } else {
     
      return false;
    }
  }

  public isAuthenticated():void{
   this.login=true;
   
    }
    public isNotAuthenticated():void{
        this.login=false;
        
         }
        }
  export const AuthGuards: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuard).canActivate();
          }
    
