import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class DialogueScreenGuard implements CanActivate {

  constructor(private navigationService: NavigationService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const result = this.navigationService.canNavigate;
    if (!result) {
      this.router.navigate(['']);
    }
    return result;
  }

}
