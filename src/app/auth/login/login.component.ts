import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DValidateRules } from 'ng-devui';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AuthService } from 'src/app/@core/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msgs: { severity: any; summary: string; detail: string; }[];

  constructor(public authService: AuthService, public router: Router) { }
  formData = {
    userName: 'mock',
    passWord: '123asdd',
  };
  formRules: { [key: string]: DValidateRules } = {
    rule: { message: '表单校验不通过，请检查', messageShowType: 'text' },
    usernameRules: {
      validators: [
        { required: true, message: '用户名不能为空' },
        { minlength: 3, message: '用户名长度至少为3' },
        { maxlength: 10, message: '用户名长度不能超过128' },
        { pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/, message: '用户名请勿包含大小写字母以外其他字符' }
      ],
      // asyncValidators: [
      //   { sameName: this.checkName.bind(this), message: '当前用户名已存在' }
      // ]
    },
    passwordRules: {
      validators: [
        { required: true },
        { minlength: 6 },
        { maxlength: 15 },
        { pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/ }
      ],
      message: '请输入只包含数字字母的6-15位密码'
    }
  };
  ngOnInit(): void {
  }
  submitForm({ valid, directive }) {
    console.log(directive);
    // do something for submitting
    if (valid) {
      console.log(this.formData);
      of(this.formData).pipe(
        map((val) => 'success'),  // 模拟接口处理
        delay(500)
      ).subscribe((res) => {
        if (res === 'success') {
          this.showToast('success', '成功', '登录成功');
          this.login()

        }
      });
    } else {
      this.showToast('error', '错误', '请检查所有校验项是否通过');
    }
  }
  login(): void {
    this.authService.login().subscribe(() => {
      if (this.authService.isLogin) {
        this.router.navigateByUrl(this.authService?.redirectUrl);
      }
    });
  }
  showToast(type: any, title: string, msg: string) {
    this.msgs = [{ severity: type, summary: title, detail: msg }];
  }
}
