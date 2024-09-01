import Head from 'next/head';
import type { WithContext, Organization, ContactPoint } from 'schema-dts';

export interface SEOProps {
  title: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
  ogTitle?: string;
  ogDescription?: string;
}

const contactPoint: WithContext<ContactPoint> = {
  '@context': 'https://schema.org',
  '@type': 'ContactPoint',
  email: 'tarasdida22@gmail.com',
  telephone: '+380686915665',
};

const jsonLd: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Доставка вантажів',
  contactPoint,
  email: 'tarasdida22@gmail.com',
};

const SEO = (props: SEOProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.metaDescription} />
      <meta name="og:title" content={props.ogTitle || props.title} />
      <meta
        name="og:description"
        content={props.ogDescription || props.metaDescription}
      />
      <meta name="og:image" content={props.ogImage} />
      <meta name="keywords" content={props.keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_CANONICAL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default SEO;
