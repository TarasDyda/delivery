// import SEO from '@/src/components/SEO';
// import type { SEOProps } from '@/src/components/SEO';
import TopHero from '@/src/components/TopHero';
import Header from '@/src/components/Header';

// const SEOData: SEOProps = {
//   title: 'Доставка ватажу з Європи',
// };

const links: {
  name: string;
  href: string;
}[] = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];
const stats: {
  name: string;
  value: string;
}[] = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

interface TopHeroProps {
  title: string;
}

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
      </main>
    </>
  );
}
