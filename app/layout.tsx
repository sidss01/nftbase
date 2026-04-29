import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NFT Base - Free Mint NFT Discovery',
  description: 'Discover all free mint NFT projects on Base chain. Current and future drops.',
  keywords: 'NFT, Base Chain, Free Mint, Web3, Blockchain',
  openGraph: {
    title: 'NFT Base - Free Mint NFT Discovery',
    description: 'Discover all free mint NFT projects on Base chain',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
