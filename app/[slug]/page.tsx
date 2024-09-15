import PageTemplate from '@/src/templates/main';
import { pages } from '@/app/[slug]/constants';
import type { PageData } from '@/app/[slug]/types';
import type { Metadata } from 'next';

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<PageData[]> {
  return pages;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const page = pages.find(({ slug }) => slug === params.slug);

  if (page) {
    const { slug, ...metadata } = page;
    return { ...metadata };
  }

  return undefined;
}

export default function CommonPage({ params }: { params: Params }) {
  const page = pages.find(({ slug }) => slug === params.slug);

  return <PageTemplate title={page!.title} />;
}
