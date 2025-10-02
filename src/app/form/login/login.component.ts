import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) { }

  onLogin() {
    this.auth.login(this.email, this.password).subscribe((res: any) => {
      if (res.length) {
        localStorage.setItem('user', JSON.stringify(res[0]));
        this.toastr.success('Login Successful!');
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error('Invalid Credentials');
      }
    });
  }
}
