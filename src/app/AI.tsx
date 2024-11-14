"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

export default async function GenerateContent(Req:string):Promise<string | undefined>{
    const Prompt=`Act is pro Script writer`
    console.log(process.env.API)
    console.log("HI from server")
    // const Gemini=new GoogleGenerativeAI(API)
    // const Model=await Gemini.getGenerativeModel({model:"gemini-1.5-flash"})

    // const History=Model.startChat({
    //     history:[{
    //         role:'user',
    //         parts:[{text:Prompt}]
    //     }]
    // })

    // const result=await History.sendMessage(Req);
    // const Response=result.response.text()

    return API
};