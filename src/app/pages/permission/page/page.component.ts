import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/service/permission/permission.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  condition = 'admin';
  constructor(public permissionService: PermissionService) { }
  ngOnInit(): void {
    this.condition = this.permissionService.role;
  }
  pagePermission(event): void {
    this.permissionService.changeRole(event);
    this.condition = this.permissionService.role;

  }
}
