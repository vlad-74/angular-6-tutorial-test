import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AppService } from '../app.service';

@Directive({ selector: '[ifHasAccess]' })
export class IfHasAccessDirective {
  logicalOp = 'AND';
  isHidden = true;
  permissions = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private appService: AppService
    ){ }

  @Input()
  set ifHasAccess(val) {
    this.permissions = val;
    this.updateView();
  }

  @Input()
  set ifHasAccessOp(permop) {
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
      if (this.logicalOp === 'OR') {
        hasPermission = this.appService.hasAccessAny(...this.permissions);
      } else {
        hasPermission = this.appService.hasAccess(...this.permissions);
      }

    return hasPermission;
  }
}