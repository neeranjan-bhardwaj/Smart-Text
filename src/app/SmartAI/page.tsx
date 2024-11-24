"use client"

import React, { useEffect, useState } from 'react'
import 'quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';
import GenerateContent from '../AI';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const page = () => {
  const {quill,quillRef}=useQuill({placeholder:"GO TO HELL"}); // Set quill 
  const [input,setInput]=useState<string>(''); // set input
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
    const Response:string= await GenerateContent(input,Written)
    setInput('')
    setRes(Response);
  }

  const Speech=()=>{
    if(Res){
      const Speeck= new SpeechSynthesisUtterance(Res)
  }
}

  return (
    <>
    <header className='flex gap-96 text-white text-2xl'>
      <h1>Smart-Text</h1>
      <nav className='flex gap-2 text-lg '>
        <Link href={''}>Home</Link>
        <Link href={''}>Documents</Link>
        <Link href={''}>SmartAI</Link>
      </nav>
    </header>
    <main className='h-[35rem] w-full mt-4'>
      <div className='absolute flex gap-2 justify-center rounded-2xl bottom-10 w-full h-10 '>
        <img src="" alt="" />
        <Input value={input} placeholder='Generate content' onChange={(e)=>setInput(e.target.value)} className='text-black !w-56' />
        <Button onClick={Generate} className='text-black font-semibold bg-slate-200 '>Generate</Button>
        <Button onClick={Speech} className='text-black bg-white'>Click</Button>
      </div>
      <div ref={quillRef} className='!h-full mt-5'></div>
    </main>
    </>
  )
}

export default page