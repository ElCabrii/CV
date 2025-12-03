import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";

const lOutfit = Outfit({
  subsets: ["latin"],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: "Gabriel de Bure - CV",
  description: "Student and apprentice Software developer",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
        />
      </head>
      <body className={lOutfit.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
