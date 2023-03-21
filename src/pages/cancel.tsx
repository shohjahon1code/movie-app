import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const Cancel = () => {
  return (
    <>
      <div className='flex justify-start py-2 px-4'>
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={56}
          height={56}
          className="cursor-pointer object-contain"
        />
      </div>
      <div className='h-screen flex flex-col justify-center items-center'>
        <BiErrorCircle className='w-20 h-20 text-red-500' />
        <h2 className='text-2xl md:text-5xl mt-4'>Cancel Subscription</h2>
        <Link href={'/'}>
          <button className='bg-[#e10856] py-4 px-5 rounded mt-4'>Choose plan</button>
        </Link>
      </div>
    </>
  )
}

export default Cancel
