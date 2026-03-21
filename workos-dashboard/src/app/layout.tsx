import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkOS | AI Executive Command Center",
  description: "Executive persona dashboard organizing AI capabilities across CEO, CRO, CMO, CFO, CTO, CPO, and CISO roles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-mono bg-terminal-bg text-terminal-text antialiased crt-flicker">
        <div className="scanlines" />
        {children}
      </body>
    </html>
  );
}
