"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"

export default async function GenerateContent(Req:string,Text?:string):Promise<string>{
    try{
    const Prompt:string=`Act as a Pro Script Writer and ${Text?'Improve the script':''}`
    const Gemini=new GoogleGenerativeAI(process.env.API||"")
    const Model=await Gemini.getGenerativeModel({model:"gemini-1.5-pro"})

    const History=Model.startChat({
        history:[{
            role:'user',
            parts:[{text:Prompt}]
        }]
    })

    const result=await History.sendMessage(Req);
    const Response=result.response.text()

    return Response
    }catch(err){
        console.log(err)
        return 'Err'
    }
};