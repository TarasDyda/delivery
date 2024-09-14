// import SEO from '@/src/components/SEO';
// import type { SEOProps } from '@/src/components/SEO';
import TopHero from '@/src/components/TopHero';
import Header from '@/src/components/Header';
import FeatureSection from '@/src/components/FeatureSection';
import GetInTouch from '@/src/components/getInTouch';

// const SEOData: SEOProps = {
//   title: 'Доставка ватажу з Європи',
// };

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TopHero
          title="Доставимо ваші вантажі!"
          description="Доставимо ваші вантажі з/в Європу швидко і якісно. Цінуємо час клієнтів
            і надаємо послуги найвищого рівня."
        />
        <FeatureSection />
        <GetInTouch />
      </main>
    </>
  );
}
