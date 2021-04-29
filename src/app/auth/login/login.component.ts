import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { AuthService } from 'src/app/@core/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
  login(): void {
    this.authService.login().subscribe(() => {
      if (this.authService.isLogin) {
        this.router.navigateByUrl(this.authService?.redirectUrl);
      }
    });
  }

}
