import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5000/api/blog')
      .subscribe({
        next: (data) => {
          this.posts = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load blog posts';
          this.loading = false;
          console.error('Error fetching blog posts:', err);
        }
      });
  }
}
