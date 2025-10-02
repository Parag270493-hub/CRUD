import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  resumes: any[] = [];
  apiUrl = 'http://localhost:3000/resumes';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe((res: any) => this.resumes = res);
  }
}
