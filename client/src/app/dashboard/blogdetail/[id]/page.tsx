"use client";
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import Image from 'next/image';

const postURL = "http://localhost:8080/posts";

const page = () => {
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
    <section className="flex flex-row mt-4 overflow-y-auto items-start font-pretendardRegular justify-around w-full h-screen">
      <div className="flex flex-col w-3/4 gap-4 px-4">
      <h3 
        className="flex flex-row gap-2 uppercase text-md font-bold text-navy cursor-pointer hover:text-lightnavy"
        onClick={() => router.back()}>
            <FaArrowLeft style={style} /> All Posts
          </h3>

          <div className="flex flex-col gap-4 rounded-lg">
            {/* <Image src={image} width={100} height={100} className="w-full h-max rounded-lg" alt="blogpost" /> */}
          </div>

        <h1 className="text-4xl font-bold">{title}</h1>

        <div className="flex flex-col mt-4 gap-4 rounded-lg">
            <u></u>
            <p className="pr-10 text-slate-500">{content}</p>
        </div>
      </div>
    </section>
  </>
  )
}

export default page