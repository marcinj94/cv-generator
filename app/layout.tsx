import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './ui/fonts';
import { Providers } from './providers';
import { Navbar } from './components';

export const metadata: Metadata = {
  title: 'CV Generator',
  description: 'Generate CV with personal information - simple & 💵 free',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="dark" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased dark:bg-gray-800`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
