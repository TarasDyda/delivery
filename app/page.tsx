import TopHero from '@/src/components/TopHero';
import Header from '@/src/components/Header';
import FeatureSection from '@/src/components/FeatureSection';
import GetInTouch from '@/src/components/getInTouch';
import ContactUs from '@/src/components/ContactUs';
import ogImage from '@/public/images/top-hero-image.jpeg';
import type { Metadata } from 'next';
import LdSchema from '@/src/components/Schema';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: 'Доставка ватажу з Європи',
  description: 'Швидка, надійна та дешева доставка вантажів з Європи',
  keywords: ['Доствка', 'Фура', 'Вантаж', '24тони', '20тон'],
  robots: 'index, follow',
  /**
   * Add canonical URL to other pages
   */
  // canonical: process.env.NEXT_PUBLIC_BASE_URL!,
  openGraph: {
    images: ogImage.src,
    title: 'Доставка ватажу з Європи',
    description: 'Швидка, надійна та дешева доставка вантажів з Європи',
  },
};

export default function Home() {
  return (
    <>
      <LdSchema title={metadata.title as string} />
      <Header />
      <main>
        <TopHero
          title="Доставимо ваші вантажі!"
          description="Доставимо ваші вантажі з/в Європу швидко і якісно. Цінуємо час клієнтів
            і надаємо послуги найвищого рівня."
        />
        <FeatureSection />
        <GetInTouch />
        <ContactUs />
      </main>
    </>
  );
}
