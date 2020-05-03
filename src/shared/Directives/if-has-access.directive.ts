import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input, OnInit} from '@angular/core';
import { AuthStateService } from '../../Auth/Services/auth-state.service';

@Directive({
  selector: '[ccIfHasAccess]'
})
export class IfHasAccessDirective implements OnInit {
  private currentUser;
  private permissions = [];
  private logicalOp = 'AND';
  private isHidden = true;

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authStateService: AuthStateService
  ) { }

  ngOnInit() {
    this.currentUser = this.authStateService.getState();
    this.updateView();
  }

  @Input()
  set ccIfHasAccess(val) {
    this.permissions = val;
    this.updateView();
  }

  @Input()
  set ccIfHasAccessOp(permop) {
    this.logicalOp = permop;
    this.updateView();
  }

  private updateView() {
    if (this.checkPermission()) {
      if (this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

  private checkPermission() {
    let hasPermission = false;
    if (this.currentUser && this.currentUser.permissions) {
      if (this.logicalOp === 'OR') {
        hasPermission = this.authStateService.hasAccessAny(...this.permissions);
      } else {
        hasPermission = this.authStateService.hasAccess(...this.permissions);
      }
    }
    return hasPermission;
  }

}
