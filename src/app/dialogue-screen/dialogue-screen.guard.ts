import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DialogueScreenService } from './dialogue-screen.service';

@Injectable({
  providedIn: 'root'
})
export class DialogueScreenGuard implements CanActivate {

  constructor(private dialogueScreenService: DialogueScreenService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const result = this.dialogueScreenService.canNavigate;
    if (!result) {
      this.router.navigate(['']);
    }
    return result;
  }

}
