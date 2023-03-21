import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const Success = () => {
  return (
    <>
      <Head>
        <title>Success</title>
        <meta
          name="description"
          content="Sign in our website for watching free new movies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
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
        <AiFillCheckCircle className='w-20 h-20 text-green-500' />
        <h2 className='text-2xl md:text-5xl mt-4'>Subscription completed</h2>
        <Link href={'/'}>
          <button className='bg-green-500 py-4 px-5 rounded mt-4'>Dashboard</button>
        </Link>
      </div>
    </>
  )
}

export default Success
