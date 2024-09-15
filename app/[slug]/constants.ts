import type { PageData } from '@/app/[slug]/types';
import ogImage from '@/public/images/top-hero-image.jpeg';
import type { Metadata } from 'next';

const sharedMetadata: Partial<Metadata> = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  keywords: [
    'Доствка',
    'Фура',
    'Вантаж',
    '24тони',
    '20тон',
    'Україна',
    'Єропа',
    'Польща',
  ],
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
};

export const pages: PageData[] = [
  {
    ...sharedMetadata,
    slug: 'import-from-europe',
    title: 'Доставка ватажу з Європи фурою',
    description: 'Швидка, надійна та дешева доставка вантажів з Європи фурою',
    openGraph: {
      images: ogImage.src,
      title: 'Доставка ватажу з Європи фурою',
      description: 'Швидка, надійна та дешева доставка вантажів з Європи фурою',
    },
  },
  {
    ...sharedMetadata,
    slug: 'import',
    title: 'Доставка вантажу в Україну',
    description: 'Швидка, надійна та дешева доставка вантажів в Україну',
    openGraph: {
      images: ogImage.src,
      title: 'Доставка вантажу в Україну',
      description: 'Швидка, надійна та дешева доставка вантажів в Україну',
    },
  },
  {
    ...sharedMetadata,
    slug: 'import-cargo',
    title: 'Доставка вантажу в Україну',
    description: 'Швидка, надійна та дешева доставка вантажів в Україну фурою',
    openGraph: {
      images: ogImage.src,
      title: 'Доставка вантажу в Україну',
      description:
        'Швидка, надійна та дешева доставка вантажів в Україну фурою',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-delivery-to-ukraine',
    title: 'Доставка вантажів до України',
    description: 'Швидка, надійна та дешева доставка вантажів до Україну',
    openGraph: {
      images: ogImage.src,
      title: 'Доставка вантажів до України',
      description: 'Швидка, надійна та дешева доставка вантажів до Україну',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-delivery-to-ukraine',
    title: 'Доставка вантажів до України',
    description: 'Швидка, надійна та дешева доставка вантажів до Україну фурою',
    openGraph: {
      images: ogImage.src,
      title: 'Доставка вантажів до України',
      description:
        'Швидка, надійна та дешева доставка вантажів до Україну фурою',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-export',
    title: 'Експорт вантажу',
    description: 'Швидкий, надійний та дешевий експорт вантажів',
    openGraph: {
      images: ogImage.src,
      title: 'Доставка вантажів до України',
      description: 'Швидка, надійна та дешева доставка вантажів до Україну',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-export-by-trucks',
    title: 'Експорт вантажу фурою',
    description: 'Швидкий, надійний та дешевий експорт вантажів фурою',
    openGraph: {
      images: ogImage.src,
      title: 'Експорт вантажу фурою',
      description: 'Швидкий, надійний та дешевий експорт вантажів фурою',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-export',
    title: 'Вантажоперевезення в Європу',
    description:
      'Швидкі, надійні та дешеві вантажоперевезення вантажів в Європу',
    openGraph: {
      images: ogImage.src,
      title: 'Вантажоперевезення в Європу',
      description:
        'Швидкі, надійні та дешеві вантажоперевезення вантажів в Європу',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-export-by-trucks',
    title: 'Вантажоперевезення в Європу фурою',
    description:
      'Швидкі, надійні та дешеві вантажоперевезення вантажів в Європу фурою',
    openGraph: {
      images: ogImage.src,
      title: 'Вантажоперевезення в Європу фурою',
      description:
        'Швидкі, надійні та дешеві вантажоперевезення вантажів в Європу фурою',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-export',
    title: 'Вантажоперевезення з України',
    description:
      'Швидкі, надійні та дешеві вантажоперевезення вантажів з України',
    openGraph: {
      images: ogImage.src,
      title: 'Вантажоперевезення з України',
      description:
        'Швидкі, надійні та дешеві вантажоперевезення вантажів з України',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-export-by-trucks',
    title: 'Вантажоперевезення з України фурою',
    description:
      'Швидкі, надійні та дешеві вантажоперевезення вантажів з України фурою',
    openGraph: {
      images: ogImage.src,
      title: 'Вантажоперевезення з України фурою',
      description:
        'Швидкі, надійні та дешеві вантажоперевезення вантажів з України фурою',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-export',
    title: 'Доставка вантажу з Польщі',
    description: 'Швидка, надійна та дешева доставки вантажу з Польщі',
    openGraph: {
      images: ogImage.src,
      title: 'Доставка вантажу з Польщі',
      description: 'Швидка, надійна та дешева доставки вантажу з Польщі',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-export-by-trucks',
    title: 'Доставка вантажу з Польщі фурою',
    description: 'Швидка, надійна та дешева доставки вантажу з Польщі фурою',
    openGraph: {
      images: ogImage.src,
      title: 'Доставка вантажу з Польщі фурою',
      description: 'Швидка, надійна та дешева доставки вантажу з Польщі фурою',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-export',
    title: 'Доставка вантажу в Польщу',
    description: 'Швидка, надійна та дешева доставки вантажу в Польщу',
    openGraph: {
      images: ogImage.src,
      title: 'Доставка вантажу з Польщі',
      description: 'Швидка, надійна та дешева доставки вантажу з Польщі',
    },
  },
  {
    ...sharedMetadata,
    slug: 'cargo-export-by-trucks',
    title: 'Доставка вантажу в Польщу фурою',
    description: 'Швидка, надійна та дешева доставки вантажу в Польщу фурою',
    openGraph: {
      images: ogImage.src,
      title: 'Доставка вантажу в Польщу фурою',
      description: 'Швидка, надійна та дешева доставки вантажу в Польщу фурою',
    },
  },
];
