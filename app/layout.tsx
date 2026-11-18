import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bonjac",
  description: "Bonjac — company introduction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
