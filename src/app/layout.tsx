import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ICN MARKET | Trading Education Platform',
  description: 'Build practical trading skills, explore AI-powered opportunities, and access ICNM services designed for people who want to learn and earn from home.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
