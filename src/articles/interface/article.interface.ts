import { Author } from 'src/authors/interface/author.interface';
import { Category } from 'src/categories/interface/category.interface';

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  status: ArticleStatus;
  publishedAt?: Date;
  authorId: string;
  author?: Author;
  categoryId: string;
  category?: Category;
  tags: string[];
  viewCount: number;
  likesCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum ArticleStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}
