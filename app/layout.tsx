import type { Metadata } from "next";
import "./globals.module.scss";

export const metadata: Metadata = {
  title: "JT web",
  description: "JT web portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cz"
    >
      <body>{children}</body>
    </html>
  );
}
