import type { ReactNode } from 'react';
import BankCardSvg from './icons/BankCard';
import SpeedSvg from './icons/Sped';
import NextImage from 'next/image';

const links: {
  name: string;
  href: string;
}[] = [
  { name: 'Доставка в Україну', href: '#contact-me' },
  { name: 'Доставка в Європу', href: '#contact-me' },
  { name: 'Замовити послугу', href: '#contact-me' },
  { name: 'Наші контакти', href: '#' },
];
const stats: {
  name: string;
  value: ReactNode;
}[] = [
  { name: 'Якість', value: <span>5 &#9734;</span> },
  {
    name: 'Економія',
    value: <BankCardSvg height={32} style={{ width: 'auto' }} />,
  },
  { name: 'Шидкість', value: <SpeedSvg fill="white" height={32} /> },
  { name: 'На звʼязку', value: '24/7' },
];

interface TopHeroProps {
  title: string;
  description: string;
}

export default function TopHero(props: TopHeroProps) {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-opacity-50 bg-black" />
      <NextImage
        alt={props.title}
        width={1792}
        height={1024}
        sizes="100vw"
        src="/images/top-hero-image.jpeg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {props.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {props.description}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map(link => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(stat => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
