import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,272C560,245,640,203,720,160C800,117,880,75,960,64C1040,53,1120,75,1200,101.3C1280,128,1360,160,1400,176L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    <div className=''>
        <h1 className=''>Welcome To SmartAI</h1>
        <h1 className=''></h1>
        <Button><Link href={''}></Link></Button>
        <Button><Link href={''}></Link></Button>
    </div>
    </>
  )
}

export default page