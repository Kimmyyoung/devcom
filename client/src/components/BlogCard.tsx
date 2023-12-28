import React from 'react'
import Link from 'next/link';

// icons 
import { MdAccountCircle } from "react-icons/md";
import { IconContext } from 'react-icons';

const BlogCard = () => {
  const blog_id = '1234';
  const profilePic =
  "https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA";

  return (
    <div className="p-4 md:w-1/3 font-pretendardRegular" >
    <div className="h-full bg-slate-100 rounded-lg overflow-hidden">
        
        
          <div className="w-full flex m-2 flex-row p-2 gap-3 items-center">
            
                <div className="w-10">
                    <img src={profilePic} />
                </div>
            
                <div className="items-center">
                  <p className="text-blue-800 font-bold">Vipin Bansal</p>
                  <p className="text-gray-800 text-xs">2 June 2022</p>
                </div>
          </div>
        
      
      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2" alt="blog cover"/>
      
      <div className="p-4">
        <h2 className="tracking-widest text-xs title-font font-bold text-blue-800 mb-1 uppercase ">Web development</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">This is a blog template</h1>
          <div className="flex items-center flex-wrap ">
            
          <Link href={`/dashboard/blogdetail/${blog_id}`} replace>
            <p className="inline-flex text-blue-800 items-center hover:text-blue-500">Read Blog
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
              </p>
          </Link>

            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1"  viewBox="0 0 24 24"  fill="none"  stroke="pink"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            24
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="skyblue" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            89
          </span>
        </div>
        
        
      </div>
    </div>
  </div>
  )
}

export default BlogCard