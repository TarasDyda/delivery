import './global.css';
import type { Metadata } from 'next';
import GoogleAnalytics from '@/src/components/GoogleAnalytics';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <GoogleAnalytics />
      <body>{children}</body>
    </html>
  );
}
