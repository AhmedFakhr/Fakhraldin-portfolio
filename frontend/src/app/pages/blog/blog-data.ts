export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'PostgreSQL Performance Tips',
    excerpt: 'Learn how to optimize queries and indexes in PostgreSQL...',
    content: `In this post, I’ll walk through indexing strategies, query planning,
      and caching to make PostgreSQL fly 🚀.`,
    date: '2025-08-25'
  },
  {
    id: 2,
    title: 'Migrating SQL Server to AWS RDS',
    excerpt: 'Step-by-step guide for smooth SQL Server migrations to AWS cloud...',
    content: `This article covers schema migration, data transfer, downtime planning,
      and validation checks when moving SQL Server to AWS RDS.`,
    date: '2025-08-10'
  },
  {
    id: 3,
    title: 'Building APIs with .NET Core',
    excerpt: 'Best practices for building clean and scalable APIs in .NET Core...',
    content: `We’ll explore controllers, dependency injection, error handling,
      and versioning in .NET Core for production-ready APIs.`,
    date: '2025-07-30'
  }
];
