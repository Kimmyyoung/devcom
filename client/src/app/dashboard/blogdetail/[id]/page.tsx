"use client";
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';

const postURL = "http://localhost:8080/posts";

const BlogDetail = () => {
  const { id }  = useParams();
  const router = useRouter();
  const style = { marginTop: '3px' };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(""); 

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await axios.get(`${postURL}/${id}`);
        console.log(res);
        setTitle(res.data[0].title);
        setContent(res.data[0].content);
        setImage(res.data[0].image);
      }

      fetchPost();

    }catch (err) {
      console.error(err);
    }

    }, []);
  return (
    <>
    <section className="flex flex-row pt-4 overflow-y-auto items-start font-pretendardRegular justify-around w-full h-screen dark:bg-slate-800">
      <div className="flex flex-col w-full gap-4 px-4">
      <h3 
        className="flex flex-row gap-2 uppercase text-md font-bold text-navy cursor-pointer hover:text-lightnavy dark:text-white"
        onClick={() => router.push('/dashboard/community')}>
            <FaArrowLeft style={style} /> All Posts
          </h3>

          <div className="flex flex-col gap-4 rounded-lg">
            <img src={image} className="w-full h-max rounded-lg" alt="blogpost" />
          </div>

        <h1 className="text-4xl font-bold dark:text-white">{title}</h1>

        <div className="flex flex-col mt-4 gap-4 rounded-lg">
            <u></u>
            <p className="pr-10 text-slate-500 dark:text-slate-300">{content}</p>
        </div>
      </div>
    </section>
  </>
  )
}

export default BlogDetail