import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-shippori",
  display: "swap",
});

const zen = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-zen",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ailo.co.jp"),
  title: {
    default: "合同会社Ailo | エンタープライズAI・リーガルテック・SaaS",
    template: "%s | 合同会社Ailo",
  },
  description:
    "合同会社Ailoは、エンタープライズ企業向けにAI・リーガルテック・SaaSを統合した実装支援を提供します。顧客体験を、確かな事業資産へ。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ailo.co.jp/",
    siteName: "合同会社Ailo",
    title: "合同会社Ailo | エンタープライズAI・リーガルテック・SaaS",
    description:
      "合同会社Ailoは、エンタープライズ企業向けにAI・リーガルテック・SaaSを統合した実装支援を提供します。顧客体験を、確かな事業資産へ。",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#F7F4ED",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${shippori.variable} ${zen.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
