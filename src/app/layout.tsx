import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Oswald } from "next/font/google";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Barber Shop in Los Angeles | Styles Barber Lounge",
  description:
    "Celebrity barbershop in Downtown LA. Precision fades, beard sculpting, and the signature C.E.O Treatment. Book your chair.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-snow">{children}</body>
    </html>
  );
}
