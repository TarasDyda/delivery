import type { Metadata } from 'next';

export interface PageData extends Omit<Metadata, 'title'> {
  slug: string;
  title: string;
}
