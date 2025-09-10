import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  post: any;
  comments: any[] = [];
  newComment = '';
  author = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:5000/api/blog/${id}`).subscribe(post => this.post = post);
    this.http.get<any[]>(`http://localhost:5000/api/blog/${id}/comments`).subscribe(comments => this.comments = comments);
  }

  addComment() {
    if (!this.newComment.trim() || !this.author.trim()) return;

    const id = this.route.snapshot.paramMap.get('id');
    this.http.post(`http://localhost:5000/api/blog/${id}/comments`, {
      author: this.author,
      text: this.newComment
    }).subscribe((comment: any) => {
      this.comments.push(comment);
      this.newComment = '';
    });
  }
}
