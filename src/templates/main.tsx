import TopHero from '@/src/components/TopHero';
import Header from '@/src/components/Header';
import FeatureSection from '@/src/components/FeatureSection';
import GetInTouch from '@/src/components/getInTouch';
import ContactUs from '@/src/components/ContactUs';
import LdSchema from '@/src/components/Schema';

interface PageProps {
  title: string;
}

const PageTemplate = (props: PageProps) => {
  return (
    <>
      <LdSchema title={props.title} />
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
};

export default PageTemplate;
