import ExportIcon from '@/src/components/icons/Export';
import ImportIcon from '@/src/components/icons/Import';
import DoubleArrow from '@/src/components/icons/DoubleArrow';
import type { JSX, SVGProps } from 'react';

interface Feature {
  name: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const features: Feature[] = [
  {
    name: 'Експорт вантажів',
    description:
      'Виконуємо експорт вантажу в будь-які країни Європи швидко і якісно на власному транспорті.',
    icon: ExportIcon,
  },
  {
    name: 'Імпорт вантажів',
    description:
      'Виконуємо імпорт вантажів з країн Європи в Україну на власному транспорті з дотриманням всіх станартів якості.',
    icon: ImportIcon,
  },
  {
    name: 'Внутрішні перевезення',
    description:
      'Виконуємо внутрішні перевеззеня по Україні на власному транспорті.',
    icon: DoubleArrow,
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16" id="about-us">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-400">
            Наші послуги
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Все що необхідно для швидої доставки вантажу
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Наші спеціалість зроблять се можливе щоб Ви отримали свій вантаж
            якомога швидше, дотримуючись найвищих стандартів, що гарантує високу
            якість і максимально короткі терміни доставки вантажу.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map(feature => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
