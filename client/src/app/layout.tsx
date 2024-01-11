import Head from 'next/head'
import './layout.css'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Devcom',
  description: 'A social media platform for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <body>{children}</body>
    </html>
  )
}