import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { getContent } from './data/content';
import DownloadCvButton from './components/DownloadCvButton';
import LanguageToggle from './components/LanguageToggle';
import { getRequestLocale } from './lib/locale';

const lOutfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Gabriel de Bure - CV',
  description: 'Student and apprentice Software developer',
  icons: {
    icon: '/favicon.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lLocale = await getRequestLocale();
  const lContent = getContent(lLocale);

  return (
    <html lang={lLocale} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
        />
      </head>
      <body className={lOutfit.className} suppressHydrationWarning>
        <LanguageToggle pLocale={lLocale} pTitle={lContent.labels.languageToggle} />
        <DownloadCvButton pUrl="/cv" pTitle={lContent.labels.downloadCv} />
        {children}
      </body>
    </html>
  );
}
