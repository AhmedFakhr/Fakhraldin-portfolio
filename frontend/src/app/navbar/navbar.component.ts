import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 add this

@Component({
  selector: 'app-navbar',
  standalone: true, // 👈 make sure this is standalone
  imports: [RouterModule], // 👈 include RouterModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isDarkMode = false;
  theme: 'light' | 'dark' = 'light'; // 👈 add theme property

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      this.theme = storedTheme ?? 'light';
      this.isDarkMode = this.theme === 'dark';
      document.body.classList.toggle('dark-theme', this.isDarkMode);
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.theme = this.isDarkMode ? 'dark' : 'light';

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.theme);
    }

    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}
