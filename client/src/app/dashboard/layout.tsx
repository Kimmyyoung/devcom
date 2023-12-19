"use client"

import { useState } from 'react';
import './globals.css'
import { useRouter } from 'next/navigation';

// components
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);
  const router = useRouter();

  return (
    <html lang="en">
      <head>
        <title>Devcon</title>
        <meta name="description" content="Developer Commuinity" />
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
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