import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Clínica Odontológica em João Pessoa";
const description =
  "Atendimento odontológico humanizado em João Pessoa com especialistas em ortodontia, implantes e estética dental.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Dentista em João Pessoa",
    "Clínica Odontológica João Pessoa",
    "Ortodontista João Pessoa",
    "Aparelho Dentário João Pessoa",
    "Odontologia Humanizada",
    "Dentista Bancários João Pessoa",
    "Especialista em Ortodontia João Pessoa",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    locale: "pt_BR",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Odontológica em João Pessoa",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}