import React from 'react'
import DarkMode from './DarkMode';

const Topbar = () => {
  return (
    <div className="px-6 py-4 flex flex-row justify-between bg-white items-center dark:bg-slate-800">
      <div className={`font-montserrat tracking-wide uppercase items-center dark:text-white`}>Dashboard</div>
      <div className="wrapper flex flex-row">
        <input type="search" className="font-pretendardRegular border-1 border-slate-800 ml-2 placeholder:italic placeholder:text-slate-400 rounded px-3 py-2 focus:border-navy" placeholder="Search" />  
        <div className="px-4">
          <DarkMode />
        </div>
      </div>

    </div>
  )
}

export default Topbar