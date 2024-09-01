import Head from 'next/head';

export interface SEOProps {
  title: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
  ogTitle?: string;
  ogDescription?: string;
}

const SEO = (props: SEOProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.metaDescription} />
      <meta name="og:title" content={props.ogTitle || props.title} />
      <meta
        name="og:description"
        content={props.ogDescription || props.ogDescription}
      />
      <meta name="og:image" content={props.ogImage} />
      <meta name="keywords" content={props.keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_CANONICAL} />
    </Head>
  );
};

export default SEO;
