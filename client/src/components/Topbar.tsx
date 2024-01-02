import React from 'react'
// import Searchbar from '@/components/Searchbar';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Topbar = () => {
  return (
    <div className="px-6 py-4 flex flex-row justify-between bg-white items-center">
      <div className={`font-montserrat tracking-wide uppercase items-center ${montserrat.className}`}>Dashboard</div>
      <div className="wrapper flex flex-row">
        {/* <Searchbar /> */}
        <input type="search" className="font-pretendardRegular placeholder:italic placeholder:text-slate-400 rounded px-3 py-2 focus:border-navy" placeholder="Search" />  
        <div className="px-4">
          {/* <AccountCircleIcon color="primary" /> */}
        </div>
      </div>

    </div>
  )
}

export default Topbar