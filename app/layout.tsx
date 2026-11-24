import type { Metadata } from "next";
import localFont from "next/font/local";
import { asset } from "./asset";
import { siteUrl } from "./site-url";
import "./globals.css";

const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  weight: "45 920",
  display: "swap",
  variable: "--font-pretendard",
});

// Origin the build is served from: GitHub Pages sets it in pages.yml, S3 uses the production origin
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? siteUrl;

const title = "(주)본작";
const description =
  "니치향수 브랜드 Selvatico와 뷰티테크 서비스를 운영하는 주식회사 본작입니다.";

export const metadata: Metadata = {
  title,
  description,
  // Link previews (KakaoTalk and others) read og: tags, not the description meta.
  // og:image is a PNG of app/icon.svg: previews don't render SVG, and the URL must be absolute
  openGraph: {
    type: "website",
    siteName: "BONJAC",
    locale: "ko_KR",
    title,
    description,
    images: [
      {
        url: `${siteOrigin}${asset("/images/og-image.png")}`,
        width: 1200,
        height: 630,
        alt: "BONJAC 本作",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
