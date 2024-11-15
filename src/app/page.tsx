"use client"

import React, { useEffect, useState } from 'react'
import 'quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';
import GenerateContent from './AI';

const page = () => {
  const {quill,quillRef}=useQuill({placeholder:"GO TO HELL"}); // Set quill 
  const [Input,setInput]=useState<string>(''); // set input
  const [Res,setRes]=useState<string>(); // set Response 
  const [Loader,setLoader]=useState<boolean>(false) //set loader page
  const [pause,setPause]=useState<boolean>(false)
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
    const Response:string= await GenerateContent(Input,Written)
    setInput('')
    setRes(Response);
  }

  const Speech=()=>{
    const Speck=new SpeechSynthesisUtterance(Res)
    speechSynthesis.speak(Speck)
    pause?speechSynthesis.pause():speechSynthesis.resume()
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
        <textarea value={Input} placeholder='Generate content' onChange={(e)=>setInput(e.target.value)} className='text-black' />
        <button onClick={Generate} className='text-black '>Generate</button>
        <button onClick={Speech} className='text-black'>Click</button>
      </div>
      <div ref={quillRef} className='!h-96'></div>
    </main>
    </>
  )
}

export default page