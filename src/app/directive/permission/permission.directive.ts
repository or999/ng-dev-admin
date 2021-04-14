import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appPermission(condition: string) {
    if (condition === 'admin' && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition !== 'admin' && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
