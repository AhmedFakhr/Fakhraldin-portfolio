import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'blog', loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
