import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  signup(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  login(email: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`);
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.toastr.success('Logged out successfully!');
  }
}
