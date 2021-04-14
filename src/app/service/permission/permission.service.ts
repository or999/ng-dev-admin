import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  role = 'admin';
  roleList: string[] = ['admin', 'editor'];
  constructor() { }
  changeRole(event): void {
    this.role = event;
    console.log(this.role);

  }
}
