import './global.css';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

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
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      <body>{children}</body>
    </html>
  );
}
