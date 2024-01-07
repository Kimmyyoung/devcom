"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import useUserFetch from '@/hook/useUserFetch';

const postURL = "http://localhost:8080/posts/create";
 


const page = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [userId, setUserId] = useState("");
    const token = sessionStorage.getItem("token") || "";
    const router = useRouter();
    const { user, loading, error } = useUserFetch(token);
    

    const createPost = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        try {
            const postData = {
                title: title,
                content: content,
                user_id: user?.id,
                image: image? image : "https://i.ibb.co/BrXvpNb/developer.jpg"
            };
            
            const res = await axios.post(postURL, postData);
           
            toast.success('🦄 Successfully posted!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            
            router.push('/dashboard/community');


        } catch (err) {
            console.error(err);
        }
    };
    
  return (
    <>
    <div className="bg-white p-4 py-8">
    <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">New Post</div>
    <form className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-100 p-4  max-w-2xl"
    onSubmit={createPost}
              >
                  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
                  <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Title" value={title} type="text" 
                onChange={e => setTitle(e.target.value)}
                />
        <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" placeholder="Describe everything about this post here"
        value={content}
        onChange={e => setContent(e.target.value)}
        ></textarea>

        <div className="icons flex text-gray-500 m-2">
            <label id="select-image">
                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <input type="file" onChange={e => setImage(e.target.files)} />
            </label>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>
        <div className="buttons flex justify-end">
                      <button className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-indigo-500" type="submit">Post</button>
                      <div className="p-1 px-4 font-semibold cursor-pointer bg-gray-500 ml-2" onClick={() => router.back()}>Cancel</div>
        </div>
    </form>
</div>
</>
  )
}

export default page