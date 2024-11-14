"use client"

import React, { useEffect, useState } from 'react'
import 'quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';
import GenerateContent from './AI';

const page = () => {
  const {quill,quillRef}=useQuill({placeholder:"GO TO HELL"}); // Set quill 
  const [Text,setText]=useState(''); // set input
  const [Res,setRes]=useState<string|undefined>(); // set Response 
  const [Loader,setLoader]=useState(false) //set loader page
//  seating the Res to show in textEditor 
  useEffect(()=>{
    // seating Res to show
    if(quill&&Res){
      console.log("I am here!")
      quill.setText(Res)}
    // Default text Editor to edit text if there no Res
    if(quill){
    quill.on("text-change",()=>{
      const text= quill.getText()
      console.log(text)
    })}
  },[quill,Res])
// Getting Res on click of button
  const Generate=async()=>{
    const Req:string=Text
    console.log(Req)
    const Response:string|undefined= await GenerateContent(Req)
    setLoader(!Loader);
    setText('')
    // setRes(Response);
  }

  return (
    <>
    <header className='flex gap-56'>
      <h1>Smart-Text</h1>
      <nav></nav>
    </header>
    <main>
      <div className='absolute flex gap-5 bg-white rounded-2xl bottom-10 left-1/3 w-80 h-10 '>
        <img src="" alt="" />
        <textarea value={Text} placeholder='Generate content' onChange={(e)=>setText(e.target.value)}  />
        <button onClick={Generate} className='text-black '>Generate</button>
      </div>
      <div ref={quillRef} className='!h-96'></div>
    </main>
    </>
  )
}

export default page