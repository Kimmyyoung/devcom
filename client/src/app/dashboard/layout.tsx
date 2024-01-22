"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import './globals.css'
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import "tailwindcss/tailwind.css";


export default function RootLayout({
  children,
}: {
    children: React.ReactNode,
  }) {

  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);
  const router = useRouter();

  return (
        <section className="flex flex-row overflow-hidden">
          <Sidebar setExpand={setSideMenuIsExpand} router={router} />  
          <main className="flex w-28 h-screen flex-1 flex-col">
          <Topbar />
          {children}
        </main>
      </section>
     
  )
}