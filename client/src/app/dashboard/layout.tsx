"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import './globals.css'

// components
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';


export default function RootLayout({
  children,
}: {
    children: React.ReactNode,
  }) {

  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);
  const router = useRouter();

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <body>
        <div className="flex flex-row overflow-hidden">
          <Sidebar setExpand={setSideMenuIsExpand} router={router} />  
          <main className="flex w-28 h-screen flex-1 flex-col">
          <Topbar />
          {children}
        </main>
      </div>
      </body>
    </html>
  )
}