import ogImage from '@/public/images/top-hero-image.jpeg';
import type { Metadata } from 'next';
import PageTemplate from '@/src/templates/main';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: 'Доставка ватажу з Європи',
  description: 'Швидка, надійна та дешева доставка вантажів з Європи',
  keywords: ['Доствка', 'Фура', 'Вантаж', '24тони', '20тон'],
  robots: 'index, follow',
  openGraph: {
    images: ogImage.src,
    title: 'Доставка ватажу з Європи',
    description: 'Швидка, надійна та дешева доставка вантажів з Європи',
  },
};

export default function Home() {
  return <PageTemplate title={metadata.title as string} />;
}
