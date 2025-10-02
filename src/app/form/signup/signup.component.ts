import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  user = { name: '', email: '', password: '' };

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) { }

  onSignup() {
    this.auth.signup(this.user).subscribe(() => {
      this.toastr.success('Signup Successful!');
      this.router.navigate(['/login']);
    });
  }
}
