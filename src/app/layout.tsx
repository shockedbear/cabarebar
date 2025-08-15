import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/ui/Header";

import { Footer } from "@/components/ui/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabare & Bar Мюзикл — Атмосферные вечера в Пскове",
  description:
    "Cabare & Bar «Мюзикл» в Пскове — живые выступления, авторские коктейли, музыка и неповторимая атмосфера. Забронируйте столик уже сегодня!",
  keywords: [
    "кабаре Псков",
    "бар Псков",
    "Мюзикл",
    "живые выступления Псков",
    "атмосферный бар Псков",
    "кабаре шоу Псков",
    "бар с живой музыкой Псков",
    "вечерний отдых Псков",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Cabare & Bar Мюзикл — Ночь в стиле кабаре, Псков",
    description:
      "Живые шоу, музыка и авторские коктейли в самом атмосферном месте Пскова — Cabare & Bar «Мюзикл».",
    url: "cabaret-two.vercel.app", // твой реальный домен
    siteName: "Cabare & Bar Мюзикл",
    images: [
      {
        url: "https://example.com/og-image.jpg", // атмосферное фото 1200x630
        width: 1200,
        height: 630,
        alt: "Сцена Cabare & Bar Мюзикл в Пскове с артистами",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabare & Bar Мюзикл — Псков",
    description:
      "Музыка, шоу и коктейли в Cabare & Bar «Мюзикл», Псков.",
    images: ["https://example.com/twitter-image.jpg"], // 1200x600
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Cabare & Bar Мюзикл",
              image: "https://example.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Советская 53/15",
                addressLocality: "Псков",
                addressCountry: "RU",
              },
              telephone: "+7 900 636-13-22",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
                  opens: "12:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "12:00",
                  closes: "00:00",
                },
              ],
              sameAs: [
                "https://instagram.com/cabarete_bar",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
