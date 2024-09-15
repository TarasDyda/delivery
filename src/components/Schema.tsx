import type { WithContext, Organization, ContactPoint } from 'schema-dts';

const contactPoint: WithContext<ContactPoint> = {
  '@context': 'https://schema.org',
  '@type': 'ContactPoint',
  email: 'tarasdida22@gmail.com',
  telephone: '+380686915665',
};

const getSchema = ({ name }: { name: string }): WithContext<Organization> => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: name,
  contactPoint,
  email: 'tarasdida22@gmail.com',
});

interface SchemaLdProps {
  title: string;
}

const LdSchema = (props: SchemaLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(getSchema({ name: props.title })),
    }}
  />
);

export default LdSchema;
