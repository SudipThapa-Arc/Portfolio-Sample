"use client";

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Head from 'next/head';
import './globals.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });
const satoshi = localFont({
  src: [
    {
      path: '/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <html lang="en" className={`${inter.className} ${satoshi.className}`}>
      <Head>
        <title>Sudip Thapa - Design, Dev & Wizardry</title>
        <meta name="description" content="Sudip Thapa is a skilled web developer and designer specializing in creating immersive digital experiences. With expertise in React, Node.js, and modern web technologies, Sudip crafts innovative solutions that blend form and function." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-900 text-gray-100">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}