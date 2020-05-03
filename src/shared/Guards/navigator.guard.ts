import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthStateService } from '../../Auth/Services/auth-state.service';
import { NAV_LINKS } from '../Models/Const/NavLinks.const';
import { DialogService } from '../Services/dialog.service';
import { MESSAGES } from '../../../Global/messages.const';

@Injectable()
export class NavigatorGuard implements CanActivate {
  constructor(private authStateService: AuthStateService,
              private router: Router,
              private dialogService: DialogService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean | Promise<boolean> {

    const permissions: string[] = next.firstChild.data && next.firstChild.data.permissions;
    if (!permissions) {
      return true;
    }
    const hasAccess = this.authStateService.hasAccessAny(...permissions);
    if (hasAccess) {
      return true;
    }

    for (const page of NAV_LINKS) {
      const hasFirstAccess = this.authStateService.hasAccessAny(...page.permissions);
      if (hasFirstAccess) {
        const url = page.url || (page.childs && page.childs.length && page.childs[0] && page.childs[0].url);
        if (url) {
          this.router.navigate([url]);
          return false;
        }
      }
    }

    this.router.navigate(['/pages/no-access']);
    return false;
  }
}
