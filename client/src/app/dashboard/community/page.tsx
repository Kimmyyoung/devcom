'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BlogCard from '@/components/BlogCard';
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import axios from 'axios';
import Loading from '@/components/Loading';

const postURL = "http://localhost:8080/posts";

const page = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState(); 
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await axios.get(postURL);
        setPosts(res.data);
        setLoading(true);
      };
      fetchPost();
    } catch (err) {
      console.error(err);
    }
  }, []);


  if (!loading) return <Loading />;
  
  return (
    <>
      <section className="flex flex-col px-2 pt-2 overflow-y-auto font-pretendardRegular w-full h-screen">
        <div className="flex flex-row justify-between items-center pr-3">
        <div className="inline-flex bg-white rounded-lg rtl:flex-row-reverse pl-4">
              
              <button className="py-2 flex flex-row gap-2 align-middle items-center px-5 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm rounded-full focus:bg-blue-950 focus:text-white cursor-pointer hover:text-blue-950">
                  View all
              </button>

              <button className="flex flex-row gap-2 align-middle items-center px-5 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm rounded-full focus:bg-blue-950 focus:text-white cursor-pointer hover:text-blue-950">
                  <FaArrowTrendUp />Trends
              </button>

              <button className="flex flex-row gap-2 align-middle items-center px-5 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm rounded-full focus:bg-blue-950 focus:text-white cursor-pointer hover:text-blue-950">
                  <IoTimeOutline/> Most Recent
              </button>
          </div>


          <div>
            <button className="px-4 py-2 text-xs font-medium text-blue-950 transition-colors duration-200 bg-gray-100 rounded-full sm:text-sm hover:bg-blue-950 hover:text-white"
              onClick={ ()=>{router.push('/dashboard/blogpost')}}
            >
              Blog Post
            </button>
          </div>
        </div>

        <div className="flex flex-row mt-6">
          {posts && posts.map((post) => (
            <BlogCard key={post.id} props={post} />
          ))}
        </div>

        </section>
    </>
  )
}

export default page