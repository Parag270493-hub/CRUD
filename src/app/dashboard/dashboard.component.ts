import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  resume: any = { name: '', file: null };
  apiUrl = 'http://localhost:3000/resumes';

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  onFileSelect(event: any) {
    this.resume.file = event.target.files[0];
  }

  upload() {
    if (this.resume.name && this.resume.file) {
      const data = { name: this.resume.name, fileName: this.resume.file.name };
      this.http.post(this.apiUrl, data).subscribe(() => {
        this.toastr.success('Resume Uploaded!');
        this.router.navigate(['/list']);
      });
    } else {
      this.toastr.warning('Please fill all fields');
    }
  }

  clear() {
    this.resume = { name: '', file: null };
  }
}
