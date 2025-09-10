import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_url: string;
  demo_url: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = 'http://localhost:5000/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
