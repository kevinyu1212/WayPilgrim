import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "웨이필그림 · WayPilgrim",
  description: "The Digital Cathedral",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}