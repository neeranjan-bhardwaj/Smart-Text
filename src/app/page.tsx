"use client"

import React, { useEffect, useState } from 'react'
import 'quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';
import GenerateContent from './AI';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const page = () => {
  const {quill,quillRef}=useQuill({placeholder:"GO TO HELL"}); // Set quill 
  const [input,setInput]=useState<string>(''); // set input
  const [Res,setRes]=useState<string>(); // set Response 
  const [Loader,setLoader]=useState<boolean>(false) //set loader page
  let Written:string|undefined
//  seating the Res to show in textEditor 
  useEffect(()=>{
    // seating Res to show
    if(quill&&Res){
      console.log("I am here!")
      quill.setText(Res)}
    // Default text Editor to edit text if there no Res
    if(quill){
    quill.on("text-change",()=>{
      Written= quill.getText()
      console.log(Written)
    })}
  },[quill,Res])
// Getting Res on click of button
  const Generate=async()=>{
    setLoader(!Loader);
    const Response:string= await GenerateContent(input,Written)
    setInput('')
    setRes(Response);
  }

  return (
    <>
    
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Smart-Text</div>
      <div className="flex space-x-4">
        <Link href="https://github.com/neeranjan-bhardwaj/Smart-Text">
          Documents
        </Link>
      </div>
    </nav>
    <main className='h-[35rem] w-full mt-4'>
    <div ref={quillRef} className='!h-full mt-5'></div>
    <div className="p-4 flex gap-5 justify-center items-center absolute bottom-5">
      <input
        type="text"
        placeholder="Enter text here..."
        className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        onClick={Generate}
      >
        {Loader?(
          <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          style={{
            margin: 'auto',
            background: 'none',
            display: 'block',
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="32"
            stroke-width="8"
            stroke="#3498db"
            stroke-dasharray="50.26548245743669 50.26548245743669"
            fill="none"
            stroke-linecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="0 50 50;360 50 50"
            ></animateTransform>
          </circle>
        </svg>
      ):"Generate"}
      </button>
    </div>
    </main>
    </>
  )
}

export default page