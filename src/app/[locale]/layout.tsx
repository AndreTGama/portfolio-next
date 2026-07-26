import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';

import { ThemeProvider } from "@/components/providers/theme-provider";
import { routing } from '@/i18n/routing';

import '../globals.css';
import Navbar from '@/layout/Navbar/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'André Gama',
  description: 'Software Engineer'
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'pt')) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-white dark:bg-black`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}