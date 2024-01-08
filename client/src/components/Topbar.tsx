import React from 'react'
// import Searchbar from '@/components/Searchbar';
import { Montserrat } from 'next/font/google';
import DarkMode from './DarkMode';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Topbar = () => {
  return (
    <div className="px-6 py-4 flex flex-row justify-between bg-white items-center dark:bg-slate-800">
      <div className={`font-montserrat tracking-wide uppercase items-center ${montserrat.className} dark:text-white`}>Dashboard</div>
      <div className="wrapper flex flex-row">
        {/* <Searchbar /> */}
        <input type="search" className="font-pretendardRegular border-1 border-slate-800 ml-2 placeholder:italic placeholder:text-slate-400 rounded px-3 py-2 focus:border-navy" placeholder="Search" />  
        <div className="px-4">
          <DarkMode />
          {/* <AccountCircleIcon color="primary" /> */}
        </div>
      </div>

    </div>
  )
}

export default Topbar